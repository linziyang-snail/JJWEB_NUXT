<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h2 class="display-4 mb-5">Find Us</h2>
        <div ref="mapContainer" class="map-container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

const mapContainer = ref(null);



const loader = new Loader({
  apiKey: "AIzaSyCAlot28YSnbD2dwAPf8c88xV6cXpNFz6s",
  version: "weekly",
  libraries: ["places"]
});

onMounted(async () => {
  try {
    await loader.loadPromise();

    const map = new google.maps.Map(mapContainer.value, {
      center: { lat: 25.1724910736084, lng: 121.45006561279297 },
      zoom: 18,
      mapId: "JieJiang"
    });

    new google.maps.Marker({
      position: { lat: 25.1724910736084, lng: 121.45006561279297 },
      map: map,
      title: "JieJiang"
    });
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px; /* Adjust as necessary */
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.map-container::before {
  content: "";
  display: block;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}


@media (max-width: 767px) {
  .map-container {
    height: 300px; /* Smaller devices */
  }
}
</style>
