---
title: RTL 語言（阿拉伯語、希伯來語）的 SEO 與技術注意事項
description: RTL 站最常見的不是翻譯問題，而是 dir 屬性缺漏、字型 fallback 失效、hreflang 遺漏三類技術錯誤。本文提供上線前的 RTL 技術檢查清單與程式碼範例。
target_keyword: rtl 語言 seo
intent: informational
cluster: 多語言 / 國際 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-08-16
date_updated: 2026-08-16
translations:
  zh-hans: rtl-language-seo
  en: rtl-language-seo
---
# RTL 語言（阿拉伯語、希伯來語）的 SEO 與技術注意事項

**RTL（Right-to-Left，由右至左）站上線後排名不動，九成不是內容或翻譯的問題，而是三類技術錯誤疊加：`dir="rtl"` 屬性沒設對層級、字型 fallback 在阿拉伯語/希伯來語缺字時斷裂、hreflang 漏標 `ar`／`he` 語言碼。** 這三者任何一個出錯，Google 都可能判定頁面「無法正常渲染」或「找不到對應語言版本」，導致爬取正常卻不收錄、或收錄了卻不排名。

## 為什麼 RTL 站的技術債特別隱蔽？

LTR（由左至右）語言站的技術檢查清單（sitemap、canonical、結構化資料）在 RTL 站上全部照抄一次是不夠的，因為 RTL 多了一層「排版方向」本身就是技術指標：

1. **視覺正確 ≠ 標記正確**：瀏覽器常會自動偵測阿拉伯文字並自行鏡射版面，讓開發者誤以為沒設 `dir` 屬性也沒關係——但 Google 的渲染引擎與螢幕閱讀器依賴的是 HTML 屬性，不是視覺猜測。
2. **字型子集化陷阱**：許多網站字型只打包拉丁字符子集，阿拉伯語、希伯來語字符退回系統預設字型甚至變成方框（tofu），頁面在爬蟲眼中看似「內容存在」但實際可讀性極低。
3. **hreflang 語言碼混淆**：阿拉伯語有 `ar`（通用）與 `ar-SA`、`ar-EG` 等地區變體，希伯來語只有 `he`（注意舊碼 `iw` 已棄用）——碼打錯或漏加自我參照，會讓整組 hreflang 集合失效。

## 錯誤一：dir 屬性缺漏或層級設錯

`dir="rtl"` 必須設在 `<html>` 標籤，而不是只設在內文 `<div>`：

```html
<html lang="ar" dir="rtl">
  <head>...</head>
  <body>
    <!-- 導覽列、頁尾、表單都會自動繼承 rtl -->
  </body>
</html>
```

常見的錯誤是只在文章內容區塊加 `dir="rtl"`，導致導覽選單、麵包屑、表單標籤仍是 LTR 排版，形成「內容鏡射、介面不鏡射」的混亂版面。若同一頁混雜阿拉伯文與英文品牌名，應在該行內用 `dir="ltr"` 局部覆寫，或改用 CSS 的 `unicode-bidi: isolate` 避免雙向文字互相干擾標點符號位置。

## 錯誤二：字型 fallback 在 RTL 字符集斷裂

`font-family` 的 fallback 清單若只列拉丁字型，阿拉伯語、希伯來語會直接退回作業系統預設字型，不同裝置顯示落差極大：

```css
/* 錯誤：只涵蓋拉丁字符 */
body { font-family: "Helvetica Neue", Arial, sans-serif; }

/* 正確：明確加入 RTL 字符集字型 */
body {
  font-family: "Helvetica Neue", "Noto Sans Arabic",
               "Noto Sans Hebrew", Arial, sans-serif;
}
```

若使用 Google Fonts 或自架 web font，務必確認字型檔案的 `unicode-range` 涵蓋阿拉伯文（U+0600–U+06FF）或希伯來文（U+0590–U+05FF）區段，否則瀏覽器會靜默 fallback，肉眼在瀏覽器開發者工具的「computed font」欄位才看得出來，一般預覽畫面看不出差異。

## 錯誤三：hreflang 遺漏或語言碼寫錯

RTL 語言的 hreflang 碼本身沒有特殊語法，但因為多語言站常見的自動化腳本是以 LTR 語言為預設模板複製而來，RTL 版本經常被遺漏在 hreflang 集合外：

