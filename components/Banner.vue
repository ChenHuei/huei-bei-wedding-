<template>
  <section
    class="relative w-full h-screen bg-cover bg-no-repeat bg-center lg:bg-fixed"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div
      class="
        banner-content
        absolute
        w-11/12
        h-auto
        p-8
        flex flex-col
        justify-center
        items-center
        bg-white bg-opacity-70
        rounded
        lg:w-1/2
        md:p-20
      "
    >
      <component
        :is="item.component"
        v-for="(item, index) in list"
        :key="index"
        v-bind="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-11
 *  @description description
 *
 *  @summary summary
 */
import { Component, Vue } from 'vue-property-decorator'

// constants
import { BANNER_CONTENT } from '@/constants/banner'

@Component({
  data() {
    return {
      bannerImage: require(`@/assets/images/Banner.${
        (this as Vue & { $isWebp: boolean }).$isWebp ? 'webp' : 'jpg'
      }`),
      list: BANNER_CONTENT,
    }
  },
})
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
.banner-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* clip-path: polygon(
    0% 15%,
    15% 15%,
    15% 0%,
    85% 0%,
    85% 15%,
    100% 15%,
    100% 85%,
    85% 85%,
    85% 100%,
    15% 100%,
    15% 85%,
    0% 85%
  ); */
}
</style>
