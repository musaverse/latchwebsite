# Latch Infinity website

Redesign of [latchinfinity.com](https://www.latchinfinity.com/), built on the Latch Infinity Brand Lookbook (Edition 01, 2026).

- One static page (`index.html`) with hash routes for every page: Home, About, Work, Marketing and its four service pages, EdTech, Gamification, Blogs, Contact.
- No build step and no dependencies. Fonts load from Google Fonts (Archivo).
- `img/` holds the client logos and blog covers as WebP.
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
