---
title: "One Sitemap Per Language: How to Set It Up"
description: The best practice for a multilingual site is one XML sitemap per language, tied together by a single sitemap index — for example sitemap-zh-hant.xml, sitemap-zh-hans.xml, and sitemap-en.xml. This guide gives you real file examples, a sitemap with hreflang annotations, and how to monitor indexing per language in GSC.
target_keyword: multilingual sitemap
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-25
date_updated: 2026-07-25
translations:
  zh-hant: multilingual-sitemap
  zh-hans: multilingual-sitemap
---
# One Sitemap Per Language: How to Set It Up

**The best practice for a multilingual site is "one XML sitemap per language, tied together by a single sitemap index" — for example `sitemap-zh-hant.xml`, `sitemap-zh-hans.xml`, and `sitemap-en.xml`.** This lets you monitor indexing for each language separately in Google Search Console, so you can tell at a glance whether a problem is site-wide or isolated to one language version.

## Why split sitemaps by language?

A sitemap doesn't affect ranking — its value is in **indexing and diagnostics**. Dump all three languages into one sitemap and GSC will only tell you "3,000 submitted, 2,100 indexed." You have no idea which language the missing 900 pages belong to. Split by language and that changes:

1. **Indexing rate becomes visible per language.** If your Simplified Chinese version indexes noticeably worse than the Traditional one, the cause is probably content that's too close to the Traditional version (machine translation) or a broken hreflang/canonical setup — and you can pinpoint the direction immediately.
2. **Submission and debugging stay independent.** Add a batch of English articles and you only resubmit the English sitemap.
3. **It aligns naturally with a subdirectory architecture.** The `/zh-hant/` folder maps to `sitemap-zh-hant.xml`, so the tracking logic is consistent.

## Example file structure

The standard layout for a three-language site is "1 index + 3 language sitemaps":

```
https://example.com/sitemap-index.xml   ← submit only this one
├── https://example.com/sitemap-zh-hant.xml
├── https://example.com/sitemap-zh-hans.xml
└── https://example.com/sitemap-en.xml
```

The sitemap index itself:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-zh-hant.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-zh-hans.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-en.xml</loc></sitemap>
</sitemapindex>
```

## Advanced: hreflang inside the sitemap

Beyond the HTML `<head>`, hreflang can also live inside the sitemap (pick **one of the two** — never both inconsistently). Inside each `<url>`, use `xhtml:link` to list every language version plus x-default:

```xml
<url>
  <loc>https://example.com/en/geo-guide/</loc>
  <xhtml:link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="en" href="https://example.com/en/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://example.com/en/geo-guide/" />
</url>
```

The rules are identical to the HTML version: **every URL lists all languages + a self-reference + x-default, and the tags must be reciprocal.** On sites with a lot of pages, annotating in the sitemap lets you centralize hreflang maintenance inside the code that generates the sitemap — far less prone to gaps than editing a per-page template.

## 5 things to watch when setting it up

1. **Include only indexable, final URLs.** Pages with noindex, in-flight redirects, or 404s don't belong in the sitemap — that's what keeps the indexing report diagnostically useful.
2. **Use absolute URLs**, and keep them consistent with the canonical (trailing slash and https included).
3. **A single sitemap caps at 50,000 URLs and 50 MB uncompressed** (the sitemaps.org protocol). Past that, split again.
4. **Keep lastmod honest.** Change it only when the content actually updates. Auto-bumping lastmod site-wide every day strips the field of any reference value.
5. **Declare the sitemap index in robots.txt:** `Sitemap: https://example.com/sitemap-index.xml`, so other engines like Bing can discover it too.

## The steps in GSC

1. Go to GSC → "Sitemaps" → submit `sitemap-index.xml`, and Google automatically expands the three child sitemaps.
2. Each language sitemap then gets its own row, each showing "Discovered pages" and a filterable indexing status.
3. Check once a month: if any one language's indexing rate lags the others noticeably, investigate along three axes — content duplication, hreflang, and internal linking.

## FAQ

**Q1: Do I really have to split by language? Can't I just use one sitemap for the whole site?**
Technically one sitemap will get indexed too, but you lose the ability to diagnose per language. Splitting is almost zero-cost (most frameworks and SEO plugins support it) and buys you a big jump in diagnostic precision — a very good trade.

**Q2: How do frameworks like Astro or Next.js generate multilingual sitemaps?**
The mainstream approach is to use an official or community sitemap integration (like @astrojs/sitemap) that groups by route prefix, or to write a small script that outputs a separate file per `/zh-hant/`, `/zh-hans/`, and `/en/` at build time — injecting the xhtml:link annotations in the same pass.

**Q3: Is hreflang better in the HTML or in the sitemap?**
Few pages with a controllable template → HTML head is intuitive and easy to inspect. Many pages generated by a system → the sitemap centralizes maintenance. The key is to pick one; putting it in both places out of sync is a common source of incidents.

**Q4: How long after submitting does a sitemap get indexed?**
Submitting is only a "notification" — it guarantees neither indexing nor a timeline. A new site usually takes days to weeks; if one specific language keeps indexing poorly over the long run, the problem is almost always content quality or duplication, not the sitemap itself.

---

Once your sitemaps are split, don't forget the hreflang pairing on every URL — GeoSeoToday's [hreflang generator and GEO checker](/en/geo/) can output the tags in both HTML and sitemap formats directly. The next step is to split your GSC tracking by language too, and for the overall architecture, review the full multilingual SEO guide.
