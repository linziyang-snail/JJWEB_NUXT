<template>
  <section id="footer">
    <div style="overflow: hidden;">
      <div class="container">
        <div class="d-flex flex-wrap">
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center border-end-md mb-4 mb-md-0">
            <NuxtImg src="/logo/logo-footer.png" alt="捷匠專業汽車美容footer LOGO" class="img-fluid" format="webp" />
          </div>
          <div class="col-12 col-md-4 text-center padding-medium border-end-md mb-4 mb-md-0">
            <p class="header-top mb-4">營業時間</p>
            <div v-for="store in stores" :key="store.name" class="mb-3">
              <p class="store-name text-black fw-bold">{{ store.name }}</p>
              <p v-for="time in store.times" :key="time">{{ time }}</p>
            </div>
            <div>
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                :aria-label="`前往${social.url}連結`" class="mx-2">
                <Icon :name="social.icon" class="social-icon" style="font-size: 24px"></Icon>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-4 text-center padding-medium">
            <div v-for="store in stores" :key="store.name" class="mb-4">
              <p class="header-top mb-2">{{ store.title }}</p>
              <address class="mb-2">
                <a :href="store.googleMapLink" target="_blank" rel="noopener noreferrer"
                  :aria-label="`前往${store.googleMapLink}連結`" class="text-decoration-none">
                  {{ store.address }}
                </a>
              </address>
              <div>
                <a v-for="social in store.socialLinks" :key="social.name" :href="social.url" target="_blank"
                  :aria-label="`前往${social.url}連結`" class="mx-2">
                  <Icon :name="social.icon" class="social-icon" style="font-size: 24px"></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="border-top">
      <div class="container">
        <div class="row py-2 pt-4">
          <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
            <p>© 2024 JieJiang, Carwash | All Rights Reserved</p>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <p>© 2024 <a href="https://www.instagram.com/snail.yang/" class="text-decoration-none">Snail Yang</a></p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const stores = ref([
  {
    name: '淡水旗艦店',
    title: '捷匠汽車美容-淡水旗艦店',
    address: '新北市淡水區學府路113號B1',
    googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區學府路113號B1',
    times: ['無公休', '週一至週日 11 am - 9 pm'],
    socialLinks: [
      { name: 'Facebook', url: 'https://www.facebook.com/Jiejiang2015/?locale=zh_TW', icon: 'ri:facebook-fill' },
      { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing/', icon: 'ri:instagram-line' }
    ]
  },
  // {
  //   name: '竹圍店',
  //   title: '捷匠專業汽車美容-竹圍店',
  //   address: '新北市淡水區民生路124巷25號',
  //   googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區民生路124巷25號',
  //   times: ['星期一 公休', '週二至週日 10 am - 8 pm'],
  //   socialLinks: [
  //     { name: 'Facebook', url: 'https://www.facebook.com/p/%E6%8D%B7%E5%8C%A0%E5%B0%88%E6%A5%AD%E6%B1%BD%E8%BB%8A%E7%BE%8E%E5%AE%B9-%E7%AB%B9%E5%9C%8D%E5%BA%97-100057469847306/', icon: 'ri:facebook-fill' },
  //     { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_zhuwei/', icon: 'ri:instagram-line' }
  //   ]
  // },
  {
    name: '北投店',
    title: '捷匠專業汽車美容-北投店',
    address: '台北市北投區中央南路二段33號',
    googleMapLink: 'https://www.google.com/maps/search/?api=1&query=台北市北投區中央南路二段33號',
    times: ['無公休', '週一至週日 10 am - 6 pm'],
    socialLinks: [
      { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61561241995612&locale=zh_TW', icon: 'ri:facebook-fill' },
      { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_beitou_/', icon: 'ri:instagram-line' }
    ]
  }
]);

const socialLinks = ref([
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
  { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
]);
</script>

<style scoped>
.header-top {
  font-size: 1.2em;
  font-weight: bold;
}

.padding-medium {
  padding: 1.5rem;
}

.border-end-md {
  border-right: 1px solid #ccc;
}

@media (max-width: 767.98px) {
  .border-end-md {
    border-right: none;
  }
}

.store-name {
  position: relative;
  display: inline-block;
}
</style>
