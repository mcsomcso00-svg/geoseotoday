---
title: llms.txt 是什么？要不要帮网站加（附范例）
description: llms.txt 是 2024 年由 Jeremy Howard／Answer.AI 提出的提案标准，放在网站根目录，用 Markdown 帮 AI 爬虫快速理解网站重点。本文解释它的用途、目前的采用现况（尚未被主流引擎正式采用），并附上可直接套用的范例。
target_keyword: llms.txt 是什么
intent: informational
cluster: AIO / AI 搜索优化（群集 6）
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-07-05
translations:
  zh-hant: what-is-llms-txt
  en: what-is-llms-txt
---
# llms.txt 是什么？要不要帮网站加（附范例）

**llms.txt 是一个放在网站根目录（`/llms.txt`）的纯文本文件，用 Markdown 格式列出网站最重要的页面与说明，目的是让大语言模型（LLM）更快读懂你的网站。它由 Jeremy Howard／Answer.AI 在 2024 年提出，属于社区提案标准，尚未被任何主流 AI 引擎正式采用。** 换句话说：它是一个低成本、前瞻性的做法，值得加，但别期待它现在就带来可见度。

## llms.txt 想解决什么问题？

一般网页对 AI 爬虫并不友好：导航栏、广告、JavaScript、大量 HTML 标记，会稀释掉真正重要的内容。llms.txt 的构想是：**给 LLM 一份干净、精炼、Markdown 格式的「网站导览」**，直接告诉它「这个网站在讲什么、哪些页面最值得看」，省去解析噪声的成本。

它刻意选用 Markdown，因为对 LLM 而言，Markdown 几乎是最容易解析的结构化纯文本格式——标题、列表、链接一目了然。

## llms.txt 和 robots.txt、sitemap.xml 差在哪？

三者都放根目录，但目的完全不同，别搞混：

| 文件 | 给谁看 | 目的 |
|---|---|---|
| **robots.txt** | 所有爬虫 | 规范「能不能爬」（Allow/Disallow） |
| **sitemap.xml** | 搜索引擎 | 列出「有哪些网址」供索引 |
| **llms.txt** | LLM | 说明「网站重点是什么」供理解 |

一句话：robots.txt 管权限、sitemap 管清单、llms.txt 管理解。它不取代前两者，是额外的一层。

## llms.txt 范例（可直接改用）

一份基本的 llms.txt 大致长这样，放在 `https://你的域名/llms.txt`：

```
# GeoSeoToday

> 简体中文 SEO/GEO/AIO 教学博客，教你把内容优化到被 AI 引擎引用。

## 核心指南
- [AIO 完整指南](/zh-hans/blog/aio-complete-guide/)：AI 搜索优化总整理
- [GEO 是什么](/zh-hans/blog/what-is-geo/)：生成式引擎优化定义
- [Google AI Overview 是什么](/zh-hans/blog/what-is-ai-overview/)：AI 摘要运作原理

## 工具
- [GEO 就绪度检测器](/zh-hans/geo/)：文章可被引用程度评分

## 说明
本站内容以答案优先、可引用段落为原则撰写。
```

重点原则：**只列最重要的页面、每条加一句说明、用相对或完整链接**。llms.txt 不是把整站塞进去，而是替 LLM 做一份精选书单。

## 要不要帮网站加？诚实的建议

该加，理由与保留同时说清楚：

1. **成本极低**：一个纯文本文件、几十行，维护成本近乎零。
2. **属前瞻性布局**：一旦未来有引擎采用，你已就绪；就算没有，也不会有坏处。
3. **但别高估短期效益**：截至 2026 年，OpenAI、Google、Perplexity 等主流引擎**尚未公开宣布正式读取 llms.txt**，它目前不会直接提升你的 AI 可见度。
4. **它不能替代基本功**：真正决定被不被引用的，仍是内容本身可不可引用、AI 爬虫读不读得到你的页面。与其只加 llms.txt，不如先确保爬虫访问正常（见 AI 爬虫清单与管理）。

结论：把它当「免费的加分项」，不是「见效的主力」。

## 常见问题（FAQ）

**Q1：加了 llms.txt，AI 就会引用我吗？**
不会直接因此被引用。它目前没有被主流引擎正式采用，真正决定引用的是内容质量与爬虫可访问性。llms.txt 是前瞻性布局，不是见效手段。

**Q2：llms.txt 是官方标准吗？**
不是。它是 2024 年 Jeremy Howard／Answer.AI 提出的社区提案，尚未成为 W3C 或任何引擎的官方标准，采用与否由各网站自行决定。

**Q3：llms.txt 和 llms-full.txt 有什么差别？**
提案中另有 `llms-full.txt` 的做法，把完整内容（而非只有链接）也放进去，供 LLM 一次读取。一般网站先做基本的 llms.txt 即可，内容量大时再考虑完整版。

**Q4：加了会不会影响 SEO？**
不会有负面影响。它是给 LLM 看的额外文件，不干扰 Google 的一般索引与排名；robots.txt 与 sitemap.xml 仍是 SEO 的主角。

---

llms.txt 是加分项，不是主力；真正的地基是「内容可被引用」与「爬虫读得到」。GeoSeoToday 把这些检测整理成一站——完整落地见 [AIO 完整指南](/zh-hans/blog/aio-complete-guide/)，工具入口见 [/zh-hans/aio/](/zh-hans/aio/)。延伸阅读：〈[AIO 是什么？](/zh-hans/blog/what-is-aio/)〉。
