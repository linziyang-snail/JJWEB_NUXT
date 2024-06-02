<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg container-fluid p-4">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          <img src="@/assets/logo/JIEJIANG_Logo.png" alt="捷匠專業汽車美容LOGO" style="height: 3.5rem" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <Icon name="system-uicons:menu-hamburger" class="hamburger-menu text-white"></Icon>
        </button>
        <div
          ref="offcanvasRef"
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3">
              <li class="nav-item" v-for="link in navLinks" :key="link.name">
                <NuxtLink
                  class="nav-link text-white text-uppercase mx-2 px-3 mb-2 mb-lg-0 d-flex align-items-center"
                  :class="{ 'highlight': link.name === '商品總覽' }"
                  :to="link.path"
                  active-class="active"
                  @click="handleLinkClick"
                >
                  <Icon v-if="link.name === '商品總覽'" name="mdi:cart-outline" class="me-2" style="font-size: 24px;"></Icon>
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
            <div
              class="d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end"
            >
              <ul class="navbar-nav social-div justify-content-end align-items-center">
                <li class="nav-item" v-for="social in socialLinks" :key="social.icon">
                  <a
                    class="nav-link d-flex align-items-center px-3"
                    :href="social.url"
                    target="_blank"
                  >
                    <Icon :name="social.icon" class="social-icon text-white" style="font-size: 20px;"></Icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as bootstrap from 'bootstrap';

const offcanvasRef = ref(null);

const navLinks = [
  { name: "首頁", path: "/" },
  { name: "關於捷匠", path: "/about" },
  { name: "施工實照", path: "/project" },
  { name: "服務項目", path: "/services" },
  { name: "聯繫捷匠", path: "/contact" },
];

const socialLinks = [
  { icon: "ri:facebook-fill", url: "https://www.facebook.com/Jiejiang2015" },
  { icon: "ri:instagram-line", url: "https://www.instagram.com/jiejiang_autodetailing/" },
  { icon: "ri:youtube-fill", url: "https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA" },
  { icon: "ri:tiktok-fill", url: "https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc" },
  { icon: "ri:line-fill", url: "https://line.me/R/ti/p/@639xmqad" },
];

function closeOffcanvas() {
  if (offcanvasRef.value) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasRef.value);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
}

function handleLinkClick() {
  closeOffcanvas();
}

onMounted(() => {
  window.addEventListener('scroll', initScrollNav);
  if (process.client) {
    const offcanvasElement = offcanvasRef.value;
    if (offcanvasElement) {
      new bootstrap.Offcanvas(offcanvasElement);
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', initScrollNav);
});

function initScrollNav() {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  document.querySelectorAll('.navbar.fixed-top').forEach(navbar => {
    if (scroll >= 200) {
      navbar.classList.add('bg-black');
    } else {
      navbar.classList.remove('bg-black');
    }
  });
};
</script>

<style scoped>
.highlight {
  background-color: #00A0EA;
  border: 2px solid #fff;
  font-size: 1.1em; /* 稍微增大字體 */
  font-weight: bold;
  padding: 10px 15px; /* 調整內邊距 */
  border-radius: 5px; /* 輕微圓角 */
  transition: background-color 0.3s, transform 0.3s; /* 平滑過渡效果 */
}

.highlight:hover {
  background-color: #008ACD; /* 滑鼠懸停時變色 */
  transform: scale(1.05); /* 滑鼠懸停時輕微放大 */
}

@media (max-width: 768px) {
  .highlight {
    font-size: 1em; /* 在小屏幕上恢復正常字體大小 */
    padding: 8px 10px; /* 在小屏幕上調整邊距 */
  }
}
</style>
