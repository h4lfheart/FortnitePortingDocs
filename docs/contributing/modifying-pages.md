---
title: Modifying Pages
description: Simple steps for adding or editing documentation pages
order: 2
---

# Modifying Pages

## Edit an Existing Page

1. Open the page on this site
2. Click **Edit this page** at the bottom
3. Make your changes
4. Commit and open a [pull request](/contributing/creating-a-pull-request)

## Add a New Page

### 1. Pick a section
*Feel free to add a new section if needed, just double check with Half first!*

| Topic | Folder |
| --- | --- |
| Desktop app | `docs/app/` |
| Blender | `docs/blender/` |
| Unreal | `docs/unreal/` |

### 2. Copy the Template

1. Copy [`docs/templates/new-page.md`](https://github.com/h4lfheart/FortnitePortingDocs/blob/main/docs/templates/new-page.md)
2. Put it in the right folder
3. Name it in kebab-case (lowercase and hyphens), e.g. `exporting-skins.md`

### 3. Fill in the Page

Set the header `title` (sidebar label) and `description`.

```md
---
title: Getting Started
description: One sentence about this page
order: 1
---
```

The sidebar updates from the folder structure.

### 4. Sidebar Groups

**Nested group:** add a subfolder. The folder name is clickable (opens its `index.md`) and expands when it has children.

**Sibling section:** add `sidebar.config.json` with `"section": true` so the folder sits next to its parent (e.g. **Nodes** beside **Blender**).

Section `index.md` pages can include `<SectionLinks />` to auto-list child pages (and sibling sections) from the sidebar.

### 5. Add File Content

1. Drop the file in `public/` (e.g. `public/app/skin-screenshot.png`)
2. Reference it as:

```md
![Skin Export Screenshot](/app/skin-screenshot.png)
```
