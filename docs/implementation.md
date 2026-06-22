# Implementation Specification

## References

* docs/mockup.png

---

# Tech Stack

* HTML
* JavaScript
* Tailwind CSS
* Vite

---

# Design Concept

シンプルで美しいコーポレートサイト。

余白を広く取り、視認性と可読性を重視する。

アクセントカラーはゴールド系を使用し、モノトーンをベースとした落ち着いたデザインとする。

デザイン全体を通して「Design × Technology」を表現する。

---

# Layout Grid

## Desktop

* Frame Width: 1440px
* First View Height: 800px
* Content Width: 1120px
* Side Margin: 160px
* Columns: 12
* Column Width: 64px
* Gutter: 32px

## Tablet

* Frame Width: 768px
* Content Width: 680px
* Side Margin: 44px
* Columns: 8
* Column Width: 64px
* Gutter: 24px

## Mobile

* Frame Width: 360px
* Content Width: 304px
* Side Margin: 28px
* Columns: 4
* Column Width: 64px
* Gutter: 16px

---

# Colors

## Base

* Background: #FFFFFF
* Text Primary: #000000
* Text Secondary: #666666

## Accent

* Accent Gold: #B3913B

## Surface

* Section Background Gray: #F7F7F7
* Section Background Footer: #F7F7F7

## Card

* Card Background White: #FFFFFF
* Card Background Gold: #F9F6F2

## Border

* Border: #CACACA

---

# Typography

## Font Family

* Japanese Text: Noto Sans JP, sans-serif
* English Heading: Barlow Condensed, sans-serif

## Typography Scale

### Hero Title

* Font Size: 120px
* Font Weight: 400
* Letter Spacing: 0.1em

### Hero Description

* Font Size: 24px
* Font Weight: 500

### Section Title

* Font Size: 64px
* Font Weight: 700
* Letter Spacing: 0.1em

### Section Subtitle

* Font Size: 24px
* Font Weight: 700
* Color: Accent Gold

### Contact Heading

* Font Size: 32px
* Font Weight: 500

### Recruit Heading

* Font Size: 32px
* Font Weight: 500

### Body Text

* Font Size: 16px
* Font Weight: 400

### Body Small

* Font Size: 12px
* Font Weight: 400

### Card Title

* Font Size: 14px
* Font Weight: 700

## Line Height

Recommended values:

* Hero Title: 1.1
* Section Title: 1.2
* Lead Text: 1.5
* Body Text: 1.8

Line-height may be adjusted during implementation to visually match the mockup.

---

# Spacing System

Use an 8px based spacing system.

Preferred spacing values:

* 8px
* 16px
* 24px
* 32px
* 48px
* 64px
* 96px
* 120px
* 160px

---

# Spacing Philosophy

The design emphasizes generous whitespace.

Do not compress sections.

Preserve visual breathing room between headings, descriptions, cards and major content blocks.

Prefer larger spacing values (32px, 48px, 64px, 120px) over smaller values whenever possible.

---

# Common Layout Rules

* Use semantic HTML.
* Use Tailwind CSS utility classes.
* Build desktop first.
* Add responsive behavior after desktop layout is complete.
* Maintain consistent spacing across sections.
* Use responsive images.
* All images must include alt attributes.
* All interactive elements should have hover states.
* Use a shared container width of 1120px on desktop.

---

# Assets

## Images

Use placeholder images until final assets are available.

```text
images/dummy.png
```

## Icons

Use placeholder SVG icons until final assets are available.

---

# Header

## Content

* Logo
* Navigation

## Navigation Items

* 私たちについて
* お知らせ
* お問い合わせ
* 採用

## Layout

### Desktop

* Height: 80px
* Container Width: 1120px
* Navigation Gap: 32px

### Mobile

* Hamburger Menu

---

# Hero

## Layout

### Desktop

* Height: 800px
* Container Width: 1120px

### Content Position

* Content aligned left
* Right side intentionally left blank

### Spacing

* Title to Description: 96px

## Content

### Title

Design × Technology

### Description

デザインとテクノロジーで、
より良い体験と未来を作る。

---

# Section Spacing

## Desktop

* Padding Top: 120px
* Padding Bottom: 120px

