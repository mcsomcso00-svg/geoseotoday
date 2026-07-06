---
title: 五个把 AI 流量挡在门外的设置错误（2026）
description: 内容写得好却进不了 AI 答案，八成不是内容问题，而是服务器把 AI 爬虫挡掉了。本文列出 2026 年最常见的五个致命设置错误——Cloudflare 一键全挡、CDN 对 bot 回 403、JS 才渲染的正文、robots.txt 旧残留、防火墙速率限制——每个都附上判断方法与逐步修复。
target_keyword: ai 爬虫 设置错误
intent: informational
cluster: On-page & 技术 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-03
date_updated: 2026-08-03
translations:
  zh-hant: ai-bot-blocking-mistakes
  en: ai-bot-blocking-mistakes
---
# 五个把 AI 流量挡在门外的设置错误（2026）

**内容写得再好，只要服务器把 AI 爬虫挡在门外，你就永远不会出现在 ChatGPT、Perplexity、AI Overview 的答案里——而且这种挡通常不是你故意设的，是 Cloudflare 的一键开关、CDN 的默认规则、或某任工程师的 JS 改版顺手做掉的。** 这五个错误有个共通点：站长完全不知道自己在挡，因为浏览器看起来一切正常，只有 AI 爬虫吃到 403。以下逐一给出判断方法与修复步骤。

先建立一个核心认知：AI 爬虫跟你网站的互动只有一次 HTTP 请求。它发出 `GET`，你的服务器如果回 200 加完整 HTML，你就有机会被引用；回 403、429、或回一页空壳要 JavaScript 才长出内容，这一次请求就失败，而且多数 AI 爬虫不会重试。以下五个错误，每一个都是在这一次请求上把门关上。

## 错误一：Cloudflare 的「Block AI Bots / Bot Fight Mode」一键全挡

这是 2026 年最常见的一个。Cloudflare 控制台有一个「Block AI Scrapers and Crawlers」开关，以及 Bot Fight Mode，很多人为了「防止内容被 AI 拿去训练」而打开——但这两个开关不分训练型与检索型，一开就连 **OAI-SearchBot、PerplexityBot** 这种负责「实时检索并引用你」的爬虫一起挡掉。结果是：你以为只挡掉训练，其实同时放弃了被 ChatGPT 搜索与 Perplexity 引用的机会。

**怎么判断**：Cloudflare 控制台 → Security → Bots，看「Block AI bots」是否为开启；同一页看 Bot Fight Mode 状态。

**怎么修**：
1. 关闭全局的「Block AI bots」与 Bot Fight Mode。
2. 若你真的只想挡训练型（GPTBot、ClaudeBot）、保留检索型，改用 robots.txt 精准控制，而非 Cloudflare 的无差别开关。
3. 若需要在 WAF 层做，改成「只挡特定 user-agent」的自定义规则，白名单放行 OAI-SearchBot、PerplexityBot、Google-Extended。

## 错误二：CDN 或 WAF 对「非浏览器」User-Agent 一律回 403

很多 CDN／防火墙的默认安全规则会判断：没有浏览器指纹、没有 JavaScript challenge 通过的请求，就是可疑流量，直接回 403 或抛一个需要点击的 challenge 页。AI 爬虫正好符合「非浏览器、不执行 JS、不过 challenge」的特征，于是被整批挡在门外。这比错误一更隐蔽，因为你根本没有主动开任何「挡 AI」的开关，是默认安全策略顺手做掉的。

**怎么判断**：用命令行模拟 AI 爬虫直接请求你的页面，看响应码。

```bash
# 模拟 Perplexity 爬虫抓你的首页，只看响应状态
curl -A "PerplexityBot" -s -o /dev/null -w "%{http_code}\n" https://你的域名/

# 对照：模拟一般浏览器
curl -A "Mozilla/5.0" -s -o /dev/null -w "%{http_code}\n" https://你的域名/
```

