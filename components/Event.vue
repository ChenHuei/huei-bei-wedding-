<template>
  <BasicSection v-bind="information">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-lg">Line Bot</h1>
      <img
        class="w-40 h-40 my-4"
        width="160"
        height="160"
        :src="qrcodePNG"
        alt="qrcode"
      />
      <p>加入 Line 好友 (@658rrlyt)</p>
    </div>
  </BasicSection>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-16
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue } from 'vue-property-decorator'

// constants
import { EVENTS_INFO } from '@/constants/event'
@Component({
  data() {
    return {
      qrcodePNG: require(`@/assets/images/LineBot.${
        (this as Vue & { $isWebp: boolean }).$isWebp ? 'webp' : 'png'
      }`),
      information: EVENTS_INFO,
    }
  },
})
export default class Event extends Vue {}
</script>
