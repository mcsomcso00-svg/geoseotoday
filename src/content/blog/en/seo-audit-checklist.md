---
title: "SEO Audit Checklist: 30 Essential Checks"
description: "A do-it-yourself SEO audit checklist: 30 essential checks split across five blocks — technical indexing, on-page, content quality, links, and GEO readiness — each with a pass/fail bar, so you can run a full audit in half a day and rank the fixes."
target_keyword: seo audit checklist
intent: commercial
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-18
date_updated: 2026-07-18
translations:
  zh-hant: seo-audit-checklist
  zh-hans: seo-audit-checklist
---
# SEO Audit Checklist: 30 Essential Checks

**A complete SEO audit covers five blocks and 30 checks: technical indexing (8), on-page (7), content quality (6), links (5), and GEO readiness (4).** A small-to-mid site can clear all of them in half a day. The output of an audit isn't a report — it's a single fix list sorted by impact.

## Before you start: gather three things

Line up Google Search Console access, one full-site crawl (the free Screaming Frog tier crawls 500 URLs), and 90 days of traffic data before you begin. An audit without GSC is guesswork — it's the only tool that tells you what your site looks like through Google's eyes.

## Block 1: Technical & indexing (8 checks)

1. GSC coverage: indexed pages ÷ submitted pages; investigate anything under 80%.
2. robots.txt: nothing important is accidentally blocked; from 2026 on, also check that your access policy for AI crawlers (GPTBot and others) matches your intent.
3. sitemap.xml: it exists, it's valid, and it lists only canonical URLs that return 200.
4. HTTPS and a single canonical domain: http and www variants all 301 to the same canonical version.
5. Redirect health: no redirect chains (two hops or more), no redirect loops.
6. 404 status: internal links don't point to 404s; high-backlink 404 pages get 301'd back to life.
7. Core Web Vitals: the GSC experience report is all green, or at least free of "poor" URLs.
8. Mobile usability: main layouts have no horizontal scroll on a phone and tappable elements don't overlap.

## Block 2: On-page (7 checks)

9. A unique title per page, primary keyword near the front, roughly 60 characters or less.
10. A unique meta description per page with a reason to click.
11. One H1 per page, echoing the title.
12. Heading levels don't skip (an H3 only appears under an H2).
13. Image alt coverage and file size (list every image over 200KB to compress).
14. Canonical tags correctly self-reference or point to the canonical version.
15. Structured data: Article, Organization, and FAQPage at minimum, validating with no errors.

## Block 3: Content quality (6 checks)

16. Content-debt inventory: find pages with zero clicks in 90 days and decide to merge, delete, or beef them up.
17. Keyword cannibalization: where two or more pages rank for the same keyword, merge them.
18. Content freshness: are the numbers and years on your money pages still current?
19. E-E-A-T signals: are author bylines, an About page, and contact details in place?
20. Duplicate content: are parameter pages or tag pages spawning masses of near-identical pages?
21. Thin-page ratio: the share of sitewide pages with too little text and no unique value.

## Block 4: Links (5 checks)

22. Orphan pages: a list of pages with no internal links pointing to them at all.
23. Authority flow: do your money pages receive more internal links than your fringe pages?
24. Anchor-text distribution: is anchor text on internal and external links over-concentrated on one keyword?
25. Backlink profile: the trend in referring domains, and any sudden spikes or crashes.
26. Bad neighbors: any outbound links from your site to spam sites?

## Block 5: GEO readiness (4 checks)

27. Do your money articles open with a self-contained 40–80 word conclusion?
28. Do your money articles carry concrete data and an FAQ section?
29. AI-crawler accessibility: content doesn't depend on JavaScript rendering.
30. Pull five money articles and run them through the [GEO Readiness Checker](/en/geo/); anything under 75 goes on the fix list.

## After the audit: sort by impact × cost

| Priority | Trait | Example |
|---|---|---|
| P0 fix now | Sitewide issues that hurt indexing | robots misblock, redirect loop |
| P1 within two weeks | Issues hurting money pages | cannibalization merge, title rewrite |
| P2 scheduled | Cumulative improvements | content-debt cleanup, alt backfill |

Suggested cadence: a small site once a quarter; a content-heavy site a light monthly check plus a full audit every six months.

## FAQ

**Q1: Do I have to finish all 30 to see any benefit?**
No. The value of an audit is "finding the five most painful problems." Fixing the P0s and P1s usually shows improvement on its own; schedule the rest into routine maintenance.

**Q2: How much does an audit cost?**
The 30 checks above can be done with GSC, the free Screaming Frog tier, and a free checker — the cost is half a day to a day of labor. Paid tools accelerate the work; they aren't required.

**Q3: How soon do results show after an audit?**
Technical fixes (the indexing kind) usually show in 2–6 weeks; content consolidation takes 1–3 months. That's why you keep a record of each audit — so you have something to compare against.

**Q4: Does a new site need an audit?**
Run the first one three months after launch. Do it too early and there's not enough data — half the checks turn up nothing.

---

This checklist is the public framework behind GeoSeoToday's SEO audit service — run it once yourself and you'll know where the site is hurting. For the content items 27–30, score each article directly with the free [GEO Readiness Checker](/en/geo/), and for the wider method see the [Complete GEO Guide](/en/blog/geo-complete-guide/).
