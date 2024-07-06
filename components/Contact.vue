<template>
  <section class="contact-us-wrap py-5 mt-5">
    <div class="container">
      <div class="row text-start">
        <div class="col-12">
          <h2 class="fs-3 text-uppercase mb-4 text-center">聯絡資訊</h2>
        </div>
        <div v-for="(office, index) in offices" :key="index" class="contact-info col-md-4 mb-4">
          <div class="content-box p-4 shadow-sm h-100 text-center">
            <h3 class="element-title text-uppercase fs-6 fw-bold header-top">{{ office.title }}</h3>
            <div class="contact-address mb-3">
              <address class="mb-2">
                <a 
                  :href="office.googleMapLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  :aria-label="`前往${office.googleMapLink}連結`"
                  class="text-decoration-none"
                >
                  {{ office.address }}
                </a>
              </address>
            </div>
            <div class="contact-number mb-3">
              <a 
                v-for="(number, idx) in office.contactNumbers" 
                :key="idx" 
                :href="`tel:${number}`" 
                itemprop="telephone"
                :aria-label="`聯繫電話: ${number}`"
                class="d-block mb-1 text-decoration-none"
              >
                {{ number }}
              </a>
            </div>
            <!-- <div class="email-address mb-3">
              <a 
                :href="`mailto:${office.emailAddress}`" 
                itemprop="email"
                :aria-label="`聯繫電子郵件: ${office.emailAddress}`"
                class="text-decoration-none"
              >
                {{ office.emailAddress }}
              </a>
            </div> -->
            <div class="social-links d-flex gap-2 d-flex justify-content-center">
              <a 
                v-for="(link, idx) in office.socialLinks" 
                :key="idx" 
                :href="link.url" 
                class="text-secondary"
                target="_blank"
                :aria-label="`前往${link.icon}連結`"
              >
                <Icon :name="link.icon" class="social-icon" style="font-size: 24px;"></Icon>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <h2 class="fs-3 text-uppercase mb-4">如有任何服務需求，歡迎與我們聯繫！</h2>
          <p>掃描下方的 Line QR 碼與我們聯繫</p>
          <div class="qr-code">
            <img src="/qr-line.png" alt="Line QR Code" class="img-fluid mx-auto d-block qr-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const offices = ref([
  {
    title: '捷匠汽車美容-淡水旗艦店',
    address: '新北市淡水區學府路113號B1(巷子口)',
    googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區學府路113號B1',
    contactNumbers: ['02-2626-7621'],
    emailAddress: 'dlive0829@gmail.com',
    socialLinks: [
      { name: 'Facebook', icon: 'ri:facebook-fill', url: 'https://www.facebook.com/Jiejiang2015' },
      { name: 'Instagram', icon: 'ri:instagram-line', url: 'https://www.instagram.com/jiejiang_autodetailing/' }
    ],
  },
  {
    title: '捷匠專業汽車美容-竹圍店',
    address: '新北市淡水區民生路124巷25號',
    googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區民生路124巷25號',
    contactNumbers: ['02-2808-7831'],
    emailAddress: 'dlive0829@gmail.com',
    socialLinks: [
      { name: 'Facebook', icon: 'ri:facebook-fill', url: 'https://www.facebook.com/p/%E6%8D%B7%E5%8C%A0%E5%B0%88%E6%A5%AD%E6%B1%BD%E8%BB%8A%E7%BE%8E%E5%AE%B9-%E7%AB%B9%E5%9C%8D%E5%BA%97-100057469847306/' },
      { name: 'Instagram', icon: 'ri:instagram-line', url: 'https://www.instagram.com/jiejiang_zhuwei/' }
    ],
  },
  {
    title: '捷匠專業汽車美容-北投店',
    address: '台北市北投區中央南路二段33號',
    googleMapLink: 'https://www.google.com/maps/search/?api=1&query=台北市北投區中央南路二段33號',
    contactNumbers: ['02-2891-7066'],
    emailAddress: 'dlive0829@gmail.com',
    socialLinks: [
      { name: 'Facebook', icon: 'ri:facebook-fill', url: 'https://www.facebook.com/profile.php?id=61561241995612&locale=zh_TW' },
      { name: 'Instagram', icon: 'ri:instagram-line', url: 'https://www.instagram.com/jiejiang_beitou_/' }
    ],
  }
]);

const socialLinks = ref([
  { name: 'YouTube', icon: 'ri:youtube-fill', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA' },
  { name: 'TikTok', icon: 'ri:tiktok-fill', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc' },
  { name: 'Line', icon: 'ri:line-fill', url: 'https://line.me/R/ti/p/@639xmqad' },
]);
</script>

<style scoped>
.contact-info .content-box {
  border: 1px solid #ddd;
  background-color: #f8f9fa;;
  border-radius: 10px;
  padding: 20px;
}

.social-icon {
  color: #6c757d;
}

.social-icon:hover {
  color: #495057;
}

.qr-code img {
  border: 2px solid #ddd;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .qr-code img {
    max-width: 100%; 
    height: auto; 
  }
}
</style>
