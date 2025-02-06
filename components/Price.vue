<template>
  <section id="price" class="my-5">
    <div style="overflow: hidden;">
      <div class="container py-5" data-aos="zoom-out">
        <p class="header-top">JIEJIANG Auto Detailing</p>
        <h2 class="mb-5">汽車美容 價目表</h2>
        <ul class="nav nav-tabs my-3 justify-content-center" id="myTab" role="tablist">
          <li class="nav-item" role="presentation" v-for="(pkg, index) in packages" :key="pkg.id">
            <button class="nav-link me-4 px-4 py-1 mb-2" :class="{ active: currentTab === index }" :id="`${pkg.id}-tab`"
              @click="setTab(index)" type="button" role="tab" :aria-controls="pkg.id"
              :aria-selected="currentTab === index ? 'true' : 'false'">
              {{ pkg.name }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div v-for="(pkg, index) in packages" :key="pkg.id"
            :class="['tab-pane fade', { 'show active': currentTab === index }]" :id="pkg.id" role="tabpanel"
            :aria-labelledby="`${pkg.id}-tab`" tabindex="0">
            <div class="row py-4 d-flex">
              <div class="col-lg-3 pb-4 flex" v-for="(plan, planIndex) in pkg.plans" :key="`${pkg.id}-${planIndex}`">
                <div class="py-5 plan-post text-center h-100 position-relative">
                  <span v-if="plan.memberOnly" class="member-star">★</span>
                  <h3 class="header-top">
                    {{ plan.title }}
                  </h3>

                  <h4 class="mb-5 display text-wrap">
                    <span v-html="processPrice(plan.price)"></span>
                  </h4>
                  <div class="price-option">
                    <p v-for="(feature, featureIndex) in plan.features" :key="`${pkg.id}-${planIndex}-${featureIndex}`">
                      <span class="price-tick">✓</span> {{ feature }}
                    </p>
                  </div>
                  <a href="https://line.me/R/ti/p/@639xmqad" target="_blank"
                    class="btn btn-primary mt-auto px-4 py-3 mx-2" aria-label="前往line連結">
                    立即預約<Icon name="tabler:arrow-right" class="arrow-icon"></Icon></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const packages = ref([
  {
    id: 'car-wash',
    name: 'car wash & maintenance',
    plans: [
      {
        title: '精緻洗車',
        price: '$1,000起',
        features: ['車身高壓熱水沖洗', '輪框內外清潔', '輪拱清潔', '門邊門框清潔'],
        bookingLink: 'booking.html'
      },
      {
        title: '基礎漆面護理',
        price: '$1,400起',
        features: ['已包含精緻洗車項目', '內裝擦拭吸塵', '內裝細節清洗', '專用柏油清潔', '專用鐵粉清潔'],
        bookingLink: 'booking.html'
      },
      {
        title: '精緻漆面護理（銀卡會員限定）',
        price: '$3,100起',
        features: ['已包含基礎漆面護理項目', '內裝物品收納整理', '漆面深度清潔', '全車塑料保養'],
        bookingLink: 'booking.html',
        memberOnly: true
      },
      {
        title: '手作漆面上蠟',
        price: '$2,600起',
        features: ['建議加購清潔蠟前置作業', '已包含基礎漆面護理項目', '內裝物品收納整理', '全車塑料保養',],
        bookingLink: 'booking.html'
      },
    ]
  },
  {
    id: 'paint-correction',
    name: 'paint correction & coating',
    plans: [
      {
        title: '漆面氧化處理',
        price: '$6,000起',
        features: ['全車高壓熱水沖洗', '車漆深層清潔', '車內擦拭吸塵', '車身塑料件維護'],
        bookingLink: 'booking.html'
      },
      {
        title: '日本ZX鍍膜',
        price: '$2,5000起',
        features: ['已包含漆面氧化處理項目', '全車細節刷洗', '引擎室清潔', '漆面亮度調整', '漆面整平', '車內細部清潔', '保固24個月'],
        bookingLink: 'booking.html'
      },
      {
        title: '滲透型鍍膜60%自體修復',
        price: '$35,000起',
        features: ['已包含日本ZX鍍膜項目', '漆面深度整平修復', '60%自體修復塗層', '保固36個月'],
        bookingLink: 'booking.html'
      },
      {
        title: '雙劑型漆面高光鍍膜',
        price: '$35,000起',
        features: ['已包含日本ZX鍍膜項目', '漆面深度整平修復', '雙層鍍膜劑塗層', '保固36個月'],
        bookingLink: 'booking.html'
      },
    ]
  },
  {
    id: 'interior-care',
    name: 'interior care & other',
    plans: [
      {
        title: '內裝美容',
        price: '$4,500起',
        features: [
          '皮革清潔',
          '全車吸塵',
          '蒸氣高溫殺菌',
          '其餘細項由專業師傅評估'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '內裝全車拆洗',
        price: '$20,000起',
        features: [
          '拆卸清潔座椅',
          '地毯深層清洗',
          '內裝消毒',
          '內部細節處理',
          '其餘細項由專業師傅評估'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '前檔玻璃鍍膜',
        price: '$1,200',
        features: [
          '前檔玻璃清潔',
          '鍍膜處理',
          '提高視野清晰度',
          '延長玻璃壽命'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '全車玻璃鍍膜',
        price: '$3,500',
        features: [
          '全車玻璃清潔',
          '鍍膜處理',
          '防止水痕與污漬',
          '增加玻璃耐用度'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '鋁圈鍍膜（拆卸/不拆）',
        price: '$8,000/$4,000',
        features: [
          '鋁圈徹底清潔',
          '鍍膜處理',
          '防止汙垢附著',
          '延長鋁圈使用壽命'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '底盤深層清潔',
        price: '$20,000起',
        features: [
          '底盤全方位清潔',
          '防鏽處理',
          '檢查及維修',
          '確保車輛安全'
        ],
        bookingLink: 'booking.html'
      }
    ]
  },

  {
    id: 'car-wrap',
    name: 'CAR WRAP',
    plans: [
      {
        title: '全車犀牛皮',
        price: '$60,000/150,000起',
        features: [
          '全車保護',
          '防刮耐磨',
          '增強光澤',
          '專業施工'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '迎風面犀牛皮',
        price: '$45,000/70,000起',
        features: [
          '車頭防護',
          '防止石頭與碎片損傷',
          '持久耐用',
          '保護原車漆'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '全車改色膜',
        price: '$70,000起',
        features: [
          '全車改色',
          '多樣顏色選擇',
          '高質感光澤',
          '保護原車漆'
        ],
        bookingLink: 'booking.html'
      },
      {
        title: '局部犀牛皮',
        price: '現場報價',
        features: [
          '特定區域保護',
          '防刮耐磨',
          '增強光澤',
          '專業施工'
        ],
        bookingLink: 'booking.html'
      }
    ]
  }

]);

const currentTab = ref(0);

const setTab = (index) => {
  currentTab.value = index;
};

const processPrice = (price) => {
  return price.replace(/(起)/g, '<span class="h6">$1</span>');
};

</script>

<style scoped>
.member-star {
  position: absolute;
  top: 0;
  right: 0;
  color: #ffd700;
  font-size: 5rem;
  transform: rotate(15deg);
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
  animation: starShine 2s infinite;
  z-index: 1;
}
</style>
