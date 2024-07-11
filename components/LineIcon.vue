<template>
  <div>
    <!-- Line Icon with "點我預約" text -->
    <div  class="reservation-container" @click="togglePopup">
      <a
        class="nav-link d-flex align-items-center justify-content-center"
        href="javascript:void(0);"
        aria-label="前往Line連結"
      >
        <!-- <Icon
          name="ri:line-fill"
          class="social-icon line-icon"
          style="font-size: 36px; color: white;"
        >
        </Icon> -->
        <span class="reservation-text">我要預約！</span>
      </a>
    </div>

    <!-- Popup Dialog -->
    <div v-if="showPopup" class="popup-overlay" @click="togglePopup">
      <div class="popup-dialog" @click.stop>
        <div class="popup-content">
          <button type="button" class="btn-close" @click="togglePopup" aria-label="Close"></button>
          <h5 class="text-center mb-3">立即使用LINE預約</h5>
          <div class="list-group">
            <a 
              href="https://line.me/R/ti/p/@639xmqad" 
              target="_blank" 
              class="list-group-item list-group-item-action d-flex align-items-center"
            >
              <Icon name="ri:line-fill" class="me-2" style="font-size: 24px; color: #00c300;"></Icon>
              捷匠 - 官方LINE
            </a>
            <a 
              href="https://line.me/R/ti/p/@rb_33" 
              target="_blank" 
              class="list-group-item list-group-item-action d-flex align-items-center"
            >
              <Icon name="ri:line-fill" class="me-2" style="font-size: 24px; color: #00c300;"></Icon>
              捷匠 - 包膜部門
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);

function togglePopup() {
  showPopup.value = !showPopup.value;
}
</script>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.reservation-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 99;
}

.line-icon {
  width: 70px;
  height: 70px; 
  border-radius: 50%;
  background: linear-gradient(45deg, #00c300, #00e600);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: bounce 2s infinite, pulse 2s infinite;
}

.reservation-text {
  margin-left: 10px;
  font-size: 16px;
  color: white;
  background: linear-gradient(45deg, #00c300, #00e600);
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: bounce 2s infinite, pulse 2s infinite;
}

.line-icon:hover {
  transform: scale(1.2);
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-dialog {
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 1rem;
  z-index: 101;
  position: absolute;
  right: 50px;
  bottom: 150px;
}

.popup-content {
  position: relative;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .reservation-container {
    bottom: 20px;
    right: 20px;
  }

  .line-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .popup-dialog {
    right: 20px;
    bottom: 100px;
  }
}
</style>
