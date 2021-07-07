<template>
  <div>
    <Header :title="title" :list="menuList" />
    <nuxt-child ref="content" @init="init" />
    <client-only>
      <BackTop :current="currentYOffset" />
    </client-only>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-15
 *  @description description
 *
 *  @summary summary
 */

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
    }
  },
})
export default class DefaultLayout extends Vue {
  currentYOffset = 0

  menuList: MenuItem[] = [
    { title: SectionNameNouns.story },
    { title: SectionNameNouns.details },
    { title: SectionNameNouns.map },
    { title: SectionNameNouns.event },
  ]

  mounted(): void {
    const debounceOnScroll = debounce(this.onScroll, 100)

    window.addEventListener('scroll', this.onScroll, { passive: true })

    this.$once('hook:beforeDestroy', (): void => {
      window.removeEventListener('scroll', debounceOnScroll)
    })
  }

  // methods

  init(): void {
    this.onScroll()
  }

  onScroll(): void {
    // set current pageYOffset
    this.currentYOffset = window.pageYOffset
  }
}
</script>
