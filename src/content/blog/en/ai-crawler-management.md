---
title: "AI Crawler List & Management (GPTBot, PerplexityBot, Google-Extended)"
description: Want AI engines to cite you? Step one is letting their crawlers read you. Here are the real user-agents of 2026's major AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, Bingbot), plus a copy-paste robots.txt setup and clear allow/block decisions.
target_keyword: ai crawler management
intent: informational
cluster: AIO
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-11-09
enhanced: true
translations:
  zh-hant: ai-crawler-management
  zh-hans: ai-crawler-management
---
# AI Crawler List & Management (GPTBot, PerplexityBot, Google-Extended)

**If you want AI engines to cite you, the first move isn't writing content — it's confirming their crawlers can actually read you. Plenty of sites fail at AIO for one dumb reason: some engineer once blanket-disallowed every AI crawler.** You can use robots.txt to decide, crawler by crawler, who to allow and who to block — but only once you recognize their real user-agents. Here are the six that matter in 2026, with a setup you can paste in today.

## The AI crawlers you need to know (real user-agents)

As of 2026, there are six AI crawlers worth recognizing, each serving a different purpose:

| User-agent | Owner | Primary purpose |
|---|---|---|
| **GPTBot** | OpenAI | [Crawls content for model training](https://developers.openai.com/api/docs/bots) |
| **OAI-SearchBot** | OpenAI | [Surfaces sites in ChatGPT search results](https://developers.openai.com/api/docs/bots) |
| **PerplexityBot** | Perplexity | [Shows and links sites in Perplexity results; not used for training foundation models](https://docs.perplexity.ai/guides/bots) |
| **Google-Extended** | Google | [Controls whether crawled content is used to train future Gemini models](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) |
| **ClaudeBot** | Anthropic | [Training crawler; collects content that may contribute to model training](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| **Bingbot** | Microsoft | Bing indexing (which also powers Copilot) |

Two common misconceptions are worth clearing up. **Google-Extended is not regular Googlebot** — blocking Google-Extended does not affect your ranking in normal Google Search (Google says it "does not impact a site's inclusion in Google Search nor is it used as a ranking signal"); it only affects whether your content is used to train Gemini models. And **Bingbot serves both Bing Search and Copilot**, so blocking it means giving up both at once.

## Allow or block? Get your goal straight first

This is a trade-off, not a binary of "allow everything" or "block everything":

- **You want AI citations and AI exposure** → allow the retrieval crawlers (OAI-SearchBot, PerplexityBot, Bingbot), and optionally allow Google-Extended. Note that Google-Extended does not control Google Search or AI Overviews; Googlebot does.

There are also user-triggered fetchers: OpenAI says ChatGPT-User robots.txt rules [may not apply](https://developers.openai.com/api/docs/bots) because users initiate the visit; Perplexity-User [generally ignores robots.txt](https://docs.perplexity.ai/guides/bots); Anthropic's Claude-User can be controlled via robots.txt.
- **You don't want your content used for model training** → consider blocking the training crawlers (GPTBot, ClaudeBot), but understand this also lowers your odds of being cited by that engine.
- **Your content is paid, confidential, or has copyright concerns** → blocking the relevant crawlers is a reasonable call.

The key realization: **blocking a crawler = forfeiting exposure from that engine.** For most content sites trying to grow, "allow retrieval, keep the exposure" usually does more good than harm.

## robots.txt example (copy-paste ready)

Place it at `https://yourdomain/robots.txt`. Here's a common "allow AI retrieval, keep exposure" setup:

```
# Allow OpenAI retrieval (for ChatGPT search citations)
User-agent: OAI-SearchBot
Allow: /

# Allow Perplexity
User-agent: PerplexityBot
Allow: /

# Allow Google's AI use (Gemini training; does not affect Search or AI Overviews)
User-agent: Google-Extended
Allow: /

# Allow Bing (also serves Copilot)
User-agent: Bingbot
Allow: /

# General crawlers
User-agent: *
Allow: /
Sitemap: https://yourdomain/sitemap.xml
```

If you want to **block the training crawlers** (don't want to be used for training, but still want to be retrieved and cited), add:

```
# No model training
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /
```

The principle: **allow the retrieval crawlers to preserve exposure; decide on the training crawlers based on your copyright stance.** Don't indiscriminately Disallow everything. Also note that both OpenAI and Perplexity say robots.txt changes can take about 24 hours to take effect ([OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots)), so don't judge a change immediately.

## Check and verify: three actions

1. **Read your current robots.txt**: open `yourdomain/robots.txt` directly and confirm there's no leftover `User-agent: * Disallow: /` or an old config that blocks all the crawlers above.
2. **Check your server logs**: search your access log for the user-agents above to confirm they're actually crawling, and that responses are 200 — not 403/404.
3. **Check whether JavaScript is required**: most AI crawlers don't execute JavaScript. If your important content only renders with JS, the crawler can't read it even when allowed — a common fatal flaw.

## Sources

- [OpenAI: Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots) (OpenAI)
- [Perplexity: Perplexity Crawlers](https://docs.perplexity.ai/guides/bots) (Perplexity)
- [Google: Common crawlers (incl. Google-Extended)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) (Google Search Central)
- [Anthropic: Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) (Anthropic)

## Frequently asked questions (FAQ)

**Q1: If I block GPTBot, does that mean ChatGPT can never cite me?**
GPTBot is mainly for training; ChatGPT search's real-time retrieval runs mostly through OAI-SearchBot. If you want ChatGPT search to cite you without being used for training, allow OAI-SearchBot and block GPTBot. The two are configured separately.

**Q2: Does blocking Google-Extended affect my Google ranking?**
No. Google-Extended only controls whether your content is used by AI products like Gemini; it's separate from regular Googlebot's search indexing and ranking. Blocking it doesn't affect traditional SEO — only AI exposure.

**Q3: Can robots.txt block every crawler?**
robots.txt is a convention, not enforcement. Mainstream compliant crawlers (the six above) obey it, but it relies on good behavior. To technically block something, you need user-agent filtering at the server layer, not robots.txt alone.

**Q4: Is there any risk in allowing everything?**
The main risk is your content being used for model training (copyright / competitive concerns). If your content is public educational material and you want to grow exposure, allowing everything is usually reasonable; if it's paid or confidential, block the relevant crawlers. The trade-off depends on your business model.

---

Being crawlable is the foundation of getting cited by AI — skip this step and even the best content is wasted. GeoSeoToday pulls crawler checks and visibility tracking into one place — the full overview is in the [Complete AIO Guide](/en/blog/aio-complete-guide/), and the tools live at [/en/aio/](/en/aio/). Further reading: what llms.txt is, and how to get cited by Gemini / Google AI.
