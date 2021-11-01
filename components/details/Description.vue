<template>
  <div
    class="
      w-1/2
      flex
      justify-between
      font-bold
      text-lg text-primary text-center
      leading-10
      lg:w-1/4
    "
  >
    <p class="lg:text-xl">{{ time }}</p>
    <BasicLine v-if="isShowLine" class="hidden md:block" />
    <p>{{ description }}</p>
  </div>
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
export default class DetailsDescription extends Vue {
  @Prop()
  time!: string

  @Prop()
  description!: string

  @Prop()
  index!: number

  get isShowLine(): boolean {
    return this.index === 1
  }
}
</script>
