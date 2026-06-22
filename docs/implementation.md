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

# Implementation Constraints

## CSS Strategy

* Use Tailwind CSS as the primary styling method.
* Do not implement the entire layout using plain CSS only.
* Use Tailwind utility classes whenever possible.
* Custom CSS should be limited to:

  * CSS Variables
  * Font Definitions
  * Shared Utility Classes
  * Cases where Tailwind cannot reasonably express the design.

## Naming Convention

When custom CSS is required:

* Use BEM naming convention.

Examples:

* .project-card
* .project-card__thumbnail
* .project-card__title
* .team-card
* .team-card__image

Avoid generic class names:

* .card
* .title
* .box

## Content Rules

* Do not invent content.
* Do not generate placeholder marketing copy.
* Use only the content defined in this specification.
* If content is missing, leave a TODO placeholder.

Example:

TODO: Content not provided.

---

# Layout Grid

## Desktop

* Frame Width: 1440px
* First View Height: 800px
* Content Max Width: 1120px
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

# Container Rules

## Desktop Container

The desktop content area is based on the 1440px mockup.

Frame Width: 1440px
Content Max Width: 1120px
Side Margin on 1440px frame: 160px
Columns: 12
Column Width: 64px
Gutter: 32px
Important
1120px is the maximum content width.
Do not implement a fixed width of 1120px.
Use a fluid container with max-width.
The content container should remain centered.
The 160px value represents the outer whitespace on a 1440px desktop frame.
Do not convert the 160px side margin into container padding.
Do not add 160px left/right padding inside the content container.
Recommended Implementation
.site-container {
  width: 100%;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
}
Tailwind Example
<div class="mx-auto w-full max-w-[1120px]">
  ...
</div>

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
* Footer Background: #F9F6F2

## Card

* Card Background White: #FFFFFF
* Card Background Gold: #F9F6F2

## Border

* Border: #CACACA

---

# Section Background Rules

Use the following background colors:

* Header: #FFFFFF
* Hero: #FFFFFF
* About: #F7F7F7
* Service: #FFFFFF
* Projects: #F7F7F7
* Team: #FFFFFF
* News: #F7F7F7
* Contact: #FFFFFF
* Recruit: #F7F7F7
* Footer: #F9F6F2

---

# Typography

## Font Family

* Japanese Text: Noto Sans JP, sans-serif
* English Heading: Barlow Condensed, sans-serif

## Font Usage Rules

Use Barlow Condensed for:

* Logo
* Hero Title
* Section Title
* Card Title
* Team Member Name
* News Title

Use Noto Sans JP for:

* Navigation
* Japanese Labels
* Body Text
* Description Text
* Buttons
* Footer Text

## Typography Scale

### Hero Title

* Font Size: 120px
* Font Weight: 400
* Letter Spacing: 0.1em
* Line Height: 1.1

### Hero Description

* Font Size: 24px
* Font Weight: 500
* Line Height: 1.8

### Section Title

* Font Size: 64px
* Font Weight: 700
* Letter Spacing: 0.1em
* Line Height: 1.2

### Section Subtitle / Japanese Label

* Font Size: 24px
* Font Weight: 700
* Color: Accent Gold

### Body Text

* Font Size: 16px
* Font Weight: 400
* Line Height: 1.8

### Body Small

* Font Size: 12px
* Font Weight: 400
* Line Height: 1.6

### Card Title

* Font Size: 14px
* Font Weight: 700

### Contact Heading

* Font Size: 32px
* Font Weight: 500

### Recruit Heading

* Font Size: 32px
* Font Weight: 500

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

Prefer larger spacing values such as 32px, 48px, 64px and 120px over smaller values whenever possible.

---

# Section Height Rules

The following section heights are based on the desktop mockup.

## Desktop Section Heights

* Header: 80px
* Hero: 800px
* About: 540px
* Service: 560px
* Projects: 700px
* Team: 600px
* News: 400px
* Contact: 400px
* Recruit: 380px
* Footer: 80px

## Height Rules

* Use section height as a visual guideline.
* Prefer min-height instead of fixed height.
* Fixed height may be used for:

  * Header
  * Hero
  * Footer
* Content sections should rely on spacing and layout rather than strict height values.
* Do not clip content to match a fixed height.

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

## Container Implementation Rules

* Use max-width instead of fixed width.
* Do not use width: 1120px for the main container.
* Do not use px-based side padding to recreate desktop margins.
* The container must shrink naturally on smaller screens.
* Follow the responsive grid defined in this specification.

---

# Assets

## Images

Use actual project assets when available.

Do not generate image URLs.

Use placeholder images only when specified.

Placeholder:

images/dummy.png

## Icons

Use placeholder SVG icons until final icons are provided.

---

# Header

## Content

* Logo
* Navigation

## Logo Text

Animal Corporation

## Navigation Items

* 私たちについて
* お知らせ
* お問い合わせ
* 採用

## Layout

### Desktop

* Height: 80px
* Content Max Width: 1120px
* Navigation Gap: 32px
* Logo aligned left
* Navigation aligned right

### Mobile

* Hamburger Menu

---

# Hero

## Layout

### Desktop

* Height: 800px
* Content Max Width: 1120px

