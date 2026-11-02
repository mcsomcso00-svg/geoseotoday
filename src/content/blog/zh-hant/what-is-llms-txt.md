---
title: llms.txt 是什麼？要不要幫網站加（附範例）
description: llms.txt 是 2024 年由 Jeremy Howard／Answer.AI 提出的提案標準，放在網站根目錄，用 Markdown 幫 AI 爬蟲快速理解網站重點。本文解釋它的用途、目前的採用現況（尚未被主流引擎正式採用），並附上可直接套用的範例。
target_keyword: llms.txt 是什麼
intent: informational
cluster: AIO / AI 搜尋優化（群集 6）
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-11-02
enhanced: true
translations:
  zh-hans: what-is-llms-txt
  en: what-is-llms-txt
---
# llms.txt 是什麼？要不要幫網站加（附範例）

**llms.txt 是一個放在網站根目錄（`/llms.txt`）的純文字檔，用 Markdown 格式列出網站最重要的頁面與說明，目的是讓大型語言模型（LLM）更快讀懂你的網站。它由 Jeremy Howard／Answer.AI 在 2024 年提出，屬於[社群提案標準](https://llmstxt.org/)；Google 已明確表示 Google 搜尋不使用它。** 換句話說：它不是 Google 搜尋或 AI 總覽的排名／曝光手段，頂多是給其他服務與工具的低成本選配，別期待它帶來 Google 上的可見度。

> **Google 的立場（2026-06-15 發布，2026-11-02 查證）**
>
> Google 在[搜尋文件更新日誌](https://developers.google.com/search/updates)2026 年 6 月 15 日的條目〈Clarifying guidance on llms.txt files〉中，為其[生成式 AI 優化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)補上說明：Google 搜尋會忽略 llms.txt，建立並維護它對網站在 Google 搜尋的可見度或排名既不會有幫助、也不會有傷害；若你想為其他服務或系統維護這類檔案，也沒有問題。同一份指南還指出，要出現在 Google 搜尋（含生成式 AI 功能），不需要另外製作機器可讀檔、AI 文字檔、標記或 Markdown；[Google 的 AI 功能說明](https://developers.google.com/search/docs/appearance/ai-features)同樣沒有要求額外檔案。
>
> 因此，本文提到的 llms.txt 用處，只限於「其他服務與工具」，不適用於 Google 搜尋與 AI 總覽。

## llms.txt 想解決什麼問題？

一般網頁對 AI 爬蟲並不友善：導覽列、廣告、JavaScript、大量 HTML 標記，會稀釋掉真正重要的內容。llms.txt 的構想是：**給 LLM 一份乾淨、精煉、Markdown 格式的「網站導覽」**，直接告訴它「這個網站在講什麼、哪些頁面最值得看」，省去解析雜訊的成本。

提案刻意選用 Markdown，理由是人與 LLM 都讀得懂，同時仍可用一般程式方式解析（見 [llmstxt.org](https://llmstxt.org/)）——標題、清單、連結一目了然。

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

先講結論：想靠它提升 Google 搜尋或 AI 總覽的表現，不必加；想給其他服務或工具使用，可以加。理由與保留如下：

1. **成本極低**：一個純文字檔、幾十行，維護成本近乎零。
2. **對 Google 搜尋沒有效果**：如上方 Google 的立場，Google 搜尋會忽略它，加了不會幫你、也不會傷你。
3. **對其他服務可能有用（需自行確認）**：Google 並不反對你為其他服務或系統維護 llms.txt。至於哪些非 Google 的工具或 AI 服務真的會讀取它，本文沒有逐一查證，採用前請以該服務自己的官方文件為準。
4. **它不能替代基本功**：真正決定被不被引用的，仍是內容本身可不可引用、AI 爬蟲讀不讀得到你的頁面。Google 也表示其生成式 AI 功能建立在核心搜尋排名與品質系統之上（[官方指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)），所以先確保爬蟲存取正常（見〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉）。

結論：把它當「對 Google 無效、對其他服務可能有用的選配」，不是「見效的主力」。

## 參考資料

- [Google 搜尋文件更新日誌：Clarifying guidance on llms.txt files（2026-06-15）](https://developers.google.com/search/updates)（Google Search Central, 2026）
- [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)（Google Search Central, 2026）
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)（Google Search Central）
- [llms.txt 提案](https://llmstxt.org/)（llmstxt.org，Jeremy Howard, 2024）

## 常見問題（FAQ）

**Q1：加了 llms.txt，AI 就會引用我嗎？**
不會。Google 已表示 Google 搜尋會忽略 llms.txt，加了既不會幫你、也不會傷你；真正決定引用的是內容品質與爬蟲可存取性。其他 AI 服務是否讀取，要看各自的官方文件，本文沒有逐一驗證。

**Q2：llms.txt 是官方標準嗎？**
不是。它是 2024 年 Jeremy Howard／Answer.AI 提出的社群提案，不是 W3C 標準，Google 搜尋也不使用它，要不要建立由各網站自行決定。

**Q3：llms.txt 和 llms-full.txt 有什麼差別？**
社群中另有 `llms-full.txt` 的做法，把完整內容（而非只有連結）放進去供一次讀取；它不在 [llmstxt.org](https://llmstxt.org/) 提案頁所述的規格內，而 Google 對 AI 文字檔「不需要、搜尋不使用」的說明，推論上同樣適用。除非你要服務某個明確要求它的非 Google 服務，否則基本的 llms.txt（甚至不做）就足夠。

**Q4：加了會不會影響 SEO？**
不會有負面影響，也沒有正面影響：Google 表示 Google 搜尋會忽略它，對可見度與排名既無害也無益（[官方指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)）。robots.txt 與 sitemap.xml 仍是 SEO 的主角。

---

對 Google 搜尋而言，llms.txt 不是加分項，也不是主力；真正的地基是「內容可被引用」與「爬蟲讀得到」。GeoSeoToday把這些檢測整理成一站——完整落地見 [AIO 完整指南](/zh-hant/blog/aio-complete-guide/)，工具入口見 [/zh-hant/aio/](/zh-hant/aio/)。延伸閱讀：〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉與〈[AIO 是什麼？](/zh-hant/blog/what-is-aio/)〉。
