---
title: "7 hreflang Mistakes That Cause Duplicate-Language Self-Cannibalization"
description: "Broken hreflang is the number-one cause of self-cannibalization between near-identical language versions. Here are the 7 most common mistakes—missing return tags, no self-reference, wrong language codes, pointing at redirects—with correct code and how to verify in GSC."
target_keyword: hreflang mistakes
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-23
date_updated: 2026-07-23
translations:
  zh-hant: hreflang-mistakes
  zh-hans: hreflang-mistakes
---
# 7 hreflang Mistakes That Cause Duplicate-Language Self-Cannibalization

**Broken hreflang is the number-one cause of "self-cannibalization" on sites with near-identical language versions: when your annotations are missing a return tag, missing a self-reference, or use the wrong language code, Google ignores the entire tag set and treats your two versions as competing duplicate content—so both rankings sink together.** Here are the 7 most common mistakes and how to fix each one.

## Why are near-identical language pairs so vulnerable?

To an algorithm, Traditional and Simplified Chinese pages look almost the same—often the only difference is the glyphs and a handful of word choices. For an obviously different pair like English versus French, Google can still tell the two apart with its own language detection even when hreflang breaks. But for a near-twin pair like Traditional versus Simplified Chinese, once hreflang fails, Google will almost certainly confuse the two. That's why—ever since hreflang launched in 2011—near-identical language sites suffer the worst consequences when it goes wrong: **for the same keyword, the two versions take turns appearing, steal each other's clicks, and in the end neither one gets off the ground.**

## The 7 most common hreflang mistakes

### Mistake 1: missing the return tag

hreflang is a "two-way contract": if page A points to page B, page B must point back to page A. The moment either direction is missing, **Google ignores the entire tag set outright.** This is the most common and most fatal mistake—it usually happens when you edit one language template and forget to sync the others.

### Mistake 2: missing the self-reference

Every page's hreflang list must include *itself*. The correct three-language + x-default setup means all four lines must appear in full on **every** language version:

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/pricing/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/pricing/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/pricing/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/pricing/" />
```

### Mistake 3: the wrong language code

hreflang uses an ISO 639-1 language code plus an ISO 15924 script code or ISO 3166-1 region code. The common wrong forms:

| Wrong form | The problem | Correct form |
|---|---|---|
| `zh-tw` (fine as a language on its own, but…) | Too narrow when you want to cover Traditional-Chinese users worldwide | `zh-Hant` |
| `tw`, `cn` | These are region codes; they can't stand alone as a language code | `zh-Hant`, `zh-Hans` |
| `zh-Hant-TW` with no matching content | You tagged a regional variant but the content is actually identical | Collapse back to `zh-Hant` |
| `en-UK` | The correct region code for the UK is GB | `en-GB` |

### Mistake 4: pointing at a redirect, 404, or noindex page

The URL a hreflang points to must be the **final, directly indexable address.** Pointing it at a 301 redirect hop, a 404, or a page carrying noindex voids that annotation. These errors show up in bulk after a site move or a URL-structure change.

### Mistake 5: canonical fighting hreflang

Each language version's canonical must point to itself. If the Simplified page's canonical points to the Traditional page, you're telling Google "index the Simplified version" with one hand and "treat the Traditional version as authoritative" with the other—contradictory signals that usually end with the Simplified version disappearing.

### Mistake 6: implementing it on only some pages

Only the homepage has hreflang while every inner page runs bare—that's the reality on plenty of sites. And self-cannibalization happens most often on exactly those long-tail inner pages. hreflang must be implemented on **every single page that has a multilingual counterpart.**

### Mistake 7: HTML and sitemap annotations that contradict each other

Pick one placement method. If the HTML head says one thing and the sitemap says another and the two don't match, Google's behavior after receiving contradictory signals is unpredictable.

## How do you tell whether you've been hit?

1. **Split-check the GSC performance report:** filter by "Page" for `/zh-hant/` and `/zh-hans/` separately, then compare the impression countries for each. If the Simplified page is pulling heavy impressions in Taiwan, hreflang has almost certainly failed.
2. **Ranking swap on the same keyword:** while tracking a primary keyword, if you see the two URLs take turns rising and falling, that's a textbook cannibalization symptom.
3. **Spot-check the source:** pull 5 random pages and check line by line for "all languages + self-reference + x-default, consistent in both directions."

## FAQ

**Q1: After I fix an hreflang error, how long until it takes effect?**
It depends on re-crawl speed—generally a gradual recovery over 2–6 weeks. After the fix, you can request indexing for your primary pages in GSC to speed the re-crawl.

**Q2: Is Traditional/Simplified cannibalization always hreflang's fault?**
Not always, but it's the prime suspect. The next-most-likely causes include a misconfigured canonical, a Simplified version that's just a raw machine conversion (content too similar), and both versions sharing one identical title. When you troubleshoot, verify hreflang first, then look at canonical and content differentiation.

**Q3: Can I apply hreflang to only my important pages?**
Technically yes, but cannibalization happens most on the long-tail pages you aren't watching. The advice is to output it automatically at the template layer and cover the whole site in one pass—which actually costs the least.

**Q4: Google removed the International Targeting report from GSC—where can I verify now?**
GSC's International Targeting report was phased out after 2022. Today you mainly rely on the country × page cross-analysis in the performance report, paired with a third-party crawler (such as Screaming Frog's hreflang check) for a full-site scan.

---

Rather than hand-checking those four lines every time, let a tool do it: GeoSeoToday's [hreflang generator and GEO checker](/en/geo/) auto-fills the full language list, the self-reference, and x-default, so the missing-return-tag problem never happens. If your hreflang is clean but the two versions still cannibalize, the culprit is usually near-identical content—see [7 Common GEO Mistakes That Keep AI From Ever Citing You](/en/blog/geo-common-mistakes/) for the differentiation fixes.
