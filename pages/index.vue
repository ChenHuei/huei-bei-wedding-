<template>
  <main>
    <Banner />
    <Story :list="imageList" />
    <Details />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  imageList: string[] = []

  mounted(): void {
    this.getImageList()
  }

  // methods

  async getImageList(): Promise<void> {
    const list = await this.$fire.storage
      .ref()
      .listAll()
      .then((result) => result.items.map((item) => item.getDownloadURL()))

    this.imageList = await Promise.all(list).then((url) => url)
  }
}
</script>
