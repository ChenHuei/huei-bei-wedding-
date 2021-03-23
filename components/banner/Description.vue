<template>
  <div class="banner-description flex flex-col justify-center items-center">
    <h1 class="mb-2 font-bold text-3xl text-blue-700 text-center lg:text-4xl">
      {{ title }}
    </h1>
    <span
      v-for="item in description"
      :key="item"
      class="text-sm text-gray-500 text-center lg:text-base"
    >
      {{ item }}
    </span>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-11
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BannerDescription extends Vue {
  @Prop()
  title!: string

  @Prop()
  description!: string[]
}
</script>

<style lang="scss" scoped>
.banner-description {
  span {
    + span {
      margin-top: 1px;
    }
  }
}
</style>
