---
title: 服务器日志分析：看爬虫（含 AI bot）到底爬了什么
description: robots.txt 只能告诉你"允许谁爬"，日志才能告诉你"谁真的来了、爬了什么、有没有被挡"。本文教你用 grep 拆解 access log，找出被浪费的抓取预算与 AI bot 被 403 的证据。
target_keyword: 日志 分析 seo
intent: informational
cluster: On-page & 技术 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-28
date_updated: 2026-08-28
translations:
  zh-hant: log-file-analysis-seo
  en: log-file-analysis-seo
---
# 服务器日志分析：看爬虫（含 AI bot）到底爬了什么

**robots.txt 只是你"说"允许谁爬；服务器日志（access log）才是唯一能看到爬虫"真的做了什么"的地方——你可以用它算出抓取预算浪费在哪、确认 GPTBot／PerplexityBot 是不是真的来过，以及有没有被防火墙误挡成 403。** 猜测没有用，日志里的每一行都是事实。

## 为什么 robots.txt 和 GSC 都不够

Google Search Console 只回报 Googlebot 的抓取统计，而且有 1–2 天延迟、也不逐一列出网址层级细节。robots.txt 只是"规则"，不是"事实"——你允许某爬虫，不代表它真的来了；你以为挡住某爬虫，也可能因为 CDN／WAF 规则设错，实际上让它连 403 页面都拿不到就被丢包，完全不留记录。**唯一能同时看到 Googlebot、Bingbot 与六大 AI 爬虫（GPTBot、OAI-SearchBot、PerplexityBot、ClaudeBot、Google-Extended、Bingbot）实际行为的地方，就是服务器的 access log。**

## 日志长什么样：先认得字段

标准 Nginx／Apache combined log 格式一行大致如下：

```
66.249.66.1 - - [28/Aug/2026:03:14:22 +0000] "GET /zh-hans/blog/what-is-geo/ HTTP/1.1" 200 18234 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
```

你要看的四件事：**IP（要反查验证真伪）、时间戳、状态码、user-agent**。AI 爬虫的 user-agent 是固定字符串，可以直接 grep。

## Step 1–5：用 grep 拆解日志，找出四种问题

1. **抓出所有 AI bot 的请求**：`grep -E "GPTBot|OAI-SearchBot|PerplexityBot|ClaudeBot|Google-Extended" access.log > ai-bots.log`——先确认它们"有没有来"。若完全没有记录，代表要么被上层 WAF 挡在日志之外，要么你的 robots.txt 真的全挡了。
2. **统计状态码分布**：`awk '{print $9}' ai-bots.log | sort | uniq -c | sort -rn`。若 403／404 占比偏高（例如超过 15%），这是"AI bot 被挡"的直接证据，而不是猜测。
3. **找出被爬最多次但价值最低的路径**：`awk '{print $7}' ai-bots.log | sort | uniq -c | sort -rn | head -30`。常见浪费：分页参数（`?page=`）、筛选器组合、站内搜索结果页——这些吃掉抓取预算却不该被收录。
4. **反查 IP 验证真伪**：`host <IP>`，确认反解析结果落在该公司官方域名（如 `googlebot.com`、`crawl.openai.com`），避免把冒充 user-agent 的假爬虫流量误判为真的 AI bot。
5. **比对抓取时间与内容更新时间**：把 AI bot 最后一次抓取某页的时间，对照该页 `date_updated`。若差距超过 30 天，代表你更新的内容还没被 AI 引擎重新读取，这解释了"明明改了内容，AI 回答还是旧版"的常见疑问。

## 常见浪费 vs 高价值抓取：对照表

| 抓取目标类型 | 对 SEO／GEO 的价值 | 常见浪费比例 |
|---|---|---|
| 文章正文页（`/blog/<slug>/`） | 高——直接影响收录与 AI 引用 | 通常抓取量的 30–50% |
| 分页／筛选参数页 | 极低，通常应 noindex | 常见占比 20–40%，是最大浪费源 |
| 站内搜索结果页 | 几乎无，易造成重复内容 | 5–15% |
| 图片／静态资源 | 中等，影响页面加载判断 | 依站点结构而定 |
| 404／已下线页面 | 负面——浪费预算又伤信任度 | 若 >5% 需立即处理跳转 |

## 常见问题（FAQ）

**Q1：多久该做一次日志分析？**
中大型内容站建议每月一次例行检查，新上线 robots.txt 规则或大改版后应立即补做一次，确认规则生效且没有误挡。

**Q2：GSC 的"抓取统计信息"报表不能取代日志分析吗？**
不能。GSC 只涵盖 Googlebot，且是汇总后的间接数据；AI 爬虫（GPTBot、PerplexityBot 等）完全不在 GSC 范围内，只有原始日志看得到。

**Q3：如果日志显示 AI bot 一次都没来过，代表什么？**
先查 robots.txt 是否误挡、再查 CDN／WAF 是否有安全规则把非浏览器 user-agent 一律拦截（常见于默认启用机器人防护的 CDN），这类设置经常在不知情下连 AI 爬虫一起挡掉。

**Q4：日志文件太大，没工具怎么办？**
不需要专用工具，`grep`／`awk`／`sort`／`uniq` 这组命令链就能处理百万行等级的日志，是最快能拿到答案的方式，且不需要把日志上传给第三方服务。

---

日志分析解决的是"爬虫有没有真的来、读到什么"，但要让爬虫一开始就分得清该读什么、不该读什么，还是要回到爬虫清单与 robots.txt 的放行策略——见〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉。想理解为什么"被 AI 引用"和传统排名是两套不同逻辑，可先读总览：[/zh-hans/geo/](/zh-hans/geo/)。
