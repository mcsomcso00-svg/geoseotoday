---
title: FAQ 富結果 2026 年 5 月退場：FAQPage schema 還要留嗎？
description: Google 已於 2026 年 5 月 7 日起不再顯示 FAQ 富結果。本文用決策表告訴你，各類頁面的 FAQPage schema 該保留、移除還是改成可見問答，以及完整時間軸與檢查步驟。
target_keyword: faq 富結果 停用
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-11-17
date_updated: 2026-11-17
enhanced: true
translations:
  zh-hans: faq-rich-result-deprecated
  en: faq-rich-result-deprecated
---
# FAQ 富結果 2026 年 5 月退場：FAQPage schema 還要留嗎？

**Google 自 2026 年 5 月 7 日起不再於搜尋結果顯示 FAQ 富結果，所以加 FAQPage schema 已無法換來搜尋結果裡的展開問答。** 但頁面上「看得見的問答區塊」仍然有用：它讓內容更好摘錄，Bing 也建議使用。已有的 schema 可留可刪，關鍵是別為它再投入新成本。

## 時間軸：Google 到底做了什麼？

根據 [Google Search 更新紀錄](https://developers.google.com/search/updates)：

| 日期 | 事件 |
|---|---|
| 2026-05-07 | FAQ 富結果不再於 Google 搜尋顯示（生效日） |
| 2026-05-08 | FAQ 富結果文件加上停用公告 |
| 2026-06-15 | FAQ 文件被移除，更新紀錄註明該功能「不再顯示於 Google 搜尋結果」 |

更新紀錄沒有說明已存在的 FAQPage 標記會怎樣，也沒提到 Search Console 的報表安排；這兩點我們無法從官方頁面確認，請以你自己的 Search Console 為準。

## 還要不要留 FAQPage schema？決策表

Google 的 [AI 搜尋優化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)寫明：「Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add.」也就是說，FAQPage 不是進入 AI 功能的門票。我們的建議如下（這是本站的判斷，不是 Google 的規定）：

| 頁面類型 | 建議 | 理由 |
|---|---|---|
| 已有 FAQPage 的舊文章 | 保留，不必特地清除 | 移除沒有收益，還要承擔改版風險 |
| 新文章 | 可寫可不寫，不要為它花工時 | 搜尋結果已不顯示，也不是 AI 功能必要條件 |
| 靠 FAQ 當唯一內容的薄頁面 | 改成實質內容，而非調整 schema | 問題在內容，不在標記 |
| 客服／產品頁的問答 | 保留頁面上可見的問答文字 | 讀者與 AI 都能直接取用 |
| 標記內容與頁面可見文字不符 | 立即修正或刪除標記 | 標記應與可見內容一致 |

## 可見的問答區塊仍然有價值

Bing 在 [AI Performance 公告](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)中建議：「Clear headings, tables, and FAQ sections help surface key information.」這句談的是頁面結構，而不是 schema。Bing 同時說明，該報表顯示的是頁面被引用的頻率，不代表排名或重要性。因此合理做法是：**留下 FAQ 文字，把 schema 視為可選。**

## 我們自己的情況（誠實揭露）

本站的文章只要依 `**Q1：問題？**` 格式撰寫 FAQ，就會自動產生 FAQPage 標記。既然富結果已退場，這套自動標記現在的搜尋結果價值為零；我們選擇保留它，因為它不增加維護成本，且 FAQ 文字本身仍幫助讀者。這並不代表標記會讓我們被 AI 引用，我們沒有數據證明這點。

## 四步檢查清單

1. 在 Search Console 查看是否還有 FAQ 相關報表或警告，並記錄現況。
2. 打開三篇代表頁，確認 FAQ 標記內容與頁面可見文字一致。
3. 找出「只有 FAQ、沒有正文」的頁面，列入內容升級或合併名單。
4. 新文章維持答案優先的 FAQ 文字，但不再把 schema 工時列入排程。

## 參考資料

- [Google Search 更新紀錄](https://developers.google.com/search/updates)
- [Bing Webmaster：Introducing AI Performance in Bing Webmaster Tools（2026 年 2 月）](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Google：生成式 AI 搜尋優化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## 常見問題（FAQ）

**Q1：FAQ 富結果退場後，FAQPage schema 會不會害我被懲罰？**
我們沒有在官方文件看到這樣的說法。更新紀錄只說明該功能不再顯示。只要標記與頁面可見內容一致，保留它沒有已知風險。

**Q2：新文章還需要加 FAQPage schema 嗎？**
不是必要。Google 指南說生成式 AI 搜尋不需要特殊的 schema.org 標記。想加可以加，但不要為此花額外工時。

**Q3：該不該把頁面上的 FAQ 區塊也刪掉？**
不建議。可見的問答仍能幫讀者快速找到答案，Bing 也把 FAQ 區塊列為清楚呈現資訊的做法。

**Q4：Search Console 還會顯示 FAQ 報表嗎？**
Google 更新紀錄沒有交代，我們無法確認。請直接檢查你自己的 Search Console 帳戶。

---

想看 schema 在 GEO 中真正扮演的角色，可閱讀〈[Schema 結構化資料如何幫助被 AI 引用](/zh-hant/blog/schema-for-geo/)〉、〈[Schema 結構化資料新手實作教學](/zh-hant/blog/schema-tutorial/)〉與〈[可被引用的排版](/zh-hant/blog/ai-citation-formatting/)〉，也可以用 [GEO 就緒度檢測器](/zh-hant/geo/) 檢查你的頁面。
