---
title: "Google 2026 Algorithm Updates Timeline: Core and Spam Updates Mapped to Your Traffic Curve"
description: "Dates and durations of Google's core, spam and Discover updates from December 2025 to November 2026, taken from the Search Status Dashboard, plus a 4-step method to overlay your Search Console data."
target_keyword: Google 2026 core update spam update timeline
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-11-24
date_updated: 2026-11-24
enhanced: true
translations:
  zh-hant: google-2026-algorithm-updates-timeline
  zh-hans: google-2026-algorithm-updates-timeline
---
# Google 2026 Algorithm Updates Timeline: Core and Spam Updates Mapped to Your Traffic Curve

**According to Google's Search Status Dashboard, between December 11, 2025 and November 10, 2026 there were 4 core updates (including the November one still in progress), 4 spam updates and 1 Discover update.** To tell whether a traffic change was caused by one, overlay your Search Console date curve on these windows and check which kind of page was hit.

## The 2026 update timeline

Source: the [Google Search Status Dashboard](https://status.search.google.com/summary). It lists a start date and a duration; end dates below are our own calculation from the duration, accurate to the day only. We add rows as updates land.

| Update | Type | Start | Duration (dashboard) | Calculated end |
|---|---|---|---|---|
| December 2025 core update | Core | 2025-12-11 | 18 days 2 hours | ~2025-12-29 |
| February 2026 Discover update | Discover | 2026-02-05 | 21 days 17 hours | ~Feb 26-27 |
| March 2026 spam update | Spam | 2026-03-24 | 19 hours 30 minutes | ~Mar 24-25 |
| March 2026 core update | Core | 2026-03-27 | 12 days 4 hours | ~Apr 8 |
| May 2026 core update | Core | 2026-05-21 | 11 days 21 hours | ~Jun 1-2 |
| June 2026 spam update | Spam | 2026-06-24 | 2 days 1 hour | ~Jun 26 |
| August 2026 spam update | Spam | 2026-08-18 | 2 days 16 hours | ~Aug 20-21 |
| September 2026 spam update | Spam | 2026-09-24 | 13 days 16 hours | ~Oct 7-8 |
| November 2026 core update | Core | 2026-11-10 | Not stated (in progress) | Unknown |

In the same period, the [Google Search updates log](https://developers.google.com/search/updates) also records a new "back button hijacking" section in the spam policies (April 2026) and a May 15 clarification that the spam policies apply to generative AI responses in Google Search. Those are policy text changes, not algorithm rollout dates.

## Core vs. spam updates

- **Core updates** are adjustments to the overall ranking systems. The three finished core updates above ran 11 to 18 days on the dashboard, with larger ranking swings in between, so wait until one ends before judging it.
- **Spam updates** target practices that break the [spam policies](https://developers.google.com/search/docs/essentials/spam-policies), such as many pages generated mainly to manipulate rankings. The policy page says violating sites "may rank lower in results or not appear in results at all."
- The policy page also says detection uses automated systems plus human review that can lead to a manual action. Those are separate paths; only manual actions show in the Manual actions report in Search Console.

## Four steps: overlay your curve on the windows

1. **Export the date curve.** In the Search Console performance report choose the last 16 months and export clicks and impressions by date.
2. **Mark the windows.** Add a column in a spreadsheet and color each update's start-to-calculated-end range from the table.
3. **Compare 14 days before and after.** Calculate average daily impressions for the 14 days before an update and the 14 days after it ends. Numbers during the rollout swing too much to conclude from.
4. **Break it down by page and query.** Group the affected pages by type (tutorials, listicles, comparisons, bulk AI-assisted posts). If the drop clusters in one type, a quality signal is plausible; if the whole site moves together, check technical issues and indexing first.

## Common misreads and limits

- **Correlation is not causation.** Redesigns, seasonality and indexing changes affect the same curve. Overlap in time is a lead, not proof.
- **Windows overlap or sit close together.** The March 24 spam update and the March 27 core update are three days apart, which is hard to separate on a chart.
- **Unannounced tweaks will not appear.** The dashboard lists events Google confirms; small ranking adjustments are not included.
- If you suspect content debt, read [what content debt is](/en/blog/what-is-content-debt/) and [AI bulk content debt](/en/blog/ai-bulk-content-debt/).

## Sources

1. [Google Search Status Dashboard](https://status.search.google.com/summary) (checked 2026-11-14)
2. [Google Search Central updates log](https://developers.google.com/search/updates)
3. [Spam policies, Google Search Central](https://developers.google.com/search/docs/essentials/spam-policies)

## FAQ

**Q1: Which hurts more, a core update or a spam update?**
There is no fixed answer. Core updates are broad and run longer; spam updates target violating practices, so a site without those practices is usually less affected. Your own curve is the real evidence.

**Q2: Do rankings recover automatically after an update ends?**
Not guaranteed. An update re-evaluates content; if a drop came from quality problems, you need to improve the content rather than wait.

**Q3: Can I treat the dashboard dates as exact end dates?**
No. The dashboard gives a start date and a duration. The end dates in this article are calculated and accurate to the day only.

**Q4: My traffic dropped near an update date. Was it the update?**
Not necessarily. Rule out redesigns, indexing changes and seasonality first, then check whether the drop is concentrated in one kind of page.

---

For a fuller approach to indexing and content quality, see the [GEO hub](/en/geo/), and read [common AI content mistakes: article-shaped shells](/en/blog/ai-content-shell-mistakes/) and the newly published [Search Console generative AI report guide](/en/blog/search-console-generative-ai-report/).
