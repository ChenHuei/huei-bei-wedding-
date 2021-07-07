<template>
  <transition name="fade">
    <div
      v-show="isDisplay"
      v-scroll-to="'#banner'"
      class="
        back-top
        fixed
        w-8
        h-8
        flex
        justify-center
        items-center
        bg-primary
        rounded-full
        transform
        rotate-180
        cursor-pointer
        duration-500
        md:w-12
        md:h-12
      "
    >
      <ArrowDownSvg class="w-4 h-4 md:w-6 md:h-6" />
    </div>
  </transition>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-19
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

// images
import ArrowDownSvg from '@/assets/images/ArrowDown.svg?inline'

@Component({
  components: { ArrowDownSvg },
})
export default class BackTop extends Vue {
  @Prop()
  current!: number

  get isDisplay(): boolean {
    return this.current > window.innerHeight / 2
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  right: 20px;
  bottom: 20px;

  &:hover {
    opacity: 0.6;
  }
}
</style>