若浏览器 UA 回 200、爬虫 UA 回 403 或 503，就是被 CDN／WAF 依 user-agent 挡掉了。

**怎么修**：在 CDN／WAF 的安全规则中，为已知 AI 爬虫的 user-agent 建立白名单例外，让它们跳过 JS challenge 与 bot 分数封锁；不要用「一律要求浏览器指纹」的规则套到全站。

## 错误三：重要正文要 JavaScript 才渲染得出来

这是纯技术面、也最容易被忽略的一个。多数 AI 检索爬虫**不执行 JavaScript**——它们拿到的是服务器返回的初始 HTML。如果你的站是纯前端渲染（CSR 的 SPA），初始 HTML 只有一个空的 `<div id="root">`，正文全靠浏览器跑 JS 才长出来，那么爬虫即使拿到 200、即使你什么都没挡，它读到的也是一页空白。你在浏览器里看得到内容，不代表爬虫看得到。

**怎么判断**：把你的页面源 HTML 抓下来，看正文在不在里面。

```bash
# 抓初始 HTML，搜索你文章里的一句话
curl -s https://你的域名/你的文章/ | grep "你正文里的某一句话"
```

搜不到（grep 无输出），代表那句话是 JS 渲染出来的，爬虫读不到。

**怎么修**：改用服务器端渲染（SSR）或静态生成（SSG／预渲染），确保初始 HTML 就含完整正文。本站用 Astro 静态生成正是为此。无法全面改架构时，至少对重要内容页做预渲染。

## 错误四：robots.txt 残留旧的 `Disallow: /` 或封锁规则

有时挡掉 AI 的不是防火墙，而是一行没人记得的 robots.txt。常见情境：网站在 staging 阶段设了 `User-agent: * Disallow: /` 防止未上线内容被收录，上线时忘了拿掉；或早年为了「防 AI」加了一批 `Disallow`，如今想被引用却忘了这些规则还在。robots.txt 是合规爬虫会遵守的约定，一行 Disallow 就能让所有守规矩的 AI 爬虫全部止步。

**怎么判断**：直接打开 `你的域名/robots.txt`，逐行确认有没有 `User-agent: * Disallow: /`、或针对 OAI-SearchBot／PerplexityBot／Google-Extended 的 Disallow。

**怎么修**：移除全站 Disallow 与针对检索型爬虫的封锁；若只想挡训练型，明确只写 GPTBot、ClaudeBot 的 Disallow，并保留检索型放行。改完用各引擎的 robots 测试工具或直接 curl `robots.txt` 确认线上版本已更新（注意 CDN 缓存）。

## 错误五：防火墙速率限制把爬虫当攻击

AI 爬虫有时会在短时间内抓多个页面。若你的速率限制（rate limiting）门槛设得太低，或把「短时间多请求」一律视为 DDoS，就会在爬虫抓到第二、三页时回 429 Too Many Requests，导致它只抓到零星几页、拿不到你网站的全貌。这种错误的症状是「有时被引用、有时不被」，因为爬虫能否读完取决于它撞到限制的时机。

**怎么判断**：查服务器 access log，搜索 AI 爬虫 user-agent，看它们的请求里有没有一批 429／503；或看爬虫是否只抓了首页就消失。

**怎么修**：为已知 AI 爬虫的 user-agent 设置较宽松的速率上限（或豁免），与「防恶意流量」的严格规则分开；同时确认 sitemap.xml 可正常访问，让爬虫能有序抓取而非乱撞。

## 五个错误速查表

