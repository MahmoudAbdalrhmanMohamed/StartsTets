import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
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
    "/contact-us": { prerender: true },
    "/about-us": { prerender: true },
    "/articles/page/**": { isr: 3600 },
    "/article/**": { isr: 3600 },
  },
  nitro: {
    routeRules: {
      "/": { prerender: true },
      "/contact-us": { prerender: true },
      "/about-us": { prerender: true },
      "/articles/page/**": { isr: 3600 },
      "/article/**": { isr: 3600 },
    },
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "شركة الشاهين",
      short_name: "الشاهين",
      description: "شراء اثاث مستعمل بالرياض",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      lang: "ar",
      dir: "rtl",

      icons: [
        {
          src: "/images/apple/60.webp",
          sizes: "60x60",
          type: "image/webp",
        },
        {
          src: "/images/apple/76.webp",
          sizes: "76x76",
          type: "image/webp",
        },
        {
          src: "/images/apple/120.webp",
          sizes: "120x120",
          type: "image/webp",
        },
        {
          src: "/images/apple/152.webp",
          sizes: "152x152",
          type: "image/webp",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{ico,png,svg,jpg,jpeg,webp}"],
    },
  },
});
