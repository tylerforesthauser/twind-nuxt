export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Twind + Nuxt.js Static Deployment",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Using Twind with Nuxt.js (static deployment)"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "~/modules/twind",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  // Set options for twind module
  twind: {
    preflight: true,
    theme: {},
    darkMode: "class",
    ssr: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
