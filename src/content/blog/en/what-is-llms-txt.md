---
title: "What Is llms.txt? Should You Add It to Your Site? (With Example)"
description: llms.txt is a proposed standard introduced in 2024 by Jeremy Howard / Answer.AI — a Markdown file placed at your site root to help AI crawlers grasp what your site is about. This guide covers what it does, where adoption stands today (not yet officially used by the major engines), and gives you a copy-paste example.
target_keyword: what is llms.txt
intent: informational
cluster: AIO
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-11-02
enhanced: true
translations:
  zh-hant: what-is-llms-txt
  zh-hans: what-is-llms-txt
---
# What Is llms.txt? Should You Add It to Your Site? (With Example)

**llms.txt is a plain-text file placed at your site root (`/llms.txt`) that uses Markdown to list your most important pages, with a short note on each, so large language models (LLMs) can understand your site faster. It was proposed by Jeremy Howard / Answer.AI in 2024, it is a [community proposal](https://llmstxt.org/), and Google has stated that Google Search does not use it.** In short: it's not a ranking or AI Overviews lever; at most it's a low-cost option for other services and tools, so don't expect it to move your visibility in Google.

> **Google's position (published 2026-06-15, checked 2026-11-02)**
>
> On June 15, 2026, Google added a clarification to its [generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting) (entry "Clarifying guidance on llms.txt files" in the [Search documentation updates log](https://developers.google.com/search/updates)): Google Search ignores llms.txt, so creating and maintaining one will neither help nor harm your visibility or rankings in Google Search, and you are free to keep one for other services or systems. The same guide says you don't need to create machine-readable files, AI text files, markup, or Markdown to appear in Google Search, including its generative AI features, and Google's [AI features documentation](https://developers.google.com/search/docs/appearance/ai-features) lists no extra file requirements.
>
> So any benefit of llms.txt discussed below refers to **other services and tools only**, not to Google Search or AI Overviews.

## What problem is llms.txt trying to solve?

A normal web page isn't friendly to AI crawlers: nav bars, ads, JavaScript, and heavy HTML markup all dilute the content that actually matters. The idea behind llms.txt is to **hand the LLM a clean, distilled, Markdown-formatted "guide to the site"** that tells it directly what the site is about and which pages are most worth reading — sparing it the cost of parsing through the noise.

The proposal deliberately uses Markdown because it is readable by both humans and LLMs while still being parseable with standard tools (see [llmstxt.org](https://llmstxt.org/)) — headings, lists, and links are all immediately legible.

## How is llms.txt different from robots.txt and sitemap.xml?

All three live at the root, but they serve completely different purposes — don't confuse them:

| File | Who it's for | Purpose |
|---|---|---|
| **robots.txt** | Every crawler | Governs *whether* it can crawl (Allow/Disallow) |
| **sitemap.xml** | Search engines | Lists *which URLs* exist, for indexing |
| **llms.txt** | LLMs | Explains *what the site is about*, for understanding |

One line: robots.txt manages permission, sitemap manages the list, llms.txt manages understanding. It doesn't replace the first two — it's an extra layer on top.

## llms.txt example (ready to adapt)

A basic llms.txt looks roughly like this, placed at `https://yourdomain/llms.txt`:

```
# GeoSeoToday

> An SEO/GEO/AIO tutorial blog that teaches you to optimize content so AI engines cite it.

## Core guides
- [The Complete AIO Guide](/en/blog/aio-complete-guide/): AI search optimization, end to end
- [What Is GEO](/en/blog/what-is-geo/): the definition of Generative Engine Optimization
- [What Is Google AI Overview](/en/blog/what-is-ai-overview/): how the AI summary works

## Tools
- [GEO Readiness Checker](/en/geo/): scores how citable an article is

## Notes
This site is written answer-first, with citable paragraphs.
```

The guiding principle: **list only the most important pages, add one line of description each, and use relative or full links.** llms.txt isn't about cramming your whole site in — it's a curated reading list you assemble for the LLM.

## Should you add it? An honest recommendation

Short answer: if you want it to improve your Google Search or AI Overviews performance, don't bother; if you want to serve other services or tools, it's fine to add. The reasons and the caveats:

1. **The cost is trivial.** One plain-text file, a few dozen lines, near-zero maintenance.
2. **It does nothing for Google Search.** As Google's position above states, Google Search ignores it - adding one neither helps nor harms you there.
3. **It may help with other services (verify for yourself).** Google does not object to you maintaining llms.txt for other services or systems. We have not verified which non-Google tools or AI services actually read it, so check that service's own documentation before relying on it.
4. **It's no substitute for the fundamentals.** What actually decides whether you get cited is still whether your content is citable and whether AI crawlers can reach your pages. Google also says its generative AI features are rooted in its core Search ranking and quality systems ([official guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), so first make sure crawler access is working properly (see AI crawler list and management).

Bottom line: treat it as an optional file that does nothing for Google and may help other services - not a workhorse that delivers results.

## Sources

- [Google Search documentation updates: Clarifying guidance on llms.txt files (June 15, 2026)](https://developers.google.com/search/updates) (Google Search Central, 2026)
- [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (Google Search Central, 2026)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) (Google Search Central)
- [The /llms.txt file - proposal](https://llmstxt.org/) (llmstxt.org, Jeremy Howard, 2024)

## FAQ

**Q1: If I add llms.txt, will AI cite me?**
No. Google says Google Search ignores llms.txt, so adding one neither helps nor harms you there; what actually decides citation is content quality and crawler accessibility. Whether other AI services read it depends on each service's own documentation, which we have not verified one by one.

**Q2: Is llms.txt an official standard?**
No. It's a community proposal put forward in 2024 by Jeremy Howard / Answer.AI. It isn't a W3C standard, and Google Search does not use it — whether to publish one is each site's own call.

**Q3: What's the difference between llms.txt and llms-full.txt?**
Some communities also use `llms-full.txt`, which puts the full content (not just links) in one file; it is not part of the spec described on the [llmstxt.org](https://llmstxt.org/) proposal page, and Google's statement that AI text files aren't needed and aren't used by Google Search presumably applies to it too. Unless you are targeting a specific non-Google service that asks for it, the basic llms.txt (or nothing) is enough.

**Q4: Will adding it affect my SEO?**
No negative impact, and no positive impact either: Google says Google Search ignores it, so it neither helps nor harms visibility or rankings ([official guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)). robots.txt and sitemap.xml remain the leads for SEO.

---

For Google Search, llms.txt is neither a bonus point nor a workhorse; the real foundation is "content that can be cited" and "crawlers that can reach you." GeoSeoToday gathers those checks into one place — for the full playbook see [The Complete AIO Guide](/en/blog/aio-complete-guide/), and for the tool entry point see [/en/aio/](/en/aio/). Further reading: [What Is AIO?](/en/blog/what-is-aio/)
