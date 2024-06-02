<template>
    <div> 
        <div data-aos="fade-up">
            <HomeComponentsHero />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
            <HomeComponentsAbout />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
            <Process />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <HomeComponentsProject />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
            <Price />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
            <PriceTableCarousel />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: '捷匠專業汽車美容 | 淡水旗艦店 | 洗車 打蠟 鍍膜 包膜 | 淡水洗車 汽車美容 淡水汽車美容',
  meta: [
    {
      name: 'description',
      content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。提供基本護理、深度護理、客製化服務、鍍膜施作等。在新的時代，洗車美容不再只是基本清潔，而是把專業知識與每個蠟品、清潔藥劑特性熟識，融入每個客戶的需求中。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
    },
    {
        name: 'keywords',
        content: '淡水洗車, 汽車美容, 淡水汽車美容, 淡水, 洗車, 淡水汽車美容',
    },
    {
        name: 'og:title',
        content: '捷匠專業汽車美容 | 淡水旗艦店 | 淡水洗車 汽車美容',
    },
    {
        name: 'og:description',
        content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。提供基本護理、深度護理、客製化服務、鍍膜施作等。在新的時代，洗車美容不再只是基本清潔，而是把專業知識與每個蠟品、清潔藥劑特性熟識，融入每個客戶的需求中。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
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
        content: '捷匠專業汽車美容 | 淡水旗艦店 | 淡水洗車 汽車美容',
    },
    {
        name: 'twitter:description',
        content: '捷匠成立於2015年，於淡水致力給予顧客最好的手作品質，不分二輪、四輪皆有服務。提供基本護理、深度護理、客製化服務、鍍膜施作等。在新的時代，洗車美容不再只是基本清潔，而是把專業知識與每個蠟品、清潔藥劑特性熟識，融入每個客戶的需求中。我們將在未來繼續為各位朋友們帶來最好的汽車美容服務！',
    },
    {
        name: 'twitter:image',
        content: 'http://localhost:3000/og-logo.png',
    },
  ],
})
</script>
