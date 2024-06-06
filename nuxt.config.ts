// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    // buildAssetsDir: '/_nuxt/',
    head: {
      charset: 'utf-8',
      title: 'JieJiang | 捷匠專業汽車美容 - 只提供最頂級汽車美容服務',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '捷匠專業汽車美容成立於2015年，在淡水、竹圍和北投三地設有分店，致力於提供頂級的汽車護理和美容服務。無論是二輪或四輪車輛，我們都能提供專業的基本護理、深度護理、客製化服務、鍍膜施作和包膜服務。捷匠的洗車美容服務不僅僅是基本清潔，我們將專業知識融入每個客戶的需求中，確保每個蠟品和清潔藥劑的特性都得到充分發揮。無論您身處淡水、竹圍還是北投，捷匠都能為您的愛車提供最好的護理服務。未來，我們將繼續致力於為每一位顧客帶來卓越的汽車美容體驗。' },
        { name: 'keywords', content: '捷匠, 汽車美容, 洗車, 淡水, 竹圍, 北投, 鍍膜, 包膜, 打蠟, 淡水汽車美容, 竹圍汽車美容, 北投汽車美容' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: '捷匠專業汽車美容' },
        { name: 'publisher', content: '捷匠專業汽車美容' },
        
        // Open Graph Meta Tags
        { property: 'og:title', content: 'JieJiang | 捷匠專業汽車美容 - 只提供最頂級汽車美容服務' },
        { property: 'og:description', content: '捷匠專業汽車美容成立於2015年，在淡水、竹圍和北投三地設有分店，致力於提供頂級的汽車護理和美容服務。無論是二輪或四輪車輛，我們都能提供專業的基本護理、深度護理、客製化服務、鍍膜施作和包膜服務。捷匠的洗車美容服務不僅僅是基本清潔，我們將專業知識融入每個客戶的需求中，確保每個蠟品和清潔藥劑的特性都得到充分發揮。無論您身處淡水、竹圍還是北投，捷匠都能為您的愛車提供最好的護理服務。未來，我們將繼續致力於為每一位顧客帶來卓越的汽車美容體驗。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jiejiang.com.tw' },
        { property: 'og:image', content: 'https://jiejiang.com.tw/og-logo.png' },
        { property: 'og:site_name', content: '捷匠專業汽車美容' },
  
        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'JieJiang | 捷匠專業汽車美容 - 只提供最頂級汽車美容服務' },
        { name: 'twitter:description', content: '捷匠專業汽車美容成立於2015年，在淡水、竹圍和北投三地設有分店，致力於提供頂級的汽車護理和美容服務。無論是二輪或四輪車輛，我們都能提供專業的基本護理、深度護理、客製化服務、鍍膜施作和包膜服務。捷匠的洗車美容服務不僅僅是基本清潔，我們將專業知識融入每個客戶的需求中，確保每個蠟品和清潔藥劑的特性都得到充分發揮。無論您身處淡水、竹圍還是北投，捷匠都能為您的愛車提供最好的護理服務。未來，我們將繼續致力於為每一位顧客帶來卓越的汽車美容體驗。' },
        { name: 'twitter:image', content: 'https://jiejiang.com.tw/og-logo.png' },
        { name: 'twitter:site', content: '@yourtwitterhandle' },
  
        // Facebook Meta Tags
        { property: 'fb:app_id', content: '87741124305' },
        { property: 'fb:profile_id', content: 'Jiejiang2015' },
  
        // LinkedIn Meta Tags
        { property: 'linkedin:title', content: 'JieJiang | 捷匠專業汽車美容 - 只提供最頂級汽車美容服務' },
        { property: 'linkedin:description', content: '捷匠專業汽車美容成立於2015年，在淡水、竹圍和北投三地設有分店，致力於提供頂級的汽車護理和美容服務。無論是二輪或四輪車輛，我們都能提供專業的基本護理、深度護理、客製化服務、鍍膜施作和包膜服務。捷匠的洗車美容服務不僅僅是基本清潔，我們將專業知識融入每個客戶的需求中，確保每個蠟品和清潔藥劑的特性都得到充分發揮。無論您身處淡水、竹圍還是北投，捷匠都能為您的愛車提供最好的護理服務。未來，我們將繼續致力於為每一位顧客帶來卓越的汽車美容體驗。' },
        { property: 'linkedin:image', content: 'https://jiejiang.com.tw/og-logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/Swiper/10.3.1/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&family=Oswald:wght@500;600;700&display=swap' },
        { rel: 'canonical', href: 'https://jiejiang.com.tw' }
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
    url: 'https://jiejiang.com.tw',
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
      },
    },
    assetsInclude: ['**/*.JPG']
  },
  devtools: { enabled: true },
  sitemap: {
    hostname: 'https://jiejiang.com.tw',
    gzip: true,
    trailingSlash: false,
    routes: [
      '/',
      '/about',
      '/contact',
      '/project',
      '/services'
    ]
  },
})