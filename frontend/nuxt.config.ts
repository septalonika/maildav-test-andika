// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      title: "MAILDAV PHOTO CHECKER",
      meta: [{ name: "description", content: "Photo Checker" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});
