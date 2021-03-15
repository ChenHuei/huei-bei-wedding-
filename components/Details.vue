<template>
  <BasicSection v-bind="information">
    <div class="w-full flex flex-col justify-center items-center">
      <BasicLine class="absolute" />
      <DetailsLaurel :direction="Direction.LEFT" />
      <DetailsLaurel :direction="Direction.RIGHT" />
      <DetailsDescription v-for="item in list" :key="item.time" v-bind="item" />
    </div>
  </BasicSection>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-12
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue } from 'vue-property-decorator'

// Constants
import { DETAILS_INFO, DETAILS_CONTENT } from '@/constants/details'

// Types
import { Direction } from '@/types'

@Component({
  data() {
    return {
      Direction,
      information: DETAILS_INFO,
      list: DETAILS_CONTENT,
    }
  },
})
export default class Details extends Vue {}
</script>
