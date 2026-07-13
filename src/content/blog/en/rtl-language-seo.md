---
title: "RTL Language SEO: Technical Checklist for Arabic and Hebrew Sites"
description: RTL sites rarely fail on translation quality — they fail on three technical errors — missing dir attributes, broken font fallback, and missing hreflang codes. Here's the pre-launch checklist.
target_keyword: rtl language seo
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-08-16
date_updated: 2026-08-16
translations:
  zh-hant: rtl-language-seo
  zh-hans: rtl-language-seo
---
# RTL Language SEO: Technical Checklist for Arabic and Hebrew Sites

**When an RTL (right-to-left) site launches and rankings don't move, the cause is almost never content or translation quality — it's three stacked technical errors: `dir="rtl"` set at the wrong DOM level, font fallback breaking on Arabic/Hebrew characters, and hreflang missing the `ar` or `he` language codes.** Any one of these can make Google treat the page as improperly rendered or unmatched to the right language version — crawled fine, but not indexed, or indexed but not ranking.

## Why RTL technical debt hides so well

Copying your LTR (left-to-right) technical checklist — sitemap, canonical, structured data — onto an RTL site isn't enough, because RTL adds a layer where layout direction itself becomes a technical signal:

1. **Visually correct isn't the same as correctly marked up.** Browsers often auto-detect Arabic script and mirror the layout on their own, which makes developers assume skipping the `dir` attribute is harmless. But Google's rendering engine and screen readers rely on the HTML attribute, not visual guesswork.
2. **Font subsetting traps.** Many sites bundle only a Latin character subset in their web fonts. Arabic and Hebrew characters fall back to the system default — sometimes rendering as boxes (tofu) — while the page still looks "populated with content" to a crawler.
3. **hreflang language code confusion.** Arabic has a generic `ar` code plus regional variants like `ar-SA` and `ar-EG`; Hebrew is simply `he` (note the deprecated `iw` code still lingers in old templates). Wrong codes or a missing self-reference can invalidate the entire hreflang cluster.

## Error 1: dir attribute missing or set at the wrong level

`dir="rtl"` belongs on the `<html>` tag, not just on a content `<div>`:

```html
<html lang="ar" dir="rtl">
  <head>...</head>
  <body>
    <!-- Nav, footer, and forms all inherit rtl automatically -->
  </body>
</html>
```

A common mistake is setting `dir="rtl"` only on the article body, leaving the nav menu, breadcrumbs, and form labels stuck in LTR layout — a "content mirrors, interface doesn't" mess. When Arabic text mixes with an English brand name on the same line, override locally with `dir="ltr"` inline, or use `unicode-bidi: isolate` in CSS to stop bidirectional text from scrambling punctuation position.

## Error 2: font fallback breaks on RTL character sets

If your `font-family` fallback list only covers Latin characters, Arabic and Hebrew text falls straight back to the OS default font, with wildly inconsistent rendering across devices:

```css
/* Wrong: Latin-only fallback */
body { font-family: "Helvetica Neue", Arial, sans-serif; }

/* Correct: explicit RTL character-set fonts included */
body {
  font-family: "Helvetica Neue", "Noto Sans Arabic",
               "Noto Sans Hebrew", Arial, sans-serif;
}
```

If you're using Google Fonts or self-hosted web fonts, confirm the font file's `unicode-range` covers Arabic (U+0600–U+06FF) or Hebrew (U+0590–U+05FF). Otherwise the browser silently falls back — visible only in the "computed font" field of dev tools, not in a normal preview.

## Error 3: hreflang missing or using the wrong code

There's nothing special about the hreflang syntax for RTL languages, but because multilingual automation scripts are usually cloned from an LTR-language template, the RTL version often gets left out of the hreflang set entirely:

```html
<link rel="alternate" hreflang="ar" href="https://example.com/ar/product/" />
<link rel="alternate" hreflang="he" href="https://example.com/he/product/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/product/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/product/" />
```

Three recurring mistakes: using the deprecated `iw` code instead of `he`; using `ar-SA` without a generic `ar` fallback, which drops Arabic-speaking users outside Saudi Arabia; and the most basic error — the RTL page itself missing its own self-referencing hreflang line, which invalidates the whole cluster because the mutual references are incomplete.

## Pre-launch RTL technical checklist

| Check item | How to verify | Common failure |
|---|---|---|
| `dir="rtl"` set on `<html>` | View page source, check the `<html>` tag attribute | Set only on a content `<div>`; nav stays unmirrored |
| CSS uses logical properties, not physical | Search CSS for `margin-left` / `padding-right` | Physical direction properties break layout under RTL |
| Font fallback includes Arabic/Hebrew fonts | Check "computed font" in dev tools | Fallback list is Latin-only |
| hreflang includes `ar`/`he` with full self-reference | Audit each page with an hreflang validator | Deprecated `iw` used, or self-reference missing |
| Forms and buttons flip direction with `dir` | Manually test form layout and icon direction | Icons (e.g. arrows) don't mirror direction |
| Numbers and dates keep local LTR direction | Check price and phone number display | Digits get mirrored as a block, reversing order |

Switch to CSS logical properties (`margin-inline-start` instead of `margin-left`) so one stylesheet renders correctly in both LTR and RTL modes — no separate mirrored CSS file to maintain long-term.

## FAQ

**Q1: Does an RTL site need a separate CSS file?**
Not necessarily. Logical properties (`margin-inline-start`, `padding-inline-end`) replace physical ones (`margin-left`, `padding-right`), so a single stylesheet supports both LTR and RTL — you just switch the `dir` attribute. No need to maintain two stylesheets.

**Q2: Should Arabic use `ar` or a regional code like `ar-SA`?**
Use generic `ar` if there's no regional difference in content (currency, regulation, local examples). Only add regional codes like `ar-SA` or `ar-EG` when you're genuinely localizing for a specific market — and always keep a plain `ar` line as fallback for users outside those specific regions.

**Q3: Is Hebrew's language code `he` or `iw`?**
It's `he`. `iw` is the deprecated ISO 639-1 code that still lingers in some old CMS templates. Check for it and fix it — otherwise that hreflang line gets treated as an invalid language code.

**Q4: Does structured data (Schema) need special handling on RTL pages?**
JSON-LD structured data is language-neutral as a data format and unaffected by page direction, but the `inLanguage` field must correctly state `ar` or `he`. Description text should still be manually reviewed to confirm bidirectional text — Arabic mixed with an English brand name — isn't getting truncated by a rendering issue.

**Q5: Can I skip the `dir` attribute and rely on browser auto-detection?**
Not recommended. Browser auto-detection guesses direction based on content, and it frequently misfires on paragraphs that start with numbers, a brand name, or mixed-language text. Search engine crawlers and screen readers both read the explicit HTML attribute — skipping it leaves rendering correctness to chance.

---

RTL technical errors are often invisible to the eye — the layout can look correctly mirrored while `dir` attributes, font fallback, and hreflang are all broken at once. GeoSeoToday's [GEO audit tool](/en/geo/) helps catch this kind of cross-language technical debt. If your site involves multilingual hreflang setup, start with [What Is hreflang? A Multilingual Site Guide](/en/blog/what-is-hreflang/) before tackling RTL-specific layout and font issues.
