// @ts-check
import mdx from "@astrojs/mdx";
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
        borderRadius: "0.25rem",
        borderColor: "rgba(255, 255, 255, 0.1)",
        codeFontSize: "0.875rem",
        uiFontSize: "0.875rem",
        uiPaddingBlock: "0.5rem",
        frames: {
          editorBackground: "rgba(255, 255, 255, 0.02)",
          terminalBackground: "rgba(255, 255, 255, 0.02)",
          shadowColor: "transparent",
        },
      },
      frames: {
        showCopyToClipboardButton: true,
      },
      defaultProps: {
        wrap: false,
        overridesByLang: {},
      },
    }),
    mdx(),
    preact(),
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  output: "static",
});
