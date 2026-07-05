---
title: How to Track Each Language Folder Separately in GSC
description: On a multilingual site, a "Page" filter plus the language directory prefix lets you split Traditional Chinese, Simplified Chinese, and English performance apart in Google Search Console. This walks through the filter setup, the four language-split reports worth watching, and how a country-by-directory cross-check exposes cross-language cannibalization.
target_keyword: gsc multilingual tracking
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-25
date_updated: 2026-07-25
translations:
  zh-hant: gsc-multilingual-tracking
  zh-hans: gsc-multilingual-tracking
---
# How to Track Each Language Folder Separately in GSC

**In the Performance report of Google Search Console, add a "Page" filter set to the language directory prefix (for example, "URL contains /en/") and you can view impressions, clicks, and rankings for your English, Traditional Chinese, and Simplified Chinese versions completely separately — this is the single most important daily monitoring habit for a subdirectory-based multilingual site.** Look at everything at once and all you get is one blended, un-actionable average.

## Why can't a multilingual site just read the site-wide average?

Say the whole site pulls 100,000 impressions a month at a 2.5% average CTR. That number has zero diagnostic value: the Traditional Chinese version might be crushing it at 4% CTR while the Simplified Chinese version sits at 0.8% and is all but dead — averaged together, it looks "fine." Every language version of a multilingual site is a **separate product line**, each facing a different market and different competitors. You have to split them apart to iterate on each one.

## The basics: three steps to set up a directory filter

1. Open GSC → **Performance** → the **+ New filter** button up top → choose **Page**.
2. Set the condition to **URL contains** and enter `/en/` (or `/zh-hant/`, `/zh-hans/`).
3. Once applied, every query, page, country, and device figure below is now scoped to that one language version.

To save yourself the clicks, bookmark the filtered report URL for each language and do a fixed weekly loop across all three.

## Four language-split reports worth watching

### Report 1: Language × impression trend

Apply each of the three directory filters in turn and compare the impression curve over three months. If one language dips while the others hold flat, the problem lives in that language (its content, its hreflang, or the competition in that market) — not a site-wide technical fault.

### Report 2: Country × directory cross-check — catching cross-language cannibalization

This is the most critical health check for a Chinese-language site running both scripts: filter to `/zh-hans/`, then switch to the **Countries** tab. **If the Simplified Chinese version is picking up meaningful impressions in Taiwan (say, more than 10–15% of that version's impressions), your hreflang routing has broken** and Google is serving Simplified pages to Taiwanese users. Run the reverse check on the Traditional Chinese version in Simplified-Chinese markets the same way.

### Report 3: Language × indexing status

Pair this with one sitemap per language (`sitemap-en.xml`, and so on) and use the **Sitemaps** report to read each language's submitted-vs-indexed counts separately. When one language has a notably low indexing rate, the usual causes, in order, are: content too similar to another language (machine-translated), a canonical pointing at the wrong URL, or too few internal links.

### Report 4: Language × query terms

Filter to `/zh-hans/` and open the **Queries** tab: the terms that surface should be Simplified-Chinese vocabulary (软件, 搜索, 视频). If a Simplified page is earning most of its impressions from Traditional-Chinese queries, that version isn't targeting the keywords of its own market — go back and check the vocabulary localization.

## Going further: regular expressions and property splitting

- **Regex filters**: the Page filter supports regular expressions — for instance, `/(zh-hant|zh-hans)/` to view both Chinese versions at once, or "Doesn't match regex" to exclude a language.
- **Should you create a separate GSC property per language?** Under the same domain property, you can add an extra **URL-prefix** property (such as `https://example.com/en/`). The upside is that indexing and experience reports naturally contain only that language; the cost is maintaining several properties. For small and mid-sized sites, a single property plus filters is usually enough — consider splitting into separate properties once you're past ten thousand pages.

## Frequently asked questions (FAQ)

**Q1: Does this work for a subdomain architecture too?**
Subdomains (tw.example.com) have to be filtered under a domain-level property, or you build a separate property for each subdomain. This is one of the hidden advantages of the subdirectory architecture: a single property plus a directory filter covers every language.

**Q2: How often should I check the language-split data?**
A workable rhythm: sweep all three languages' impression/click trends once a week (5 minutes), run the country × directory cross-check and indexing-rate check once a month (30 minutes), and do a full health check each quarter alongside a content-debt audit.

**Q3: What do I do once I find cross-language cannibalization?**
First, verify hreflang (all languages + self-reference + x-default, consistent in both directions). Second, check that each canonical points to its own URL. Third, confirm the Simplified version has substantive localized differences in its content. Once all three are fixed, watch the routing shift over the next 4–8 weeks.

**Q4: Can I export the GSC data for finer analysis?**
Yes. The interface exports CSV, and the more complete approach is to connect the Search Analytics API or wire up Looker Studio, turning "directory × country × query" into a fixed dashboard that refreshes automatically each month.

---

Language-split tracking only works if the routing itself is correct — get hreflang wrong and the prettiest report in the world is just measuring a mess. Use GeoSeoToday's [hreflang generator and GEO checker](/en/geo/) to get the tags right first, then come back and build your tracking dashboard. Related reading: how to set up one sitemap per language, and how hreflang mistakes cause Traditional-Simplified self-cannibalization; the full methodology lives in the pillar guide to multilingual and international SEO.
