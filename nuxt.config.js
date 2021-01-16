export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/scss/helpers.scss",
    "~/assets/scss/icons.scss",
    "~/assets/scss/navbar.scss",
    "~/assets/scss/app.scss",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/mixins",
    "@/plugins/element-ui",
    "@/plugins/wysiwyg",
    { src: "~/plugins/axios", mode: "client" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources",
    [
      //https://nuxt-community.github.io/nuxt-i18n
      "nuxt-i18n",
      {
        //baseUrl: 'https://my-nuxt-app.com',  // production only
        //seo: true,
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en-US.js",
          },
          {
            name: "Español",
            code: "es",
            iso: "es-ES",
            file: "es-ES.js",
          },
          {
            name: "中国人",
            code: "zh",
            iso: "zh-ZH",
            file: "zh-ZH.js",
          },
          {
            name: "Русский",
            code: "ru",
            iso: "ru-RU",
            file: "ru-RU.js",
          },
        ],
        defaultLocale: "en",
        langDir: "lang/",
        lazy: true,
      },
    ],
  ],

  styleResources: {
    scss: [
      "~/assets/scss/element-ui-variables.scss",
      "~/assets/scss/element-ui-colors.scss",
      "~/assets/scss/element-ui.scss",
      "~/assets/scss/variables.scss",
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    standalone: true,
    //extend(config, ctx) {},
    /*splitChunks: {
            layouts: true
        }*/
  },
};
