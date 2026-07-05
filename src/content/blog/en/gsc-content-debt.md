---
title: "Find Content Debt in 3 Places in Google Search Console (Hands-On)"
description: "Use three Search Console reports — Performance (filter for 90-day zero-click pages), the Page Indexing report (watch Crawled and Discovered - currently not indexed), and the URL Inspection tool — to hunt down your content debt. Exact report names, click paths, and export steps. No paid tools."
target_keyword: gsc content debt
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-13
date_updated: 2026-07-13
translations:
  zh-hant: gsc-content-debt
  zh-hans: gsc-content-debt
---
# Find Content Debt in 3 Places in Google Search Console (Hands-On)

**To find your site's content debt you only need three places in Google Search Console: the Performance report (filter for pages with zero clicks over 90 days), the Page Indexing report (watch the two statuses Crawled - currently not indexed and Discovered - currently not indexed), and the URL Inspection tool (confirm, page by page, how Google actually sees it).** It's free start to finish, and one audit pass takes about 30 minutes.

## Before you start: what you need

All you need is one verified GSC property, on a site that has been live for more than 90 days — because our core test is literally "zero clicks over 90 days." As of 2026 the GSC interface retains 16 months of Performance data, which is plenty for a quarterly audit plus an annual review.

## Stop 1: the Performance report — surface your 90-day zero-click pages

This is the most important stop. The exact steps:

1. In the left-hand menu click **Performance → Search results**.
2. Change the date filter at the top to **Last 3 months** (90 days).
3. In the table below, switch to the **Pages** tab.
4. Click the **Clicks** column header to sort **ascending** (lowest first).
5. Top right, click **Export → Google Sheets** and pull the whole list out.

In the sheet, add a "Verdict" column and classify each row with two conditions:

- **Clicks = 0, impressions < 50**: heavy debt. Google barely gives this page any chance at all — merge it or remove it.
- **Clicks = 0, impressions ≥ 50**: light debt. Google is surfacing it in results, but nobody wants to click — usually a title-and-description problem. Rewrite the title tag and meta description first, then watch it.

Watch out for one trap: the Pages tab in GSC shows at most 1,000 rows by default. On a large site, use the Page filter to split by directory (e.g. `/blog/`) and export in batches, so you don't miss the long tail.

## Stop 2: the Page Indexing report — the pages Google has already voted on

In the left-hand menu click **Indexing → Pages** (the Page indexing report) and scroll down to the "Why pages aren't indexed" list. Focus on two statuses:

| Report status | What Google means | What it means for you |
|---|---|---|
| **Crawled - currently not indexed** | I crawled it, read it, and decided not to index it | A quality verdict: the content isn't worth indexing — the clearest debt signal there is |
| **Discovered - currently not indexed** | I know this page exists, but I'm in no hurry to crawl it | Crawl priority too low — a site-wide quality or internal-linking problem |

How to work it: click into each status to see a sample list of URLs (also exportable). Cross-reference these two lists against the zero-click list from Stop 1 — **the pages that appear in both "zero clicks" and "Crawled - currently not indexed" are the core debt to fix first.**

If "Discovered - currently not indexed" makes up a large share (say, more than 30% of your indexed pages), the problem usually isn't any single page but the whole site: crawl budget is being wasted, or your internal-linking structure is telling Google these pages don't matter. That's when you go back and look at how crawl budget works.

## Stop 3: the URL Inspection tool — diagnose page by page

For the priority pages the first two stops surfaced (start with 30), use **URL Inspection** at the very top: paste each URL in one at a time and confirm three things:

1. **"URL is on Google" vs. "not on Google"** — verify the indexing status matches the reports.
2. **Crawl date** — when was it last crawled? A few months ago? The longer it's gone uncrawled, the less Google cares about this page.
3. **Referring page** — where did Google discover this page from? If the source is a weird parameter URL or tag page, your internal-linking structure is manufacturing junk paths.

## The action table after merging all three sources

Consolidate the three sources into one decision table:

- Zero clicks + indexed + topic matters → **add real substance** (real examples, price ranges, spec limits).
- Zero clicks + Crawled - currently not indexed + topic duplicates another page → **merge + 301**.
- Zero clicks + no backlinks + nobody searches the topic at all → **remove**.

The point of the three-way choice is to stop treating every page the same: merge the redundant, add substance to the salvageable, remove the pointless.

## How often should you run it?

**Once a quarter.** Turn the flow above into a fixed quarterly ritual: export → classify → handle 30 pages → log it. After 3–4 quarters in a row, most sites see their "Crawled - currently not indexed" count drop noticeably, and new articles get indexed faster too.

## Frequently asked questions (FAQ)

**Q1: Will "Crawled - currently not indexed" pages fix themselves?**
A few will (Google occasionally re-evaluates), but waiting is not a strategy. This status is essentially a quality verdict — leave the content untouched and it will most likely just sit there.

**Q2: My GSC numbers don't match GA4's traffic — which do I trust?**
For finding content debt, trust GSC. GA4 counts sessions from every channel; GSC is the first-party record of organic search clicks. The two define things differently, so the numbers were never going to line up.

**Q3: A new article shows up under "Discovered - currently not indexed" two weeks after publishing — is that debt?**
No, that's common on a new site. Give it 4–8 weeks, and meanwhile add internal links from high-authority pages (homepage, pillar pages) to raise its crawl priority.

**Q4: Can I just noindex all the zero-click pages?**
A blanket noindex isn't advisable. It only hides the pages — it doesn't reclaim their internal-link equity, and it doesn't solve the content-quality problem. The three-way choice (merge / remove / add substance) is the real fix.

---

GeoSeoToday's content-audit process starts from exactly these three GSC reports. Once you've filtered for the pages worth keeping, run them through the [GEO readiness checker](/en/geo/) to see whether they're good enough to be cited by AI. For more on the article-shaped shells this surfaces, read [How to Stop AI Bulk Content From Becoming Content Debt](/en/blog/ai-bulk-content-debt/), or browse the full [blog](/en/blog/).
