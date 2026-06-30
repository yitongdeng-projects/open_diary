// @ts-check
import { defineConfig } from "astro/config";

// This blog is served from a GitHub Pages "project" URL:
//   https://yitongdeng-projects.github.io/open_diary/
// so `site` is the origin and `base` is the repo subpath.
export default defineConfig({
  site: "https://yitongdeng-projects.github.io",
  base: "/open_diary",
  trailingSlash: "ignore",
});
