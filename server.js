const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const journalPath = path.join(root, "journal.json");
const stripsPath = path.join(root, "strips.json");
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

function readJournal() {
  try {
    const data = JSON.parse(fs.readFileSync(journalPath, "utf8"));
    return data && typeof data === "object" && !Array.isArray(data) ? data : {};
  } catch {
    return {};
  }
}

function writeJournal(data) {
  fs.writeFileSync(journalPath, JSON.stringify(data, null, 2));
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
  fs.writeFileSync(stripsPath, JSON.stringify(data));
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

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(data));
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
      const entry = { id: crypto.randomUUID(), author, text, created: Date.now() };
      journal[dayId] = [...(journal[dayId] || []), entry];
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
