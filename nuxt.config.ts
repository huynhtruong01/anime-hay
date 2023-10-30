import type { NuxtConfig } from "@nuxt/types"

// https://nuxt.com/docs/api/configuration/nuxt-config
const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  srcDir: "src/",
  css: ["~/assets/css/main.css"],
}

export default config
