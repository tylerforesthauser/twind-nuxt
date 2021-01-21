export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap"
      }
    ]
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
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    "~/modules/twind",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  // Set options for twind module
  twind: {
    preflight: true,
    theme: {
      extend: {
        colors: {
          nuxt: {
            gray: "#2F495E",
            lightgreen: "#00C58E",
            green: "#108775"
          },
          primary: {
            base: "#00C58E",
            light: "#00E0A1",
            dark: "#07A377"
          },
          light: {
            surface: "#F8FAFC",
            onSurfacePrimary: "#2F495E",
            onSurfaceSecondary: "#606F7B",
            elevatedSurface: (theme) => theme("colors.white"),
            border: (theme) => theme("colors.gray.300")
          },
          dark: {
            surface: "#2C3E50",
            onSurfacePrimary: "#F5F7FA",
            onSurfaceSecondary: "#B8C2CC",
            elevatedSurface: "#2F495E",
            border: (theme) => theme("colors.gray.600")
          }
        },
        fontFamily: {
          sans: [
            "Quicksand",
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
          ]
        }
      }
    },
    darkMode: "class",
    ssr: true
  },

  // HTTP module configuration (https://http.nuxtjs.org/api/#options)
  http: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
