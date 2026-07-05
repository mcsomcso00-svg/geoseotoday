---
title: "Which Language Should x-default Point To?"
description: x-default is hreflang's fallback exit — when a user's language matches none of your tagged versions, Google serves whatever x-default points to. This guide walks through the three targeting strategies — the English version, a language-selector page, or your primary-market version — and when each one fits.
target_keyword: x-default
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-24
date_updated: 2026-07-24
translations:
  zh-hant: x-default-guide
  zh-hans: x-default-guide
---
# Which Language Should x-default Point To?

**x-default should point to the version you most want a user to land on when they belong to none of your tagged languages — most international sites point it at the English version, sites with a language-selector page point it at the selector, and sites serving only a Chinese-speaking market can point it at their main Traditional or Simplified version.** There's no single right answer, but there is a clear decision logic.

## What is x-default?

x-default is a special hreflang value Google introduced in April 2013. Its job is to name a fallback page: when a searcher's language or region matches none of the versions you've tagged — say a German speaker finds your three-language site — Google serves whatever URL x-default points to. Think of it as the `default:` branch in a switch statement.

In markup it looks like this (note that x-default is not a language code, and a single set of tags can only carry one of it):

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/schema-guide/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/schema-guide/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/schema-guide/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/schema-guide/" />
```

## Comparing the three targeting strategies

| Strategy | x-default points to | Who it suits | Risk |
|---|---|---|---|
| International lingua franca | The English page | Has an English version, targets include international markets | Almost none — the most common choice |
| Language-selector page | The `/` language-entry page | More than 3–4 languages, no clear dominant market | The selector page itself is thin content — avoid letting it become an empty shell |
| Primary-market version | The Traditional (or Simplified) Chinese page | Serves only a Chinese-speaking market, no English version | Poor experience for non-Chinese users, but they were never the target audience anyway |

## The decision flow: three questions

1. **Do you have an English version?** Yes → point x-default at English, done. It's the answer least likely to go wrong for "everyone else," and it's the standard move for most three-language sites (Traditional / Simplified / English).
2. **No English version, but you have a language-selector page?** Yes → point it at the selector. Just make sure the selector page is indexable and isn't a pure-JavaScript redirect.
3. **Neither?** Point it at your primary language version. For a Traditional-plus-Simplified-only site, aim x-default at the Traditional version — this beats leaving it unset, because it also removes the ambiguity of "which version is the default."

## Common x-default mistakes

- **Forgetting to set it.** x-default isn't mandatory, but without it Google has to guess when facing a user in an untagged language — and a Traditional/Simplified site can get guessed wrong.
- **Setting more than one x-default.** A single set of hreflang tags can carry only one x-default; two or more scrambles the whole set of signals.
- **Pointing it at a URL that auto-redirects.** Some sites' root URL auto-302s to a language version based on IP. Aiming x-default at that kind of URL is aiming at a spot where Google can't crawl stable content.
- **Setting it only on the homepage.** Like every other hreflang tag, x-default should be emitted on **every page that has multilingual versions**, pointing to that page's corresponding default version — not with the whole site pointing back at the homepage.

## FAQ

**Q1: Is x-default required? What happens if I skip it?**
It's not required — hreflang works without an x-default. But skipping it hands "which version does an uncovered-language user see" over to Google's guess. Adding one line costs almost nothing, so it's worth setting every time.

**Q2: Can x-default and a specific language version point to the same URL?**
Yes, and it's the most common setup — for example `hreflang="en"` and `hreflang="x-default"` both pointing at the English URL. The two lines coexisting is completely valid.

**Q3: A Chinese-only site with no English version — should x-default point to Traditional or Simplified?**
Point it at your primary-market version. If Taiwan is the main market, point to Traditional; if overseas Simplified readers are the bigger share, point to Simplified. Decide by which language folder's impressions and conversions matter more in Google Search Console.

**Q4: Does x-default affect rankings?**
Not directly. Like the rest of hreflang, it's a routing signal that decides "who sees which version" — it doesn't change the page's own ability to rank.

---

x-default is only one line, but every page has to emit it alongside the full hreflang set — GeoSeoToday's [hreflang generator and GEO checker](/en/geo/) attaches the correct x-default automatically when it builds the tags, so you never have to judge the format by hand. For the wider picture of getting AI to cite you across languages, see [Multilingual GEO: Getting AI to Cite You in Every Language](/en/blog/multilingual-geo/).
