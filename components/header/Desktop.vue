<template>
  <div
    class="
      hidden
      w-full
      max-w-screen-lg
      justify-between
      items-center
      mx-auto
      md:flex
    "
  >
    <div
      v-scroll-to="'#banner'"
      class="w-auto text-primary uppercase cursor-pointer"
    >
      {{ title }}
    </div>
    <div class="w-auto flex -mr-4">
      <div
        v-for="item in list"
        :key="item.title"
        v-scroll-to="{ el: `#${item.title}`, onStart: scroll }"
        class="mx-4 text-primary uppercase cursor-pointer"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-23
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

// types
import { MenuItem } from '@/types'

@Component
export default class HeaderDesktop extends Vue {
  @Prop()
  title!: string

  @Prop()
  list!: MenuItem[]

  @Emit()
  scroll(): void {}
}
</script>
