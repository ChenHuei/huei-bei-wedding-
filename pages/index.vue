<template>
  <main>
    <Bubble v-for="(item, index) in bubbleSizeList" :key="index" :size="item" />
    <Banner :ref="SectionNameNouns.banner" />
    <Story :ref="SectionNameNouns.story" :list="imageList" />
    <Details :ref="SectionNameNouns.details" />
    <Map :ref="SectionNameNouns.map" />
    <Event :ref="SectionNameNouns.event" />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator'
import { gsap } from 'gsap'

// constants
import { SectionNameNouns } from '@/constants'
import {
  BubbleSizeNouns,
  BubbleDurationNouns,
  BubbleScaleNouns,
  BubbleOffsetNouns,
  BUBBLE_NUMBERS,
  BUBBLE_PATH_LENGTH,
} from '@/constants/bubble'

// utils
import { getRandomBetween } from '@/utils/math'

@Component({
  data() {
    return {
      SectionNameNouns,
    }
  },
})
export default class Index extends Vue {
  @Prop()
  innerHeight!: number

  @Emit()
  init(): void {}

  @Watch('innerHeight')
  onInnerHeightChanged(): void {
    gsap.utils.toArray('.bubble').forEach((bubble, i) => {
      gsap.to(bubble as gsap.TweenTarget, {
        duration: `random(${BubbleDurationNouns.min}, ${BubbleDurationNouns.max})`,
        delay: i * 0.5,
        repeat: -1,
        opacity: 0,
        scale: `random(${BubbleScaleNouns.min}, ${BubbleScaleNouns.max})`,
        motionPath: {
          path: this.getPathMaker(),
          type: 'cubic',
          curviness: 2,
          autoRotate: true,
        },
        onRepeat: () => {
          this.$set(
            this.bubbleSizeList,
            i,
            getRandomBetween(BubbleSizeNouns.min, BubbleSizeNouns.max)
          )
        },
      })
    })
  }

  imageList: string[] = []

  bubbleSizeList: number[] = []

  // mounted

  async mounted(): Promise<void> {
    await Promise.all([this.setBubbleSizeList(), this.setImageList()])

    this.$nextTick(() => {
      this.init()
    })
  }

  // methods

  async setImageList(): Promise<void> {
    const list = await this.$fire.storage
      .ref()
      .listAll()
      .then((result) => result.items.map((item) => item.getDownloadURL()))

    this.imageList = await Promise.all(list).then((url) => url)
  }

  setBubbleSizeList(): Promise<void> {
    return new Promise((resolve) => {
      this.bubbleSizeList = Array(BUBBLE_NUMBERS)
        .fill(0)
        .map(() => getRandomBetween(BubbleSizeNouns.min, BubbleSizeNouns.max))
      resolve()
    })
  }

  getPathMaker() {
    return Array(BUBBLE_PATH_LENGTH)
      .fill(0)
      .map((_, index) => {
        return {
          x:
            index === 0
              ? 0
              : getRandomBetween(BubbleOffsetNouns.min, BubbleOffsetNouns.max),
          y: (this.innerHeight * -1 * index) / (BUBBLE_PATH_LENGTH - 1),
        }
      })
  }
}
</script>
