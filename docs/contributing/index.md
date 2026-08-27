---
title: How to add docs
description: Simple steps for adding or editing documentation pages
---

# Contributing

Docs are Markdown files. Edit them on GitHub or locally in any editor.

## Edit an existing page

1. Open the page on this site
2. Click **Edit this page** at the bottom
3. Make your changes
4. Commit and open a pull request

## Add a new page

### 1. Pick a section
*Feel free to add a new section if needed, just double check with Half first!*

| Topic | Folder |
| --- | --- |
| Desktop app | `docs/app/` |
| Blender | `docs/blender/` |
| Unreal | `docs/unreal/` |

### 2. Copy the template

1. Copy [`docs/templates/new-page.md`](https://github.com/h4lfheart/FortnitePortingDocs/blob/main/docs/templates/new-page.md)
2. Put it in the right folder
3. Name it in kebab-case, e.g. `exporting-skins.md`

### 3. Fill in the page

Set the header `title` (sidebar label) and `description`. Optional `order` sorts pages (lower values show up first):

```md
---
title: Getting Started
description: One sentence about this page
order: 1
---
```

The sidebar updates from the folder structure. Files in `docs/templates/` and names starting with `_` are excluded.

### 4. Sidebar groups

**Nested group:** add a subfolder. The folder name is clickable (opens its `index.md`) and expands when it has children.

**Sibling section:** add `sidebar.config.json` with `"section": true` so the folder sits next to its parent (e.g. **Nodes** beside **Blender**).

### 5. Add images (optional)

1. Drop the file in `docs/public/` (e.g. `docs/public/app/skin-screenshot.png`)
2. Reference it as:

```md
![Skin Export Screenshot](/app/skin-screenshot.png)
```

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
