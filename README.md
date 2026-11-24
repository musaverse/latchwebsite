# Latch Infinity website

Redesign of [latchinfinity.com](https://www.latchinfinity.com/), built on the Latch Infinity Brand Lookbook (Edition 01, 2026).

## How the site is organised

The site is a [Next.js](https://nextjs.org/) app (App Router) exported as a static website. Every page is its own
route under `app/`, at the same address the live site uses:

| Page | File |
|---|---|
| Home | `app/page.tsx` |
| About, Work, EdTech, Gamification, Blogs, Let's Talk | `app/about/`, `app/work/`, `app/edtech/`, `app/gamification/`, `app/blog/`, `app/contact/` |
| Case studies | `app/work/kaynes/`, `app/work/oli/`, `app/work/cube/`, `app/work/dharmaram/`, `app/work/milntown/` |
| Marketing and its services | `app/marketing/`, `app/marketing/branding/`, `…/advertising/`, `…/digital-services/`, `…/web-app-development/` |
| Plans & Pricing, Terms & Privacy | `app/start/`, `app/legal/` |
| Blog articles | `app/blog/[slug]/`: one page per published article in `public/blog/posts.json` |
| Unknown addresses | `app/not-found.tsx` |

- `lib/pages.ts`: every page's title and description, and the route name passed to the page script.
- `app/layout.tsx`: the shared `<head>` (fonts, styles, icon) and the script loader.
- `public/assets/site.css`, `public/assets/site.js`: the design, the header, menus and footer, every page's content and all motion. The script reads the page from `<meta name="li-route">`.
- `public/img/`, `public/video/`: pictures and films. `public/blog/posts.json` holds the articles; `public/blog/md.js` renders them.
- `public/admin.html`: the blog editor. Publishing commits `public/blog/posts.json` and images, which redeploys the site.

Links inside the page code are written as `#about`, `#branding` and so on; the script turns them into page addresses.
Old links such as `…/#work`, `…/#blog/<slug>` and `…/blog/?p=<slug>` still open the right page.
To add a page: add `P['name']` in `public/assets/site.js` and its address in `PAGE_URL`, add it to `lib/pages.ts`,
and create `app/<address>/page.tsx` that exports `pageMeta('name')`.

Pushing to `main` builds the site and deploys the preview to GitHub Pages (`.github/workflows/pages.yml`).

## Preview locally

Needs Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` writes the finished static site to `out/`.

## Notes

- All copy is taken from the live site. Image areas marked "Image placeholder" and Work tiles marked "Add project here" are waiting for real assets.
- Terms and Privacy pages still need their text.
- The contact form validates input but does not send anything yet.
- The preview is marked `noindex` so search engines skip it.
