const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFile } = require("child_process");

const root = __dirname;
const journalPath = path.join(root, "data", "journal.json");
const stripsPath = path.join(root, "data", "strips.json");
const legacyJournalPath = path.join(root, "journal.json");
const days = ["nov20", "nov21", "nov22", "nov23", "nov24", "nov25", "nov26", "nov27", "nov28"];
const authors = ["Ria", "Marie", "Felicia"];
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
};

function ensureData() {
  fs.mkdirSync(path.join(root, "data"), { recursive: true });
}

function readJournal() {
  try {
    const data = JSON.parse(fs.readFileSync(journalPath, "utf8"));
    return data && typeof data === "object" && !Array.isArray(data) ? data : {};
  } catch {
    try {
      const data = JSON.parse(fs.readFileSync(legacyJournalPath, "utf8"));
      return data && typeof data === "object" && !Array.isArray(data) ? data : {};
    } catch {
      return {};
    }
  }
}

function writeJournal(data) {
  ensureData();
  fs.writeFileSync(journalPath, JSON.stringify(data, null, 2));
  schedulePublish();
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 12_000_000) {
        reject(new Error("too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString() || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function readStrips() {
  try {
    const data = JSON.parse(fs.readFileSync(stripsPath, "utf8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeStrips(data) {
  ensureData();
  fs.writeFileSync(stripsPath, JSON.stringify(data));
  schedulePublish();
}

function cleanFrames(frames) {
  if (!Array.isArray(frames) || frames.length < 1 || frames.length > 4) return null;
  const clean = [];
  for (const src of frames) {
    if (typeof src !== "string" || !src.startsWith("data:image/jpeg;base64,") || src.length > 1_500_000) return null;
    clean.push(src);
  }
  return clean;
}

function cleanId(id) {
  return typeof id === "string" && /^[A-Za-z0-9_-]{1,80}$/.test(id) ? id : crypto.randomUUID();
}

function cleanText(value) {
  return String(value || "").trim().slice(0, 2000);
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    ...cors,
  });
  res.end(JSON.stringify(data));
}

function git(args) {
  return new Promise((resolve, reject) => {
    execFile(
      "git",
      args,
      {
        cwd: root,
        env: {
          ...process.env,
          GIT_AUTHOR_NAME: "r-chuapoco",
          GIT_AUTHOR_EMAIL: "357695930+r-chuapoco@users.noreply.github.com",
          GIT_COMMITTER_NAME: "r-chuapoco",
          GIT_COMMITTER_EMAIL: "357695930+r-chuapoco@users.noreply.github.com",
        },
      },
      (error, stdout, stderr) => {
        if (error) reject(new Error(stderr || stdout || error.message));
        else resolve(stdout);
      }
    );
  });
}

let publishing = Promise.resolve();

function schedulePublish() {
  publishing = publishing.then(publishBoard).catch((error) => {
    console.error("publish", error.message);
  });
}

async function publishBoard() {
  try {
    await git(["add", "--", "data/journal.json", "data/strips.json"]);
    await git([
      "commit",
      "-m",
      "Save a note or a photobooth strip from the trip.",
      "--",
      "data/journal.json",
      "data/strips.json",
    ]);
  } catch (error) {
    if (/nothing to commit|no changes added/i.test(String(error.message))) return;
    throw error;
  }
  await git([
    "-c",
    "credential.helper=!/tmp/gh_2.104.0_macOS_arm64/bin/gh auth git-credential",
    "push",
    "origin",
    "HEAD",
  ]);
}

function serveFile(req, res) {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const rel = url === "/" ? "/index.html" : url;
  if (rel === "/journal.json" || rel === "/strips.json" || rel === "/server.js") {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  const file = path.join(root, rel);
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end();
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];
  if (req.method === "OPTIONS" && url.startsWith("/api/")) {
    res.writeHead(204, cors);
    res.end();
    return;
  }
  if (url === "/api/strips") {
    try {
      if (req.method === "GET") {
        sendJson(res, 200, readStrips());
        return;
      }
      const body = await readBody(req);
      const strips = readStrips();
      if (req.method === "POST") {
        const frames = cleanFrames(body.frames);
        if (!days.includes(body.dayId) || !frames) {
          sendJson(res, 400, { error: "incomplete" });
          return;
        }
        const id = cleanId(body.id);
        if (!strips.some((strip) => strip.id === id)) {
          strips.push({
            id,
            dayId: body.dayId,
            created: Number(body.created) || Date.now(),
            frames,
            caption: cleanText(body.caption) || body.dayId,
          });
          writeStrips(strips);
        }
        sendJson(res, 200, strips);
        return;
      }
      if (req.method === "DELETE") {
        if (!body.id) {
          sendJson(res, 400, { error: "incomplete" });
          return;
        }
        const next = strips.filter((strip) => strip.id !== body.id);
        writeStrips(next);
        sendJson(res, 200, next);
        return;
      }
      res.writeHead(405);
      res.end();
    } catch {
      sendJson(res, 400, { error: "bad json" });
    }
    return;
  }
  if (url !== "/api/journal") {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405);
      res.end();
      return;
    }
    serveFile(req, res);
    return;
  }

  try {
    if (req.method === "GET") {
      sendJson(res, 200, readJournal());
      return;
    }

    const body = await readBody(req);
    const journal = readJournal();

    if (req.method === "POST") {
      const dayId = body.dayId;
      const author = body.author;
      const text = cleanText(body.text);
      if (!days.includes(dayId) || !authors.includes(author) || !text) {
        sendJson(res, 400, { error: "incomplete" });
        return;
      }
      const id = cleanId(body.id);
      const created = Number(body.created) || Date.now();
      journal[dayId] = journal[dayId] || [];
      if (!journal[dayId].some((item) => item.id === id)) {
        journal[dayId].push({ id, author, text, created });
      }
      writeJournal(journal);
      sendJson(res, 200, journal);
      return;
    }

    if (req.method === "PATCH") {
      const text = cleanText(body.text);
      const list = journal[body.dayId] || [];
      const entry = list.find((item) => item.id === body.id);
      if (!entry || !text) {
        sendJson(res, 400, { error: "incomplete" });
        return;
      }
      entry.text = text;
      writeJournal(journal);
      sendJson(res, 200, journal);
      return;
    }

    if (req.method === "DELETE") {
      if (!days.includes(body.dayId) || !body.id) {
        sendJson(res, 400, { error: "incomplete" });
        return;
      }
      journal[body.dayId] = (journal[body.dayId] || []).filter((item) => item.id !== body.id);
      writeJournal(journal);
      sendJson(res, 200, journal);
      return;
    }

    if (req.method === "PUT") {
      const incoming = body.merge || {};
      for (const dayId of days) {
        const list = Array.isArray(incoming[dayId]) ? incoming[dayId] : [];
        const have = new Set((journal[dayId] || []).map((item) => item.id));
        const extras = list.filter(
          (item) =>
            item &&
            item.id &&
            authors.includes(item.author) &&
            cleanText(item.text) &&
            !have.has(item.id)
        );
        if (extras.length) {
          journal[dayId] = [
            ...(journal[dayId] || []),
            ...extras.map((item) => ({
              id: String(item.id),
              author: item.author,
              text: cleanText(item.text),
              created: Number(item.created) || 0,
            })),
          ];
        }
      }
      writeJournal(journal);
      sendJson(res, 200, journal);
      return;
    }

    res.writeHead(405);
    res.end();
  } catch {
    sendJson(res, 400, { error: "bad json" });
  }
});

server.listen(4173, "127.0.0.1", () => console.log("listening 4173"));
