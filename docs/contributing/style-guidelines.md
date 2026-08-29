---
title: Style Guidelines
description: Naming, structure, titles, and writing style for documentation pages
order: 2
---

# Style Guidelines

Follow these conventions so new pages match the rest of the docs.

## File Structure

| Kind | Where |
| --- | --- |
| App guides | `docs/app/` |
| Blender guides | `docs/blender/` |
| Unreal guides | `docs/unreal/` |
| Contributing | `docs/contributing/` |
| Page template | `docs/templates/` |
| Images / videos | `public/<section>/...` |

- One topic per page. Split long topics into separate pages.
- Section overviews use `index.md` and `<SectionLinks />`.
- Nested group: put related pages in a subfolder with its own `index.md`.
- Sibling section: add `sidebar.config.json` with `"section": true` (see [Blender Nodes](/blender/nodes/) for example).
- Keep media paths mirrored under `public/`, e.g. `public/blender/locating-blender/steam.mp4`.

## Naming

- Files and folders: **kebab-case** only (lowercase letters, numbers, and hyphens).
  - Good: `installing-plugin.md`, `locating-blender.md`
  - Bad: `InstallingPlugin.md`, `locating_blender.md`
- Name the file after what the reader is doing or looking up.
- Do not use spaces or special characters in paths.

## Titles and Page Header

Every page starts with:

```md
---
title: Installing the Plugin
description: Sync, update, or remove the Fortnite Porting plugin in Blender
order: 1
---

# Installing the Plugin
```

- The `title` and main `#` heading must match.
- Capitalize the main words in titles. Prefer clear actions or nouns: **Installing the Plugin**, **Locating Blender**, **Frequent Props**.
- `description` is one short sentence that says what the page covers. Do not repeat the title word-for-word.
- Use `order` when sidebar order matters. Lower numbers appear first. Put cheatsheets and reference pages last.
- Do not make titles sound like ads, they should generally explain what they cover. Don't be over specific either.

## Text Style

- Lead with one or two short sentences, then the steps or list.
- Prefer numbered steps for how-tos. Prefer bullets for notes, options, or loose lists.
- Bold button and menu names: **Plugin**, **Add Version**, **Sync**.
- Use backticks for paths, filenames, and similar values: `blender.exe`, `docs/app/`.
- Link related pages with clean paths: `[Locating Blender](/blender/locating-blender)`.
- Keep sentences short. Say what to do, then any needed why.
- Avoid filler words and long walls of text.
- Use callouts as intended:
  - `tip` for optional helpful advice
  - `warning` for easy mistakes
  - `danger` for something that can break a project or lose work

## Images and Media

- Prefer short clips or screenshots that show one action, not a full tour.
- Reference public files from the site root: `![Sync confirmation](/app/sync-confirmation.png)`.