| # | 错误 | 症状 | 一句话判断 | 核心修法 |
|---|---|---|---|---|
| 1 | Cloudflare 一键全挡 AI bot | 完全不被任何 AI 引用 | 控制台 Bots 页看开关 | 关全局开关，改用 robots.txt 精准控 |
| 2 | CDN／WAF 对 bot UA 回 403 | 浏览器正常、爬虫吃 403 | `curl -A "PerplexityBot"` 看状态码 | 为 AI 爬虫 UA 建白名单例外 |
| 3 | 正文要 JS 才渲染 | 回 200 但爬虫读到空页 | `curl` 抓 HTML `grep` 正文 | 改 SSR／SSG，初始 HTML 含正文 |
| 4 | robots.txt 旧残留封锁 | 守规矩的爬虫全止步 | 打开 `/robots.txt` 逐行看 | 移除全站／检索型 Disallow |
| 5 | 速率限制把爬虫当攻击 | 有时被引、有时不被 | log 搜 UA 看 429 比例 | 为 AI 爬虫放宽速率上限 |

## 上线前的自我检查清单

1. Cloudflare／CDN 的「Block AI bots」与 Bot Fight Mode 为关闭。
2. `curl -A "PerplexityBot"` 与 `curl -A "OAI-SearchBot"` 对首页与重点文章都回 200。
3. 用 `curl` 抓初始 HTML，能 `grep` 到正文的关键句（即非 JS 渲染）。
4. `你的域名/robots.txt` 没有残留的全站或检索型 Disallow。
5. access log 里 AI 爬虫的请求以 200 为主，429／503 比例极低。

五项全过，才代表你的门是开的。内容质量决定「值不值得被引用」，但这五个设置决定「爬虫有没有机会读到你」——后者是前者的地基，顺序不能颠倒。

## 常见问题（FAQ）

**Q1：我在浏览器看网站一切正常，为什么还要担心爬虫被挡？**
因为浏览器与 AI 爬虫是两种完全不同的客户端。浏览器有指纹、会执行 JavaScript、会通过 challenge；多数 AI 爬虫三者都没有。CDN／WAF 常正是依这些差异判断「可疑流量」，所以你浏览器看到 200，爬虫吃到 403 是常态，必须用 `curl` 模拟爬虫 user-agent 才验得出来。

**Q2：挡掉 AI 爬虫和挡掉 Googlebot 是同一件事吗？**
不是。这两者的 user-agent 不同、规则常常分开设置。你可能 Googlebot 放行、传统排名正常，却同时把 OAI-SearchBot、PerplexityBot 挡掉，于是 Google 搜得到你、但 ChatGPT 与 Perplexity 引用不到你。两套可见度要分开检查。

**Q3：我只是想防止内容被 AI 拿去训练，这样做错了吗？**
没错，但工具要用对。用 Cloudflare 一键「Block AI bots」会连检索型爬虫一起挡，属于无差别封锁。正解是用 robots.txt 精准只 Disallow 训练型（GPTBot、ClaudeBot），保留检索型（OAI-SearchBot、PerplexityBot、Google-Extended）放行，这样既不被训练、又保得住被引用的曝光。

**Q4：修好设置后，多久会重新被 AI 爬到并引用？**
没有保证的时间。检索型爬虫会依自己的排程回访，通常数天到数周不等；你可以主动提交 sitemap、并在 access log 观察爬虫是否恢复以 200 抓取。修好只是把门打开，被引用还取决于内容本身的结构与可信度。

**Q5：静态网站也会有这些问题吗？**
会少很多，但不是免疫。错误三（JS 渲染）在纯静态站基本不存在，但错误一、二、四、五全在服务器／CDN／robots.txt 层，跟你网站是静态或动态无关。静态站一样可能被 Cloudflare 开关或旧 robots.txt 挡掉，同样要跑上面的检查清单。

---

服务器把门打开，只是被 AI 引用的第一步；门开了之后，内容的结构与可信度才决定你会不会真的被选中。GeoSeoToday 把爬虫可达性、可见度追踪整理成一站——工具入口见 [/zh-hans/geo/](/zh-hans/geo/)。延伸阅读：〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉先认得该放行的爬虫，〈[如何追踪 AI 可见度](/zh-hans/blog/track-ai-visibility/)〉则教你修好之后怎么确认真的被引用。
