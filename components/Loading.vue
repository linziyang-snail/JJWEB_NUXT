<template>
  <div class="loading-overlay" v-if="isLoading">
    <div class="loading-content">
      <NuxtImg 
        class="logo" 
        src="/logo/JIEJIANG_Logo.png" 
        alt="Loading Logo"
        format="webp"
        quality="10" 
      />
      <div class="progress">
        <div class="progress-bar" role="progressbar"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = useState('isLoading', () => true);

onMounted(() => {
  // 設定最小載入時間
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

// 路由變化時顯示載入畫面
const router = useRouter();
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  // 路由變化完成後延遲關閉載入畫面
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
  display: block;
}

.progress {
  width: 250px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
}

.progress-bar {
  width: 0;
  height: 100%;
  background-color: #F6452D;
  animation: loading 3s infinite;
}

@keyframes loading {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}
</style>
