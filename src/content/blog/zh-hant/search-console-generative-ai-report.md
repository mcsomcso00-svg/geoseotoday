---
title: Search Console「生成式 AI 成效報告」怎麼看：AI Overviews 與 AI Mode 第一次有官方曝光數據
description: Google 在 2026 年 6 月推出 Search Console 生成式 AI 成效報告，首次提供 AI Overviews 與 AI Mode 的官方曝光數據。本文逐欄說明怎麼讀、不能讀出什麼，並附 30 天檢視流程。
target_keyword: search console 生成式 ai 報告
intent: informational
cluster: GEO（群集 1）
author: GeoSeoToday
date_published: 2026-11-20
date_updated: 2026-11-20
enhanced: true
translations:
  en: search-console-generative-ai-report
  zh-hans: search-console-generative-ai-report
---
# Search Console「生成式 AI 成效報告」怎麼看：AI Overviews 與 AI Mode 第一次有官方曝光數據

**Google 在 2026 年 6 月 3 日推出 Search Console 的生成式 AI 成效報告，用「曝光次數」顯示你的網址在 AI Overviews、AI Mode 出現的頻率，截至 2026 年 8 月 31 日已向全球所有網站開放。**它目前只有曝光，沒有點擊，所以適合看趨勢與頁面分布，不適合算 ROI。

## 這份報告到底是什麼

根據 [Google 搜尋中心部落格（2026-06-03）](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)，這是與一般成效報告分開的獨立檢視，分為「搜尋」與「Discover」兩份，記錄網址在 AI Overviews、AI Mode 與 Discover 中生成式 AI 功能的出現次數。文章起初說「逐步向部分網站推出」，頁面註記則寫明截至 2026 年 8 月 31 日已對全球所有網站開放。

## 欄位逐項解讀

| 維度／指標 | 官方內容 | 你能用它做什麼 |
|---|---|---|
| 曝光次數（唯一指標） | 網址在生成式 AI 功能出現的次數 | 看趨勢、比較不同時期 |
| 頁面 | 哪些網址出現在 AI 功能裡 | 找出 AI 最常「看見」的內容類型 |
| 國家／地區 | 依國家看能見度 | 確認目標市場是否有出現 |
| 裝置 | 只提供搜尋報告 | 檢查手機與桌機差異；Discover 報告沒有此維度 |
| 日期 | 可切換每小時、每日、每週、每月 | 對照發文、改版與演算法更新日期 |

## 它不能告訴你什麼

- **沒有點擊。** 官方只列出曝光次數，並說會「隨時間新增更多指標」。因此無法直接算出 AI 帶來多少訪客。
- **曝光不等於被讀到。** 曝光代表網址出現在 AI 功能，不代表使用者點進去，也不代表 AI 回答用了你的觀點。
- **看不到使用者問了什麼。** 報告沒有提供「AI 實際的子查詢」，不能當關鍵字報告用。
- **與一般成效報告並存。** [Google 的 AI 功能說明](https://developers.google.com/search/docs/appearance/ai-features)指出，AI 功能的流量會計入成效報告「網頁」搜尋類型的總數；新報告只是另一個專注於 AI 能見度的視角，所以不能把兩邊數字相加。

## 30 天檢視流程

1. **第 1 天：存基準。** 以「每日」粒度匯出前 28 天曝光，並記下最近一次改版、發文日期。
2. **第 1 週：看頁面。** 列出曝光前 10 名的頁面，標示類型（教學、比較、定義、案例）。
3. **第 2 週：對照一般報告。** 把同一批頁面在「網頁」搜尋的點擊與曝光並排，找出「AI 曝光高、點擊低」的頁面。
4. **第 3 週：看國家與裝置。** 確認曝光是否落在你的目標市場，而非意外的地區。
5. **第 4 週：寫下結論並設下一輪假設。** 例如「補上第一手資料後，這 3 頁的 AI 曝光是否上升」，下個月再比。

## 這份報告的限制與取捨

這是 Google 自家搜尋的數據，無法反映 ChatGPT、Perplexity 等其他引擎。[Google 的 AI 搜尋優化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)把它列為量測生成式 AI 表現的方式，同時提醒要小心宣稱掌握「Google 內部指標」的第三方工具。小型網站曝光量少時，週與日的波動可能只是雜訊，建議以月為單位判讀。

## 參考資料

1. [Search Console 新增生成式 AI 成效報告 — Google Search Central 部落格（2026-06-03）](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
2. [AI 功能與你的網站 — Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
3. [Optimizing for generative AI search — Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## 常見問題（FAQ）

**Q1：生成式 AI 成效報告有點擊數嗎？**
目前沒有。官方文章只列出曝光次數作為指標，並說會陸續新增更多指標。要看點擊，需回到一般成效報告，並自行搭配 GA4 等工具。

**Q2：這份報告每個網站都看得到嗎？**
Google 起初只向部分網站推出，頁面註記寫明截至 2026 年 8 月 31 日已對全球所有網站開放。若仍看不到，先確認你的帳號是否已驗證該資源。

**Q3：AI 曝光會不會重複計入一般成效報告？**
AI 功能的資料同時計入整體成效報告（網頁搜尋類型），新報告是專注於 AI 能見度的獨立檢視。兩者是同一份資料的不同視角，不要相加。

**Q4：曝光很少是不是代表我的內容不好？**
不一定。曝光受主題熱度、網站規模與是否被收錄影響。建議先確認頁面已被收錄，再以月為單位觀察趨勢。

---

想把這份數據放進完整的 GEO 量測流程，請看 [GEO 專區](/zh-hant/geo/)；也可搭配〈[GEO 成效追蹤](/zh-hant/blog/geo-tracking/)〉、〈[不用 GSC 也能量測 GEO](/zh-hant/blog/measure-geo-without-gsc/)〉與〈[Google 官方 AI 搜尋優化指南解讀](/zh-hant/blog/google-ai-optimization-guide-explained/)〉一起使用。
