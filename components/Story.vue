<template>
  <BasicSection id="story" v-bind="information">
    <div
      v-if="isOpenDialog"
      class="
        fixed
        top-0
        left-0
        w-full
        h-full
        flex
        justify-center
        items-center
        bg-black bg-opacity-50
        z-50
      "
      @click.self="closeDialog"
    >
      <img class="story-dialog-image m-auto" :src="list[currentImageIndex]" />
      <ArrowDownSvg
        v-show="currentImageIndex > 0"
        class="story-dialog-arrow absolute top-1/2 w-12 h-12 cursor-pointer"
        :style="{
          left: '25%',
          transform: 'translate(-200%, 0) rotate(90deg)',
        }"
        @click="setCurrentImageIndex(currentImageIndex - 1)"
      />
      <ArrowDownSvg
        v-show="currentImageIndex < list.length - 1"
        class="story-dialog-arrow absolute top-1/2 w-12 h-12 cursor-pointer"
        :style="{
          right: '25%',
          transform: 'translate(200%, 0) rotate(-90deg)',
        }"
        @click="setCurrentImageIndex(currentImageIndex + 1)"
      />
    </div>

    <div class="w-full h-96 overflow-hidden">
      <div class="story-list h-full flex items-center overflow-x-auto pb-4">
        <div
          v-for="(item, index) in list"
          :key="item"
          :style="{ backgroundImage: `url(${item})`, flex: '0 0 auto' }"
          class="
            story-item
            w-full
            md:w-calc((100%-2rem)/2)
            lg:w-calc((100%-4rem)/3)
            h-full
            mr-8
            bg-cover bg-no-repeat bg-center
          "
          @click="openDialog(index)"
        ></div>
      </div>
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

// images
import ArrowDownSvg from '@/assets/images/ArrowDown.svg?inline'

@Component({
  components: { ArrowDownSvg },
  data() {
    return {
      information: STORY_INFO,
    }
  },
})
export default class Story extends Vue {
  @Prop()
  list!: string[]

  isOpenDialog = false

  currentImageIndex = 0

  openDialog(index: number): void {
    this.setCurrentImageIndex(index)
    this.isOpenDialog = true
  }

  closeDialog(): void {
    this.isOpenDialog = false
    this.setCurrentImageIndex(0)
  }

  setCurrentImageIndex(index: number): void {
    const imgIdx = Math.min(Math.max(index, 0), this.list.length - 1)
    this.currentImageIndex = imgIdx
  }
}
</script>

<style lang="scss" scoped>
.story {
  &-dialog {
    &-image {
      max-width: 75%;
      max-height: 90%;
      user-select: none;

      @media (min-width: 1024px) {
        max-width: 50%;
      }
    }
    &-arrow {
      transition: 0.5s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-list {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: transparent;

      &-track,
      &-track-piece {
        background-color: transparent;
      }

      &-thumb {
        border-radius: 4px;
        background-color: #fcf6e6;
      }
    }
  }

  &-item {
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
