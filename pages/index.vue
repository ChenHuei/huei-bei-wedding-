<template>
  <main>
    <Header :title="title" :list="menuList" />
    <Banner />
    <Story ref="story" :list="imageList" />
    <Details ref="details" />
    <Map ref="map" />
    <Event ref="event" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { debounce } from 'vue-debounce'

// constants
import { PROJECT_TITLE } from '@/constants'

// types
import { MenuItem } from '@/types'

@Component({
  data() {
    return {
      title: PROJECT_TITLE,
    }
  },
})
export default class Index extends Vue {
  imageList: string[] = []

  menuList: MenuItem[] = [
    { title: 'story', offsetTop: 0 },
    { title: 'details', offsetTop: 0 },
    { title: 'map', offsetTop: 0 },
    { title: 'event', offsetTop: 0 },
  ]

  mounted(): void {
    this.$nextTick(async () => {
      // init
      await this.getImageList()
      this.onResize()
    })

    // event listener
    const debounceOnReisze = debounce(this.onResize, 500)

    window.addEventListener('resize', debounceOnReisze)

    this.$once('hook:beforeDestroy', (): void => {
      window.removeEventListener('resize', debounceOnReisze)
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
    this.menuList.forEach((item, index) => {
      const target = (this.$refs[item.title] as Vue).$el as HTMLElement

      this.$set(this.menuList[index], 'offsetTop', target.offsetTop)
    })
  }
}
</script>
