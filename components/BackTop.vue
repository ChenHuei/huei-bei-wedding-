<template>
  <transition name="fade">
    <div
      v-show="isDisplay"
      class="back-top fixed w-12 h-12 flex justify-center items-center bg-primary rounded-full transform rotate-180 cursor-pointer duration-500"
      @click="scrollToTop"
    >
      <ArrowDownSvg class="w-6 h-6" />
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
  components: {
    ArrowDownSvg,
  },
})
export default class BackTop extends Vue {
  @Prop()
  current!: number

  @Prop()
  innerHeight!: number

  get isDisplay(): boolean {
    return this.current > this.innerHeight / 2
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
