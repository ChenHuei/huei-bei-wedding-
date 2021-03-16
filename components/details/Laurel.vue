<template>
  <img
    class="details-laurel absolute"
    alt="laurel image"
    :class="classHandler"
    :src="LaurelSVG"
  />
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-15
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

// types
import { Direction } from '@/types'

// images
import LaurelSVG from '@/assets/images/Laurel.svg'

@Component({
  data() {
    return {
      LaurelSVG,
    }
  },
})
export default class DetailsLaurel extends Vue {
  @Prop()
  direction!: Direction

  get classHandler() {
    return {
      [this.direction]: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.details-laurel {
  &.left {
    left: 25%;
  }

  &.right {
    right: 25%;
    transform: rotateY(180deg);
  }
}
</style>
