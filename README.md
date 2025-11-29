# Amirreza's Personal Blog

This is a personal blog where I write about tech-related work and hobbies.\
Please have a look and visit it at https://safeamii.ir.

It's built with [Astro](https://astro.build), started from using [Blogster](https://github.com/flexdinesh/blogster) theme.

## 📝 Content & Media

- `content/` - All site content (blog, notes, talks, externals)
- `public/images/` - Media files and images for posts

## ⚙️ Technical Structure

- `src/` - Site source (components, layouts, pages, and build helpers)
- `public/` - Static assets (fonts, favicon, etc.)
- `styles/` - Global CSS and Tailwind utilities
- `astro.config.mjs`, `package.json`, `tailwind.config.cjs` - Project configuration

## 🚀 Quick Start (local development)

Prerequisites:

- Node.js (LTS recommended)
- `pnpm` package manager (this repo includes a `pnpm-lock.yaml`)

Install dependencies and start the dev server:

```fish
pnpm install
pnpm dev
```

Build for production:

```fish
pnpm build
pnpm preview
```

## ✍️ Content authoring

- Add blog posts to `content/blog/` as Markdown or Markdoc files.
- Notes go under `content/notes/` and talks under `content/talks/`.
- Follow the existing frontmatter patterns (see `content/blog/hello-world.md`) and `src/lib/markdoc/frontmatter.schema.ts` for schema details.
- Put images used in posts into `public/images/` (e.g., `public/images/blog/`).

## 🚀 Deploy

This blog can be deployed to any static hosting service that supports Astro builds. This repo is currently deployed on [Vercel](https://vercel.com), but you can also use Cloudflare Pages, Netlify, or other platforms.

To deploy on Vercel:

1. Connect your GitHub repo to Vercel
2. Vercel will automatically detect Astro and use `pnpm build`
3. Deploy happens automatically on every push to main

## 👨‍💻 Author

Amirreza Safehian — personal blog maintained at this repository.
