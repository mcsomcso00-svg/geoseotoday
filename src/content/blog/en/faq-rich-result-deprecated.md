---
title: "FAQ Rich Results Retired in May 2026: Should You Keep FAQPage Schema?"
description: "Google stopped showing FAQ rich results on May 7, 2026. Here is a decision table for keeping, dropping or converting FAQPage markup by page type, plus the full timeline and a four-step check."
target_keyword: FAQ rich result deprecated
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-11-17
date_updated: 2026-11-17
enhanced: true
translations:
  zh-hant: faq-rich-result-deprecated
  zh-hans: faq-rich-result-deprecated
---
# FAQ Rich Results Retired in May 2026: Should You Keep FAQPage Schema?

**Google stopped showing FAQ rich results in Search on May 7, 2026, so adding FAQPage markup no longer earns an expandable Q&A in the results.** Visible Q&A sections on the page still help, though: they are easy to extract, and Bing recommends them. Existing markup can stay or go; just don't invest new effort in it.

## Timeline: what Google actually did

According to the [Google Search updates log](https://developers.google.com/search/updates):

| Date | Event |
|---|---|
| 2026-05-07 | FAQ rich results stop appearing in Google Search (effective date) |
| 2026-05-08 | Deprecation notice added to the FAQ rich result documentation |
| 2026-06-15 | FAQ documentation removed; the log says the feature is no longer shown in Search results |

The log doesn't say what happens to existing FAQPage markup, and it doesn't mention Search Console reporting. We couldn't confirm either from official pages, so check your own Search Console.

## Keep FAQPage schema or not? A decision table

Google's [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) states: "Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." So FAQPage is not a ticket into AI features. Our recommendations below are our own judgment, not Google rules:

| Page type | Recommendation | Why |
|---|---|---|
| Older articles that already have FAQPage | Keep; no need to purge | Removing it gains nothing and adds change risk |
| New articles | Optional; don't spend time on it | No longer shown in results, not required for AI features |
| Thin pages propped up by an FAQ | Rebuild with real content, not schema tweaks | The problem is content, not markup |
| Support / product page Q&A | Keep the visible Q&A text | Readers and AI can use it directly |
| Markup that doesn't match visible text | Fix or delete it now | Markup should mirror what's on the page |

## Visible Q&A still earns its place

In its [AI Performance announcement](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), Bing advises: "Clear headings, tables, and FAQ sections help surface key information." That is about page structure, not schema. Bing also notes the report shows how often pages are cited, not their ranking or importance. So the sensible stance is: **keep the FAQ text, treat the schema as optional.**

## Our own situation (full disclosure)

On this site, any article whose FAQ follows the `**Q1: question?**` format automatically gets FAQPage markup. With the rich result gone, that auto-markup has zero search-result value today. We keep it because it costs nothing to maintain and the FAQ text still helps readers. That doesn't mean the markup gets us cited by AI; we have no data showing that.

## Four-step check

1. In Search Console, look for FAQ-related reports or warnings and note the current state.
2. Open three representative pages and confirm the FAQ markup matches the visible text.
3. List pages that are "FAQ only, no body copy" for upgrade or merge.
4. For new posts, keep answer-first FAQ text but drop schema work from the schedule.

## Sources

- [Google Search updates log](https://developers.google.com/search/updates)
- [Bing Webmaster: Introducing AI Performance in Bing Webmaster Tools (February 2026)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Google: generative AI search optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## FAQ

**Q1: Could keeping FAQPage schema get me penalized now that rich results are gone?**
We found nothing in official documentation saying so. The updates log only says the feature no longer appears. If the markup matches the visible content, there is no known risk in keeping it.

**Q2: Should new articles still include FAQPage schema?**
It isn't required. Google's guide says generative AI search needs no special schema.org markup. Add it if it's free, but don't spend extra time on it.

**Q3: Should I delete the FAQ section on the page too?**
No. Visible Q&A still helps readers find answers fast, and Bing lists FAQ sections among ways to present information clearly.

**Q4: Will Search Console still show an FAQ report?**
Google's log doesn't say, and we couldn't confirm it. Check your own Search Console account.

---

For what schema really does in GEO, read [Schema Markup for GEO](/en/blog/schema-for-geo/), the [Schema tutorial](/en/blog/schema-tutorial/) and [citation-ready formatting](/en/blog/ai-citation-formatting/), or run your page through the [GEO readiness checker](/en/geo/).
