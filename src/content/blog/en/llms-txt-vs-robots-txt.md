---
title: "llms.txt vs robots.txt: One Table on What Each Actually Controls"
description: "robots.txt controls whether crawlers can access your pages; llms.txt suggests which pages an LLM should read first. They govern different layers - they don't replace each other. Here's a division-of-labor table, a 'which file fixes what' matrix, and the correct setup order so you stop using llms.txt to fix what is really a robots.txt problem."
target_keyword: llms.txt robots.txt
intent: informational
cluster: AIO
author: GeoSeoToday
date_published: 2026-08-05
date_updated: 2026-11-02
enhanced: true
translations:
  zh-hant: llms-txt-vs-robots-txt
  zh-hans: llms-txt-vs-robots-txt
---
# llms.txt vs robots.txt: One Table on What Each Actually Controls

**robots.txt controls whether a crawler can access your pages; llms.txt suggests which pages an LLM should read first when it looks at your site. They govern completely different layers - they are complementary, not substitutes.** One-line memory aid: robots.txt is the front door (are you allowed in), llms.txt is the floor map (once inside, where to look first). Confuse this division of labor and the most common outcome is that you spend effort writing a polished llms.txt without noticing the real problem is that robots.txt already locked the AI crawlers out - and no matter how elegant the map, if the door is shut nobody reads it.

## The one-line positioning: front door vs floor map

Nail down each file's job first, because every trade-off below follows from it:

