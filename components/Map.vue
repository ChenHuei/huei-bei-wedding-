<template>
  <BasicSection v-bind="information">
    <iframe
      title="map"
      class="maps-iframe w-full mb-10"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.305479178304!2d121.53631911544711!3d25.05763334349659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe1955a26c7%3A0xef585276efb6d0ef!2z5pm25a605pyD6aSoLeawkeeUn-mkqCB8IOWPsOWMl-WpmuWutOacg-mkqCB8IOWPsOWMl-WpmuWutOWgtOWcsA!5e0!3m2!1szh-TW!2stw!4v1615799659911!5m2!1szh-TW!2stw"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <a
      class="map-link mb-10 text-lg text-primary text-center underline leading-8 lg:text-xl"
      rel="noopener"
      target="_blank"
      href="https://www.google.com.tw/maps/place/%E6%99%B6%E5%AE%B4%E6%9C%83%E9%A4%A8-%E6%B0%91%E7%94%9F%E9%A4%A8+%7C+%E5%8F%B0%E5%8C%97%E5%A9%9A%E5%AE%B4%E6%9C%83%E9%A4%A8+%7C+%E5%8F%B0%E5%8C%97%E5%A9%9A%E5%AE%B4%E5%A0%B4%E5%9C%B0/@25.0576333,121.5363191,17z/data=!3m1!4b1!4m5!3m4!1s0x3442abe1955a26c7:0xef585276efb6d0ef!8m2!3d25.0576285!4d121.5385078?hl=zh-TW"
    >
      <p v-for="item in locations" :key="item">{{ item }}</p>
    </a>
    <MapTraffic v-for="item in traffic" :key="item.category" v-bind="item" />
  </BasicSection>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-15
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue } from 'vue-property-decorator'

// constants
import { MAP_INFO, MAP_LOCATION, MAP_TRAFFIC } from '@/constants/map'

@Component({
  data() {
    return {
      information: MAP_INFO,
      locations: MAP_LOCATION,
      traffic: MAP_TRAFFIC,
    }
  },
})
export default class Map extends Vue {}
</script>

<style lang="scss" scoped>
.maps-iframe {
  height: 250px;
  border: 0;
}

@media (min-width: 1024px) {
  .maps-iframe {
    height: 450px;
  }
}
</style>
