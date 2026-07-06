---
title: robots.txt 怎么设才不挡掉 AI 引用：训练与检索爬虫分开处理
description: 很多网站在 robots.txt 一句 Disallow 就把 AI 引用一起挡掉了。本文用一张表列出 2026 年各 AI 爬虫的真实 user-agent、分辨它是训练型还是检索型，并说明挡掉每一只各自要付出什么代价——训练爬虫与检索爬虫必须分开放行。
target_keyword: robots.txt ai bot
intent: informational
cluster: On-page & 技术 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-07-30
date_updated: 2026-07-30
translations:
  zh-hant: robots-txt-for-ai-bots
  en: robots-txt-for-ai-bots
---
# robots.txt 怎么设才不挡掉 AI 引用：训练与检索爬虫分开处理

**AI 爬虫分两类：训练型（抓内容去训练模型）与检索型（回答问题时即时来抓你页面、附上引用链接）。想被 AI 引用却不想被拿去训练，你要在 robots.txt 里分开处理这两类——放行检索型保住引用曝光，训练型再依版权立场自行决定。一句 `Disallow: /` 全挡，等于连引用一起放弃。** 关键是先认得每只爬虫的真实 user-agent 与所属类型。

多数网站的 AI 流量出不来，不是内容不好，而是某任工程师或某个安全插件在 robots.txt（或 CDN 层）把 AI 爬虫整批挡了。robots.txt 是每只爬虫进站前第一个读的文件，设错这一步，后面写得再好都到不了 AI 的引用池。

## 训练爬虫与检索爬虫，差在哪？

这是全篇最重要的区分，决定你该放行谁：

- **训练型爬虫**：把你的内容抓回去，当作训练或更新大型语言模型的语料。挡掉它，主要是防止内容被纳入模型权重——但它**不负责**回答当下问题时的即时引用。是否放行，取决于你对「内容被拿去训练」的版权与竞争立场。
- **检索型爬虫**：用户在 ChatGPT、Perplexity 等处提问时，AI 即时派它来抓你的页面，用来生成答案并**附上指向你的引用链接**。这只就是 GEO 曝光的命脉——挡掉它，等于主动退出该引擎的即时引用。

一句话：**训练 = 内容进不进模型；检索 = 你进不进答案的引用。** 两者是不同的 user-agent、不同的商业取舍，robots.txt 必须分开写。

## 各 AI 爬虫 user-agent 对照表（2026）

下表列出你最该认得的爬虫、它属于哪一类，以及**挡掉它你会失去什么**——这一栏才是决策依据：

| User-agent | 所属 | 类型 | 挡掉它 = 放弃什么 |
|---|---|---|---|
| **GPTBot** | OpenAI | 训练 | 内容不进 OpenAI 训练语料（不影响 ChatGPT 搜索引用） |
| **OAI-SearchBot** | OpenAI | 检索 | ChatGPT 搜索不再即时引用你、附链接 |
| **ChatGPT-User** | OpenAI | 检索（用户触发） | 用户在 ChatGPT 内开你链接时抓不到内容 |
| **PerplexityBot** | Perplexity | 检索 | Perplexity 答案与来源列表不再收录你 |
| **ClaudeBot** | Anthropic | 训练 | 内容不进 Anthropic 训练语料 |
| **Claude-SearchBot** | Anthropic | 检索 | Claude 即时检索与引用抓不到你 |
| **Google-Extended** | Google | 训练／AI 使用 | 内容不供 Gemini／AI 产品使用（**不影响一般 Google 排名**） |
| **Googlebot** | Google | 索引（驱动 AI Overview） | 一般搜索与 AI Overview 一起消失（几乎不该挡） |
| **Bingbot** | Microsoft | 索引（驱动 Copilot） | Bing 搜索与 Copilot 同时放弃 |

两个最常被误会的地方：**Google-Extended 不是 Googlebot**——挡前者只让内容不供 Gemini 使用，你的一般 Google 排名毫发无伤；挡后者才会连搜索一起掉。而 **Bingbot 一只同时服务 Bing 与 Copilot**，挡它是一次放弃两个。想更完整的爬虫清单与管理策略，见〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉。

## robots.txt 范例：放行检索、按需挡训练

放在 `https://你的域名/robots.txt`，一进站就会被读。以下是「保住 AI 引用、同时不供训练」最常见的组合——重点在**检索型全放行、训练型才 Disallow**：

