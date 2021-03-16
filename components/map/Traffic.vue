<template>
  <div class="w-3/4 mb-4">
    <h1 class="map-traffic-cateogry mb-2 text-2xl">{{ category }}</h1>
    <div
      v-for="(item, index) in content"
      :key="index"
      class="mb-2 leading-8 text-gray-500"
    >
      <h4 v-if="item.title" class="map-traffic-item-title mb-1">
        {{ item.title }}
      </h4>
      <p v-for="element in item.description" :key="element">
        {{ element }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-16
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MapTraffic extends Vue {
  @Prop()
  category!: string

  @Prop()
  content!: { title: string; description: string[] }[]
}
</script>

<style lang="scss" scoped>
.map-traffic {
  &-cateogry,
  &-item-title {
    color: var(--primary);
  }
}
</style>