## Mobile

* Padding Top: 80px
* Padding Bottom: 80px

---

# About

## Content

### Section Title

About

### Japanese Label

私たちについて

### Lead Text

デザインとテクノロジーで、
より良い体験と未来を作る。

### Body Text

Animal Corporationは、デザインとテクノロジーの力で、人の行動や社会の仕組みをより良い方向へ導く体験を設計するデザインスタジオです。

ユーザーの気持ちに寄り添い、ビジネスの成長につながる本質的な価値を生み出します。

## Layout

### Desktop

* Two-column layout
* Left: 5 columns
* Right: 7 columns
* Gap: 32px

## Value Cards

### Desktop

* 2 columns
* Gap: 32px

### Card Size

* Width: 256px
* Height: 140px
* Padding: 24px

### Items

* Human Centered
* Impactful
* Technology Driven
* Simple & Beautiful

---

# Service

## Content

### Section Title

Service

### Japanese Label

事業内容

### Description

デザインからフロントエンド実装、情報設計まで。
ユーザー体験を重視したWebサイト制作を提供しています。

## Layout

### Desktop

* 4 columns
* Gap: 32px

### Card Size

* Width: 256px
* Height: 360px
* Padding: 24px

### Icon Circle

* 128px × 128px

## Service Cards

* Web Design
* UI / UX Design
* Front-end Development
* Information Architecture

---

# Projects

## Content

### Section Title

Projects

### Japanese Label

制作実績

### Description

デザインと技術を活かして制作した、
Webサイトやアプリケーションの実績をご覧ください。

## Layout

### Desktop

* 3 columns
* Gap: 32px

### Card Size

* Width: 352px

### Thumbnail Height

* 240px

### Card Padding

* 16px

## Project Cards

* Pawth
* Animal Corporation
* Animal Caffee

Each card includes:

* Thumbnail
* Title
* Description
* Category
* Tags
* External Link Icon

---

# Team

## Content

### Section Title

Team

### Japanese Label

メンバー

### Description

それぞれの専門性を持つアニマルメンバーをご紹介します。

## Layout

### Desktop

* 4 columns
* Gap: 32px

### Card Size

* Width: 256px
* Height: 420px

### Image Size

* Width: 224px
* Height: 224px

### Card Padding

* 16px

---

# News

## Content

### Section Title

News

### News Items

Each item includes:

* Date
* Title
* Description

## Layout

### Desktop

* Content Width: 736px

### News Item

* Padding: 24px 0
* Border Bottom: 1px solid #CACACA

---

# Contact

## Content

### Section Title

Contact

### Heading

新しい体験を、一緒につくりませんか？

### Description

サービス開発やWeb制作、デザインに関するご相談など、お気軽にお問い合わせください。

### Button Text

お問い合わせ

## Layout

### Desktop

* Content Width: 736px
* Center Aligned

### Spacing

* Heading to Description: 32px
* Description to Button: 48px

---

# Recruit

## Content

### Section Title

Recruit

### Heading

個性は、才能だ。

### Description

強いゴリラも、跳べるカンガルーも、繊細なネコも、まっすぐな犬も。

Animal Corporationでは、新しい仲間を募集しています。

### Button Text

エントリー

## Layout

### Desktop

* Content Width: 736px
* Center Aligned

### Spacing

* Heading to Description: 32px
* Description to Button: 48px

---

# Footer

## Content

* Logo
* Navigation
* Copyright

## Layout

### Desktop

* Height: 120px
* Content Width: 1120px
* Navigation Gap: 32px

---

# Responsive Design

## Tablet

* Use 8-column grid
* Reduce spacing where necessary
* Convert 4-column layouts to 2-column layouts

## Mobile

* Use 4-column grid
* Stack all cards vertically
* Use hamburger navigation
* Maintain generous spacing and readability

---

# Implementation Notes

* Start with desktop layout first.
* Match the mockup as closely as possible.
* Prioritize layout, spacing and visual hierarchy before fine tuning.
* Use placeholder images initially.
* Avoid unnecessary abstraction.
* Keep code readable and maintainable.
* Focus on recreating the visual rhythm and whitespace of the mockup.
