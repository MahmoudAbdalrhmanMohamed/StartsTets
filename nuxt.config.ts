import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  devServer: {
    port: 54758,
  },
  app: {
    head: {
      title: "موقع الأثاث | شاهين",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      meta: [
        {
          name: "description",
          content: "أثاث فاخر، غرف معيشة، غرف نوم، مقالات ونصائح ديكور",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ar_EG" },
      ],
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/article/**": { isr: 3600 },
  },
});
