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

</script>
