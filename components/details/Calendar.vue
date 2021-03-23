<template>
  <a
    class="mt-16 text-lg text-primary text-center underline"
    target="_blank"
    :href="link"
  >
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
