---
title: 伺服器日誌分析：看爬蟲（含 AI bot）到底爬了什麼
description: robots.txt 只能告訴你「允許誰爬」，日誌才能告訴你「誰真的來了、爬了什麼、有沒有被擋」。本文教你用 grep 拆解 access log，抓出被浪費的抓取預算與 AI bot 被 403 的證據。
target_keyword: 日誌 分析 seo
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-28
date_updated: 2026-08-28
translations:
  zh-hans: log-file-analysis-seo
  en: log-file-analysis-seo
---
# 伺服器日誌分析：看爬蟲（含 AI bot）到底爬了什麼

**robots.txt 只是你「說」允許誰爬；伺服器日誌（access log）才是唯一能看到爬蟲「真的做了什麼」的地方——你可以用它算出抓取預算浪費在哪、確認 GPTBot／PerplexityBot 是不是真的來過，以及有沒有被防火牆誤擋成 403。** 猜測沒有用，日誌裡的每一行都是事實。

## 為什麼 robots.txt 和 GSC 都不夠

Google Search Console 只回報 Googlebot 的抓取統計，而且有 1–2 天延遲、且不逐一列出 URL 層級細節。robots.txt 只是「規則」，不是「事實」——你允許某爬蟲，不代表它真的來了；你以為擋住某爬蟲，也可能因為 CDN／WAF 規則設錯，實際上讓它連 403 頁面都拿不到就被丟包，完全不留紀錄。**唯一能同時看到 Googlebot、Bingbot 與六大 AI 爬蟲（GPTBot、OAI-SearchBot、PerplexityBot、ClaudeBot、Google-Extended、Bingbot）實際行為的地方，就是伺服器的 access log。**

## 日誌長什麼樣：先認得欄位

標準 Nginx／Apache combined log 格式一行大致如下：

```
66.249.66.1 - - [28/Aug/2026:03:14:22 +0000] "GET /zh-hant/blog/what-is-geo/ HTTP/1.1" 200 18234 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
```

你要看的四件事：**IP（要反查驗證真偽）、時間戳、狀態碼、user-agent**。AI 爬蟲的 user-agent 是固定字串，可以直接 grep。

## Step 1–5：用 grep 拆解日誌，抓出四種問題

1. **抓出所有 AI bot 的請求**：`grep -E "GPTBot|OAI-SearchBot|PerplexityBot|ClaudeBot|Google-Extended" access.log > ai-bots.log`——先確認它們「有沒有來」。若完全沒有記錄，代表要嘛被上層 WAF 擋在日誌之外，要嘛你的 robots.txt 真的全擋了。
2. **統計狀態碼分布**：`awk '{print $9}' ai-bots.log | sort | uniq -c | sort -rn`。若 403／404 佔比偏高（例如超過 15%），這是「AI bot 被擋」的直接證據，而不是猜測。
3. **抓出被爬最多次但價值最低的路徑**：`awk '{print $7}' ai-bots.log | sort | uniq -c | sort -rn | head -30`。常見浪費：分頁參數（`?page=`）、篩選器組合、站內搜尋結果頁——這些吃掉抓取預算卻不該被索引。
4. **反查 IP 驗證真偽**：`host <IP>`，確認反解析結果落在該公司官方網域（如 `googlebot.com`、`crawl.openai.com`），避免把冒充 user-agent 的假爬蟲流量誤判為真的 AI bot。
5. **比對抓取時間與內容更新時間**：把 AI bot 最後一次抓取某頁的時間，對照該頁 `date_updated`。若差距超過 30 天，代表你更新的內容還沒被 AI 引擎重新讀取，這解釋了「明明改了內容，AI 回答還是舊版」的常見疑問。

## 常見浪費 vs 高價值抓取：對照表

| 抓取目標類型 | 對 SEO／GEO 的價值 | 常見浪費比例 |
|---|---|---|
| 文章正文頁（`/blog/<slug>/`） | 高——直接影響索引與 AI 引用 | 通常抓取量的 30–50% |
| 分頁／篩選參數頁 | 極低，通常應 noindex | 常見佔比 20–40%，是最大浪費源 |
| 站內搜尋結果頁 | 幾乎無，易造成重複內容 | 5–15% |
| 圖片／靜態資源 | 中等，影響頁面載入判斷 | 依站台結構而定 |
| 404／已下線頁面 | 負面——浪費預算又傷信任度 | 若 >5% 需立即處理重導向 |

## 常見問題（FAQ）

**Q1：多久該做一次日誌分析？**
中大型內容站建議每月一次例行檢查，新上線 robots.txt 規則或大改版後應立即補做一次，確認規則生效且沒有誤擋。

**Q2：GSC 的「抓取統計資料」報表不能取代日誌分析嗎？**
不能。GSC 只涵蓋 Googlebot，且是彙總後的間接資料；AI 爬蟲（GPTBot、PerplexityBot 等）完全不在 GSC 範圍內，只有原始日誌看得到。

**Q3：如果日誌顯示 AI bot 一次都沒來過，代表什麼？**
先查 robots.txt 是否誤擋、再查 CDN／WAF 是否有安全規則把非瀏覽器 user-agent 一律攔截（常見於預設啟用機器人防護的 CDN），這類設定經常在不知情下連 AI 爬蟲一起擋掉。

**Q4：日誌檔案太大，沒工具怎麼辦？**
不需要專用工具，`grep`／`awk`／`sort`／`uniq` 這組指令鏈就能處理百萬行等級的日誌，是最快能拿到答案的方式，且不需要把日誌上傳給第三方服務。

---

日誌分析解決的是「爬蟲有沒有真的來、讀到什麼」，但要讓爬蟲一開始就分得清該讀什麼、不該讀什麼，還是要回到爬蟲清單與 robots.txt 的放行策略——見〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉。想理解為什麼「被 AI 引用」和傳統排名是兩套不同邏輯，可先讀總覽：[/zh-hant/geo/](/zh-hant/geo/)。
