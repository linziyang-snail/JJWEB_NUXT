<template>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th class="bg-secondary border border-secondary" scope="col">內容 / 項目</th>
              <th scope="col">MOS 白金 7.5 MIL</th>
              <th scope="col">MOS 白金PRO 7.5 MIL</th>
              <th scope="col">MOS 黑金 8.5 MIL</th>
              <th scope="col">STEK 公司貨</th>
              <th scope="col">SunTek 公司貨</th>
              <th scope="col">3M 公司貨</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">一般轎車</th>
              <td>{{ prices.mosPlatinum.sedan }}</td>
              <td>{{ prices.mosPlatinumPro.sedan }}</td>
              <td>{{ prices.mosBlackGold.sedan }}</td>
              <td>{{ prices.stek.sedan }}</td>
              <td>{{ prices.suntek.sedan }}</td>
              <td>{{ prices.threem.sedan }}</td>
            </tr>
            <tr>
              <th scope="row">一般SUV</th>
              <td>{{ prices.mosPlatinum.suv }}</td>
              <td>{{ prices.mosPlatinumPro.suv }}</td>
              <td>{{ prices.mosBlackGold.suv }}</td>
              <td>{{ prices.stek.suv }}</td>
              <td>{{ prices.suntek.suv }}</td>
              <td>{{ prices.threem.suv }}</td>
            </tr>
            <tr>
              <th scope="row">大型SUV</th>
              <td>{{ prices.mosPlatinum.largeSuv }}</td>
              <td>{{ prices.mosPlatinumPro.largeSuv }}</td>
              <td>{{ prices.mosBlackGold.largeSuv }}</td>
              <td>{{ prices.stek.largeSuv }}</td>
              <td>{{ prices.suntek.largeSuv }}</td>
              <td>{{ prices.threem.largeSuv }}</td>
            </tr>
            <tr>
              <th scope="row">消光加價</th>
              <td>{{ prices.mosPlatinum.matte }}</td>
              <td>{{ prices.mosPlatinumPro.matte }}</td>
              <td>{{ prices.mosBlackGold.matte }}</td>
              <td>{{ prices.stek.matte }}</td>
              <td>{{ prices.suntek.matte }}</td>
              <td>{{ prices.threem.matte }}</td>
            </tr>
            <tr>
              <th scope="row">保固週期</th>
              <td>5年</td>
              <td>7年</td>
              <td>10年</td>
              <td>5年</td>
              <td>5年</td>
              <td>5年</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const prices = ref({
  mosPlatinum: {
    sedan: '65000',
    suv: '70000',
    largeSuv: '75000',
    matte: '10000'
  },
  mosPlatinumPro: {
    sedan: '80000',
    suv: '85000',
    largeSuv: '90000',
    matte: '10000'
  },
  mosBlackGold: {
    sedan: '110000',
    suv: '115000',
    largeSuv: '120000',
    matte: '10000'
  },
  stek: {
    sedan: '110000',
    suv: '120000',
    largeSuv: '130000',
    matte: '12000'
  },
  suntek: {
    sedan: '118000',
    suv: '128000',
    largeSuv: '138000',
    matte: '12000'
  },
  threem: {
    sedan: '100000',
    suv: '110000',
    largeSuv: '120000',
    matte: '12000'
  }
});
</script>
