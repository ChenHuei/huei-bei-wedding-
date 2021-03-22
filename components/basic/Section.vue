<template>
  <section
    class="w-full h-auto p-12 pb-24 flex justify-center bg-white lg:p-16 lg:pb-32"
  >
    <div class="w-full max-w-screen-lg flex flex-col items-center">
      <div class="mb-12 text-center md:mb-16 lg:mb-20">
        <h1 class="text-3xl text-primary font-bold md:text-4xl">
          {{ title }}
        </h1>
        <h4 v-if="description" class="my-5 text-1xl text-primary">
          {{ description }}
        </h4>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-12
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BasicSection extends Vue {
  @Prop()
  title!: string

  @Prop()
  description: string | undefined
}
</script>

<style lang="scss" scoped>
section {
  &:nth-of-type(2n + 1) {
    background-color: var(--secondary);
  }
}
</style>
