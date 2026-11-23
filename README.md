# Latch Infinity website

Redesign of [latchinfinity.com](https://www.latchinfinity.com/), built on the Latch Infinity Brand Lookbook (Edition 01, 2026).

- One static page (`index.html`) with hash routes for every page: Home, About, Work, Marketing and its four service pages, EdTech, Gamification, Blogs, Contact.
- No build step and no dependencies. Fonts load from Google Fonts (Archivo).
- `img/dharmaram/` holds the brand book's cover background (used behind the hero) and the wordmark sprite.
- `img/` holds the client logos and blog covers as WebP; `img/kaynes/` holds the Kaynes lookbook pages and textures; `img/oli/` holds the Oli stage, mic and app renders and the five Oli blog covers; `img/cube/` holds 20 screens from the Cube Audience Manager Figma flow (1600 px WebP).
- `video/` also holds the Cube product film (26 s, 848 × 480, supplied edit with its own sound) and a poster; the phone source is the same file.
- `video/` holds the Kaynes brand film (27.5 s, 60 fps, original score; 1080p, a 720p version for phones, and a poster) and the two Oli films: a 16:9 stage film (26 s) and a 9:16 reel (16 s), both 60 fps, flown by a 3D camera over the stage, with an original score built from the same cue sheet as the picture, each with a 720p phone version and a poster.
- Case studies:
  - `#work-milntown` (Miln Town, a heritage bungalow in Coonoor: photography, film and a table brochure). It replaces the "HoReCa Brochure" placeholder tile on Work. The hero is a 3D scene: the brochure lies on a round tea table, and scrolling moves the camera until it is square to the page, then turns the leaves (side to side on wide screens, top to bottom on phones). The photographs follow as a stack of prints that pin and settle on each other. Brochure pages are the client's print PDF split into 18 single pages (`img/milntown/pg00`–`pg17`, 1200 px and 640 px); photos are 2000 px and 1000 px WebP; `room-blur.webp` is the blurred room behind the table; `teak.webp` (and `teak-s.webp` for phones) is the generated teak grain for the tabletop; `logo.webp` is the Miln Town logo cut from the back cover. Headlines use Fraunces in place of the brochure's display face. With reduced motion, the book is shown open and turned with the arrow buttons.
  - `#work-dharmaram` (Dharmaram Vidya Kshetram brand identity refresh). A project showcase built around "one emblem, five houses": the emblem draws itself, the client and the brief, an interactive reading of its six symbols, the lockup with a clear-space overlay (x = the cross), a faculty switcher that recolours the lockup for Theology, Philosophy, Vinayasadhana and Oriental Canon Law, the identity at a glance, and what we delivered. It previews the work rather than reproducing the brand book. The emblem, lockup and faculty wordmarks are the client's vectors taken from the brand book PDF; the wordmarks load from `img/dharmaram/wordmarks.svg`.
  - `#work-kaynes` (Kaynes Technology brand refresh). Its logo and icons are vectors traced from the client's lookbook PDF.
  - `#work-cube` (Cube Audience Manager, an AI audience-research product by Cubera). Follows the product's own flow in five steps: film, the idea, personality (a picker), archetypes (a cover-flow pinned while you scroll; swiped on phones) and Cube AI. Set in Cube's own system: near-black, Space Grotesk and a blue-to-lilac gradient. It replaces the "AdTech Web App" placeholder tile on Work.
  - `#work-oli` (Oli, a gig platform for live music). Built as a setlist of eight tracks: lyric intro, stage film, mixing desk, the measured mark, colour, vertical reel, a venue scene whose LED wall is a live SVG mapped onto the photo, and the blog covers as record sleeves. The logo is the client's own SVG. Nothing from the Oli pitch deck (figures, market data, roadmap) is used on the page.
- Blog:
  - Articles live in `blog/posts.json` (title, summary, category, topics, date, cover, Markdown body, closing note, draft flag). The ten articles from the old latchinfinity.com blog were moved in with their full text; covers are in `img/blog/`.
  - `#blog` lists published articles with category and topic filters; `#blog/<slug>` is the article page (contents list, closing note, topics, previous/next, two more to read). Drafts never appear on the site.
  - `blog/md.js` renders the Markdown for both the site and the editor. It escapes everything, so a post cannot inject HTML.
  - `admin.html` is the blog editor: write, preview, upload a cover and inline images (resized and turned into WebP in the browser), save drafts, publish, update and delete. It publishes by committing images and `posts.json` to this repository in one commit through the GitHub API, and the Pages workflow then redeploys the site (about a minute). Each editor needs a fine-grained GitHub token with **Contents: Read and write** on this repository only; it is stored in that browser and sent only to api.github.com. Unsaved work is kept in the browser until it is published or discarded.
  - The repository is public, so drafts are readable in `posts.json` on GitHub even though the site hides them.
- Pushing to `main` deploys a preview to GitHub Pages (`.github/workflows/pages.yml`).

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Notes

- All copy is taken from the live site. Image areas marked "Image placeholder" and Work tiles marked "Add project here" are waiting for real assets.
- Terms and Privacy pages still need their text.
- The contact form validates input but does not send anything yet.
- The preview is marked `noindex` so search engines skip it.
