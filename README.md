# Latch Infinity website

Redesign of [latchinfinity.com](https://www.latchinfinity.com/), built on the Latch Infinity Brand Lookbook (Edition 01, 2026).

- One static page (`index.html`) with hash routes for every page: Home, About, Work, Marketing and its four service pages, EdTech, Gamification, Blogs, Contact.
- No build step and no dependencies. Fonts load from Google Fonts (Archivo).
- `img/dharmaram/` holds the brand book's cover background (used behind the hero) and the wordmark sprite.
- `img/` holds the client logos and blog covers as WebP; `img/kaynes/` holds the Kaynes lookbook pages and textures; `img/oli/` holds the Oli stage, mic and app renders and the five Oli blog covers; `img/cube/` holds 20 screens from the Cube Audience Manager Figma flow (1600 px WebP).
- `video/` also holds the Cube product film (26 s, 848 × 480, supplied edit with its own sound) and a poster; the phone source is the same file.
- `video/` holds the Kaynes brand film (27.5 s, 60 fps, original score; 1080p, a 720p version for phones, and a poster) and the two Oli films: a 16:9 stage film (26 s) and a 9:16 reel (16 s), both 60 fps, flown by a 3D camera over the stage, with an original score built from the same cue sheet as the picture, each with a 720p phone version and a poster.
- Case studies:
  - `#work-dharmaram` (Dharmaram Vidya Kshetram brand identity refresh). A project showcase built around "one emblem, five houses": the emblem draws itself, the client and the brief, an interactive reading of its six symbols, the lockup with a clear-space overlay (x = the cross), a faculty switcher that recolours the lockup for Theology, Philosophy, Vinayasadhana and Oriental Canon Law, the identity at a glance, and what we delivered. It previews the work rather than reproducing the brand book. The emblem, lockup and faculty wordmarks are the client's vectors taken from the brand book PDF; the wordmarks load from `img/dharmaram/wordmarks.svg`.
  - `#work-kaynes` (Kaynes Technology brand refresh). Its logo and icons are vectors traced from the client's lookbook PDF.
  - `#work-cube` (Cube Audience Manager, an AI audience-research product by Cubera). Follows the product's own flow in five steps: film, the idea, personality (a picker), archetypes (a cover-flow pinned while you scroll; swiped on phones) and Cube AI. Set in Cube's own system: near-black, Space Grotesk and a blue-to-lilac gradient. It replaces the "AdTech Web App" placeholder tile on Work.
  - `#work-oli` (Oli, a gig platform for live music). Built as a setlist of eight tracks: lyric intro, stage film, mixing desk, the measured mark, colour, vertical reel, a venue scene whose LED wall is a live SVG mapped onto the photo, and the blog covers as record sleeves. The logo is the client's own SVG. Nothing from the Oli pitch deck (figures, market data, roadmap) is used on the page.
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
