<template>
  <header class="header fixed w-full h-auto p-4">
    <div
      class="w-full max-w-screen-lg flex justify-between items-center mx-auto"
    >
      <div
        class="w-auto text-primary uppercase cursor-pointer"
        @click="scrollTo"
      >
        {{ title }}
      </div>
      <div class="w-auto flex -mr-4">
        <div
          v-for="item in list"
          :key="item.title"
          class="mx-4 text-primary uppercase cursor-pointer"
          @click="scrollTo(item.offsetTop)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
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

  scrollTo(top: number = 0): void {
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
