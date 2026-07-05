---
title: "What Is hreflang? The Must-Have Setup for Multilingual Sites"
description: hreflang is a set of HTML tags that tell Google which language versions of a page exist and which audience each one is for. This guide teaches the correct syntax, three placement methods, and how to verify it, using real zh-Hant / zh-Hans / English examples.
target_keyword: what is hreflang
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-23
date_updated: 2026-07-23
translations:
  zh-hant: what-is-hreflang
  zh-hans: what-is-hreflang
---
# What Is hreflang? The Must-Have Setup for Multilingual Sites

**hreflang is a set of tags placed in your HTML `<head>` or sitemap that tell Google "this page has other language versions, and here's which language or region each one is for."** The moment your site has Traditional Chinese, Simplified Chinese, or English versions running side by side, hreflang becomes mandatory — without it, Google may serve the Simplified page to a Taiwanese user, or let your Traditional and Simplified versions cannibalize each other's rankings.

## What problem does hreflang solve?

Google launched hreflang annotation back in 2011 for a blunt reason: to a search engine, Traditional and Simplified Chinese pages look highly similar in content, and without explicit labeling the algorithm struggles to decide which version belongs in which market. That leads to two common disasters:

1. **Wrong version served**: a Taiwanese user searches and lands on a Simplified page, and bounce rate spikes.
2. **Self-cannibalization**: the Traditional and Simplified versions get treated as duplicate content competing against each other, so neither ranks.

hreflang acts like a "language signpost": it won't lift your rankings directly, but it makes sure **the right language version shows up in the right market**, maximizing the value of the rankings you already have.

## The correct syntax (with code examples)

There are only three core rules: **every page must list all language versions, must include a self-reference, and should add x-default.** Here's an article page on a trilingual site:

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/geo-guide/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/geo-guide/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/geo-guide/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/geo-guide/" />
```

These four lines must **appear on all three versions — Traditional, Simplified, and English — identically, character for character.** A few key points:

- `zh-Hant` / `zh-Hans` are "script" codes, ideal for Traditional/Simplified sites that aren't split by region; only use `zh-TW`, `zh-HK`, or `zh-CN` if you genuinely have region-specific content.
- `x-default` specifies the fallback version for "when no language condition matches," typically pointing to the English page or a language-selection page.
- URLs must be full absolute paths (including `https://`) — relative paths are not allowed.

## Comparing the three placement methods

| Placement method | Best for | Watch out for |
|---|---|---|
| HTML `<head>` tags | Moderate page counts, controllable templates | Each page's head gains N extra lines; maintenance cost grows with page count |
| XML sitemap | Many pages, systems that auto-generate a sitemap | Uses `xhtml:link` annotation; all changes live in one file |
| HTTP header | Non-HTML files such as PDFs | Rarely needed on ordinary websites |

**Pick one method only** — mixing them easily produces contradictory signals. For most sites built on frameworks like Astro or Next.js, the easiest approach is to output the head tags automatically by language from within the layout template.

## The three easiest mistakes to make

1. **Missing return tags**: page A points to page B, but page B doesn't point back to page A, and Google ignores the entire annotation set.
2. **Forgetting the self-reference**: every page must include "itself" in its own hreflang list.
3. **Pointing to a URL in the wrong state**: if the page a hreflang points to is a 404, is noindexed, or goes through a redirect, the annotation is wasted.

hreflang errors are the number-one cause of Traditional/Simplified self-cannibalization. For a full checklist of what goes wrong, see the detailed breakdown of hreflang errors that cause Traditional/Simplified cannibalization.

## How do you verify hreflang is working?

Once set up, don't go by feel — verify with tools:

- **Google Search Console**: check whether each language directory (e.g. `/zh-hant/`, `/zh-hans/`) is splitting impressions correctly across its target market.
- **View page source**: sample 3–5 pages at random and confirm each one outputs the full alternate list.
- **site: spot-check**: search your brand term on Google in the target market and see whether the correct language version is served.

## FAQ

**Q1: Does hreflang directly boost rankings?**
No. hreflang is a "traffic-routing signal," not a "ranking signal." Its value lies in getting the right version in front of the right market and preventing Traditional/Simplified cannibalization — which indirectly protects your click-through rate and ranking performance.

**Q2: If I only have Traditional Chinese and English, do I still need hreflang?**
Yes. Any time the same content exists in two or more language versions, annotation is recommended. Especially if you might add Simplified Chinese later, getting the architecture right now saves a huge amount of rework.

**Q3: Should hreflang use zh-TW or zh-Hant?**
If your content targets "all Traditional Chinese readers" (Taiwan + Hong Kong + overseas), `zh-Hant` is more precise; only when you've prepared different content for Taiwan and Hong Kong do you need to split into `zh-TW` and `zh-HK`.

**Q4: Do hreflang and canonical conflict?**
No, but they have to align correctly: each language version's canonical should point to "itself," not to another language version. If your Simplified page's canonical points to the Traditional page, you're telling Google not to index the Simplified page at all.

---

hreflang tags are easy to get wrong by hand. GeoSeoToday baked the "all languages + self-reference + x-default" rules into a free [hreflang generator and GEO checker](/en/geo/) — paste a URL and it outputs the correct tags in one click. To understand multilingual site planning at the architecture level, see how the same content is handled across languages in [multilingual GEO](/en/blog/multilingual-geo/).
