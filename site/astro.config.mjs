// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [
    mdx(),
    icon({
      include: {
        tabler: ["*"], // include entire tabler set
      },
    }),
  ],
});
