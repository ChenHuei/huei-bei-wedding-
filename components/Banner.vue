<template>
  <section
    class="relative w-full h-screen bg-fixed bg-cover bg-no-repeat bg-center"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div
      class="banner-content absolute w-1/2 h-auto p-20 flex flex-col justify-center items-center bg-white"
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
      bannerImage: require('@/assets/images/Banner.jpeg'),
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
  clip-path: polygon(
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
  );
}
</style>
