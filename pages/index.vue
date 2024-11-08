<template>
    <div> 
        <div data-aos="fade-up">
            <HomeComponentsHero />
        </div>
        <div id="about-section" data-aos="fade-up" data-aos-delay="100">
            <HomeComponentsAbout />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
            <Process />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
            <HomeComponentsProject />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
            <Price />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
            <PriceTableCarousel />
        </div>
    </div>
</template>

<script lang="ts" setup>
    // 靜態 JSON-LD
    useJsonld({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://jiejiang.com.tw/',
    'url': 'https://jiejiang.com.tw/',
    'name': 'JieJiang | 捷匠專業汽車美容 - 淡水・竹圍・北投 | 洗車・鍍膜・包膜・打蠟',
    'description': '捷匠專業汽車美容成立於2015年，在淡水、竹圍和北投三地設有分店，致力於提供頂級的汽車美容和洗車服務，絕對是在地人推薦首選。無論是機車或汽車，我們都能提供專業的基本護理、深度護理、客製化服務、鍍膜施作和包膜服務。捷匠的洗車美容服務不僅僅是基本清潔，我們將專業知識融入每個客戶的需求中，確保每個蠟品和清潔藥劑的特性都得到充分發揮。無論您身處淡水、竹圍還是北投，捷匠都能為您的愛車提供最好的護理服務。未來，我們將繼續致力於為每一位顧客帶來卓越的汽車美容體驗。',
    'inLanguage': 'zh-TW',
    'isPartOf': {
        '@id': 'https://jiejiang.com.tw/#website'
    },
    'breadcrumb': {
        '@id': 'https://jiejiang.com.tw/#breadcrumb'
    },
    'image': {
        '@id': 'https://jiejiang.com.tw/#primaryimage'
    },
    });
</script>
