<template>
  <main>
    <Header :title="title" :list="menuList" />
    <Banner />
    <Story :ref="SectionNameNouns.story" :list="imageList" />
    <Details :ref="SectionNameNouns.details" />
    <Map :ref="SectionNameNouns.map" />
    <Event :ref="SectionNameNouns.event" />
    <BackTop :current="currentYOffset" :inner-height="innerHeight" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { debounce } from 'vue-debounce'

// constants
import { PROJECT_TITLE, SectionNameNouns } from '@/constants'

// types
import { MenuItem } from '@/types'

@Component({
  data() {
    return {
      title: PROJECT_TITLE,
      SectionNameNouns,
    }
  },
})
export default class Index extends Vue {
  currentYOffset = 0
  innerHeight = 0

  imageList: string[] = []

  menuList: MenuItem[] = [
    { title: SectionNameNouns.story, offsetTop: 0 },
    { title: SectionNameNouns.details, offsetTop: 0 },
    { title: SectionNameNouns.map, offsetTop: 0 },
    { title: SectionNameNouns.event, offsetTop: 0 },
  ]

  mounted(): void {
    this.$nextTick(async () => {
      // init
      await this.getImageList()
      this.onResize()
      this.onScroll()
    })

    // event listener
    const debounceOnReisze = debounce(this.onResize, 300)
    const debounceOnScroll = debounce(this.onScroll, 100)

    window.addEventListener('resize', debounceOnReisze)
    window.addEventListener('scroll', debounceOnScroll)

    this.$once('hook:beforeDestroy', (): void => {
      window.removeEventListener('resize', debounceOnReisze)
      window.removeEventListener('scroll', debounceOnScroll)
    })
  }

  // methods

  async getImageList(): Promise<void> {
    const list = await this.$fire.storage
      .ref()
      .listAll()
      .then((result) => result.items.map((item) => item.getDownloadURL()))

    this.imageList = await Promise.all(list).then((url) => url)
  }

  onResize(): void {
    // set menu item offsetTop
    this.menuList.forEach((item, index) => {
      const target = (this.$refs[item.title] as Vue).$el as HTMLElement

      this.$set(this.menuList[index], 'offsetTop', target.offsetTop)
    })

    // set inner height
    this.innerHeight = window.innerHeight
  }

  onScroll(): void {
    this.currentYOffset = window.pageYOffset
  }
}
</script>
