---
title: "Thin Content Pruning: The Decision Tree for Delete, Merge, or Expand"
description: Thin content drags down your whole site's quality signal. This guide gives a decision tree across three axes — traffic, index status, and intent overlap — to route every thin page to delete, merge, or expand.
target_keyword: thin content
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-08-12
date_updated: 2026-08-12
translations:
  zh-hant: thin-content-pruning
  zh-hans: thin-content-pruning
---
# Thin Content Pruning: The Decision Tree for Delete, Merge, or Expand

**Thin content isn't about word count — it's about failing to satisfy search intent. Deciding whether a page should be deleted, merged, or expanded shouldn't be a gut call; cross-reference traffic, index status, and intent overlap, then route each page down one of three clear paths.** This guide gives you that decision tree.

## Why "thin" isn't a word-count problem

Most people assume thin content means "under 300 words," so they pad pages with filler to hit a count — and end up with something worse: word count met, information density still zero. Google's Helpful Content guidance is explicit: the test is whether a page gives a unique, useful answer to a real query, not whether it clears a length threshold. A 1,500-word article that's mostly synonym-swapping is just as thin as a 200-word page with no concrete specifics.

In practice, thin content usually looks like:

- A headline that promises a specific answer, but the body stays vague — no numbers, no examples
- Multiple articles circling the same keyword with over 70% content overlap
- Product or service pages that just copy vendor copy, with no original point of view or use case
- Old articles referencing pricing, versions, or events that expired long ago but are still indexed

## The three-axis decision tree: traffic × index status × intent overlap

The most common mistake in thin-content pruning is judging on a single metric. Traffic alone risks deleting a page that still has search demand but is poorly written; word count alone risks keeping padded shells. Cross-referencing three axes routes each page to the correct path.

**Axis 1: Traffic (organic clicks, trailing 90 days)**
Pull the "Pages" view in GSC Performance, sorted by clicks. Zero clicks with low impressions (e.g., under 30) is your first suspect list. Impressions with zero clicks means Google recognizes the topic but the page itself isn't earning the click — a lighter-weight problem.

**Axis 2: Index status**
Cross-check the Indexing → Pages report. Pages showing "Crawled - currently not indexed" or "Discovered - currently not indexed" mean Google has already told you, explicitly, that it doesn't consider the page worth keeping. These should be prioritized even if they still have some traffic.

**Axis 3: Intent overlap**
Use a site: search plus your keyword map to check whether another article already covers the same intent — and ranks better. High overlap means keeping both pages just causes keyword cannibalization; it doesn't make the site stronger overall.

Cross-referencing the three axes into a routing table:

| Traffic | Index status | Intent overlap | Path |
|---|---|---|---|
| 0 clicks, low impressions | Indexed or not | Stronger article on same topic exists | **Merge**: 301 redirect to the stronger page |
| 0 clicks, low impressions | Not indexed | No other article covers this topic | **Delete**: no real search demand for this topic |
| Impressions, 0 clicks | Indexed | No overlap | **Expand**: valid topic, thin execution — add specifics and data |
| Declining clicks | Indexed | Clearly outdated (price/version/event) | **Expand**: refresh outdated facts, bump date_updated |
| 0 clicks, low impressions | Not indexed | Fully orphaned, no internal links point to it | **Delete**: orphan page, remove outright |

## The three paths in practice

**Path 1: Delete**
Pages with no real search demand and no internal links pointing to them should come down. Return a 410 (more explicit than 404 — it tells Google "permanently gone") and clean up every internal link and sitemap entry pointing to it, so you don't leave dead links behind.

**Path 2: Merge**
When a topic has value but overlaps with another article, or is too thin to stand alone, fold the useful parts into the better-ranking, more complete page. 301-redirect the old URL and repoint every internal link to the merged target. Consolidating ranking signals onto one URL usually outperforms two pages cannibalizing each other.

**Path 3: Expand**
The right topic and the right intent, just hollow execution — this is the only case that shouldn't be deleted. Expanding means adding concrete specs, real examples, pricing ranges, and the follow-up questions readers actually ask — not padding with synonyms. Once expanded, update date_updated so Google and AI engines re-evaluate the page's freshness.

## Execution order: route first, then act

1. Export click, impression, and index-status data for every page from GSC.
2. Using the decision tree above, tag each page as delete, merge, or expand.
3. Handle deletions first — lowest risk, fastest to execute — in a batch pass so you don't miss link cleanup working page by page.
4. Handle merges next, confirming every 301 redirect and internal link is repointed.
5. Handle expansions last, since they take the most time; prioritize pages with high impressions but zero clicks.
6. After each batch, watch indexing and ranking for 2-4 weeks before starting the next.

## FAQ

**Q1: Is there a word-count threshold that makes content thin?**
No fixed threshold. The test is whether the page satisfies search intent, not length — a 200-word page with complete information isn't thin, and a 1,500-word page that's vague and repetitive still is.

**Q2: What happens if I pick the wrong path — merge vs. delete?**
Merging the wrong page (forcing an unwanted topic into a strong page) dilutes that page's relevance. Deleting the wrong page (one that still has search demand) costs you traffic outright. That's exactly why the decision needs three axes, not one metric.

**Q3: How long until expanded pages show ranking movement?**
Usually 2-4 weeks for Google to recrawl and re-evaluate. If rankings don't improve after expansion, the issue likely isn't content depth — it's a misjudged search intent for that topic.

**Q4: How often should thin-content pruning run?**
Quarterly is a reasonable cadence, paired with a content-debt audit, so thin pages don't accumulate back to the point of needing another large-scale pruning pass.

---

Thin content pruning is a core part of GeoSeoToday's on-page health checks — see the [complete on-page and technical SEO guide](/en/blog/onpage-technical-seo-guide/) for the full methodology. To check whether your own articles clear the bar worth keeping, run them through the [GEO readiness checker](/en/geo/).
