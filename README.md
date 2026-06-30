# Open Diary

A minimal, single-author blog. Entries are Markdown files; the site is built
with [Astro](https://astro.build) and published automatically to GitHub Pages.

**Live site:** https://yitongdeng-projects.github.io/open_diary/

## Writing entries

### Option A — In the browser (any device)

1. Go to [Pages CMS](https://app.pagescms.org) and sign in with GitHub.
2. Authorize it on the `open_diary` repository.
3. Use the **Entries** collection to write or edit posts in a clean editor.
4. Saving commits to `main`, which triggers an automatic rebuild + deploy.

Config lives in [`.pages.yml`](./.pages.yml).

### Option B — Locally

Create a Markdown file in `src/content/blog/` with frontmatter:

```markdown
---
title: My entry
date: 2026-06-30
description: Optional summary.
draft: false
---

Body text in Markdown...
```

Then commit and push:

```bash
git add .
git commit -m "New entry"
git push
```

Set `draft: true` to keep an entry out of the published site.

## Local development

```bash
npm install
npm run dev      # preview at http://localhost:4321/open_diary
npm run build    # production build into dist/
```

## How publishing works

Pushing to `main` runs the GitHub Action in
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds
the Astro site and deploys it to GitHub Pages.

> One-time setup: in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**.
