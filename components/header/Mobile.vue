<template>
  <div
    class="
      header-mobile
      w-full
      h-full
      -right-full
      p-10
      flex flex-col
      bg-white
      md:hidden
    "
  >
    <div class="header-mobile-title w-auto text-primary text-xl uppercase">
      {{ title }}
    </div>
    <div class="w-auto flex flex-col flex-1 justify-center">
      <div
        v-for="item in list"
        :key="item.title"
        v-scroll-to="{ el: `#${item.title}`, onStart: scroll }"
        class="py-4 my-4 text-primary text-center uppercase cursor-pointer"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-30
 *  @description description
 *
 *  @summary summary
 */

import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

// types
import { MenuItem } from '~/types'

@Component
export default class HeaderMobile extends Vue {
  @Prop()
  title!: string

  @Prop()
  list!: MenuItem[]

  @Emit()
  scroll(): void {}
}
</script>

<style lang="scss" scoped>
.header-mobile {
  &-title {
    height: 30px;
  }
}
</style>
