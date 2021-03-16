<template>
  <a class="details-calendar mt-16 text-lg" :href="link" target="_blank">
    {{ text }}
  </a>
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
export default class DetailsCalendar extends Vue {
  @Prop()
  link!: string

  @Prop()
  text!: string
}
</script>

<style lang="scss" scoped>
.details-calendar {
  text-decoration: underline;
  color: var(--primary);
}
</style>
