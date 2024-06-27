<!-- <template>
    <section id="footer">
            <div style="overflow: hidden;">
            <div class="container">
            <div class="row">
            <div v-for="store in stores" :key="store.title" class="col-12 col-md-4 text-center padding-medium mb-4 mb-md-0">
                    <p class="header-top mb-4">{{ store.title }}</p>
                    <address class="mb-2">
                    <a
                    :href="store.googleMapLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`前往${store.googleMapLink}連結`"
                    >
                    {{ store.address }}
                    </a>
                    </address>
                    <p class="header-top mb-4">{{ store.operationHours.title }}</p>
                    <p class="mb-2" v-for="time in store.operationHours.times" :key="time">{{ time }}</p>
                    <div>
                    <a
                    v-for="social in store.socialLinks"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    :aria-label="`前往${social.url}連結`"
                    >
                    <Icon :name="social.icon" class="social-icon m-2" style="font-size: 24px"></Icon>
                    </a>
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
                    <p>© 2024 <a href="#" class="text-decoration-none">Snail Yang</a></p>
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
            title: '捷匠汽車美容-淡水旗艦店',
            address: '新北市淡水區學府路113號B1',
            googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區學府路113號B1',
            operationHours: {
            title: '營業時間',
            times: ['星期一 公休', '週二至週日 11 am - 9 pm']
            },
            socialLinks: [
            { name: 'Facebook', url: 'https://www.facebook.com/Jiejiang2015', icon: 'ri:facebook-fill' },
            { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing/', icon: 'ri:instagram-line' },
            { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
            { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
            ]
    },
    {
            title: '捷匠專業汽車美容-竹圍店',
            address: '新北市淡水區民生路124巷25號',
            googleMapLink: 'https://www.google.com/maps/search/?api=1&query=新北市淡水區民生路124巷25號',
            operationHours: {
            title: '營業時間',
            times: ['星期一 公休', '週二至週日 10 am - 8 pm']
            },
            socialLinks: [
            { name: 'Facebook', url: 'https://www.facebook.com/JiejiangZhuwei', icon: 'ri:facebook-fill' },
            { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing_zhuwei/', icon: 'ri:instagram-line' },
            { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
            { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
            ]
    },
    {
            title: '捷匠專業汽車美容-北投店',
            address: '台北市北投區中央南路二段33號',
            googleMapLink: 'https://www.google.com/maps/search/?api=1&query=台北市北投區中央南路二段33號',
            operationHours: {
            title: '營業時間',
            times: ['星期一 公休', '週二至週日 9 am - 7 pm']
            },
            socialLinks: [
            { name: 'Facebook', url: 'https://www.facebook.com/JiejiangBeitou', icon: 'ri:facebook-fill' },
            { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing_beitou/', icon: 'ri:instagram-line' },
            { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
            { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
            ]
    }
    ]);
</script>

<style scoped>
    #footer {
    background-color: #f8f9fa;
    padding-top: 2rem;
    }

    .padding-medium {
    padding: 1rem;
    }

    .social-icon {
    color: #343a40;
    transition: color 0.3s ease;
    }

    .social-icon:hover {
    color: #F6452D;
    }

    address a {
    text-decoration: none;
    color: #343a40;
    transition: color 0.3s ease;
    }
</style>
   -->