```html
<link rel="alternate" hreflang="ar" href="https://example.com/ar/product/" />
<link rel="alternate" hreflang="he" href="https://example.com/he/product/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/product/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/product/" />
```

三個常見錯誤：用已棄用的 `iw` 取代 `he`；用 `ar-SA` 卻沒有對應的通用 `ar` 兜底，導致非沙烏地地區的阿拉伯語使用者掉不到頁面；以及最基本的——RTL 版本頁面本身漏了自我參照那一行，讓整組 hreflang 因為互相引用不完整而被 Google 忽略。

## 上線前 RTL 技術檢查清單

| 檢查項 | 驗證方法 | 常見錯誤 |
|---|---|---|
| `dir="rtl"` 設在 `<html>` | 檢視原始碼 `<html>` 標籤屬性 | 只設在內文 `<div>`，導覽列未鏡射 |
| CSS 用邏輯屬性而非物理屬性 | 搜尋 CSS 中的 `margin-left`／`padding-right` | 用物理方向屬性，RTL 下版面跑版 |
| 字型 fallback 含阿拉伯文/希伯來文字型 | 開發者工具查看 computed font | fallback 清單只列拉丁字型 |
| hreflang 含 `ar`／`he` 且自我參照完整 | 用 hreflang 驗證工具逐頁抽查 | 用已棄用的 `iw`，或漏掉自我參照 |
| 表單與按鈕方向隨 `dir` 翻轉 | 手動測試表單排列與圖示方向 | icon（如箭頭）方向未跟著鏡射 |
| 數字與日期格式維持 LTR 局部方向 | 檢查價格、電話號碼顯示 | 阿拉伯數字被整段鏡射導致順序顛倒 |

CSS 建議改用邏輯屬性（`margin-inline-start` 取代 `margin-left`），這樣同一份樣式表在 LTR、RTL 兩種模式都能正確渲染，不必為 RTL 另外寫一份鏡射版 CSS，長期維護成本更低。

## 常見問題（FAQ）

**Q1：RTL 網站需要獨立的 CSS 檔案嗎？**
不一定。用邏輯屬性（`margin-inline-start`、`padding-inline-end`）取代物理屬性（`margin-left`、`padding-right`），同一份 CSS 就能同時支援 LTR 與 RTL，只需搭配 `dir` 屬性切換，不必維護兩套樣式表。

**Q2：阿拉伯語要用 `ar` 還是 `ar-SA` 這類地區碼？**
若內容沒有地區差異（幣別、法規、在地案例），用通用 `ar` 即可；只有在真的針對沙烏地、埃及等特定市場做在地化內容時，才加 `ar-SA`、`ar-EG` 等地區碼，並務必保留一行純 `ar` 兜底非特定地區的使用者。

**Q3：希伯來語的語言碼是 `he` 還是 `iw`？**
是 `he`。`iw` 是舊版 ISO 639-1 代碼，已被棄用，部分老舊 CMS 模板仍殘留這個錯誤，務必檢查並更正，否則 hreflang 該行會被視為無效語言碼。

**Q4：RTL 頁面的結構化資料（Schema）需要特別處理嗎？**
Schema.org 的 JSON-LD 本身是語言中立的資料格式，不受頁面方向影響，但 `inLanguage` 欄位要正確填入 `ar` 或 `he`，且描述文字內容仍要通過人工審閱，確認雙向文字（阿拉伯文中夾雜英文品牌名）沒有因為渲染問題被截斷。

**Q5：只靠瀏覽器自動偵測方向，不設 `dir` 屬性可以嗎？**
不建議。瀏覽器的自動偵測是基於文字內容猜測方向，對純數字、品牌名開頭或混合語言的段落經常誤判，且搜尋引擎爬蟲與螢幕閱讀器都是讀取明確的 HTML 屬性做判斷，缺少 `dir` 屬性等於把渲染正確性交給運氣。

---

RTL 站的技術錯誤往往肉眼難以察覺——版面看起來鏡射正確，但 `dir` 屬性、字型 fallback、hreflang 三處可能同時出包，GeoSeoToday 的 [GEO 檢測工具](/zh-hant/geo/) 能協助抓出這類跨語言技術債。若你的站點涉及多語言 hreflang 配置，建議先讀〈[hreflang 是什麼？多語言站必備教學](/zh-hant/blog/what-is-hreflang/)〉打好基礎，再回頭處理 RTL 專屬的排版與字型問題。
