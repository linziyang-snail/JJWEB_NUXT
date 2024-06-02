<template>
  <div>
      <!-- <Loading :is-loading="isLoading" :progress="progress" />
      <div v-if="!isLoading"> -->

          <!-- <client-only>
            <NavBar />
          </client-only> -->
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>

            <!-- <Footer /> 
          <LineIcon /> -->
        <!-- </div> -->
  </div>
</template>

<script setup>
import aboutBannerImage from "./assets/banner/banner-about.jpg";
import servicesBannerImage from "./assets/banner/banner-service.jpg";
import projectBannerImage from "./assets/banner/banner-project.jpg";
import contactBannerImage from "./assets/banner/banner-contact.jpg";

const isLoading = ref(true);
const progress = ref(0);

function preloadImages() {
  const images = [aboutBannerImage, servicesBannerImage, projectBannerImage, contactBannerImage];
  let loaded = 0;

  images.forEach((src) => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded++;
      progress.value = Math.floor((loaded / images.length) * 100);
      
      if (loaded === images.length) {
        setTimeout(() => {
          isLoading.value = false;
        }, 1500);
      }
    };
    img.src = src;
  });
}

onMounted(preloadImages);

</script>