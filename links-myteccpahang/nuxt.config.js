export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Links | MYTECC',
    meta: [
      // Google Site Verification
      { name: 'google-site-verification', content: 'VgqnxiY7DwzptZwAvG2ecVygXiuKDDblq-7DLMPPMyU' },

      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MARA Youth Technology Computer Club (MYTECC). Here you can find important links for CS110 students. Technology is the future of creativity.' },
      { hid: 'keywords', name: 'keywords', content: 'mytecc, mytecc pahang, links mytecc, uitm raub, mara youth technology computer club' },

      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'MYTECC links directory' },
      { hid: 'og:url', property: 'og:url', content: 'https://links.myteccpahang.com' },
      { hid: 'og:title', property: 'og:title', content: 'Links | MYTECC' },
      { hid: 'og:description', property: 'og:description', content: 'MARA Youth Technology Computer Club (MYTECC). Here you can find important links for CS110 students. Technology is the future of creativity.' },
      { hid: 'og:image', property: 'og:image', content: '/mytecc-logo.png' },

      // Twitter
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://links.myteccpahang.com' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Links | MYTECC' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'MARA Youth Technology Computer Club (MYTECC). Here you can find important links for CS110 students. Technology is the future of creativity.' },
      { hid: 'twitter:image', property: 'twitter:image', content: '/mytecc-logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      // Icon Bootstrap CDN
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Titillium+Web:wght@300;400;600&display=swap',
        rel: 'stylesheet'
      }
    ],
    script: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css'
  ],

  // Loading
  loading: {
    color: 'red',
    height: '5px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://admin.myteccpahang.com/api'
    // baseURL: 'http://127.0.0.1:8000/api' // Local Server
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'server'
}
