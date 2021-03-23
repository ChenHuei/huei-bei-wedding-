<template>
  <header class="header fixed w-full h-auto p-4 flex justify-end">
    <HeaderDesktop
      class="hidden md:flex"
      :title="title"
      :list="list"
      @scroll="scrollTo"
    />
    <HeaderHamburger class="md:hidden" />
  </header>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-19
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

// types
import { MenuItem } from '@/types'

@Component
export default class Header extends Vue {
  @Prop()
  title!: string

  @Prop()
  list!: MenuItem[]

  // methods

  scrollTo(top: number): void {
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
}
</style>