## Hero Implementation Rules

* Content must be aligned to the left side of the container.
* Do not center the Hero content horizontally.
* The right side of the Hero section should remain intentionally empty.
* Hero height must remain 800px.
* Recommended content max width: 480px

## Spacing

* Title to Description: 96px

## Content

### Title

Design × Technology

### Description

デザインとテクノロジーで、
より良い体験と未来を作る。

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

#### Human Centered

人を中心に考え、共感を軸に体験を設計します。

#### Impactful

ビジネスに貢献し、継続的なインパクトを創出します。

#### Technology Driven

最新のテクノロジーを活用し、高品質な実装を行います。

#### Simple & Beautiful

シンプルで美しい、使いやすい体験を目指します。

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

### Web Design

ブランドと目的に沿った、成果に繋がるWebデザインを提供します。

### UI / UX Design

ユーザー中心の設計で、価値ある体験を設計します。

### Front-end Development

パフォーマンスとメンテナンス性を重視した実装を行います。

### Information Architecture

情報設計を整え、使いやすい構造を作ります。

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

## Project Content Rules

Do not generate descriptions automatically.

All project descriptions must be explicitly defined.

## Project Cards

Each card includes:

* Thumbnail
* Title
* Description
* Category
* Tags
* External Link Icon

### Pawth

Title:

Pawth

Description:

日々の足あとを描く
1日1投稿の小さな日記アプリ

Category:

企画 / デザイン / 開発

Tags:

* Haml
* Tailwind CSS
* Responsive

### Animal Corporation

Title:

Animal Corporation

Description:

コーポレートサイト制作（架空プロジェクト）

Category:

情報設計 / デザイン / フロントエンド開発

Tags:

* Figma
* HTML / CSS
* Responsive

### Animal Caffee

Title:

Animal Caffee

Description:

アニマルカフェのサイトリニューアル（架空）

Category:

UI / UXデザイン / コーディング / 写真・素材選定

Tags:

* Figma
* HTML / CSS
* Responsive

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

## Team Content Rules

Do not generate names, titles or profile text automatically.

All profile information must be explicitly defined.

## Member Cards

### 代表取締役社長 / CEO

Name:

黒森 ゴロウ

Profile:

力は仲間のために使う。
それが私の信念です。

### 取締役副社長 / COO

Name:

南 孝

Profile:

仲間が高く跳べるように。
私はその助走を支えます。

### 取締役 / CDO

Name:

白雪 ミウ

Profile:

美しさは思いやりから生まれる。
心に残る体験を届けたい。

### Design Technologist

Name:

柴田 ケン

Profile:

心を動かす体験を、
テクノロジーの力で届けます。

---

# News

## Content

### Section Title

News

## Layout

### Desktop

* Content Max Width: 736px

### News Item

* Padding: 24px 0
* Border Bottom: 1px solid #CACACA

## News Items

### News Item 1

Date:

2026.07.01

Title:

Animal Caffee をオープンしました。

Description:

動物たちが集う新しいコミュニティスペースとして、Animal Caffee を公開しました。

### News Item 2

Date:

2026.06.01

Title:

新メンバーが参加しました。

Description:

Design Technologist として柴田ケンが加わりました。

### News Item 3

Date:

2026.04.01

Title:

Animal Corporation を設立しました。

Description:

デザインとテクノロジーで、より良い体験を届けるために設立しました。

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

* Content Max Width: 736px
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

* Content Max Width: 736px
* Center Aligned

### Spacing

* Heading to Description: 32px
* Description to Button: 48px

---

# Footer

## Content

### Logo

Animal Corporation

### Navigation

* 私たちについて
* お知らせ
* お問い合わせ
* 採用

### Copyright

© 2026 Animal Corporation

## Layout

### Desktop

* Height: 80px
* Content Max Width: 1120px
* Navigation Gap: 32px

---

# Responsive Design

## Tablet

* Use 8-column grid.
* Reduce spacing where necessary.
* Convert 4-column layouts to 2-column layouts.
* Convert 3-column layouts to 2-column layouts when necessary.

## Mobile

* Use 4-column grid.
* Stack all cards vertically.
* Use hamburger navigation.
* Maintain generous spacing and readability.
* Reduce large heading sizes appropriately.
* Do not allow horizontal scrolling.

---

# AI Implementation Priority

Priority Order:

1. Layout Accuracy
2. Visual Hierarchy
3. Spacing
4. Typography
5. Responsive Behavior
6. Animation
7. Refactoring

The implementation should prioritize matching the mockup over code abstraction.

---

# Implementation Notes

* Start with desktop layout first.
* Match the mockup as closely as possible.
* Prioritize layout, spacing and visual hierarchy before fine tuning.
* Use placeholder images initially.
* Avoid unnecessary abstraction.
* Keep code readable and maintainable.
* Focus on recreating the visual rhythm and whitespace of the mockup.
* Do not invent missing text.
* Do not replace Tailwind CSS with plain CSS only.

---

# Content Validation Rules

Do not invent:

* Project descriptions
* Team member names
* Team member profiles
* News content
* Contact content
* Recruit content

Only use content defined in this specification.

If content is missing:

TODO: Content not provided.

Never replace missing content with AI-generated marketing text.

---
