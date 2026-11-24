# Latch Infinity website

Redesign of [latchinfinity.com](https://www.latchinfinity.com/), built on the Latch Infinity Brand Lookbook (Edition 01, 2026).

## How the site is organised

Every page has its own address and its own file, using the same addresses as the live site:

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about/index.html` |
| Work | `work/index.html` |
| Case studies | `work/kaynes/`, `work/oli/`, `work/cube/`, `work/dharmaram/`, `work/milntown/` |
| Marketing | `marketing/index.html` |
| Marketing services | `marketing/branding/`, `marketing/advertising/`, `marketing/digital-services/`, `marketing/web-app-development/` |
| EdTech | `edtech/index.html` |
| Gamification | `gamification/index.html` |
| Blogs | `blog/index.html` (an article opens at `blog/?p=<slug>`) |
| Let's Talk | `contact/index.html` |
| Plans & Pricing (ads landing) | `start/index.html` |
| Terms & Privacy | `legal/index.html` |

Each page file holds that page's title and description and names its page in `<html data-route="…">`.
What they share lives in one place:

- `assets/site.css`: all styles.
- `assets/site.js`: the header, menus and footer, every page's content, and all motion. It reads `data-route` to know which page to show.
- `img/`, `video/`: pictures and films. `blog/posts.json` holds the articles; `blog/md.js` renders them.
- `admin.html`: the blog editor.

Links inside the code are still written as `#about`, `#branding` and so on. The script turns them into the page addresses
(`about/`, `marketing/branding/`) when the page loads, and old links such as `…/#work` still open the right page.
To add a page, add its `P['name']` in `assets/site.js`, its address in `PAGE_URL`, and a page file with `data-route="name"`.

No build step and no dependencies. Fonts load from Google Fonts.
Pushing to `main` deploys a preview to GitHub Pages (`.github/workflows/pages.yml`).

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
