<template>
    <div>
        <Banner />
        <AboutComponentsAbout /> 
        <Process /> 
    </div>

</template>

<script setup lang="ts">
useHead({
  title: 'JieJiang | 捷匠專業汽車美容 - 關於捷匠 About JieJiang',
  meta: [
    {
      property: 'og:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 關於捷匠 About JieJiang',
    },
    {
      property: 'og:url',
      content: 'https://jiejiang.com.tw/about/',
    },
    {
      name: 'twitter:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 關於捷匠 About JieJiang',
    },
    {
      property: 'linkedin:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 關於捷匠 About JieJiang',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://jiejiang.com.tw/about/'
    }
  ],
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://jiejiang.com.tw/about/',
  'url': 'https://jiejiang.com.tw/about/',
  'name': '關於捷匠',
  'description': '了解更多關於捷匠專業汽車美容的服務項目，我們致力於提供頂級的汽車美容和洗車服務。',
  'inLanguage': 'zh-TW',
  'isPartOf': {
    '@id': 'https://jiejiang.com.tw/#website'
  },
});
</script>

