---
title: "How to Read the Search Console Generative AI Report: The First Official Impression Data for AI Overviews and AI Mode"
description: "Google's June 2026 Search Console generative AI report finally gives official impression data for AI Overviews and AI Mode. Here is each field, what it cannot tell you, and a 30-day reading routine."
target_keyword: Search Console generative AI performance report
intent: informational
cluster: GEO
author: GeoSeoToday
date_published: 2026-11-20
date_updated: 2026-11-20
enhanced: true
translations:
  zh-hant: search-console-generative-ai-report
  zh-hans: search-console-generative-ai-report
---
# How to Read the Search Console Generative AI Report: The First Official Impression Data for AI Overviews and AI Mode

**On June 3, 2026, Google launched a generative AI performance report in Search Console that shows how often your URLs appeared in AI Overviews and AI Mode, as impressions. As of August 31, 2026 it is available to all sites worldwide.** It has no clicks yet, so use it for trends and page patterns, not for ROI math.

## What the report actually is

According to the [Google Search Central blog (June 3, 2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), it is a separate view from the regular performance report, split into Search and Discover. It records how often your URLs appeared in AI Overviews, AI Mode and generative AI features in Discover. The post first described a rollout to a subset of sites; a note on the page says that as of August 31, 2026 it has rolled out to all websites worldwide.

## Field-by-field guide

| Dimension / metric | What Google says | What you can do with it |
|---|---|---|
| Impressions (the only metric) | How often your URLs appeared in generative AI features | Track trends, compare periods |
| Pages | Which URLs appeared in AI features | See which content types AI surfaces most |
| Countries | Visibility by country | Check that your target market shows up |
| Devices | Search report only | Compare mobile and desktop; the Discover report has no device dimension |
| Dates | Hourly, daily, weekly and monthly granularity | Line up publishing, redesigns and algorithm updates |

## What it cannot tell you

- **No clicks.** Impressions are the only metric listed, and Google says it is "adding additional metrics over time." You cannot yet compute how many visitors AI sent you.
- **An impression is not a read.** It means a URL appeared in an AI feature, not that anyone clicked or that the answer used your point of view.
- **No query data.** The report does not expose the sub-queries the AI ran, so it is not a keyword report.
- **It coexists with the regular report.** [Google's AI features documentation](https://developers.google.com/search/docs/appearance/ai-features) says AI feature traffic is counted in the Performance report under the "Web" search type; the new report is a separate view focused on AI visibility. Do not add the two together.

## A 30-day reading routine

1. **Day 1: save a baseline.** Export the previous 28 days of impressions at daily granularity and note your last redesign and publish dates.
2. **Week 1: look at pages.** List the top 10 pages by impressions and tag each by type (tutorial, comparison, definition, case study).
3. **Week 2: compare with the regular report.** Put the same pages' Web search clicks and impressions side by side and find pages with high AI impressions but low clicks.
4. **Week 3: check countries and devices.** Confirm impressions come from your target markets, not unexpected regions.
5. **Week 4: write a conclusion and a hypothesis.** For example, "after adding first-hand data, do these 3 pages gain AI impressions?" Re-check next month.

## Limits and tradeoffs

This is Google-only data and says nothing about ChatGPT, Perplexity or other engines. [Google's AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) names the report as the way to measure generative AI performance, and warns against third-party tools that claim to use "internal" Google metrics. On a small site, daily or weekly swings may be noise, so read it monthly.

## Sources

1. [New generative AI performance reports in Search Console, Google Search Central blog (June 3, 2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
2. [AI features and your website, Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
3. [Optimizing for generative AI search, Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## FAQ

**Q1: Does the generative AI report include clicks?**
Not today. Google's post lists impressions as the only metric and says more will be added over time. For clicks, use the regular performance report and pair it with analytics such as GA4.

**Q2: Is the report available to every site?**
Google started with a subset of sites, and a note on the page says that as of August 31, 2026 it has rolled out to all websites worldwide. If you still cannot see it, check that your property is verified.

**Q3: Is AI impression data double-counted in the regular report?**
AI feature data is included in the overall performance report under the Web search type, and the new report is a separate view focused on AI visibility. They are two views of the same activity, so do not add them.

**Q4: Do low impressions mean my content is bad?**
Not necessarily. Impressions depend on topic demand, site size and whether pages are indexed. Confirm indexing first, then watch the monthly trend.

---

To place this data in a full GEO measurement workflow, see the [GEO hub](/en/geo/), and read it alongside [GEO tracking](/en/blog/geo-tracking/), [measuring GEO without GSC](/en/blog/measure-geo-without-gsc/) and [Google's AI optimization guide explained](/en/blog/google-ai-optimization-guide-explained/).
