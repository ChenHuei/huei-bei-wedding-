<template>
  <BasicSection id="story" v-bind="information" @enter="init">
    <div
      v-if="isInit"
      class="
        w-full
        flex flex-col
        justify-between
        items-center
        -mb-10
        lg:flex-row
        lg:mb-0
      "
    >
      <div
        v-for="item in list"
        :key="item"
        class="
          w-1/2
          h-64
          mb-10
          bg-cover bg-no-repeat bg-center
          md:w-1/3
          lg:w-1/4
          lg:mb-0
        "
        :style="{ backgroundImage: `url(${item})` }"
      ></div>
    </div>
  </BasicSection>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-12
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop } from 'vue-property-decorator'

// constants
import { STORY_INFO } from '@/constants/story'

@Component({
  data() {
    return {
      information: STORY_INFO,
    }
  },
})
export default class Story extends Vue {
  @Prop()
  list!: string[]

  isInit = false

  init(): void {
    this.isInit = true
  }
}
</script>
