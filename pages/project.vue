<template>
    <div>
        <Banner />
        <Project />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'JieJiang | 捷匠專業汽車美容 - 施工實照 Project Gallery',
  meta: [
    {
      property: 'og:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 施工實照 Project Gallery',
    },
    {
      property: 'og:url',
      content: 'https://jiejiang.com.tw/project/',
    },
    {
      name: 'twitter:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 施工實照 Project Gallery',
    },
    {
      property: 'linkedin:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 施工實照 Project Gallery',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://jiejiang.com.tw/project/'
    }
  ],
});

useJsonld({
  '@context': 'https://schema.org/',
  '@type': 'WebPage',
  '@id': 'https://jiejiang.com.tw/project/',
  'url': 'https://jiejiang.com.tw/project/',
  'name': '聯繫捷匠',
  'description': '不只汽車美容、洗車服務專業，我們也有專業攝影師幫您愛車拍美照。',
  'inLanguage': 'zh-TW',
  'isPartOf': {
    '@id': 'https://jiejiang.com.tw/#website'
  },
});
</script>

