<template>
  <section
    class="
      w-full
      h-auto
      py-8
      px-4
      pb-12
      flex
      justify-center
      bg-white
      lg:p-16 lg:pb-24
    "
  >
    <div class="relative w-full max-w-screen-lg flex flex-col items-center">
      <div
        ref="outer"
        class="
          outer
          mb-12
          border-b border-primary
          text-center
          overflow-hidden
          lg:mb-24
        "
      >
        <h1
          ref="inner"
          class="
            relative
            text-4xl text-primary
            font-bold font-custom
            md:text-5xl
          "
        >
          {{ title }}
        </h1>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-12
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { gsap } from 'gsap'

@Component
export default class BasicSection extends Vue {
  @Prop()
  title!: string

  @Emit()
  enter(): void {}

  mounted(): void {
    if (process.client) {
      const ScrollMagic = require('scrollmagic')
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({
        triggerElement: this.$el,
        offset: 0,
        triggerHook: 0.99,
      })
        .on('enter', () => {
          this.enter()
          gsap.from(this.$refs.outer as gsap.TweenTarget, {
            duration: 0.25,
            scaleX: 0,
          })
          gsap.from(this.$refs.inner as gsap.TweenTarget, {
            duration: 0.65,
            yPercent: 100,
          })
        })
        .addTo(controller)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  &:nth-of-type(2n + 1) {
    background-color: var(--secondary);
  }
}
</style>
