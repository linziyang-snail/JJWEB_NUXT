<template>
    <section id="gallery">
        <div class="container my-5 py-5">
            <p class="header-top text-center mb-3">捷匠專業汽車美容</p>
            <h2 class="display-4 text-center">施工實照</h2>
            <div class="py-4 my-4">

                <div class="mb-4 text-center">
                        <button class="filter-button px-4 py-1 me-2 mb-2" 
                                :class="{'active': currentFilter === '*'}" 
                                @click="setFilter('*')">全部</button>
                        <button v-for="filter in filters" :key="filter.value" 
                                class="filter-button px-4 py-1 me-2 mb-2" 
                                :class="{'active': currentFilter === filter.value}" 
                                @click="setFilter(filter.value)">
                            {{ filter.name }}
                        </button>
                </div>

                <div class="row">
                    <div v-for="item in filteredItems" :key="item.id" 
                         class="item position-relative overflow-hidden col-lg-4 col-md-6 col-12" :class="item.class">
                        <a href="#" :title="item.title" class="image-link">
                            <div class="image-container">
                                <NuxtImg 
                                    class="portfolio-img img-fluid p-3" 
                                    :src="item.src" 
                                    :alt="item.alt" 
                                    loading="lazy"
                                />
                                <div class="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                <p class="text-white">{{ item.description }}</p>
                                <h3 class="text-white">{{ item.title }}</h3>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>

// 各個分類的圖片列表
const coatingImages = [
    { src: '/project/coating1.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
    { src: '/project/coating2.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
    { src: '/project/coating3.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
    { src: '/project/coating4.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
    { src: '/project/coating5.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
    { src: '/project/coating6.jpg', alt: '捷匠汽車美容 - 鍍膜', description: '捷匠汽車美容', title: '鍍膜' },
];

const envelopeImages = [
    { src: '/project/envelope1.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
    { src: '/project/envelope2.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
    { src: '/project/envelope3.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
    { src: '/project/envelope4.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
    { src: '/project/envelope5.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
    { src: '/project/envelope6.jpg', alt: '捷匠汽車美容 - 包膜', description: '捷匠汽車美容', title: '包膜' },
];

const rimImages = [
    { src: '/project/rim1.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
    { src: '/project/rim2.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
    { src: '/project/rim3.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
    { src: '/project/rim4.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
    { src: '/project/rim5.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
    { src: '/project/rim6.jpg', alt: '捷匠汽車美容 - 輪圈清洗', description: '捷匠汽車美容', title: '輪圈清洗' },
];

const tireImages = [
    { src: '/project/tire1.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
    { src: '/project/tire2.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
    { src: '/project/tire3.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
    { src: '/project/tire4.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
    { src: '/project/tire5.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
    { src: '/project/tire6.jpg', alt: '捷匠汽車美容 - 內裝清洗', description: '捷匠汽車美容', title: '內裝清洗' },
];

const engineImages = [
    { src: '/project/engine1.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
    { src: '/project/engine2.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
    { src: '/project/engine3.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
    { src: '/project/engine4.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
    { src: '/project/engine5.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
    { src: '/project/engine6.jpg', alt: '捷匠汽車美容 - 引擎清洗', description: '捷匠汽車美容', title: '引擎清洗' },
];

// 其他分類的圖片也按照這個方式定義

// 將所有圖片整合到一個總列表中
let idCounter = 1;
const items = ref([
    ...coatingImages.map(img => ({ id: idCounter++, class: '.coating', href: img.src, ...img })),
    ...envelopeImages.map(img => ({ id: idCounter++, class: '.envelope', href: img.src, ...img })),
    ...rimImages.map(img => ({ id: idCounter++, class: '.rim', href: img.src, ...img })),
    ...tireImages.map(img => ({ id: idCounter++, class: '.tire', href: img.src, ...img })),
    ...engineImages.map(img => ({ id: idCounter++, class: '.engine', href: img.src, ...img })),
]);

const currentFilter = ref('*');
const filters = ref([
    { name: '鍍膜', value: '.coating' },
    { name: '包膜', value: '.envelope' },
    { name: '輪圈清洗', value: '.rim' },
    { name: '內裝清洗', value: '.tire' },
    { name: '引擎清洗', value: '.engine' }
]);

const setFilter = (filter) => {
    currentFilter.value = filter;
};

const filteredItems = computed(() => {
    if (currentFilter.value === '*') {
        return items.value;
    } else {
        return items.value.filter(item => item.class.includes(currentFilter.value.substring(1)));
    }
});
</script>

<style scoped>
.image-container {
    width: 100%;
    height: 250px; 
    position: relative;
    overflow: hidden;
}

.portfolio-img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

</style>
