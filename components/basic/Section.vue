<template>
  <section class="w-full h-auto flex justify-center p-20 pb-32">
    <div class="w-full max-w-screen-lg flex flex-col items-center">
      <div class="mb-20 text-center">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <h4 v-if="description" class="my-5 text-1xl">
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
  &:nth-child(2n + 1) {
    background-color: var(--secondary);
  }

  h1,
  h4 {
    color: var(--primary);
  }
}
</style>
