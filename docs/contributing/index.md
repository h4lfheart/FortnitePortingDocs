---
title: How to add docs
description: Simple steps for adding or editing documentation pages
---

# How to add docs

Docs are plain text files written in Markdown. You can edit them on GitHub in your browser or locally in an IDE of your choice.

## Edit an existing page

1. Open the page on this site
2. Scroll to the bottom and click **Edit this page**
3. Make your changes in GitHub
4. Click **Commit changes…** and open a pull request

That's it for small fixes (typos, clearer wording, extra steps).

## Add a new page

### 1. Pick a section
*Feel free to add a new section if needed, just double check with Half first!*

| Topic | Folder |
| --- | --- |
| Desktop app | `docs/app/` |
| Blender | `docs/blender/` |
| Unreal | `docs/unreal/` |

### 2. Copy the template

1. Open [`docs/templates/new-page.md`](https://github.com/h4lfheart/FortnitePortingDocs/blob/main/docs/templates/new-page.md)
2. Create a copy of this file in a new folder
3. Name it in kebab case (lowercase words and hyphens), for example `exporting-skins.md`

### 3. Fill in the page

Replace the placeholder title, description, and body. Use the formatting cheatsheet below if needed.

The sidebar is **automatic** — new pages appear based on folder structure. Set `title` in frontmatter for the sidebar label. Use optional `order` to control sort position (lower numbers first):

```md
---
title: Getting Started
description: One sentence about this page
order: 1
---
```

Files in `docs/templates/` and any file prefixed with `_` are excluded from the site.

### 4. Add images (optional)

1. Put the image file in `docs/public/` (for example `docs/public/app/skin-screenshot.png`)
2. In your page, write:

```md
![Skin Export Screenshot](/app/skin-screenshot.png)
```

The path starts with `/` and matches the file name in `public`.

## Formatting cheatsheet

```md
# Page title

Short intro sentence.

## Section heading

- Bullet list
- Another item

1. Numbered step
2. Next step

**Bold** and *italic*

[Link text](https://example.com)

![Image description](/your-image.png)

::: tip Tip title
Helpful optional advice.
:::

::: warning Warning title
Something easy to get wrong.
:::

::: danger Danger title
Something that can break a project or lose work.
:::
```
