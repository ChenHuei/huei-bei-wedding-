<template>
  <picture class="details-laurel absolute" :class="getClasses">
    <source :srcset="LaurelLGSVG" media="(min-width: 1024px)" />
    <img alt="laurel image" :src="LaurelSVG" />
  </picture>
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
import { Direction } from '@/constants'

// images
import LaurelSVG from '@/assets/images/Laurel.svg'
import LaurelLGSVG from '@/assets/images/Laurel-LG.svg'

@Component({
  data() {
    return {
      LaurelSVG,
      LaurelLGSVG,
    }
  },
})
export default class DetailsLaurel extends Vue {
  @Prop()
  direction!: Direction

  get getClasses() {
    return {
      [this.direction]: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.details-laurel {
  &.left {
    left: 5%;
  }

  &.right {
    right: 5%;
    transform: rotateY(180deg);
  }
}

@media (min-width: 1024px) {
  .details-laurel {
    &.left {
      left: 25%;
    }

    &.right {
      right: 25%;
    }
  }
}
</style>
