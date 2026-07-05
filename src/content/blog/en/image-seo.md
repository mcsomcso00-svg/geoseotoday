---
title: "Image SEO: Alt Text, Formats, and Compression Done Right"
description: "Image SEO comes down to three moves: write alt text for machines and screen-reader users, ship WebP/AVIF, and compress plus lazy-load for speed. This guide gives you an alt-writing formula, a format cheat sheet, and file-size benchmarks — handled in one pass."
target_keyword: image seo
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-16
date_updated: 2026-07-16
translations:
  zh-hant: image-seo
  zh-hans: image-seo
---
# Image SEO: Alt Text, Formats, and Compression Done Right

**Image SEO is a three-part kit: write alt text that describes the image in one sentence (working the keyword in naturally, never stuffing); prefer WebP or AVIF for the format; and compress content images to ≤ 150KB while lazy-loading anything below the fold.** Get these three right and you earn Google Images traffic, an accessibility boost, and better Core Web Vitals — all at once.

## Why image SEO is worth the effort

1. **Google Images is an underrated traffic door.** For recipes, tutorials, and product content, image search often accounts for 10–20% of organic traffic.
2. **Your image is usually the LCP element.** An article's hero image is almost always the "largest contentful element" — if it isn't optimized, your CWV Largest Contentful Paint won't be good (the threshold is 2.5 seconds).
3. **AI engines read alt too.** When multimodal models and AI search parse a page, alt text is their first-hand source for what an image means.

## Move one: alt text

Alt (alternative text) exists first for accessibility — a screen reader reads it aloud to blind users. Its SEO value is that the same sentence tells search engines what the image contains.

The writing formula: **"Say in one sentence what's in the image + (where it reads naturally) tie it to the page topic."**

| Scenario | Bad alt | Good alt |
|---|---|---|
| GSC screenshot | `image1` | `GSC Page Indexing report showing 143 pages under Crawled - currently not indexed` |
| Product photo | `linen dress women summer slim korean`(stuffing) | `Side view of an off-white linen dress, knee length` |
| Flowchart | (blank) | `Content-debt decision flow: consolidate, remove, or enrich` |

The rules, boiled down:

1. Content images **must** have alt; purely decorative images (dividers, background patterns) get an empty `alt=""` (so screen readers skip them — that's not the same as omitting the attribute).
2. Keep it to one sentence (roughly 5–15 words), not a paragraph.
3. Don't open with "an image of…" — the alt attribute already means it's an image.
4. The keyword appearing once, naturally, is fine; listing a string of keywords is a stuffing signal.

## Move two: format

The 2026 cheat sheet:

| Format | Best for | Compression | Notes |
|---|---|---|---|
| AVIF | Photos, hero images (first pick) | Best (~50% smaller than JPEG) | Fully supported across mainstream browsers |
| WebP | The safe all-rounder | Good (~25–35% smaller than JPEG) | Most reliable compatibility |
| JPEG | Legacy compatibility | Average | Use as a fallback |
| PNG | Transparent backgrounds, UI screenshots | Poor (large files) | Swap to WebP wherever you can |
| SVG | Logos, icons, flowcharts | Vector, tiny | Text stays readable; first pick for diagrams |

Serve multiple formats with a `<picture>` fallback, or hand it to your framework (Astro's `<Image />` and Next's `next/image` output AVIF/WebP automatically).

## Move three: compression and loading

Dimension and size benchmarks:

- An image's actual dimensions only need to be 1–2× its display size (Retina) — don't drop a 4000px original onto the page.
- Target **≤ 150KB** for content images, **≤ 250KB** for the hero. Tools: Squoosh (free, runs in your browser), TinyPNG, or let your framework handle it at build time.

Three loading rules:

1. **Never lazy-load the above-the-fold hero** — add `fetchpriority="high"` instead. Lazy-loading the hero is the single most common way people slow down their own LCP.
2. **Lazy-load everything below the fold** with `loading="lazy"`.
3. **Hard-code `width` and `height` on every `<img>`** so the browser reserves the space first and avoids layout shift (CLS).

## Three easy wins people miss

1. **Semantic file names.** `gsc-crawled-not-indexed-report.png` beats `IMG_0042.png` — the file name is a (lightweight) ranking signal.
2. **An image sitemap, or image fields in your existing sitemap.** Only sites that lean heavily on image traffic (e-commerce, recipes) need this; a typical blog can skip it.
3. **Original images beat stock.** Custom flowcharts and real test screenshots double as first-hand E-E-A-T evidence; a stock photo seen everywhere has no search value.

## FAQ

**Q1: Will missing alt get me penalized?**
No penalty — but you're leaving image-search traffic and accessibility points on the table. Treat alt as a field that should have been there all along, not an optimization trick.

**Q2: How many images should an article have?**
There's no magic number. The principle is that every image carries information. Two to five meaningful screenshots or diagrams in a tutorial beat ten decorative stock photos — the latter are just weight that slows loading.

**Q3: Self-host images or use a CDN / image host?**
Host on your own domain with a CDN for speed. The risk of a third-party image host: if the service dies, all your images break, and traffic attribution for image search gets murky.

**Q4: Do AI-generated images hurt SEO?**
Google doesn't penalize images for being "AI-generated." The test is still information value: an AI-generated diagram that accurately conveys a concept is fine; but passing off an AI image as a real screenshot in hands-on content damages E-E-A-T and reader trust.

---

GeoSeoToday treats images as "evidence carriers": every screenshot testifies to the content's first-hand experience — exactly what E-E-A-T and GEO both want. You can score how citable your article is overall with the [GEO readiness checker](/en/geo/).
