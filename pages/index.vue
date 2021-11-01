<template>
  <main>
    <!-- bubble -->
    <Bubble v-for="(item, index) in bubbleSizeList" :key="index" :size="item" />
    <!-- content -->
    <Banner :id="SectionNameNouns.banner" />
    <LazyStory :id="SectionNameNouns.story" :list="imageList" />
    <LazyDetails :id="SectionNameNouns.details" />
    <LazyMap :id="SectionNameNouns.map" />
    <LazyEvent :id="SectionNameNouns.event" />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { gsap } from 'gsap'

// constants
import { SectionNameNouns } from '@/constants'
import {
  BubbleSizeNouns,
  BubbleDurationNouns,
  BubbleScaleNouns,
  BubbleOffsetNouns,
  BUBBLE_PATH_LENGTH,
  BUBBLE_DELAY,
} from '@/constants/bubble'

// utils
import { getRandomBetween } from '@/utils/math'

@Component({
  data() {
    return {
      imageList: [...Array(6).keys()].map((item) =>
        require(`@/assets/images/story/${item + 1}.${
          (this as Vue & { $isWebp: boolean }).$isWebp ? 'webp' : 'jpg'
        }`)
      ),
      SectionNameNouns,
    }
  },
})
export default class Index extends Vue {
  @Emit()
  init(): void {
    gsap.utils.toArray('.bubble').forEach((bubble, i) => {
      gsap.to(bubble as gsap.TweenTarget, {
        duration: `random(${BubbleDurationNouns.min}, ${BubbleDurationNouns.max})`,
        delay: i * BUBBLE_DELAY,
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
    await Promise.all([this.setBubbleSizeList()])

    this.$nextTick(() => {
      this.init()
    })
  }

  // methods

  async setImageList(): Promise<void> {
    const list = await this.$fire.storage
      .ref()
      .list({ maxResults: 3 })
      .then((result) =>
        result.items
          .filter((item) => {
            const [, type] = item.name.split('.')
            return type === 'mov' ? '' : item
          })
          .filter(Boolean)
          .map((item) => item.getDownloadURL())
      )

    this.imageList = await Promise.all(list).then((url) => url)
  }

  setBubbleSizeList(): Promise<void> {
    const bubbleNumbers = Math.ceil(window.innerWidth / 100)

    return new Promise((resolve) => {
      this.bubbleSizeList = Array(bubbleNumbers)
        .fill(0)
        .map(() => getRandomBetween(BubbleSizeNouns.min, BubbleSizeNouns.max))
      resolve()
    })
  }

  getPathMaker() {
    const MOBILE_BROWSER_NAVIGATION_HEIGHT = 100

    return Array(BUBBLE_PATH_LENGTH)
      .fill(0)
      .map((_, index) => {
        return index === 0
          ? {
              x: 0,
              y: 0,
            }
          : {
              x: getRandomBetween(BubbleOffsetNouns.min, BubbleOffsetNouns.max),
              y:
                (-1 *
                  (window.innerHeight * index +
                    MOBILE_BROWSER_NAVIGATION_HEIGHT)) /
                (BUBBLE_PATH_LENGTH - 1),
            }
      })
  }
}
</script>
