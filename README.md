# Japan ’26

A little website for a nine-day trip. Kyoto first, a day in Osaka, then Tokyo. November 20–28, 2026. Marie turns 30 on Sunday the 22nd.

> celebration of life, friendship & adventures all over the world.

Open it on a phone: **[r-chuapoco.github.io/japan-26](https://r-chuapoco.github.io/japan-26/)**

Tap the cover, then wander. The page is built for a pocket, cream paper and red ink, one day at a time.

## The shape of the week

| | | |
| --- | --- | --- |
| Fri 20 | Arrival: Kyoto | The Blossom Kyoto, Gojo. teamLab, then wagyu sukiyaki. |
| Sat 21 | Fushimi, Gion, Rings | Torii at sunrise, Kiyomizu-dera, lunch in Gion, rings at Glänta. |
| Sun 22 | Marie’s 30th | Arashiyama, the hotel onsen, kaiseki at Kodaiji Kiwami. |
| Mon 23 | Osaka day | Dotonbori and Shinsaibashi, then back for the baths. |
| Tue 24 | Kyoto → Tokyo | Nozomi 250. Fuji is on the right. Hotel Groove Shinjuku. |
| Wed 25 | Fashion & Shibuya | Omotesando, Harajuku, the Google office, dinner near the crossing. |
| Thu 26 | Ginza | Tsukiji in the morning, the avenue, Tokyo Tower at sunset, standing sushi. |
| Fri 27 | Style & Asakusa | Shimokitazawa, a color reading, Senso-ji at dusk, grilled eel. |
| Sat 28 | Leaving Shinjuku | Checkout, one last wander, then the trains out. |

Kyoto nights are at The Blossom Kyoto. Tokyo nights are at Hotel Groove Shinjuku, up in Tokyu Kabukicho Tower.

## What the site holds

- **Before you go.** The small practical list: cards, the IC card, what to pack.
- **Itinerary.** Every day, with times, walks, reservations, and a fun fact where one belongs.
- **Translate.** A few phrases, spoken out loud when you tap the Japanese.
- **Photobooth.** Four frames, a strip, and a way to save it to the phone.
- **Journal.** A prompt for each day, including the one written for 40-year-old Marie.

Add the site to the home screen after the first open. The schedule and photos stay readable later, even with a bad signal. New journal notes and photobooth strips stay on the phone that wrote them. This GitHub page keeps the itinerary. It does not collect new notes.

## What this repository is

This is the whole site. No install, no build step. The files are the page.

| File | What it is |
| --- | --- |
| `index.html` | The shell. One page, five tabs. |
| `styles.css` | Paper, ink, and the intro artwork. |
| `app.js` | The days, the copy, and how the page behaves. |
| `sw.js` | The offline copy saved on the phone. |
| `photos/` | The pictures on the days and the intro. |
| `server.js` | A small local server used while the trip was being written. GitHub Pages does not run it. |

GitHub stores these files. The link above is GitHub Pages serving them as a website, so the trip stays up without a computer left on at home.

## A note if you are new here

A repository is a folder with a history. Each save that gets recorded is a commit. `main` is the copy that the live site is built from. When a file on `main` changes, the website updates from that.

The live address is a project site, which is why it ends in `/japan-26/`.
