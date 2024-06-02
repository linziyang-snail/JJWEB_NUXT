// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/JJWEB_NUXT/' : '/',
    buildAssetsDir: '/static/',
    head: {
      charset: 'utf-8',
      title: '捷匠專業汽車美容 | 淡水旗艦店',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。基本護理/深度護理/客製化服務/鍍膜施作都是我們服務範疇，在新的時代洗車美容不再是主觀的基本清潔，而是把專業知識與每個臘品、清潔藥劑特性熟識，並融入每個客戶不同的所需中。我們是捷匠 ，會在未來繼續為各位朋友們帶來最好的服務 !' },
        { name: 'keywords', content: '捷匠, 捷匠專業汽車美容, 汽車美容, 洗車, 淡水, 淡水汽車美容, 淡水洗車, 鍍膜, 包膜' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: '捷匠專業汽車美容' },
        { name: 'publisher', content: '捷匠專業汽車美容' },

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/Swiper/10.3.1/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&family=Oswald:wght@500;600;700&display=swap' },
        { rel: 'canonical', href: 'http://localhost:3000/' }
      ],
      htmlAttrs: {
        lang: 'zh-Hant'
      }
    }
  },
  css: [
    'bootstrap/scss/bootstrap.scss',
    '~/assets/css/style.css'
  ],
  components: [
    {
    path: '~/components',
    pathPrefix: true,
    }
  ],
  modules: [
    'nuxt-aos',
    'nuxt-swiper',
    'nuxt-icon',
    "vue3-carousel-nuxt",
    "@nuxt/image",
    // "@nuxtjs/sitemap"
  ],

  nitro: {
    logLevel: 3,
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/project',
        '/product',
        '/services'
      ],
    },
  },

  image: {
    dir: 'assets'
  },

  vite: {
    build: {
      rollupOptions: {
        plugins: [
          require('@rollup/plugin-image')()
        ]
      }
    },
    assetsInclude: ['**/*.JPG']
  },

  devtools: { enabled: true },

})