```
# ── 检索型：全部放行，这是 AI 引用曝光的命脉 ──
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

# ── 训练型：不想被拿去训练就 Disallow（可自行取舍）──
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# ── 一般爬虫 ──
User-agent: *
Allow: /
Sitemap: https://你的域名/sitemap.xml
```

若你完全不介意内容被训练（例如公开教程、想最大化曝光），把上面训练型那三段的 `Disallow: /` 改成 `Allow: /` 即可，最省事也风险最低。

## 五个把 AI 引用挡在门外的 robots.txt 错误

按实务踩雷频率排序，逐一给修法：

1. **残留的 `User-agent: * Disallow: /`**：测试站或旧设置没清掉，一句全站封锁，所有爬虫（含检索型）一起挡。修法：确认正式站没有这行。
2. **把检索型当训练型一起挡**：想挡 GPTBot 却连 OAI-SearchBot 一起 Disallow，引用曝光就没了。修法：训练、检索分两组写，只挡你真正想挡的那组。
3. **user-agent 名称拼错或大小写想当然耳**：写成 `GPT-Bot`、`Perplexity-Bot` 这种不存在的名字，规则对谁都没生效。修法：以各家官方文档公布的字符串为准，逐字比对。
4. **robots.txt 没挡，但 CDN／WAF 挡了**：Cloudflare、防火墙的「封锁 AI bot」开关或对 bot 回 403，会让 robots.txt 的放行形同虚设。修法：查服务器与 CDN 日志，确认检索型爬虫回的是 200 而非 403。
5. **内容要 JavaScript 才渲染得出**：多数 AI 爬虫不执行 JS，就算放行也只读到空壳。修法：重要正文用服务器端渲染或预渲染，确保初始 HTML 就含内容。

## 验证：确认你「以为放行」的真的放行了

设完别凭感觉，做三个动作实测：

1. **直接开 `你的域名/robots.txt`**：确认没有残留全站 Disallow，且检索型爬虫确实在放行列表里。
2. **查服务器 access log**：搜索上表的 user-agent，确认它们真的有来、且响应是 200。看得到爬取行为，才代表放行生效——这也是唯一能观察 AI bot 真实抓取的地方。
3. **顺手看爬取预算**：AI 爬虫共享你的服务器资源，量大时优先用缓存／CDN 而非封锁来解，别为了省带宽把引用一起牺牲，详见〈[crawl budget 是什么](/zh-hans/blog/what-is-crawl-budget/)〉。

## 常见问题（FAQ）

**Q1：训练爬虫和检索爬虫到底差在哪？**
训练型（如 GPTBot、ClaudeBot）抓内容去训练模型，挡它只防内容进模型；检索型（如 OAI-SearchBot、PerplexityBot）在用户提问当下即时来抓你的页面、生成答案并附引用链接。想被 AI 引用一定要放行检索型，训练型才是可自由取舍的那一组。

**Q2：挡掉 GPTBot，ChatGPT 就引用不到我了吗？**
不会。GPTBot 是训练用；ChatGPT 搜索的即时引用主要靠 OAI-SearchBot 与 ChatGPT-User。所以你可以「放行 OAI-SearchBot、封锁 GPTBot」，既保住被引用又不被训练——但两者务必分开设置，别一起挡。

**Q3：挡 Google-Extended 会伤到我的 Google 排名吗？**
不会。Google-Extended 只控制内容是否供 Gemini 等 AI 产品使用，与驱动一般搜索和 AI Overview 的 Googlebot 是两只独立爬虫。挡 Google-Extended 只影响 AI 使用，传统 SEO 排名不受影响。

**Q4：robots.txt 挡得住不守规矩的爬虫吗？**
robots.txt 是「约定」而非强制。上表这些主流合规爬虫会遵守，但它靠自律。若要技术性硬挡（含恶意仿冒），得在服务器或 CDN 层做 user-agent／IP 过滤，光靠 robots.txt 不够。

**Q5：我不确定要不要挡训练型，有没有安全预设？**
有。对多数想成长的内容网站，最安全的预设是**检索型全放行、训练型也放行**——最大化曝光、零操作风险。只有当内容是付费、机密或有明确版权顾虑时，才选择性 Disallow 训练型。

---

robots.txt 设对，是被 AI 引用的地基；设错，内容写再好也进不了引用池。GeoSeoToday把爬虫设置、可见度追踪整理成一站——工具入口见 [/zh-hans/geo/](/zh-hans/geo/)，方法全貌见〈[On-page & 技术 SEO 完整指南](/zh-hans/blog/onpage-technical-seo-guide/)〉。延伸阅读：〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉。
