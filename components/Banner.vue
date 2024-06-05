<template>
    <section id="hero">
        <NuxtImg
        preload
        :placeholder="50"
        :src=bannerImage 
        class="hero-image"
        alt="Banner Image"
        format="webp"
        layout="responsive"
        width="1920"
        height="1080"
        quality="50"
      />
    <div class="container py-5">
      <div class="row py-5">
        <div
          class="d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white"
        >
          <h1 class="page-title display-3 mt-5 text-white">{{ title }}</h1>
          <nav class="breadcrumb">
            <NuxtLink
              class="breadcrumb-item text-white"
              v-for="(item, index) in breadcrumbItems"
              :key="index"
              :to="item.path"
              prefetch
              >{{ item.text }}
            </NuxtLink
            >
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const title = computed(() => {
  switch (route.path) {
    case "/about":
      return "關於捷匠";
    case "/services":
      return "服務項目";
    case "/project":
      return "施工實照";
    case "/contact":
      return "聯繫捷匠";
    default:
      return "404";
  }
});

const bannerImage = computed(() => {
  switch (route.path) {
    case "/about":
      return "/banner/banner-about.jpg";
    case "/services":
      return "/banner/banner-service.jpg";
    case "/project":
      return "/banner/banner-project.jpg";
    case "/contact":
      return "/banner/banner-contact.jpg";
    default:
      return "";
  }
});

const breadcrumbItems = computed(() => {
  switch (route.path) {
    case "/about":
      return [
        { text: "首頁", path: "/" },
        { text: "關於捷匠", path: "/about" },
      ];
    case "/services":
      return [
        { text: "首頁", path: "/" },
        { text: "服務項目", path: "/services" },
      ];
    case "/project":
      return [
        { text: "首頁", path: "/" },
        { text: "施工實照", path: "/project" },
      ];
    case "/contact":
      return [
        { text: "首頁", path: "/" },
        { text: "聯繫捷匠", path: "/contact" },
      ];
    default:
      return [];
  }
});
</script>

<style scoped>
#hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

#hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); 
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  text-align: center;
}

.col-md-6.offset-md-3 {
  margin: 0;
  flex: 0 0 100%;
  max-width: 100%;
}
</style>
