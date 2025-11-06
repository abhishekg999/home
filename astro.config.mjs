// @ts-check
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://ahh.bet",
  server: {
    allowedHosts: [".trycloudflare.com"],
  },
  integrations: [
    expressiveCode({
      themes: ["github-dark"],
      styleOverrides: {
        borderRadius: "0.75rem",
        borderColor: "rgb(55, 65, 81)",
        codeFontSize: "0.875rem",
        uiFontSize: "0.875rem",
      },
      frames: {
        showCopyToClipboardButton: true,
      },
    }),
    preact(),
    tailwind(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  output: "static",
});
