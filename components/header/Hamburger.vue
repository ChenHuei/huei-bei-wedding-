<template>
  <div
    class="
      header-hamburger
      transition-all
      duration-500
      ease-in-out
      cursor-pointer
    "
    @click="onValueChanged"
  >
    <p
      v-for="n in 3"
      :key="n"
      class="
        header-hamburger-line
        absolute
        w-full
        bg-primary
        rounded
        transition-all
        duration-200
        ease-in-out
      "
      :class="{ open: value }"
    ></p>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-23
 *  @description description
 *
 *  @summary summary
 */

import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HeaderHamburger extends Vue {
  @Prop()
  value!: boolean

  @Emit('input')
  onValueChanged(): boolean {
    return !this.value
  }
}
</script>

<style lang="scss" scoped>
.header-hamburger {
  width: 45px;
  height: 30px;

  &-line {
    left: 0;
    height: 6px;
    transform-origin: left center;
    opacity: 1;

    &:nth-child(1) {
      top: 0;

      &.open {
        top: -3px;
        left: 8px;
        transform: rotate(45deg);
      }
    }

    &:nth-child(2) {
      top: 12px;

      &.open {
        width: 0%;
        opacity: 0;
      }
    }

    &:nth-child(3) {
      top: 24px;

      &.open {
        top: 29px;
        left: 8px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
