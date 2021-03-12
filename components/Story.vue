<template>
  <BasicSection v-bind="information">
    <div class="w-full flex justify-between items-center">
      <div
        v-for="item in list"
        :key="item"
        class="w-1/4 h-64 bg-cover bg-no-repeat bg-center"
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
}
</script>
