---
title: "Crawled - Currently Not Indexed: A Diagnostic Decision Tree"
description: "Crawled - currently not indexed is not a penalty. Using Google's own documentation, this guide separates the two not-indexed statuses and gives a wait / merge / improve / noindex decision tree with a five-signal triage table."
target_keyword: crawled currently not indexed fix
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-11-13
date_updated: 2026-11-13
enhanced: true
translations:
  zh-hant: crawled-currently-not-indexed-fix
  zh-hans: crawled-currently-not-indexed-fix
---
# Crawled - Currently Not Indexed: A Diagnostic Decision Tree

**"Crawled - currently not indexed" means Google has read the page but, for now, chose not to index it. It is not a manual action, and you do not need to resubmit the URL.** The right move is to sort each page into wait, merge, improve, or noindex, then handle it accordingly, rather than hammering "Request indexing."

## Two statuses that look alike

[Google's Page Indexing report documentation](https://support.google.com/webmasters/answer/7440203) defines them differently, and they call for different responses:

| Status | What Google says (summarized) | Likely cause | First step |
|---|---|---|---|
| **Crawled - currently not indexed** | Google crawled the page but did not index it; it may or may not be indexed later, and there is no need to resubmit | Overlap with existing pages, thin value, or weak on-site signals (this is our inference from the definition; Google does not explain the reason page by page) | Work through the decision tree below |
| **Discovered - currently not indexed** | Google knows the URL but has not crawled it yet, typically to avoid overloading the site | Crawl scheduling, site size, too few internal links | Confirm it is in the sitemap and linked internally, then wait |

The same document says that after a URL is known it can take up to a few weeks before Google crawls it, that new content typically takes a few days to a week, and that validating a fix typically takes up to about two weeks, sometimes longer. Those are Google's time scales, not guarantees.

## A first-hand note: our own site has the same problem

At the time of writing (early November 2026), GeoSeoToday's own Search Console shows **42 pages as "Crawled - currently not indexed," 108 as "Discovered - currently not indexed," and 341 indexed**. That is 150 pages across the two not-indexed statuses, which is not a small number. We are working through the decision tree below page by page; results will only show once Google recrawls, so this article does not claim any outcome in advance.

## The decision tree: wait, merge, improve, or noindex

Answer in order and stop at the first "yes":

1. **Should this page be in search results at all?** (filter pages, internal search results, tag archives, thank-you pages) → Add `noindex` or remove it. For these, not indexed is the correct state.
2. **Is it brand new or just revamped, and the status is Discovered?** → Wait. Based on Google's time scales, give it roughly 2-4 weeks (that ceiling is our own rule of thumb, not a Google rule) while you confirm it is in the sitemap and internally linked.
3. **Does another page on your site already answer the same search intent?** → Merge: combine the best of both into one page and 301 the old URL to it.
4. **Is the topic distinct but two or more of the five signals below fail?** → Improve: add first-hand data, examples and tables plus internal links, then request a recrawl in the URL Inspection tool.
5. **None of the above, and the page adds nothing for readers?** → Delete it, or noindex it and keep it for on-site navigation only.

| Action | Trigger | What to do | Re-check |
|---|---|---|---|
| Wait | Discovered, page younger than about 4 weeks | Confirm sitemap and internal links | After 2-4 weeks |
| Merge | Intent overlaps an existing page | Fold into the stronger page and 301 | Within 2 weeks of recrawl |
| Improve | Distinct topic, thin content | Add original data, examples, internal links | 4 weeks after the update |
| Noindex / delete | Should not be indexed, or no reader value | Add `noindex` or remove | Next quarterly audit |

## The five-signal triage table

This table is our own triage heuristic for deciding whether "improve" is worth the effort. Google has not published thresholds for these five signals.

| Signal | How to check | If it fails |
|---|---|---|
| Distinct intent | Search the target keyword; is your page just a rewrite of the top ten? | Merge or change the angle |
| First-hand information | Does the page contain data, tests or cases only you can provide? | Add real material |
| Depth | Does it answer the sub-questions, or only define and list? | Expand or merge |
| Internal links | How many related pages link to it, and how many clicks from the homepage? | Add links, see [Internal Linking Strategy](/en/blog/internal-linking-strategy/) |
| Technical consistency | Do canonical tags, duplicate URLs and the sitemap contradict each other? | See [Canonical Tag Mistakes](/en/blog/canonical-tag-mistakes/) |

## Why mass-producing pages is the direction to avoid

Google's [guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) says that generating many pages without adding value may violate its spam policy. The [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) define scaled content abuse as many pages generated for the primary purpose of manipulating rankings rather than helping users, and list examples such as using generative AI to produce many pages without adding value, or stitching together content from other pages. That does not mean your unindexed pages are violations. But if most of your unindexed pages look like the same template, ask why a reader would want each one before you polish it.

## Limits and tradeoffs

- Google will not tell you why a specific page is not indexed; this tree is a diagnosis from official definitions plus experience, not a guarantee.
- Indexed is not ranked; an improved page can still sit deep in the results.
- Some pages stay unindexed even when handled well; merging or noindex often beats holding on.
- Blanket noindex does not reclaim internal-link equity and does not fix quality problems.

## Sources

- [Page indexing report, Search Console Help](https://support.google.com/webmasters/answer/7440203)
- [Google Search's guidance on using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Spam policies for Google web search (scaled content abuse)](https://developers.google.com/search/docs/essentials/spam-policies)

## FAQ

**Q1: How long until a "Crawled - currently not indexed" page indexes by itself?**
Google gives no single number. It only says new content typically starts being processed within days to a week, a known URL can take up to a few weeks to be crawled, and validation takes about two weeks. If nothing moves after four weeks, stop waiting passively.

**Q2: Does repeatedly clicking "Request indexing" help?**
For the Crawled status, Google says there is no need to resubmit the URL. Submitting only requests a recrawl; it does not change Google's view of the content's value. Changing the content or merging it is what helps.

**Q3: Which is worse, "Crawled" or "Discovered"?**
They are different problems. Crawled means Google looked and passed, which usually needs a content fix; Discovered means Google has not looked yet, which is usually crawl scheduling and internal links. Crawled pages typically need more page-by-page work.

**Q4: What happens to the old URL after a merge?**
301-redirect the merged URL to the surviving page, then update the sitemap and internal links so nothing still points at the old address. The full process is in [Thin Content Pruning](/en/blog/thin-content-pruning/).

---

GeoSeoToday's workflow is to first [find content debt in three Search Console reports](/en/blog/gsc-content-debt/), then triage each page with this tree. Once you know which pages to keep, run them through the [GEO readiness checker](/en/geo/) to see whether they are citable by AI, and read [Zero-Click Pages: Merge, Delete, or Add Substance?](/en/blog/zero-click-pages/) for the companion flow.
