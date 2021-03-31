<template>
  <header
    class="header fixed left-full w-full h-screen transition-all duration-200 ease-in-out z-20 md:left-0 md:h-auto md:p-4 md:z-10"
    :class="{ open: isOpenMobileMenu }"
  >
    <HeaderDesktop :title="title" :list="list" @scroll="scroll" />
    <HeaderMobile :title="title" :list="list" @scroll="scroll" />
    <HeaderHamburger
      v-model="isOpenMobileMenu"
      class="header-hamburger fixed z-30 md:hidden"
    />
  </header>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-19
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

// constants
import { SectionNameNouns } from '~/constants'

@Component
export default class Header extends Vue {
  @Prop()
  title!: string

  @Prop()
  list!: SectionNameNouns[]

  @Emit()
  scroll(target: SectionNameNouns): SectionNameNouns {
    this.isOpenMobileMenu = false

    return target
  }

  isOpenMobileMenu = false
}
</script>

<style lang="scss" scoped>
.header {
  &.open {
    left: 0;
  }

  &-hamburger {
    top: 2.5rem;
    right: 2.5rem;
  }
}
</style>
