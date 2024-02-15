// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Not just another developer!";
export const SITE_DESCRIPTION =
  "Amirreza Safehian's Blog";
export const TWITTER_HANDLE = "@amiiirsafe";
export const MY_NAME = "Amirreza Safehian";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
