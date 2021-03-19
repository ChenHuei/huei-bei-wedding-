<template>
  <div class="w-full flex font-bold leading-10">
    <p class="details-description-time text-primary">{{ time }}</p>
    <p class="text-primary">{{ description }}</p>
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
}
</script>

<style lang="scss" scoped>
.details-description-time {
  transform: translateX(-200%);
  margin-left: 50%;
}
</style>
