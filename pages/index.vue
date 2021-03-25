<template>
  <main>
    <Banner />
    <Story :ref="SectionNameNouns.story" :list="imageList" />
    <Details :ref="SectionNameNouns.details" />
    <Map :ref="SectionNameNouns.map" />
    <Event :ref="SectionNameNouns.event" />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

// constants
import { SectionNameNouns } from '@/constants'

@Component({
  data() {
    return {
      SectionNameNouns,
    }
  },
})
export default class Index extends Vue {
  @Emit()
  init(): void {}

  imageList: string[] = []

  async mounted(): Promise<void> {
    await this.setImageList()
    this.init()
  }

  // methods

  async setImageList(): Promise<void> {
    const list = await this.$fire.storage
      .ref()
      .listAll()
      .then((result) => result.items.map((item) => item.getDownloadURL()))

    this.imageList = await Promise.all(list).then((url) => url)
  }
}
</script>
