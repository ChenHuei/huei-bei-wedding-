<template>
  <div
    class="bubble fixed bg-primary rounded-full opacity-70 z-10 pointer-events-none"
    :style="getStyles"
  ></div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-30
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

// utils
import { getRandomBetween } from '@/utils/math'

@Component
export default class Bubble extends Vue {
  @Prop()
  size!: number

  get getStyles(): { [key: string]: string | number } {
    return {
      left: `${getRandomBetween(0, 100)}%`,
      bottom: `-${this.size}px`,
      width: `${this.size}px`,
      height: `${this.size}px`,
    }
  }
}
</script>
