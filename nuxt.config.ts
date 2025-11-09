// https://nuxt.com/docs/api/configuration/nuxt-config

import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [
      viteTsconfigPaths({
        ignoreConfigErrors: true,
      }),
    ],
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
  ],
})