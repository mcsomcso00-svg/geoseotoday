---
title: 翻譯內容的 canonical 該指向哪：跨語言重複的正解
description: 常見錯誤是把各語言版 canonical 都指向英文原文，導致非英文版被 Google 判定為重複內容而消失於索引。正解是每語言頁面自我 canonical，並靠 hreflang 互相標註對應關係。
target_keyword: 翻譯 canonical
intent: informational
cluster: 多語言 / 國際 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-08-14
date_updated: 2026-08-14
translations:
  zh-hans: translated-content-canonical
  en: translated-content-canonical
---
# 翻譯內容的 canonical 該指向哪：跨語言重複的正解

**翻譯內容的 canonical 永遠指向自己，不指向原文語言版本；「各語言版 canonical 都指向英文原文」是最常見也最傷排名的錯誤，會讓 Google 把繁中、簡中版判定為英文頁的重複內容而整批退出索引，正解是自我 canonical 加 hreflang 雙向互連。** 這條規則簡單，但實務上被搞混的頻率高得驚人。

## 為什麼會有人把 canonical 指向原文？

canonical 標籤最初是設計來解決「同語言、同內容」的重複問題——例如 `?utm_source=` 帶參數的網址、或 www 與非 www 版本。很多工程師把這套邏輯直接套用到多語言站：「繁中版是從英文翻的，內容概念上相同，所以 canonical 應該指回英文原文，避免被當重複內容扣分。」

這個推論的漏洞在於：canonical 是**語言中立**的排重機制，但 Google 對不同語言的頁面本來就不會判定為重複——除非你自己用 canonical 告訴它「這兩個是同一頁」。一旦繁中頁的 canonical 寫成 `https://example.com/en/pricing/`，Google 收到的訊號是「這頁不用收錄，收錄那頁就好」，於是繁中版直接從索引與 Search Console 效能報表中消失，而你却完全没做错「翻译品质」这件事。

## 正確做法：自我 canonical ＋ hreflang 互連

| 頁面 | canonical 應指向 | hreflang 應包含 |
|---|---|---|
| `/en/pricing/`（原文） | `https://example.com/en/pricing/`（自己） | en、zh-Hant、zh-Hans、x-default 四行，各自對應網址 |
| `/zh-hant/pricing/`（翻譯） | `https://example.com/zh-hant/pricing/`（自己） | 同上四行 |
| `/zh-hans/pricing/`（翻譯） | `https://example.com/zh-hans/pricing/`（自己） | 同上四行 |

三個語言版本各自 canonical 到自己，靠 hreflang 負責告訴 Google「這三頁是同一內容的不同語言版本，依使用者語言/地區顯示對應版本」。canonical 負責排重，hreflang 負責語言對應——兩者職責不同，不能互相取代。

## 4 步驟排查與修正

1. **抽查每語言版首頁與 3 個內頁的 canonical 標籤**：檢視原始碼中 `<link rel="canonical">`，確認網址與當前頁面完全一致（含結尾斜線與 https）。
2. **用 Search Console「網址檢查」工具逐一比對**：輸入非英文版網址，看「Google 選定的標準網址」是否等於「使用者指定的標準網址」。若兩者不同，代表 Google 沒有採用你設定的 canonical，通常是 hreflang 缺回連或 canonical 自我矛盾同時發生。
3. **確認 hreflang 四行（含 x-default）在三個語言版都完整出現**：任何一個方向缺失，Google 可能整組忽略，連帶讓 canonical 訊號更難被信任。
4. **在 GSC 效能報表用「網頁」篩選 `/zh-hant/` 與 `/zh-hans/`**：若某語言版曝光量長期趨近於零、或成效報表完全查不到該路徑的頁面，八成就是 canonical 指錯方向、該版本從未真正進索引。

## 常見問題（FAQ）

**Q1：canonical 指向原文語言版，Google 真的會完全不收錄翻譯版嗎？**
不一定「完全不收錄」，但實務上絕大多數案例會被排除在索引之外，因為 Google 尊重網站自訂的 canonical 訊號，除非有其他強烈訊號（如大量該語言的外部連結）推翻它。多語言 SEO 不該賭這種例外。

**Q2：如果翻譯內容真的和原文幾乎一樣（例如機器翻譯未潤飾），canonical 指回原文是不是比較安全？**
不是。這種情況該做的是提升翻譯品質（真人在地化而非機器直譯），而不是用 canonical 把整個語言版本讓 Google 忽略——那等於主動放棄該語言的自然搜尋流量。

**Q3：x-default 也要自我 canonical 嗎？**
x-default 通常對應到你的預設/首選語言版本（例如英文），該版本自己的 canonical 一樣指向自己；x-default 只是 hreflang 標籤裡的其中一行，不是獨立頁面。

**Q4：canonical 設對了，為什麼 Search Console 還是顯示「Google 選擇了不同的標準網址」？**
最常見原因是 hreflang 回連缺失、或該語言版內容與原文差異度太低（近似機器翻譯），讓 Google 判斷該頁「不夠獨立」而覆蓋你的 canonical 選擇。先排查 hreflang 完整性，再檢查內容差異化程度。

---

canonical 與 hreflang 的組合設定容易出錯又難以肉眼複查，GeoSeoToday 的 [hreflang 產生器與 GEO 檢測工具](/zh-hant/geo/) 能自動輸出正確的自我 canonical 與四行 hreflang，避免兩者打架。若你的多語言站正被繁簡自我蠶食所苦，另可延伸閱讀〈[hreflang 常見錯誤導致繁簡自我蠶食](/zh-hant/blog/hreflang-mistakes/)〉，裡面第 5 個錯誤正是本文討論的 canonical 衝突情境。
