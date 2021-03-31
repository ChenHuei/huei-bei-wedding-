<template>
  <div>
    <Header :title="title" :list="menuList" @scroll="scrollTo" />
    <nuxt-child ref="content" @init="init" />
    <BackTop
      :current="currentYOffset"
      :inner-height="innerHeight"
      @scroll="scrollTo"
    />
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

@Component({
  data() {
    return {
      title: PROJECT_TITLE,
    }
  },
})
export default class DefaultLayout extends Vue {
  innerHeight = 0
  currentYOffset = 0

  menuList: SectionNameNouns[] = [
    SectionNameNouns.story,
    SectionNameNouns.details,
    SectionNameNouns.map,
    SectionNameNouns.event,
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
    // set inner height
    this.innerHeight = window.innerHeight
  }

  onScroll(): void {
    // set current pageYOffset
    this.currentYOffset = window.pageYOffset
  }

  scrollTo(target: SectionNameNouns) {
    ;((this.$refs.content as Vue).$refs[target] as Vue).$el.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>
