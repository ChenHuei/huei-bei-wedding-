<template>
  <div>
    <Header :title="title" :list="menuList" />
    <nuxt-child ref="content" @init="init" />
    <BackTop :current="currentYOffset" :inner-height="innerHeight" />
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
  innerHeight = 0

  menuList: MenuItem[] = [
    { title: SectionNameNouns.story, offsetTop: 0 },
    { title: SectionNameNouns.details, offsetTop: 0 },
    { title: SectionNameNouns.map, offsetTop: 0 },
    { title: SectionNameNouns.event, offsetTop: 0 },
  ]

  mounted(): void {
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

  init(): void {
    this.onResize()
    this.onScroll()
  }

  onResize(): void {
    // set menu item offsetTop
    this.menuList.forEach((item, index) => {
      const target = ((this.$refs.content as Vue).$refs[item.title] as Vue)
        .$el as HTMLElement

      this.$set(this.menuList[index], 'offsetTop', target.offsetTop)
    })

    // set inner height
    this.innerHeight = window.innerHeight
  }

  onScroll(): void {
    // set current pageYOffset
    this.currentYOffset = window.pageYOffset
  }
}
</script>
