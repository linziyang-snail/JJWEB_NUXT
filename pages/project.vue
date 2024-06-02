<template>
    <div>
        <Banner />
        <Project />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: '捷匠專業汽車美容 | 施工實照 | 淡水洗車 汽車美容 淡水汽車美容',
  meta: [
    {
      name: 'description',
      content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。我們提供基本護理、深度護理、客製化服務、鍍膜施作等。在這裡展示我們的施工實照，讓您看到我們精湛的技術和專業的服務。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
    },
    {
      name: 'keywords',
      content: '淡水洗車, 汽車美容, 淡水汽車美容, 洗車, 淡水, 汽車鍍膜, 汽車打蠟, 施工實照',
    },
    {
      property: 'og:title',
      content: '捷匠專業汽車美容 | 施工實照 | 淡水洗車 汽車美容',
    },
    {
      property: 'og:description',
      content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。我們提供基本護理、深度護理、客製化服務、鍍膜施作等。在這裡展示我們的施工實照，讓您看到我們精湛的技術和專業的服務。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
    },
    {
      property: 'og:image',
      content: 'http://localhost:3000/og-logo.png',    
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'http://localhost:3000',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: '捷匠專業汽車美容 | 施工實照 | 淡水洗車 汽車美容',
    },
    {
      name: 'twitter:description',
      content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。我們提供基本護理、深度護理、客製化服務、鍍膜施作等。在這裡展示我們的施工實照，讓您看到我們精湛的技術和專業的服務。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
    },
    {
      name: 'twitter:image',
      content: 'http://localhost:3000/og-logo.png',
    },
  ],
});
</script>
