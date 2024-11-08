<template>
    <div>
        <Banner />
        <Contact />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'JieJiang | 捷匠專業汽車美容 - 聯繫捷匠 Contact JieJiang',
  meta: [
    {
      property: 'og:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 聯繫捷匠 Contact JieJiang',
    },
    {
      property: 'og:url',
      content: 'https://jiejiang.com.tw/contact/',
    },
    {
      name: 'twitter:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 聯繫捷匠 Contact JieJiang',
    },
    {
      property: 'linkedin:title',
      content: 'JieJiang | 捷匠專業汽車美容 - 聯繫捷匠 Contact JieJiang',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://jiejiang.com.tw/contact/'
    }
  ],
});

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://jiejiang.com.tw/contact/',
  'url': 'https://jiejiang.com.tw/contact/',
  'name': '聯繫捷匠',
  'description': '聯繫捷匠，我們在淡水、竹圍、北投等地區都有提供汽車美容與洗車服務。',
  'inLanguage': 'zh-TW',
  'isPartOf': {
    '@id': 'https://jiejiang.com.tw/#website'
  },
});
</script>
