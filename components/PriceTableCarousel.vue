<template>
  <div class="carousel-container">
    <div class="carousel slide">
      <div class="carousel-inner">
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          :class="['carousel-item', { active: currentSlide === index }]"
        >
          <div class="table-wrapper">
            <component :is="slide.component" />
          </div>
        </div>
      </div>
      <button 
        class="carousel-control-prev" 
        type="button" 
        @click="prevSlide"
      >
        <Icon 
          class="prev-icon" 
          aria-hidden="true"  
          name="ooui:previous-ltr"  
          style="color: black"
        ></Icon>
        <span class="visually-hidden">Previous</span>
      </button>
      <button 
        class="carousel-control-next" 
        type="button" 
        @click="nextSlide"
      >
        <Icon 
          class="next-icon" 
          aria-hidden="true"  
          name="ooui:previous-rtl"  
          style="color: black"
        ></Icon>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PriceCarWashTable from '../components/PriceCarWashTable.vue';
import PriceCoatingTable from '../components/PriceCoatingTable.vue';
import PriceEnvelopeTable from '../components/PriceEnvelopeTable.vue';

const slides = [
  { component: PriceCarWashTable },
  { component: PriceCoatingTable },
  { component: PriceEnvelopeTable },
];

const currentSlide = ref(0);
const autoplay = ref(true);
let interval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// Function to start autoplay
const startAutoplay = () => {
  interval = setInterval(() => {
    if (autoplay.value) {
      nextSlide();
    }
  }, 5000); // Change slide every 5 seconds
};

// Function to stop autoplay
const stopAutoplay = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
  max-width: 100%;
  transition: opacity 0.5s ease;
  opacity: 0;
  position: absolute;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
}

.table-wrapper {
  min-height: 42rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

@media (max-width: 991px) {
  .carousel-control-prev,
  .carousel-control-next {
    font-size: 1.5rem;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
