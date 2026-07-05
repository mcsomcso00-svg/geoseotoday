---
title: llms.txt 是什麼？要不要幫網站加（附範例）
description: llms.txt 是 2024 年由 Jeremy Howard／Answer.AI 提出的提案標準，放在網站根目錄，用 Markdown 幫 AI 爬蟲快速理解網站重點。本文解釋它的用途、目前的採用現況（尚未被主流引擎正式採用），並附上可直接套用的範例。
target_keyword: llms.txt 是什麼
intent: informational
cluster: AIO / AI 搜尋優化（群集 6）
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-07-05
---
# llms.txt 是什麼？要不要幫網站加（附範例）

**llms.txt 是一個放在網站根目錄（`/llms.txt`）的純文字檔，用 Markdown 格式列出網站最重要的頁面與說明，目的是讓大型語言模型（LLM）更快讀懂你的網站。它由 Jeremy Howard／Answer.AI 在 2024 年提出，屬於社群提案標準，尚未被任何主流 AI 引擎正式採用。** 換句話說：它是一個低成本、前瞻性的做法，值得加，但別期待它現在就帶來可見度。

## llms.txt 想解決什麼問題？

一般網頁對 AI 爬蟲並不友善：導覽列、廣告、JavaScript、大量 HTML 標記，會稀釋掉真正重要的內容。llms.txt 的構想是：**給 LLM 一份乾淨、精煉、Markdown 格式的「網站導覽」**，直接告訴它「這個網站在講什麼、哪些頁面最值得看」，省去解析雜訊的成本。

它刻意選用 Markdown，因為對 LLM 而言，Markdown 幾乎是最容易解析的結構化純文字格式——標題、清單、連結一目了然。

## llms.txt 和 robots.txt、sitemap.xml 差在哪？

三者都放根目錄，但目的完全不同，別搞混：

| 檔案 | 給誰看 | 目的 |
|---|---|---|
| **robots.txt** | 所有爬蟲 | 規範「能不能爬」（Allow/Disallow） |
| **sitemap.xml** | 搜尋引擎 | 列出「有哪些網址」供索引 |
| **llms.txt** | LLM | 說明「網站重點是什麼」供理解 |

一句話：robots.txt 管權限、sitemap 管清單、llms.txt 管理解。它不取代前兩者，是額外的一層。

## llms.txt 範例（可直接改用）

一份基本的 llms.txt 大致長這樣，放在 `https://你的網域/llms.txt`：

```
# GeoSeoToday

> 繁體中文 SEO/GEO/AIO 教學部落格，教你把內容優化到被 AI 引擎引用。

## 核心指南
- [AIO 完整指南](/zh-hant/blog/aio-complete-guide/)：AI 搜尋優化總整理
- [GEO 是什麼](/zh-hant/blog/what-is-geo/)：生成式引擎優化定義
- [Google AI Overview 是什麼](/zh-hant/blog/what-is-ai-overview/)：AI 摘要運作原理

## 工具
- [GEO 就緒度檢測器](/zh-hant/geo/)：文章可被引用程度評分

## 說明
本站內容以答案優先、可引用段落為原則撰寫。
```

重點原則：**只列最重要的頁面、每條加一句說明、用相對或完整連結**。llms.txt 不是把整站塞進去，而是替 LLM 做一份精選書單。

## 要不要幫網站加？誠實的建議

該加，理由與保留同時說清楚：

1. **成本極低**：一個純文字檔、幾十行，維護成本近乎零。
2. **屬前瞻性佈局**：一旦未來有引擎採用，你已就緒；就算沒有，也不會有壞處。
3. **但別高估短期效益**：截至 2026 年，OpenAI、Google、Perplexity 等主流引擎**尚未公開宣布正式讀取 llms.txt**，它目前不會直接提升你的 AI 可見度。
4. **它不能替代基本功**：真正決定被不被引用的，仍是內容本身可不可引用、AI 爬蟲讀不讀得到你的頁面。與其只加 llms.txt，不如先確保爬蟲存取正常（見〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉）。

結論：把它當「免費的加分項」，不是「見效的主力」。

## 常見問題（FAQ）

**Q1：加了 llms.txt，AI 就會引用我嗎？**
不會直接因此被引用。它目前沒有被主流引擎正式採用，真正決定引用的是內容品質與爬蟲可存取性。llms.txt 是前瞻性佈局，不是見效手段。

**Q2：llms.txt 是官方標準嗎？**
不是。它是 2024 年 Jeremy Howard／Answer.AI 提出的社群提案，尚未成為 W3C 或任何引擎的官方標準，採用與否由各網站自行決定。

**Q3：llms.txt 和 llms-full.txt 有什麼差別？**
提案中另有 `llms-full.txt` 的做法，把完整內容（而非只有連結）也放進去，供 LLM 一次讀取。一般網站先做基本的 llms.txt 即可，內容量大時再考慮完整版。

**Q4：加了會不會影響 SEO？**
不會有負面影響。它是給 LLM 看的額外檔案，不干擾 Google 的一般索引與排名；robots.txt 與 sitemap.xml 仍是 SEO 的主角。

---

llms.txt 是加分項，不是主力；真正的地基是「內容可被引用」與「爬蟲讀得到」。GeoSeoToday把這些檢測整理成一站——完整落地見 [AIO 完整指南](/zh-hant/blog/aio-complete-guide/)，工具入口見 [/zh-hant/aio/](/zh-hant/aio/)。延伸閱讀：〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉與〈[AIO 是什麼？](/zh-hant/blog/what-is-aio/)〉。
