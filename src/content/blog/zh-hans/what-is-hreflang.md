---
title: hreflang 是什么？多语言站必备教程
description: hreflang 是一组 HTML 标签，用来告诉 Google 同一页面有哪些语言版本、各自该给哪个地区的用户。本文用繁中／简中／英文的实际示例教你正确写法、三种放置方式与验证方法。
target_keyword: hreflang 是什么
intent: informational
cluster: 多语言 / 国际 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-07-23
date_updated: 2026-07-23
translations:
  zh-hant: what-is-hreflang
  en: what-is-hreflang
---
# hreflang 是什么？多语言站必备教程

**hreflang 是一组放在 HTML `<head>` 或 sitemap 里的标签，用来告诉 Google「这个页面还有哪些语言版本、各自对应哪个语言或地区的用户」。** 只要你的网站同时有繁中、简中或英文版本，hreflang 就是必备配置——没有它，Google 可能把简中页面端给台湾用户，甚至让繁简版本互相抢排名。

## hreflang 解决什么问题？

Google 早在 2011 年就推出 hreflang 标注，原因很直接：对搜索引擎来说，繁体中文和简体中文的页面内容高度相似，如果不明确标注，算法很难判断该把哪个版本排给哪个市场。结果就是两种常见灾难：

1. **端错版本**：台湾用户搜索时看到简体页面，跳出率飙高。
2. **自我蚕食**：繁简两版被当成重复内容互相竞争，两边排名都做不起来。

hreflang 的角色就像「语言路标」：它不会直接提升排名，但能确保**对的语言版本出现在对的市场**，把既有排名的价值放到最大。

## hreflang 的正确写法（含代码示例）

核心规则只有三条：**每一页都要列出全部语言版本、必须包含自我引用、建议加上 x-default**。以一个三语网站的文章页为例：

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/geo-guide/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/geo-guide/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/geo-guide/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/geo-guide/" />
```

这四行要**同时出现在繁中、简中、英文三个版本的页面上**，一字不差。几个重点：

- `zh-Hant`／`zh-Hans` 是「文字系统」代码，适合不分地区的繁简站；若你真的有分地区的内容，才用 `zh-TW`、`zh-HK`、`zh-CN`。
- `x-default` 指定「不符合任何语言条件时」的默认版本，通常指向英文或语言选择页。
- URL 必须是完整绝对路径（含 `https://`），不能用相对路径。

## 三种放置方式比较

| 放置方式 | 适合情境 | 注意事项 |
|---|---|---|
| HTML `<head>` 标签 | 页面数量中等、模板可控 | 每页的 head 会多出 N 行，页数多时维护成本高 |
| XML sitemap | 页面多、有自动生成 sitemap 的系统 | 用 `xhtml:link` 标注，改动集中在一个文件 |
| HTTP header | PDF 等非 HTML 文件 | 一般网站很少用到 |

三种方式**择一即可**，混用反而容易产生互相矛盾的信号。对多数用 Astro、Next.js 等框架建的站，直接在 layout 模板中按语言自动输出 head 标签是最省事的做法。

## 最容易踩的三个坑

1. **缺少回连（return tag）**：A 页指向 B 页，但 B 页没有指回 A 页，整组标注会被 Google 忽略。
2. **忘记自我引用**：每一页都必须把「自己」也列进 hreflang 清单。
3. **指向错误状态的 URL**：hreflang 指向的页面若是 404、被 noindex 或经过跳转，标注等于白做。

hreflang 错误是繁简自我蚕食的头号原因，详细的错误清单可以看关于 hreflang 常见错误导致繁简自我蚕食的说明。

## 怎么验证 hreflang 有没有生效？

设置完成后不要凭感觉，用工具验证：

- **Google Search Console**：观察各语言目录（如 `/zh-hant/`、`/zh-hans/`）在对应市场的曝光是否分流正常。
- **网页源代码检查**：随机抽 3–5 页，确认每页都输出完整的 alternate 清单。
- **site: 指令抽查**：在目标市场的 Google 搜索品牌词，看端出来的是不是正确语言版本。

## 常见问题（FAQ）

**Q1：hreflang 会直接提升排名吗？**
不会。hreflang 是「分流信号」不是「排名信号」，它的价值在于让对的版本出现在对的市场、避免繁简互相蚕食——这间接保护了你的点击率与排名表现。

**Q2：只有繁中和英文两个语言，也需要 hreflang 吗？**
需要。只要同一内容存在两个以上语言版本就建议标注，尤其中文和英文以外若日后要加简中，先把架构做对可以省掉大量返工。

**Q3：hreflang 用 zh-TW 还是 zh-Hant？**
若内容是针对「所有繁体中文用户」（台湾＋香港＋海外），用 `zh-Hant` 更精确；只有当你为台湾和香港准备了不同内容时，才需要分 `zh-TW` 和 `zh-HK`。

**Q4：hreflang 和 canonical 会冲突吗？**
不会，但要配合正确：每个语言版本的 canonical 应指向「自己」，而不是指向其他语言版本。若简中页的 canonical 指向繁中页，等于告诉 Google 简中页不用收录。

---

hreflang 标签手写容易漏，GeoSeoToday把「全语言＋自我引用＋x-default」的规则做成了免费的 [hreflang 生成器与 GEO 检测工具](/zh-hans/geo/)，贴上 URL 就能一键产出正确标签。想从架构层面理解多语言站怎么规划，请看[多语言 GEO](/zh-hans/blog/multilingual-geo/)是怎么处理同一内容跨语言的。