- **robots.txt** is a crawler protocol that has existed since 1994. It sits at your site root and uses `User-agent` plus `Allow` / `Disallow` to govern which crawler may access which paths. It controls **access permission** ([Google explains](https://developers.google.com/search/docs/crawling-indexing/robots/intro) that it tells crawlers which URLs they may access, and is not a mechanism for keeping a page out of Google), and compliant mainstream crawlers (including GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, and ClaudeBot) obey it.
- **llms.txt** is a [community proposal](https://llmstxt.org/) introduced in 2024 by Jeremy Howard / Answer.AI. It also sits at the root, but uses Markdown to list "this site's most important pages, with a note on each," so large language models can **grasp the key points faster**. It governs **understanding and source guidance**, and Google has stated that **Google Search does not use it** (see "Google's position" below).

The core difference in one line: **robots.txt decides "can it read you at all," llms.txt suggests "read these first."** The former is a hard access gate; the latter is a soft reading recommendation.

> **Google's position (published 2026-06-15, checked 2026-11-02)**
>
> On June 15, 2026, Google clarified in its [Search documentation updates log](https://developers.google.com/search/updates), and added to its [generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting), that Google Search ignores llms.txt: creating one will neither help nor harm your visibility or rankings in Google Search, and you are free to maintain one for other services or systems. So the "source guidance" role of llms.txt in the table below applies only to other services that choose to read it - not to Google Search or AI Overviews.

## Division-of-labor table: six dimensions at a glance

Put the two files side by side and the difference is obvious. (We've dropped in sitemap.xml too, since it's often discussed alongside them and easily confused with both.)

| Dimension | robots.txt | llms.txt | sitemap.xml |
|---|---|---|---|
| **Controls what** | Whether it can crawl (access permission) | Which key pages to read first (source guidance) | Which URLs exist (index list) |
| **Read by** | All crawlers | Large language models (LLMs) | Search engines |
| **Format** | Plain-text directives (User-agent / Allow / Disallow) | Markdown (headings, lists, links) | XML |
| **Enforcement** | Convention; compliant crawlers obey | Suggestion only; Google Search explicitly does not use it | Suggestion; engines consider but don't guarantee |
| **Adoption (2026)** | Universal, de facto standard | Proposal stage; not used by Google Search, other services vary | Universal, de facto standard |
| **Cost of getting it wrong** | Very high: one Disallow line can make the whole site invisible to AI | Very low: at worst it does nothing, never harmful | Medium: missing URLs hurt indexing, but crawlers can still discover them |

That table produces the single most important practical takeaway: **robots.txt is the file you cannot afford to get wrong; llms.txt is the file that makes no difference to Google Search either way and costs nothing if you don't have it.** The risk magnitudes differ by several orders, so the care you invest should differ too.

## The "which file fixes what" matrix

In practice, almost everyone's confusion is "for my situation, which file do I edit?" Use the table below to match your case directly:

| What you want to do | File to edit | How |
|---|---|---|
| Let ChatGPT Search / Perplexity read you | **robots.txt** | Allow OAI-SearchBot and PerplexityBot (`Allow: /`) |
| Keep content out of model training | **robots.txt** | Block the training crawlers GPTBot and ClaudeBot (`Disallow: /`) |
| Block one AI crawler but keep normal Google ranking | **robots.txt** | Disallow only Google-Extended; leave Googlebot alone |
| Tell the LLM "these are my three most important posts" | **llms.txt** | List core pages with a one-line note each, in Markdown (only meaningful for non-Google services that read it) |
| Spare the LLM the cost of parsing nav bars / ads | **llms.txt** | Provide a distilled Markdown guide to the site |
| "I added llms.txt but AI still can't cite me" | **Check robots.txt first** | Commonly the crawler is blocked or content needs JS to render - and Google Search does not use llms.txt anyway |

That last row is the anti-pattern this article most wants to flag: **when AI can't cite you, the first thing to check is always robots.txt and crawler reachability, not rushing to write an llms.txt.** llms.txt solves "once it can read you, is the reading precise enough"; it cannot solve "it can't read you at all." Get the order wrong and the entire effort is wasted.

## The correct setup order: open the door, then draw the map, then go advanced

Sequence the two files correctly so you don't put the cart before the horse:

1. **Fix robots.txt first (the foundation, mandatory).** Confirm there's no leftover `User-agent: * Disallow: /` or an old config that blocks all AI crawlers. To be cited, at minimum allow the retrieval crawlers (OAI-SearchBot, PerplexityBot, Bingbot). Google-Extended only controls Gemini training and grounding use and [does not affect inclusion or ranking in Google Search](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), so blocking it will not remove you from Google Search.
2. **Verify crawlers can actually read you (mandatory).** Open `yourdomain/robots.txt` and eyeball the rules; check your access log to confirm those user-agents return 200, not 403 / 404; confirm your important content doesn't require JavaScript to render.
3. **Make the content itself citable (mandatory).** Answer-first paragraphs, lists, tables, a clear author entity - this is what actually decides whether you get cited.
4. **Only then add llms.txt (optional, not for Google).** With the foundation solid, and only if there is a non-Google tool you want to serve, spend ten minutes writing a distilled llms.txt. It does nothing for Google Search and costs almost nothing.

The order in one line: **robots.txt and crawler reachability are the mandatory foundation; llms.txt is an optional extra, unrelated to Google Search, that you add after the foundation is done.** Don't treat the optional extra as the foundation.

## An honest boundary: llms.txt is not a "results" lever today

To avoid misleading you: **Google has stated that Google Search does not use llms.txt, so adding it will not lift your performance in Google Search or AI Overviews - and it will not hurt either.** At most it is a low-cost option for other services or systems that choose to read it; whether OpenAI, Perplexity and others currently do, we have not verified one by one, so check each vendor's own documentation. By contrast, whether your robots.txt is set correctly is a hard variable affecting whether crawlers can read you at this very moment. So when resources are limited, the order is always: get robots.txt and crawler reachability right first (high leverage, immediate effect), then add llms.txt only if you have spare capacity and a real non-Google use case. Weight the two correctly and you won't over-invest in the wrong file.

## Sources

- [Google Search documentation updates: Clarifying guidance on llms.txt files (June 15, 2026)](https://developers.google.com/search/updates) (Google Search Central, 2026)
- [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (Google Search Central, 2026)
- [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) (Google Search Central)
- [Google's common crawlers: Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) (Google Crawling Infrastructure)
- [The /llms.txt file - proposal](https://llmstxt.org/) (llmstxt.org, Jeremy Howard, 2024)

## FAQ

**Q1: Can I just add llms.txt and ignore robots.txt?**
No, and that's the order backwards. robots.txt decides whether crawlers can read you at all - it's a hard gate; llms.txt is only a reading suggestion after they can already read you. If robots.txt blocks the AI crawlers, no one reads your llms.txt no matter how good it is. Always confirm robots.txt allows access first, then think about llms.txt.

**Q2: Do robots.txt and llms.txt conflict with each other?**
No, they govern different layers and don't overlap. robots.txt controls "can you crawl this path," llms.txt controls "which key pages to read first when you look at my site." The sensible combination is: robots.txt allows the retrieval crawlers, and llms.txt guides them to the important pages - complementary, not conflicting.

**Q3: If I add llms.txt, will AI cite me now?**
No. Google Search explicitly does not use llms.txt; what actually decides citation is whether your content is citable and whether crawlers can read it. Treat it as a low-cost option, not your main results lever.

**Q4: So which one matters more, and where should I spend time first?**
robots.txt, clearly. Its cost of error is very high (one Disallow line makes the whole site invisible to AI) and it takes effect immediately; llms.txt neither helps nor harms in Google Search (which ignores it) and costs nothing if omitted. With limited resources, get robots.txt and crawler reachability right first, then add llms.txt only if you have capacity to spare.

---

Once the division of labor is clear, the real foundation is still "crawlers can read you" plus "content is citable." GeoSeoToday packages these checks into one place - the full walkthrough is in the [complete AIO guide](/en/blog/aio-complete-guide/), and the tool entry is at [/en/aio/](/en/aio/). Further reading: to go deep on allowing / blocking each AI crawler in robots.txt, see [AI Crawler List and Management](/en/blog/ai-crawler-management/); to write your llms.txt correctly with an example, see [What Is llms.txt? Should You Add It](/en/blog/what-is-llms-txt/).
