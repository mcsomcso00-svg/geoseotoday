---
title: "Orphan Pages Audit: Finding URLs With Zero Internal Links"
description: An orphan page has no internal link pointing to it, so authority can't flow in and crawlers rarely find it — Google often leaves these pages out of the index. Here's how to diff your sitemap against a real crawl to find them and reconnect them.
target_keyword: orphan pages
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-08-30
date_updated: 2026-08-30
translations:
  zh-hant: orphan-pages-audit
  zh-hans: orphan-pages-audit
---
# Orphan Pages Audit: Finding URLs With Zero Internal Links

**An orphan page exists on your site but has no internal link pointing to it — crawlers can only stumble onto it through the sitemap, no authority flows in, and Google frequently leaves it out of the index long-term.** The reliable way to catch these isn't eyeballing your nav; it's taking the full URL list from `sitemap.xml` and diffing it against a real crawl (one that simulates Googlebot and only follows internal links) — whatever's in the sitemap but unreachable by the crawler is an orphan.

## Why orphan pages happen

Three causes show up over and over: an old post gets redesigned and the link to it quietly drops out of a category page or related-posts block; a campaign or landing page ships straight into the sitemap without ever getting linked from navigation or body copy; or the CMS auto-generates the sitemap while internal linking is maintained by hand, and the two drift apart over time. In one mid-size blog audit (roughly 340 published posts), a full-site crawl reached only 289 of them while the sitemap listed all 340 — 51 pages, about 15% of the content, had zero internal links pointing in, and 18 of those were posts published within the prior six months.

## The cross-reference method, step by step

The core logic is simple: **sitemap URL list minus crawler-reached URL list equals suspected orphan pages** — but the crawler must be configured to NOT use the sitemap as a seed, or the tool ends up feeding itself the sitemap and the comparison becomes meaningless.

1. **Export the sitemap list.** Download `sitemap.xml` (or expand every child sitemap under a sitemap index) and pull every `<loc>` URL into a flat list.
2. **Turn off "crawl from sitemap" mode.** In Screaming Frog or an equivalent tool, run pure "Crawl" mode starting from the homepage, following only the `<a href>` links actually present on each page. Do not also import the sitemap as seed URLs — that defeats the comparison.
3. **Export what the crawler actually reached.** After the crawl finishes, export every discovered internal URL that returned a 200 status.
4. **Diff the two lists.** Load both lists into a spreadsheet and use `VLOOKUP` or `XLOOKUP` to find every URL that's in the sitemap but absent from the crawl export — these are your suspected orphans.
5. **Cross-check Google Search Console coverage.** Paste the suspected-orphan list into GSC's Pages report one by one. A status of "Crawled – currently not indexed" or "Discovered – currently not indexed" is usually direct confirmation that the page is starved of internal authority signals.
6. **Decide keep-or-kill, then fix the links.** For pages still worth keeping, add links from at least 2–3 genuinely relevant articles or category pages. For pages with no remaining value, retire them with a 301 to the closest live equivalent rather than leaving them orphaned and still burning crawl budget.

## Orphan page vs. normally-linked page: signal comparison

| Signal | Normally-linked page | Orphan page (typical signature) |
|---|---|---|
| Inbound internal links | Usually 3+ | 0 |
| Reachable by link-only crawl | Yes | No — only appears in sitemap |
| GSC index status | Mostly "Indexed" | Often "Discovered but not indexed" |
| Average crawl frequency | Tracks content update cadence | Noticeably lower, or stalled entirely |
| Common cause | — | Redesign dropped a link, campaign page never linked from body copy, CMS/linking drift |

## Frequently asked questions

**Q1: Does an orphan page always get excluded from the index?**
Not always, but the odds run meaningfully higher. Google can still discover and index an orphan page through the sitemap or an external link, but without internal authority signals, indexing tends to be less stable and rankings noticeably weaker than a comparable linked page.

**Q2: How often should you run an orphan page audit?**
For sites that publish steadily, quarterly is a reasonable baseline. Run one immediately after any major redesign or category restructuring, since that's exactly when links quietly drop and the gap compounds unnoticed.

**Q3: Does this method also catch pages that shouldn't be in the sitemap at all?**
Yes, and that's a useful side effect — expired campaign pages or test pages that got left in the sitemap show up the same way. During review, decide case by case whether the fix is adding links or simply removing the URL from the sitemap.

**Q4: Can Google Search Console's coverage report alone replace this cross-reference method?**
Not fully. GSC tells you the indexing outcome, not the root cause — it won't tell you which pages lack internal links. The sitemap-versus-crawl diff is what actually pinpoints the affected pages.

---

Orphan pages are a "the page exists but nothing links to it" problem; making sure authority actually flows to every page you want ranked needs a broader linking framework — see [Internal Linking Strategy: Funnel Authority Into Your Money Pages](/en/blog/internal-linking-strategy/). For how internal linking fits into GEO (getting cited by AI engines), start with the overview: [/en/geo/](/en/geo/).
