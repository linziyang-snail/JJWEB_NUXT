<template>
    <nav class="navbar fixed-top navbar-expand-lg container-fluid p-4" :class="{ 'bg-black': isScrolled || isMenuOpen }">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/" prefetch>
          <NuxtImg 
            src="/logo/JIEJIANG_Logo.png" 
            alt="捷匠專業汽車美容LOGO" 
            format="webp"
            quality="50"
            width="174"
            height="56"
            loading="lazy"
            
        />
        </NuxtLink>
        <button class="navbar-toggler" @click="toggleMenu">
          <Icon name="system-uicons:menu-hamburger" class="hamburger-menu text-white"></Icon>
        </button>
        <div :class="['collapse navbar-collapse', { 'show': isMenuOpen, 'menu-open-bg': isMenuOpen }]">
          <div class="offcanvas-header d-lg-none">
            <h5 class="offcanvas-title text-white">Menu</h5>
            <button class="btn-close btn-close-white" @click="toggleMenu"></button>
          </div>
          <ul class="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3">
            <li class="nav-item" v-for="link in navLinks" :key="link.name">
              <NuxtLink
                class="nav-link text-white text-uppercase mx-2 px-3 mb-2 mb-lg-0 d-flex align-items-center"
                :to="link.path"
                prefetch
                active-class="active"
                @click="handleLinkClick"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
          <div class="d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end">
            <ul class="navbar-nav social-div justify-content-end align-items-center">
              <li class="nav-item" v-for="social in socialLinks" :key="social.icon">
                <a
                  class="nav-link d-flex align-items-center px-3"
                  :href="social.url"
                  target="_blank"
                  :aria-label="`前往${social.url}連結`"
                >
                  <Icon :name="social.icon" class="social-icon text-white" style="font-size: 20px;"></Icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isMenuOpen = ref(false);
  const isScrolled = ref(false);
  
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
  
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  
  function handleLinkClick() {
    isMenuOpen.value = false;
    document.body.classList.remove('no-scroll');
  }
  
  function initScrollNav() {
    const scroll = window.scrollY || document.documentElement.scrollTop;
    isScrolled.value = scroll >= 200;
  }
  
  function handleResize() {
    if (window.innerWidth >= 992 && isMenuOpen.value) {
      isMenuOpen.value = false;
      document.body.classList.remove('no-scroll');
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', initScrollNav);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', initScrollNav);
    window.removeEventListener('resize', handleResize);
    document.body.classList.remove('no-scroll');
  });
  </script>
  
  <style scoped>
  .navbar-collapse {
    display: none;
  }
  
  .navbar-collapse.show {
    display: block;
  }
  
  .menu-open-bg {
    background-color: black;
  }
  
  .offcanvas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .no-scroll {
    overflow: hidden;
  }
  
  /* For mobile view */
  @media (max-width: 992px) {
    .navbar-collapse {
      position: fixed;
      top: 0;
      right: -100%; /* Initially hide the off-canvas menu */
      width: 100%;
      height: 100%;
      z-index: 9999;
      padding: 1rem;
      overflow-y: auto;
      transition: right 0.3s ease-in-out; /* Slide-in transition */
      background-color: black; /* Ensure background is black */
    }
  
    .navbar-collapse.show {
      right: 0; /* Slide in from the right */
    }
  }
  </style>
  