<template>
        <section id="footer">
                <div style="overflow: hidden;">
                        <div class="container">
                                <div class="d-flex flex-wrap">
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center border-end-md">
                                        <NuxtImg
                                                src="/logo/logo-footer.png" 
                                                alt="捷匠專業汽車美容footer LOGO"
                                                class="img-fluid"
                                                format="webp"
                                        />
                                </div>
                                <div class="col-12 col-md-4 text-center padding-medium border-end-md">
                                        <p class="header-top mb-4">{{ operationHours.title }}</p>
                                        <p class="mb-2" v-for="time in operationHours.times" :key="time">{{ time }}</p>
                                        <br>
                                        <div>
                                                <a 
                                                        v-for="social in socialLinks" :key="social.name" 
                                                        :href="social.url" 
                                                        target="_blank"
                                                        :aria-label="`前往${social.url}連結`"
                                                >
                                                        <Icon :name="social.icon" class="social-icon m-2" style="font-size: 24px"></Icon>
                                                </a>
                                        </div>
                                </div>
                                <div class="col-12 col-md-4 text-center padding-medium mb-4 mb-md-0">
                                        <p class="header-top mb-4">{{ contactInfo.title1 }}</p>
                                        <address class="mb-2">
                                        <a 
                                                :href="googleMapLinks.link1" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                :aria-label="`前往${googleMapLinks.link1}連結`"
                                        >
                                                {{ contactInfo.address1 }}
                                        </a>
                                        </address>
                                        <br>
                                        <p class="header-top mb-4">{{ contactInfo.title2 }}</p>
                                        <address class="mb-2">
                                        <a 
                                                :href="googleMapLinks.link2" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                :aria-label="`前往${googleMapLinks.link2}連結`"
                                        >
                                                {{ contactInfo.address2 }}
                                        </a>
                                        </address>
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
                        <p>© 2024 <a href="#" class="text-decoration-none">Snail Yang</a></p>
                        </div>
                        </div>
                </div>
                </footer>
        </section>
</template>
    
<script setup>
        import { ref } from 'vue';

        const operationHours = ref({
        title: '營業時間',
        times: [
                '星期一 公休',
                '週二至週日 11 am - 9 pm'
        ],
        });

        const contactInfo = ref({
        title1: '捷匠汽車美容-淡水旗艦店',
        address1: '新北市淡水區學府路113號B1',
        title2: '捷匠專業汽車美容-竹圍店',
        address2: '新北市淡水區民生路124巷25號',
        });

        const googleMapLinks = ref({
                link1: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區學府路113號B1',
                link2: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區民生路124巷25號'
        });

        const socialLinks = ref([
        { name: 'Facebook', url: 'https://www.facebook.com/Jiejiang2015', icon: 'ri:facebook-fill' },
        { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing/', icon: 'ri:instagram-line' },
        { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
        { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
        ]);
</script>
    