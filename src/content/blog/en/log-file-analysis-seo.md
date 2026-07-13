---
title: "Server Log Analysis: What Crawlers (Including AI Bots) Actually Read"
description: robots.txt only tells you who you allowed to crawl. Server logs tell you who actually showed up, what they read, and whether they got blocked. Learn the grep commands to find wasted crawl budget and proof of blocked AI bots.
target_keyword: log file analysis seo
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-08-28
date_updated: 2026-08-28
translations:
  zh-hant: log-file-analysis-seo
  zh-hans: log-file-analysis-seo
---
# Server Log Analysis: What Crawlers (Including AI Bots) Actually Read

**robots.txt only states who you *allowed* to crawl; server access logs are the only place that shows what crawlers *actually did* — you can use them to quantify wasted crawl budget, confirm GPTBot and PerplexityBot really showed up, and catch cases where a firewall silently 403'd an AI bot.** Guessing doesn't help. Every line in the log is a fact.

## Why robots.txt and GSC aren't enough

Google Search Console only reports Googlebot's crawl stats, with a 1–2 day delay and no URL-level detail. robots.txt is a rule, not a fact — allowing a bot doesn't mean it showed up, and thinking you blocked one doesn't mean it did either. A misconfigured CDN or WAF rule can silently drop a bot's request before it even reaches your 403 page, leaving zero trace. **The only place that shows the real behavior of Googlebot, Bingbot, and the six major AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) is the raw access log.**

## What a log line looks like: know the fields first

A standard Nginx/Apache combined log line looks roughly like this:

```
66.249.66.1 - - [28/Aug/2026:03:14:22 +0000] "GET /en/blog/what-is-geo/ HTTP/1.1" 200 18234 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
```

Four fields matter: **IP (verify with reverse DNS), timestamp, status code, and user-agent.** AI bot user-agents are fixed strings you can grep for directly.

## Step 1–5: use grep to surface four kinds of problems

1. **Pull every AI bot request**: `grep -E "GPTBot|OAI-SearchBot|PerplexityBot|ClaudeBot|Google-Extended" access.log > ai-bots.log` — first confirm they showed up at all. Zero hits means either an upstream WAF is dropping them before they hit the log, or your robots.txt really is blocking everything.
2. **Tally status codes**: `awk '{print $9}' ai-bots.log | sort | uniq -c | sort -rn`. A high share of 403/404 (say, over 15%) is direct evidence of blocked AI bots — not a guess.
3. **Find the most-crawled, lowest-value paths**: `awk '{print $7}' ai-bots.log | sort | uniq -c | sort -rn | head -30`. Common waste: pagination parameters (`?page=`), filter combinations, and on-site search result pages — these eat crawl budget without deserving to be indexed.
4. **Reverse-DNS the IPs to verify authenticity**: `host <IP>`, and confirm the reverse resolution lands on the vendor's official domain (e.g. `googlebot.com`, `crawl.openai.com`). This prevents mistaking spoofed user-agents for genuine AI bot traffic.
5. **Compare crawl timestamps against content update timestamps**: check the last time an AI bot crawled a given page against that page's `date_updated`. A gap over 30 days means your latest edits haven't been re-read by that AI engine yet — the usual explanation for "I updated the content but the AI answer is still the old version."

## Common waste vs. high-value crawling: comparison table

| Crawl target type | SEO/GEO value | Typical waste share |
|---|---|---|
| Article pages (`/blog/<slug>/`) | High — directly drives indexing and AI citation | Usually 30–50% of crawl volume |
| Pagination/filter parameter pages | Very low, usually should be noindexed | Commonly 20–40%, the single biggest waste source |
| On-site search result pages | Nearly none, prone to duplicate content | 5–15% |
| Images/static assets | Moderate, affects page-load assessment | Varies by site structure |
| 404/retired pages | Negative — wastes budget and hurts trust signals | If over 5%, redirects need immediate attention |

## FAQ

**Q1: How often should you run a log analysis?**
Mid-to-large content sites should do a routine check monthly, and run one immediately after deploying new robots.txt rules or a major site restructure to confirm the rules actually took effect without over-blocking.

**Q2: Can't GSC's Crawl Stats report replace log analysis?**
No. GSC only covers Googlebot and shows aggregated, indirect data. AI crawlers (GPTBot, PerplexityBot, etc.) never appear in GSC at all — only the raw log shows them.

**Q3: What does it mean if the log shows zero visits from an AI bot?**
First check whether robots.txt is over-blocking, then check whether your CDN/WAF has a security rule that blanket-blocks non-browser user-agents (common with CDNs that ship bot protection enabled by default) — this frequently blocks AI crawlers without anyone realizing it.

**Q4: The log files are huge and I have no dedicated tooling — now what?**
You don't need dedicated tooling. The `grep`/`awk`/`sort`/`uniq` command chain handles logs at the million-line scale and gets you an answer fastest, without uploading raw logs to a third-party service.

---

Log analysis tells you whether crawlers actually showed up and what they read — but making sure they know what to read in the first place still comes down to your crawler allowlist and robots.txt strategy. See [AI Crawler List and Management](/en/blog/ai-crawler-management/). To understand why "getting cited by AI" runs on different logic than traditional rankings, start with the overview at [/en/geo/](/en/geo/).
