---
title: llms.txt 与 robots.txt 分工：一张表看懂各自管什么
description: robots.txt 管「能不能爬」，llms.txt 管「该读哪些重点」——两者管的是不同层，不是替代关系。本文用一张分工对照表、一个「谁负责什么」情境矩阵，与正确的设置顺序，教你何时该动哪个文件，避免用 llms.txt 去修根本是 robots.txt 的问题。
target_keyword: llms.txt robots.txt
intent: informational
cluster: AIO / AI 搜索优化（群集 6）
author: GeoSeoToday
date_published: 2026-08-05
date_updated: 2026-08-05
translations:
  zh-hant: llms-txt-vs-robots-txt
  en: llms-txt-vs-robots-txt
---
# llms.txt 与 robots.txt 分工：一张表看懂各自管什么

**robots.txt 管「爬虫能不能访问你的页面」，llms.txt 管「AI 读你的网站时该优先看哪些重点」——两者管的是完全不同的层，是互补而非替代。** 一句话记法：robots.txt 是门禁（准不准进），llms.txt 是导览图（进来后先看哪里）。搞混这条分工，最常见的下场就是花力气写了漂亮的 llms.txt，却没发现真正的问题是 robots.txt 早就把 AI 爬虫挡在门外——导览图再精美，门没开也没人读得到。

## 一句话定位：门禁 vs. 导览图

先把两个文件各自的职责钉死，后面所有取舍都从这里推导：

- **robots.txt** 是 1994 年就存在的爬虫协议，放在根目录，用 `User-agent` 加 `Allow`／`Disallow` 规范「哪只爬虫能不能访问哪些路径」。它管的是**访问权限**，主流合规爬虫（含 GPTBot、OAI-SearchBot、PerplexityBot、Google-Extended、ClaudeBot）会遵守。
- **llms.txt** 是 2024 年由 Jeremy Howard／Answer.AI 提出的社区提案，同样放根目录，但用 Markdown 列出「这个网站最重要的页面与说明」，目的是让大型语言模型**更快抓到重点**。它管的是**理解与取材引导**，且截至 2026 年**尚未被任何主流引擎正式采用**。

关键差异一句话：**robots.txt 决定「读不读得到」，llms.txt 建议「先读哪些」。** 前者是硬性的访问闸门，后者是软性的阅读建议。

## 分工对照表：六个维度一次看懂

把两个文件放在同一张表上比，差异就一目了然。（顺带把常被一起讨论的 sitemap.xml 也放进来，避免三者混淆。）

| 维度 | robots.txt | llms.txt | sitemap.xml |
|---|---|---|---|
| **管什么** | 能不能爬（访问权限） | 该优先读哪些重点（取材引导） | 有哪些网址（收录清单） |
| **给谁看** | 所有爬虫 | 大型语言模型（LLM） | 搜索引擎 |
| **格式** | 纯文本指令（User-agent／Allow／Disallow） | Markdown（标题、清单、链接） | XML |
| **是否强制** | 约定，合规爬虫会遵守 | 纯建议，且尚未被主流引擎采用 | 建议，引擎参考但不保证 |
| **采用现况（2026）** | 全面通用、事实标准 | 提案阶段，主流引擎未正式读取 | 全面通用、事实标准 |
| **设错的代价** | 极高：一行 Disallow 就能让整站对 AI 隐形 | 极低：顶多是没效果，不会有坏处 | 中：漏网址影响收录，但爬虫仍能自行发现 |

这张表带出一个最重要的实务结论：**robots.txt 是「不能设错」的文件，llms.txt 是「设了加分、不设也不扣分」的文件。** 两者的风险量级差好几个数量级，投入的谨慎程度也该不同。

## 「谁负责什么」情境矩阵：这个问题该动哪个文件？

实务上大家的困惑几乎都是「我这个状况该改哪个文件」。用下表直接对号入座：

| 你想做的事 | 该动的文件 | 怎么做 |
|---|---|---|
| 让 ChatGPT 搜索／Perplexity 读得到我 | **robots.txt** | 放行 OAI-SearchBot、PerplexityBot（`Allow: /`） |
| 不想内容被拿去训练模型 | **robots.txt** | 屏蔽训练型爬虫 GPTBot、ClaudeBot（`Disallow: /`） |
| 挡掉某个 AI 爬虫、保留一般 Google 排名 | **robots.txt** | 只 Disallow Google-Extended，不动 Googlebot |
| 告诉 LLM「我站上最重要的三篇是哪三篇」 | **llms.txt** | 在 llms.txt 用 Markdown 列出核心页加一句说明 |
| 帮 LLM 省下解析导航栏／广告的成本 | **llms.txt** | 提供精炼的 Markdown 网站导览 |
| 「我加了 llms.txt 但 AI 还是引用不到我」 | **先查 robots.txt** | 九成是爬虫被挡或内容需 JS 才渲染，不是 llms.txt 的问题 |

