<template>
  <section id="project" class="carousel-section bg-black text-white py-5 ">
    <div class="container">
      <Carousel 
        :items-to-show="itemsToShow"
        :wrap-around="true"
        v-model="currentSlide"
        :autoplay="3000"
        :navigation-enabled="true"
        :pagination-enabled="false"
        :loop="true"
      >
        <Slide v-for="item in carouselItems" :key="item.id">
          <div class="slide-item">
            <NuxtImg 
              class="img-fluid block w-100" 
              :src="item.imgSrc" 
              :alt="item.description"
              format="webp"
              layout="responsive"
              width="1280"
              height="720"
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 class="text-white">{{ item.description }}</h4>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const carouselItems = ref([
  { id: 1, imgSrc: '/carousel/carousel1.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 2, imgSrc: '/carousel/carousel2.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 3, imgSrc: '/carousel/carousel3.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 4, imgSrc: '/carousel/carousel4.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 5, imgSrc: '/carousel/carousel5.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 6, imgSrc: '/carousel/carousel6.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 7, imgSrc: '/carousel/carousel7.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 8, imgSrc: '/carousel/carousel8.JPG', description: '捷匠汽車美容 - 施工實照' },
  { id: 9, imgSrc: '/carousel/carousel9.JPG', description: '捷匠汽車美容 - 施工實照' },
]);

const currentSlide = ref(0);
const itemsToShow = ref(1);

onMounted(() => {
  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});

const updateItemsToShow = () => {
  const width = window.innerWidth;
  if (width < 768) {
    itemsToShow.value = 1;
  } else {
    itemsToShow.value = 1; // For larger screens, you can set this to the desired number of items
  }
};
</script>

<style scoped>
.carousel-section {
  background-image: url('../../assets/logo/logo-project.png'); /* 確保這是正確的路徑 */
  background-repeat: repeat; /* 讓logo重複 */
  background-size: 200px 300px; /* 背景大小 */
}

.slide-item {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .carousel-section {
    background-size: 100px 133px; /* 縮小背景圖案尺寸以適應小屏幕 */
  }
}

@media (max-width: 480px) {
  .carousel-section {
    background-size: 70px 93px; /* 對於非常小的屏幕進一步縮小 */
  }
}
</style>
