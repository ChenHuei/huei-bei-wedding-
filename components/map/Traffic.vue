<template>
  <div class="w-10/12 mb-4">
    <h1 class="mb-2 text-xl text-primary lg:text-2xl">
      {{ category }}
    </h1>
    <div
      v-for="(item, index) in content"
      :key="index"
      class="mb-2 leading-8 text-gray-500"
    >
      <p v-if="item.title" class="mb-1 text-primary">
        {{ item.title }}
      </p>
      <span v-for="element in item.description" :key="element">
        {{ element }}
      </span>
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
