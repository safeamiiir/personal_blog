---
external: false
title: 💬 Giscus, Add a Comment Section to Your Blog in Minutes
description: Learn how to easily integrate Giscus, a lightweight and privacy-focused comment system, into your blog. This quick guide will walk you through the steps to set it up and start engaging with your readers.
date: 2025-11-23
---

Adding comments to a static blog doesn't have to be complicated. **Giscus** is a lightweight, privacy-focused comment system that uses GitHub Discussions as the backend. Here's how I implemented it in this blog.

## What is Giscus and why I chose it?

Giscus transforms your GitHub repository's discussions into a comment system for your website. It's:

- **Free and open source**: No subscription fees or usage limits
- **Privacy-focused** No tracking scripts or third-party analytics
- **No database needed & Easy to integrate**: Perfect for static sites
- **GitHub-powered** Assuming my audience is already on GitHub (users comment with their GitHub accounts)
- **Customizable** Matches my site's design seamlessly

## Getting Started

Before implementing, you need to get your repository's configuration from [giscus.app](https://giscus.app/). Here's what you'll need:

- **Repository**: Your GitHub repo (must be public)
- **Repository ID**: Auto-generated identifier
- **Discussion Category**: Which category to use for comments
- **Category ID**: Auto-generated category identifier

Visit [giscus.app](https://giscus.app/) and follow these steps:

1. Enter your repository name (e.g., `safeamiiir/personal_blog`)
2. Choose your discussion category (I use "Announcements")
3. Configure your preferences
4. Copy the generated script from [giscus.app](https://giscus.app/)
5. Add it to your website
6. That's it!

Not let me show you how I did this in my blog.

## Implementation in Astro

Here's how I implemented Giscus in my Astro blog. I created a reusable component at `src/components/Giscus.astro`:

```astro
---
const repo = "[ENTER REPO HERE]";
const repoId = "[ENTER REPO ID HERE]";
const category = "[ENTER CATEGORY HERE]";
const categoryId = "[ENTER CATEGORY ID HERE]";
---

<div class="giscus"></div>

<script
  is:inline
  src="https://giscus.app/client.js"
  data-repo={repo}
  data-repo-id={repoId}
  data-category={category}
  data-category-id={categoryId}
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="1"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="en"
  crossorigin="anonymous"
  async
></script>
```

### Key Configuration Options

- **`data-mapping="pathname"`**: Uses the page URL to map comments
- **`data-theme="preferred_color_scheme"`**: Respects user's system theme
- **`data-reactions-enabled="1"`**: Allows GitHub reactions on comments, it's by default set to "1" (meaning it's allowed)
- **`data-input-position="bottom"`**: Places the comment form at the bottom

## Dark Mode Support

The trickiest part was making Giscus work seamlessly with dark mode. I added this script to dynamically update the theme:\
(Being honest this script is AI generated)

```javascript
<script is:inline>
  function setGiscusTheme() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;

    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }

  // Wait for iframe to load
  function waitForGiscusIframe() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) {
      requestAnimationFrame(waitForGiscusIframe);
      return;
    }

    iframe.addEventListener("load", () => {
      setTimeout(setGiscusTheme, 100);
    });
  }

  // Apply theme on load and when theme changes
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForGiscusIframe);
  } else {
    waitForGiscusIframe();
  }

  // Watch for theme changes
  const observer = new MutationObserver(() => {
    setTimeout(setGiscusTheme, 150);
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
</script>
```

## Using the Component

Once created, I can add comments to any page by importing and using the component:
So I've added this components below:

- `ContentLayout.astro`
- `NoteContentLayout.astro`
- `TalkContentLayout.astro`

```astro
---
import Giscus from '../components/Giscus.astro';
---

<!-- Your page content -->

<Giscus />
```

## Result

Your readers can now comment using their GitHub accounts, and all discussions are stored in your repository's Discussions tab.\
To set it up, it doesn't take that long, and you get an off-the-shelf, robust, spam-free comment system that your developer audience will appreciate.\
You can see Giscus in action in the comments section below. It loads fast, looks clean, and integrates perfectly with the site's theme system.