最后一行是本文最想强调的反模式：**当 AI 引用不到你，第一个要检查的永远是 robots.txt 与爬虫可达性，而不是急着写 llms.txt。** llms.txt 解决的是「读得到之后、读得够不够精准」，它无法解决「根本读不到」。顺序错了，力气全白费。

## 正确的设置顺序：先开门，再画导览图，最后才进阶

把两个文件摆对先后，才不会本末倒置：

1. **先修 robots.txt（地基，必做）**：确认没有残留的 `User-agent: * Disallow: /` 或把 AI 爬虫全挡的旧设置。想被引用，至少放行检索型爬虫（OAI-SearchBot、PerplexityBot、Bingbot）与 Google-Extended。
2. **验证爬虫真的读得到（必做）**：开 `你的网域/robots.txt` 肉眼确认规则；查 access log 确认上述 user-agent 响应是 200 而非 403／404；确认重要内容不需 JavaScript 才渲染得出来。
3. **确保内容本身可被引用（必做）**：答案优先段、清单、表格、明确作者实体——这才是真正决定被不被引用的主因。
4. **最后才加 llms.txt（加分，选做）**：地基都稳了，再花十分钟写一份精炼的 llms.txt，当作前瞻性布局。它不会现在就见效，但成本近乎零、未来有引擎采用时你已就绪。

一句话总结顺序：**robots.txt 与爬虫可达性是必做地基，llms.txt 是做完地基后的免费加分项。** 别把加分项当地基修。

## 一个诚实的边界：llms.txt 目前不是「见效手段」

要说清楚避免误导：**截至 2026 年，OpenAI、Google、Perplexity 等主流引擎尚未公开宣布正式读取 llms.txt，所以加它现在不会直接提升你的 AI 可见度。** 它的价值是「成本极低的前瞻布局」，不是「补上就会被引用」的开关。相对地，robots.txt 设对与否，是此刻就在影响你能不能被 AI 读到的硬变量。所以资源有限时，顺序永远是：先把 robots.txt 与爬虫可达性做对（高杠杆、立即生效），再把 llms.txt 当作有余力时的加分（低杠杆、未来生效）。把两者的权重摆对，才不会在错的文件上过度投资。

## 常见问题（FAQ）

**Q1：只加 llms.txt、不管 robots.txt 可以吗？**
不行，而且顺序反了。robots.txt 决定爬虫读不读得到你，是硬性闸门；llms.txt 只是读得到之后的阅读建议。若 robots.txt 把 AI 爬虫挡着，llms.txt 写得再好也没人读。永远先确认 robots.txt 放行，再谈 llms.txt。

**Q2：robots.txt 和 llms.txt 会不会互相冲突？**
不会，两者管不同层、互不覆盖。robots.txt 管「能不能爬这个路径」，llms.txt 管「读我的网站时该优先看哪些重点」。合理的组合是：robots.txt 放行检索型爬虫，llms.txt 引导它们看重点——分工互补，不打架。

**Q3：加了 llms.txt，AI 现在就会引用我吗？**
不会直接因此被引用。截至 2026 年它尚未被主流引擎正式采用，真正决定引用的是内容可不可引用与爬虫读不读得到。把它当免费的前瞻布局，别当见效的主力。

**Q4：那到底哪个比较重要、该先花时间在哪个？**
robots.txt 明显优先。它设错的代价极高（一行 Disallow 让整站对 AI 隐形），且立即生效；llms.txt 设了顶多加分、不设也不扣分，且尚未被采用。资源有限时，先把 robots.txt 与爬虫可达性做对，再有余力才加 llms.txt。

---

分工搞清楚后，真正的地基仍是「爬虫读得到」加「内容可被引用」。GeoSeoToday 把这些检测整理成一站——总整理见 [AIO 完整指南](/zh-hans/blog/aio-complete-guide/)，工具入口见 [/zh-hans/aio/](/zh-hans/aio/)。延伸阅读：想深入 robots.txt 对各 AI 爬虫的放行／屏蔽，看〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉；想把 llms.txt 一次写对并附范例，看〈[llms.txt 是什么？要不要帮网站加](/zh-hans/blog/what-is-llms-txt/)〉。
