---
title: "How to Configure robots.txt Without Blocking AI Citations: Handle Training and Retrieval Crawlers Separately"
description: A single Disallow line in robots.txt can block your AI citations by accident. This guide tables every AI crawler's real user-agent in 2026, shows whether each is a training or retrieval bot, and spells out what blocking each one costs you — training and retrieval crawlers must be allowed separately.
target_keyword: robots.txt ai bot
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-30
date_updated: 2026-07-30
translations:
  zh-hant: robots-txt-for-ai-bots
  zh-hans: robots-txt-for-ai-bots
---
# How to Configure robots.txt Without Blocking AI Citations: Handle Training and Retrieval Crawlers Separately

**AI crawlers come in two kinds: training bots (which pull your content to train models) and retrieval bots (which fetch your page live when answering a question and attach a citation link back to you). If you want to be cited by AI but not fed into training, you handle these two kinds separately in robots.txt — allow the retrieval bots to keep your citation exposure, then decide on the training bots based on your copyright stance. A blanket `Disallow: /` throws away your citations along with everything else.** The prerequisite is knowing each crawler's real user-agent and which type it is.

Most sites that get no AI traffic aren't losing on content quality — some engineer or a security plugin blocked AI crawlers wholesale in robots.txt (or at the CDN layer). robots.txt is the first file every crawler reads before entering your site. Get this step wrong and nothing you write reaches an AI's citation pool.

## Training vs. retrieval crawlers: what's the difference?

This is the most important distinction in the article, and it decides who you should allow:

- **Training crawlers**: pull your content back as corpus to train or update a large language model. Blocking one mainly stops your content from being baked into model weights — but it is **not** the bot that provides the live citation when someone asks a question. Whether to allow it depends on how you feel about your content being used for training.
- **Retrieval crawlers**: when a user asks something in ChatGPT, Perplexity, and the like, the AI dispatches this bot in real time to fetch your page, generate an answer, and **attach a citation link pointing to you**. This bot is the lifeblood of GEO exposure — block it and you've opted out of that engine's live citations.

In one line: **training = whether your content enters the model; retrieval = whether you enter the answer's citations.** They are different user-agents with different business trade-offs, and robots.txt has to address them separately.

## AI crawler user-agent reference table (2026)

The table below lists the crawlers you most need to recognize, which type each is, and — the column that actually drives the decision — **what you lose by blocking it**:

| User-agent | Owner | Type | Blocking it = giving up |
|---|---|---|---|
| **GPTBot** | OpenAI | Training | Content out of OpenAI's training corpus (no effect on ChatGPT search citations) |
| **OAI-SearchBot** | OpenAI | Retrieval | ChatGPT search stops citing you live with a link |
| **ChatGPT-User** | OpenAI | Retrieval (user-triggered) | Content unreadable when a user opens your link inside ChatGPT |
| **PerplexityBot** | Perplexity | Retrieval | Perplexity answers and source lists drop you |
| **ClaudeBot** | Anthropic | Training | Content out of Anthropic's training corpus |
| **Claude-SearchBot** | Anthropic | Retrieval | Claude's live retrieval and citations can't reach you |
| **Google-Extended** | Google | Training / AI use | Content withheld from Gemini / AI products (**no effect on regular Google rankings**) |
| **Googlebot** | Google | Indexing (powers AI Overviews) | Regular search and AI Overviews disappear together (almost never block this) |
| **Bingbot** | Microsoft | Indexing (powers Copilot) | Bing search and Copilot given up at once |

Two things people most often get wrong: **Google-Extended is not Googlebot** — blocking the former only withholds content from Gemini; your regular Google rankings are untouched, whereas blocking the latter takes search down with it. And **a single Bingbot serves both Bing and Copilot**, so blocking it surrenders two at once. For a fuller crawler roster and management strategy, see [AI Crawler List and Management](/en/blog/ai-crawler-management/).

## robots.txt example: allow retrieval, block training on demand

Place it at `https://yourdomain/robots.txt` — it's read the moment a crawler arrives. Below is the most common "keep AI citations, opt out of training" combination. The whole point is that **retrieval bots are allowed and only training bots get a Disallow**:

```
# ── Retrieval bots: allow all — this is the lifeblood of AI citation exposure ──
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Bingbot
Allow: /

# ── Training bots: Disallow if you don't want to be trained on (your call) ──
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# ── General crawlers ──
User-agent: *
Allow: /
Sitemap: https://yourdomain/sitemap.xml
```

If you don't mind your content being used for training at all (public tutorials, maximum exposure), just change the `Disallow: /` in those three training blocks to `Allow: /` — the simplest setup and the lowest-risk one.

## Five robots.txt mistakes that lock AI citations out

Ordered by how often they bite in practice, each with the fix:

1. **A leftover `User-agent: * Disallow: /`**: a staging or old config never cleaned up — one line blocks the whole site, retrieval bots included. Fix: confirm production has no such line.
2. **Treating retrieval bots like training bots**: you meant to block GPTBot but Disallowed OAI-SearchBot alongside it, and your citation exposure is gone. Fix: write training and retrieval as two groups, and only block the group you actually mean to.
3. **Misspelled or guessed user-agent casing**: names like `GPT-Bot` or `Perplexity-Bot` don't exist, so the rule applies to no one. Fix: match the exact string each vendor publishes, character for character.
4. **robots.txt allows it, but the CDN/WAF blocks it**: a Cloudflare "block AI bots" toggle or a firewall returning 403 to bots makes your robots.txt allow meaningless. Fix: check server and CDN logs and confirm retrieval bots get 200, not 403.
5. **Content that needs JavaScript to render**: most AI crawlers don't execute JS, so even when allowed they read only an empty shell. Fix: render important body content server-side or pre-render it so the initial HTML already contains the text.

## Verify: confirm what you "think you allowed" is actually allowed

Once configured, don't trust your gut — run three checks:

1. **Open `yourdomain/robots.txt` directly**: confirm there's no leftover site-wide Disallow and that retrieval bots really are on the allow list.
2. **Check your server access log**: search for the user-agents in the table above and confirm they actually visit and return 200. Seeing the crawl behavior is how you know the allow took effect — and it's the only place you can observe an AI bot's real fetching.
3. **Glance at crawl budget while you're there**: AI crawlers share your server resources; when volume is high, solve it with caching/CDN rather than blocking — don't sacrifice citations to save bandwidth. See [What Is Crawl Budget](/en/blog/what-is-crawl-budget/).

## FAQ

**Q1: What exactly is the difference between training and retrieval crawlers?**
Training bots (like GPTBot, ClaudeBot) pull content to train models, and blocking one only stops your content from entering the model. Retrieval bots (like OAI-SearchBot, PerplexityBot) fetch your page live the moment a user asks, generate the answer, and attach a citation link. To be cited by AI you must allow the retrieval bots; the training bots are the group you're free to decide on.

**Q2: If I block GPTBot, can ChatGPT no longer cite me?**
No. GPTBot is for training; ChatGPT search's live citations come mainly from OAI-SearchBot and ChatGPT-User. So you can "allow OAI-SearchBot, block GPTBot" and keep being cited without being trained on — but set the two separately and never block them together.

**Q3: Does blocking Google-Extended hurt my Google rankings?**
No. Google-Extended only controls whether your content is used by Gemini and other AI products; it's a separate crawler from the Googlebot that powers regular search and AI Overviews. Blocking Google-Extended affects AI use only — traditional SEO rankings are unaffected.

**Q4: Can robots.txt stop crawlers that don't play by the rules?**
robots.txt is a convention, not enforcement. The compliant mainstream crawlers in the table above obey it, but it relies on good faith. To technically block anything (including malicious impersonators), you need user-agent/IP filtering at the server or CDN layer — robots.txt alone isn't enough.

**Q5: I'm unsure whether to block training bots — is there a safe default?**
Yes. For most content sites trying to grow, the safest default is to **allow retrieval bots and allow training bots too** — maximum exposure, zero operational risk. Only when your content is paid, confidential, or has a clear copyright concern should you selectively Disallow the training bots.

---

A correct robots.txt is the foundation for being cited by AI; a broken one keeps even great content out of the citation pool. GeoSeoToday brings crawler configuration and visibility tracking into one place — the tools entry point is [/en/geo/](/en/geo/), and the full method lives in the [On-page & Technical SEO Complete Guide](/en/blog/onpage-technical-seo-guide/). Further reading: [AI Crawler List and Management](/en/blog/ai-crawler-management/).
