<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const isLoading = useState('isLoading');
const isLoadingImg = useState('isLoadingImg');

onMounted(() => {
  // 初始設置
  isLoading.value = true;

  // 監視 isLoadingImg 的變化
  watchEffect(() => {
    if (!isLoadingImg.value) {
      setTimeout(() => {
        isLoading.value = false;
      }, 900); // 延遲0.5秒關閉加載動畫
    }
  });
});

useSchemaOrg([
  defineOrganization({
    '@type': 'Organization',
    name: 'JieJiang | 捷匠專業汽車美容 - 淡水・北投 | 洗車・鍍膜・包膜・打蠟',
    url: 'https://jiejiang.com.tw/',
    logo: 'https://jiejiang.com.tw/og-logo.png',
    sameAs: [
      'https://www.facebook.com/Jiejiang2015/?locale=zh_TW',
      'https://www.instagram.com/jiejiang_autodetailing',
      'https://www.instagram.com/jiejiang_beitou_/',
      'https://www.instagram.com/jiejiang_zhuwei/',
    ]
  }),
  defineWebSite({
    name: 'JieJiang | 捷匠專業汽車美容 - 淡水・北投 | 洗車・鍍膜・包膜・打蠟',
    url: 'https://jiejiang.com.tw/'
  }),
  defineWebPage()
]);

</script>
