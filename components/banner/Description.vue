<template>
  <div class="banner-description flex flex-col justify-center items-center">
    <h1
      class="
        mb-2
        font-bold font-custom
        text-3xl text-primary text-center
        lg:text-4xl
      "
      :class="titleClasses"
    >
      {{ title }}
    </h1>
    <span
      v-for="item in description"
      :key="item"
      class="text-sm text-black text-center text-opacity-95 lg:text-base"
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

  @Prop()
  titleClasses!: string[]
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
