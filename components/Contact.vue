<template>
  <section class="contact-us-wrap py-5 mt-5">
    <div class="container">
      <div class="row text-start">
        <div class="contact-info col-md-6">
          <h2 class="fs-3 text-uppercase mb-4 center-container ">聯絡資訊</h2>
          <div class="page-content">
            <div class="col-md-6" v-for="(office, index) in offices" :key="index">
              <div class="content-box my-5 center-container">
                <h3 class="element-title text-uppercase fs-6 fw-bold">{{ office.title }}</h3>
                <div class="contact-address">
                  <p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">{{ office.address }}</span>
                  </p>
                </div>
                <div class="contact-number">
                  <a 
                    v-for="(number, index) in office.contactNumbers" 
                    :key="index" 
                    :href="`tel:${number}`" 
                    itemprop="telephone"
                    :aria-label="`聯繫電話: ${number}`"
                  >
                    {{ number }}
                  </a>
                </div>
                <div class="email-address">
                  <a 
                    :href="`mailto:${office.emailAddress}`" 
                    itemprop="email"
                    :aria-label="`聯繫電子郵件: ${office.emailAddress}`"
                  >
                    {{ office.emailAddress }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="content-box my-5 social-container">
                <h4 class="element-title text-uppercase fs-6 fw-bold">關注捷匠</h4>
                <div class="social-links">
                  <ul class="list-unstyled d-flex gap-3 mt3">
                    <li v-for="(link, index) in socialLinks" :key="index">
                      <a 
                        :href="link.url" 
                        class="text-secondary me-3 p-0" 
                        target="_blank"
                        :aria-label="`前往${link.icon}連結`"
                      >
                        <Icon :name="link.icon" class="social-icon"></Icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inquiry-item col-md-6 text-center">
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
    contactNumbers: ['02-2626-7621'],
    emailAddress: 'dlive0829@gmail.com',
  },
  {
    title: '捷匠專業汽車美容-竹圍店',
    address: '新北市淡水區民生路124巷25號',
    contactNumbers: ['02-2808-7831'],
    emailAddress: 'dlive0829@gmail.com',
  },
]);

const socialLinks = ref([
  { name: 'Facebook', icon: 'ri:facebook-fill', url: 'https://www.facebook.com/Jiejiang2015' },
  { name: 'Instagram', icon: 'ri:instagram-line', url: 'https://www.instagram.com/jiejiang_autodetailing/' },
  { name: 'YouTube', icon: 'ri:youtube-fill', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA' },
  { name: 'TikTok', icon: 'ri:tiktok-fill', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc' },
  { name: 'Line', icon: 'ri:line-fill', url: 'https://line.me/R/ti/p/@639xmqad' },
]);
</script>

<style scoped>
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

  .social-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .center-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
