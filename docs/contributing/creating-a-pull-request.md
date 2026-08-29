---
title: Creating a Pull Request
description: Submit documentation changes for review on GitHub
order: 3
---

# Creating a Pull Request

A pull request asks maintainers to review and merge your changes into the docs.

## From the Docs Website

Best for small edits to one page.

1. Open the page on the docs site
2. Click **Edit this Page** at the bottom
3. Make your changes on GitHub
4. Click **Commit Changes** and fill in a short commit message
5. Open a pull request against `main` and describe what you changed

## From Your Computer

Best for new pages, media, or changes across multiple files. You can set up a [local preview](/contributing/running-locally) after cloning.

1. Fork [FortnitePortingDocs](https://github.com/h4lfheart/FortnitePortingDocs) on GitHub, then clone your fork:

```sh
git clone https://github.com/YOUR-USERNAME/FortnitePortingDocs
cd FortnitePortingDocs
```

*Replace `YOUR-USERNAME` with your GitHub username.*

2. Create a branch for your work (you cannot commit straight to `main`):

```sh
git checkout -b your-change-name
```

3. Make your edits under `docs/` (and `public/` if you add images or videos)
   - Make sure to follow the [Style Guidelines](/contributing/style-guidelines)!
4. Commit your changes with a clear message:

```sh
git add .
git commit -m "Short description of the change"
```

5. Push your branch:

```sh
git push -u origin your-change-name
```

6. Open GitHub and create a pull request into `main`
7. Write a short summary of what changed and why

## Tips

- Keep each pull request focused on one topic
- Double-check links and images in the local preview before submitting
- Respond to review comments if maintainers ask for changes

::: tip Waiting on Review
Pull requests are reviewed when someone is available. Small, clearer changes are easier to merge quickly.
:::
