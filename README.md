<!-- AI Generated readme -->

# Amirreza's Personal Blog

A fast, content-focused personal blog built with Astro and Tailwind CSS.

This repository contains the source for the blog: posts, notes, and site configuration.

## Features

- Minimal, content-first layout powered by `Astro`.
- Styling with `Tailwind CSS` and site-level utilities in `styles/global.css`.
- Content stored in the `content/` folder (blog posts, notes, talks, externals).
- Markdoc/MD support via `src/lib/markdoc` for frontmatter and custom rendering.
- Client embeds: Giscus comments, YouTube/Twitter embeds, GitHub Gists, and more.

## Repo structure (important paths)

- `content/` : All site content (blog, notes, talks, externals).
- `src/` : Site source (components, layouts, pages, and build helpers).
- `public/` : Static assets served as-is (images, fonts, favicon, etc.).
- `styles/` : Global CSS and Tailwind utilities.
- `astro.config.mjs`, `package.json`, `tailwind.config.cjs` : project configuration.

## Quick Start (local development)

Prerequisites:

- Node.js (LTS recommended)
- `pnpm` package manager (this repo includes a `pnpm-lock.yaml`)

Install dependencies and start the dev server:

```fish
pnpm install
pnpm dev
```

Open the site at `http://localhost:3000` (Astro will show the exact URL in the console).

Build for production:

```fish
pnpm build
pnpm preview
```

## Content authoring

- Add blog posts to `content/blog/` as Markdown or Markdoc files.
- Notes go under `content/notes/` and talks under `content/talks/`.
- Follow the existing frontmatter patterns (see `content/blog/hello-world.md`) and `src/lib/markdoc/frontmatter.schema.ts` for schema details.

Media and images:

- Put images used in posts into `public/images/` (e.g., `public/images/blog/`). Use the `ImageFromLink.astro` component or static paths in posts.

## Deploy

- This site can be deployed to any static-hosting platform that supports Astro builds (Vercel, Netlify, Cloudflare Pages, etc.).
- Typical flow: `pnpm build` → push `dist/` to the chosen host, or connect the repo and use the provider's build step `pnpm build`.

## License

This repository includes a `LICENSE` file at the project root. See it for license details.

## Author

Amirreza Safehian — personal blog maintained at this repository.
