<template>
  <div class="loading-overlay" v-show="isLoading">
    <div class="loading-content">
      <img src="../assets/logo/JIEJIANG_Logo.png" alt="Brand Logo" class="logo">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const isLoading = useState('isLoading',() => {return true});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* 背景帶有透明度 */
  opacity: 1;
  visibility: visible;
  transition: opacity 1s ease, visibility 1s ease; /* 添加過渡效果 */
  z-index: 9999;
}

.loading-content .logo {
  width: 250px;
  margin-bottom: 20px;
}

.progress {
  width: 100%; /* 調整進度條寬度 */
  height: 20px; /* 進度條高度 */
  background-color: #ddd; /* 背景顏色 */
  border-radius: 10px; /* 圓角效果 */
  overflow: hidden;
  position: relative;
}

.progress-bar {
  width: 0;
  height: 100%;
  background-color: #F6452D !important;
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
