---
title: llms.txt 是什么？要不要帮网站加（附范例）
description: llms.txt 是 2024 年由 Jeremy Howard／Answer.AI 提出的提案标准，放在网站根目录，用 Markdown 帮 AI 爬虫快速理解网站重点。本文解释它的用途、目前的采用现况（尚未被主流引擎正式采用），并附上可直接套用的范例。
target_keyword: llms.txt 是什么
intent: informational
cluster: AIO / AI 搜索优化（群集 6）
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-11-02
enhanced: true
translations:
  zh-hant: what-is-llms-txt
  en: what-is-llms-txt
---
# llms.txt 是什么？要不要帮网站加（附范例）

**llms.txt 是一个放在网站根目录（`/llms.txt`）的纯文本文件，用 Markdown 格式列出网站最重要的页面与说明，目的是让大语言模型（LLM）更快读懂你的网站。它由 Jeremy Howard／Answer.AI 在 2024 年提出，属于[社区提案标准](https://llmstxt.org/)；Google 已明确表示 Google 搜索不使用它。** 换句话说：它不是 Google 搜索或 AI 概览的排名／曝光手段，顶多是给其他服务与工具的低成本选配，别期待它带来 Google 上的可见度。

> **Google 的立场（2026-06-15 发布，2026-11-02 核实）**
>
> Google 在[搜索文档更新日志](https://developers.google.com/search/updates)2026 年 6 月 15 日的条目〈Clarifying guidance on llms.txt files〉中，为其[生成式 AI 优化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)补上说明：Google 搜索会忽略 llms.txt，创建并维护它对网站在 Google 搜索的可见度或排名既不会有帮助、也不会有损害；若你想为其他服务或系统维护这类文件，也没有问题。同一份指南还指出，要出现在 Google 搜索（含生成式 AI 功能），不需要另外制作机器可读文件、AI 文本文件、标记或 Markdown；[Google 的 AI 功能说明](https://developers.google.com/search/docs/appearance/ai-features)同样没有要求额外文件。
>
> 因此，本文提到的 llms.txt 用处，只限于「其他服务与工具」，不适用于 Google 搜索与 AI 概览。

## llms.txt 想解决什么问题？

一般网页对 AI 爬虫并不友好：导航栏、广告、JavaScript、大量 HTML 标记，会稀释掉真正重要的内容。llms.txt 的构想是：**给 LLM 一份干净、精炼、Markdown 格式的「网站导览」**，直接告诉它「这个网站在讲什么、哪些页面最值得看」，省去解析噪声的成本。

提案刻意选用 Markdown，理由是人与 LLM 都读得懂，同时仍可用常规程序方式解析（见 [llmstxt.org](https://llmstxt.org/)）——标题、列表、链接一目了然。

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

先说结论：想靠它提升 Google 搜索或 AI 概览的表现，不必加；想给其他服务或工具使用，可以加。理由与保留如下：

1. **成本极低**：一个纯文本文件、几十行，维护成本近乎零。
2. **对 Google 搜索没有效果**：如上方 Google 的立场，Google 搜索会忽略它，加了不会帮你、也不会伤你。
3. **对其他服务可能有用（需自行确认）**：Google 并不反对你为其他服务或系统维护 llms.txt。至于哪些非 Google 的工具或 AI 服务真的会读取它，本文没有逐一核实，采用前请以该服务自己的官方文档为准。
4. **它不能替代基本功**：真正决定被不被引用的，仍是内容本身可不可引用、AI 爬虫读不读得到你的页面。Google 也表示其生成式 AI 功能建立在核心搜索排名与质量系统之上（[官方指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)），所以先确保爬虫访问正常（见 AI 爬虫清单与管理）。

结论：把它当「对 Google 无效、对其他服务可能有用的选配」，不是「见效的主力」。

## 参考资料

- [Google 搜索文档更新日志：Clarifying guidance on llms.txt files（2026-06-15）](https://developers.google.com/search/updates)（Google Search Central, 2026）
- [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)（Google Search Central, 2026）
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)（Google Search Central）
- [llms.txt 提案](https://llmstxt.org/)（llmstxt.org，Jeremy Howard, 2024）

## 常见问题（FAQ）

**Q1：加了 llms.txt，AI 就会引用我吗？**
不会。Google 已表示 Google 搜索会忽略 llms.txt，加了既不会帮你、也不会伤你；真正决定引用的是内容质量与爬虫可访问性。其他 AI 服务是否读取，要看各自的官方文档，本文没有逐一验证。

**Q2：llms.txt 是官方标准吗？**
不是。它是 2024 年 Jeremy Howard／Answer.AI 提出的社区提案，不是 W3C 标准，Google 搜索也不使用它，要不要创建由各网站自行决定。

**Q3：llms.txt 和 llms-full.txt 有什么差别？**
社区中另有 `llms-full.txt` 的做法，把完整内容（而非只有链接）放进去供一次读取；它不在 [llmstxt.org](https://llmstxt.org/) 提案页所述的规范内，而 Google 对 AI 文本文件「不需要、搜索不使用」的说明，推论上同样适用。除非你要服务某个明确要求它的非 Google 服务，否则基本的 llms.txt（甚至不做）就足够。

**Q4：加了会不会影响 SEO？**
不会有负面影响，也没有正面影响：Google 表示 Google 搜索会忽略它，对可见度与排名既无害也无益（[官方指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)）。robots.txt 与 sitemap.xml 仍是 SEO 的主角。

---

对 Google 搜索而言，llms.txt 不是加分项，也不是主力；真正的地基是「内容可被引用」与「爬虫读得到」。GeoSeoToday 把这些检测整理成一站——完整落地见 [AIO 完整指南](/zh-hans/blog/aio-complete-guide/)，工具入口见 [/zh-hans/aio/](/zh-hans/aio/)。延伸阅读：〈[AIO 是什么？](/zh-hans/blog/what-is-aio/)〉。
