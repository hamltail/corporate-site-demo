# Implementation Specification

## References

* docs/mockup.png

## Tech Stack

* HTML
* JavaScript
* Tailwind CSS
* Vite

## Design Concept

シンプルで美しいコーポレートサイト。
余白を広く取り、視認性と可読性を重視する。
アクセントカラーはゴールド系を使用し、モノトーンをベースとした落ち着いたデザインとする。

## Layout Grid

### Desktop

* Frame: 1440px
* First View Height: 800px
* Content Width: 1120px
* Side Margin: 160px
* Columns: 12
* Column Width: 64px
* Gutter: 32px

### Tablet

* Frame: 768px
* Content Width: 680px
* Side Margin: 44px
* Columns: 8
* Column Width: 64px
* Gutter: 24px

### Mobile

* Frame: 360px
* Content Width: 304px
* Side Margin: 28px
* Columns: 4
* Column Width: 64px
* Gutter: 16px

## Colors

* Background:
* Section Background:
* Text Primary:
* Text Secondary:
* Accent Gold:
* Border:
* Card Background:

## Typography

### Base

* Font Family:
* Base Font Size:
* Line Height:

### Hero Title

* Font Size:
* Font Weight:
* Letter Spacing:
* Line Height:

### Section Title

* Font Size:
* Font Weight:
* Letter Spacing:
* Line Height:

### Body Text

* Font Size:
* Font Weight:
* Line Height:

## Common Layout Rules

* Use semantic HTML.
* Use Tailwind CSS utility classes for styling.
* Use a shared container class or consistent container utilities.
* Keep spacing consistent across sections.
* Use responsive design for desktop, tablet, and mobile.
* Images should use `alt` attributes.
* Buttons and links should have hover styles.

## Assets

### Images

Use placeholder image until final assets are ready.

* images/dummy.png

### Icons

Use placeholder image or simple inline SVG until final assets are ready.

* images/dummy.png

## Sections

## Header

### Content

* Logo
* Navigation

### Navigation Items

* 私たちについて
* お知らせ
* お問い合わせ
* 採用

### Layout

* Desktop:
* Mobile:

## Hero

* Desktop height: 800px
* Based on 1440px × 800px first view
* Content is aligned to the 1120px container
* Title is placed on the left side
* Right side is intentionally left blank

### Content

* Title: Design × Technology
* Description: デザインとテクノロジーで、より良い体験と未来を作る。

## About

### Content

* Section Title: About
* Japanese Label: 私たちについて
* Lead Text:
* Body Text:
* Value Cards × 4

### Value Cards

* Human Centered
* Impactful
* Technology Driven
* Simple & Beautiful

### Layout

* Desktop:
* Mobile:

## Service

### Content

* Section Title: Service
* Japanese Label: 事業内容
* Description:
* Service Cards × 4

### Service Cards

* Web Design
* UI / UX Design
* Front-end Development
* Information Architecture

### Layout

* Desktop:
* Mobile:

## Projects

### Content

* Section Title: Projects
* Japanese Label: 制作実績
* Description:
* Project Cards × 3

### Project Cards

* Pawth
* Animal Corporation
* Animal Caffee

Each card includes:

* Thumbnail
* Title
* Description
* Category Text
* Tags
* External Link Icon

### Layout

* Desktop:
* Mobile:

## Team

### Content

* Section Title: Team
* Japanese Label: メンバー
* Description:
* Member Cards × 4

### Member Cards

* Image
* Role
* Name
* Description

### Layout

* Desktop:
* Mobile:

## News

### Content

* Section Title: News
* News Items × 3

Each item includes:

* Date
* Title
* Description

### Layout

* Desktop:
* Mobile:

## Contact

### Content

* Section Title: Contact
* Heading:
* Description:
* Button Text: お問い合わせ

### Layout

* Desktop:
* Mobile:

## Recruit

### Content

* Section Title: Recruit
* Heading:
* Description:
* Button Text: エントリー

### Layout

* Desktop:
* Mobile:

## Footer

### Content

* Logo
* Navigation
* Copyright

### Layout

* Desktop:
* Mobile:

## Implementation Notes

* Start with desktop layout.
* Then add responsive adjustments.
* Prioritize layout and spacing before replacing final images.
* Use dummy images for initial implementation.
* Do not over-engineer components.
* Keep HTML readable.
