// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    buildAssetsDir: '/static/',
    head: {
      charset: 'utf-8',
      title: '捷匠專業汽車美容 | 淡水旗艦店',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪機車、四輪汽車皆有服務。基本護理/深度護理/客製化服務/鍍膜施作都是我們服務範疇，在新的時代洗車美容不再是主觀的基本清潔，而是把專業知識與每個臘品、清潔藥劑特性熟識，並融入每個客戶不同的所需中。我們是捷匠 ，會在未來繼續為各位朋友們帶來最好的服務 !' },
        { name: 'keywords', content: '捷匠, 汽車美容, 洗車, 淡水, 鍍膜, 包膜, 打蠟', },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: '捷匠專業汽車美容' },
        { name: 'publisher', content: '捷匠專業汽車美容' },
        
        // Open Graph Meta Tags
        { property: 'og:title', content: '捷匠專業汽車美容 | 淡水旗艦店' },
        { property: 'og:description', content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。基本護理/深度護理/客製化服務/鍍膜施作都是我們服務範疇，在新的時代洗車美容不再是主觀的基本清潔，而是把專業知識與每個臘品、清潔藥劑特性熟識，並融入每個客戶不同的所需中。我們是捷匠 ，會在未來繼續為各位朋友們帶來最好的服務 !' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jiejiang.com.tw/' },
        { property: 'og:image', content: 'https://jiejiang.com.tw/og-logo.png' },
        { property: 'og:site_name', content: '捷匠專業汽車美容' },

        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '捷匠專業汽車美容 | 淡水旗艦店' },
        { name: 'twitter:description', content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。基本護理/深度護理/客製化服務/鍍膜施作都是我們服務範疇，在新的時代洗車美容不再是主觀的基本清潔，而是把專業知識與每個臘品、清潔藥劑特性熟識，並融入每個客戶不同的所需中。我們是捷匠 ，會在未來繼續為各位朋友們帶來最好的服務 !' },
        { name: 'twitter:image', content: 'https://jiejiang.com.tw/og-logo.png' },
        { name: 'twitter:site', content: '@yourtwitterhandle' },

        // Facebook Meta Tags
        { property: 'fb:app_id', content: '87741124305' },
        { property: 'fb:profile_id', content: 'Jiejiang2015' },

        // LinkedIn Meta Tags
        { property: 'linkedin:title', content: '捷匠專業汽車美容 | 淡水旗艦店' },
        { property: 'linkedin:description', content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。基本護理/深度護理/客製化服務/鍍膜施作都是我們服務範疇，在新的時代洗車美容不再是主觀的基本清潔，而是把專業知識與每個臘品、清潔藥劑特性熟識，並融入每個客戶不同的所需中。我們是捷匠 ，會在未來繼續為各位朋友們帶來最好的服務 !' },
        { property: 'linkedin:image', content: 'https://jiejiang.com.tw/og-logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/Swiper/10.3.1/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&family=Oswald:wght@500;600;700&display=swap' },
        { rel: 'canonical', href: 'https://jiejiang.com.tw/' }
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
  plugins: [
    '~/plugins/google-analytics.js',
    '~/plugins/gtm.js',
  ],
  modules: [
    'nuxt-aos',
    'nuxt-swiper',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'https://jiejiang.com.tw/',
  },
  nitro: {
    logLevel: 3,
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/project',
        '/services',
        '/sitemap.xml'
      ],
    },
  },
  image: {
    dir: 'assets',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 50
        }
      }
    },
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
