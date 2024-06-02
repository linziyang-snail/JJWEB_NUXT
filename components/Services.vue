<template>
    <section id="process" class="my-5">
        <div style="overflow: hidden;">
            <div class="container mt-5 pt-5" data-aos="zoom-out">
                <p class="header-top">捷匠是最值得您信賴的夥伴</p>
                <h2 class="display-4 mb-5 ">Our Washing Services</h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4 my-3" v-for="service in services" :key="service.id">
                        <div class="services-content text-center border py-3 py-md-5 px-3">
                            <Icon :name="service.icon" class="service-icon"></Icon>
                            <h3 class="my-3">{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                            <!-- <a :href="service.link" class="icon-link my-3">查看更多<Icon name="tabler:arrow-right" class="arrow-icon"></Icon></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'mdi:car-wash',
        title: '精緻洗車',
        description: '專業清洗，還原愛車光澤，細節處理無微不至。',
        link: 'services-single.html',
    },
    {
        id: 2,
        icon: 'mdi:engine',
        title: '引擎清洗',
        description: '深度清潔引擎，提升性能，延長使用壽命。',
        link: 'services-single.html',
    },
    {
        id: 3,
        icon: 'mdi:shield-car',
        title: '鍍膜',
        description: '高效防護鍍膜，抵抗環境傷害，保持車身亮麗。',
        link: 'services-single.html',
    },
    {
        id: 4,
        icon: 'mdi:seat',
        title: '內裝全車拆洗',
        description: '徹底清潔內裝，恢復原始美觀與舒適。',
        link: 'services-single.html',
    },
    {
        id: 5,
        icon: 'mdi:car-tire-alert',
        title: '底盤清洗',
        description: '專業底盤清洗，防止腐蝕，延長車輛壽命。',
        link: 'services-single.html',
    },
    {
        id: 6,
        icon: 'mdi:wrap',
        title: '包膜',
        description: '全面包膜服務，防刮耐磨，保護車漆。',
        link: 'services-single.html',
    },
]);



</script>