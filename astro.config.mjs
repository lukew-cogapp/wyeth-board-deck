// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import restart from "vite-plugin-restart";
import remarkGfm from "remark-gfm";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://lukew-cogapp.github.io",
  base: "/wyeth-board-deck",
  trailingSlash: "ignore",
  integrations: [mdx({ remarkPlugins: [remarkGfm] }), react()],
  vite: {
    plugins: [
      tailwindcss(),
      restart({
        restart: [
          "src/content/order.ts",
          "src/content/slides/**/*.mdx",
        ],
      }),
    ],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: false,
    },
  },
});