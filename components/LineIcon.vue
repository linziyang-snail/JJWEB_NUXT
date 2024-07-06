<template>
  <div>
    <!-- Line Icon -->
    <a
      class="nav-link d-flex align-items-center px-3"
      href="javascript:void(0);"
      @click="togglePopup"
      aria-label="前往Line連結"
    >
      <Icon
        name="ri:line-fill"
        color="#00c300"
        class="social-icon line-icon"
        style="font-size: 20px;"
      >
      </Icon>
    </a>

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
              href="https://line.me/R/ti/p/PAOMU_DEPT_LINK" 
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
.line-icon {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  .line-icon {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .popup-dialog {
    width: 250px;
  }
}
</style>
