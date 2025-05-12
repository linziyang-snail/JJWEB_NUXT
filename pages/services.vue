<template>
  <div>
    <Banner />
    <Services />
    <Price />
    <PriceTableCarousel />
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'JieJiang | 捷匠專業汽車美容 - 服務項目 Services',
  meta: [
    {
      property: 'og:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 服務項目 Services',
    },
    {
      property: 'og:url',
      content: 'https://jiejiang.com.tw/services/',
    },
    {
      name: 'twitter:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 服務項目 Services',
    },
    {
      property: 'linkedin:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 服務項目 Services',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://jiejiang.com.tw/services/'
    }
  ],
});

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://jiejiang.com.tw/services/',
  'url': 'https://jiejiang.com.tw/services/',
  'name': '服務項目',
  'description': '提供淡水、紅樹林、竹圍、北投、三重等地區汽車美容、洗車、鍍膜、包膜等多項頂級服務。',
  'inLanguage': 'zh-TW',
  'isPartOf': {
    '@id': 'https://jiejiang.com.tw/#website'
  },
});
</script>
