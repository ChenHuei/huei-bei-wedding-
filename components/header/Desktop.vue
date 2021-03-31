<template>
  <div
    class="hidden w-full max-w-screen-lg justify-between items-center mx-auto md:flex"
  >
    <div
      class="w-auto text-primary uppercase cursor-pointer"
      @click="() => scroll(SectionNameNouns.banner)"
    >
      {{ title }}
    </div>
    <div class="w-auto flex -mr-4">
      <div
        v-for="item in list"
        :key="item"
        class="mx-4 text-primary uppercase cursor-pointer"
        @click="scroll(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-23
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

// constants
import { SectionNameNouns } from '~/constants'

@Component({
  data() {
    return {
      SectionNameNouns,
    }
  },
})
export default class HeaderDesktop extends Vue {
  @Prop()
  title!: string

  @Prop()
  list!: SectionNameNouns[]

  @Emit()
  scroll(target: SectionNameNouns): SectionNameNouns {
    return target
  }
}
</script>
