<template>
  <div>
    <ul class="flex">
      <li v-for="color of colors" :key="color" class="p-2">
        <component
          :is="`icon-${color}`"
          class="w-10 h-10"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <client-only>
      <p class="py-2">
        <ColorScheme placeholder="..." tag="span">
          Color mode: <b>{{ $colorMode.preference }}</b>
          <span v-if="$colorMode.preference === 'system'"
            >(<i>{{ $colorMode.value }}</i> mode detected)</span
          >
        </ColorScheme>
      </p>
    </client-only>
  </div>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-19
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue } from 'vue-property-decorator'

// components
import IconSystem from '@/assets/images/System.svg?inline'
import IconLight from '@/assets/images/Light.svg?inline'
import IconDark from '@/assets/images/Dark.svg?inline'

// constants
import { ColorModeNouns } from '@/constants'

@Component({
  components: {
    IconSystem,
    IconLight,
    IconDark,
  },
})
export default class BasicColorModePicker extends Vue {
  colors: (keyof typeof ColorModeNouns)[] = ['system', 'light', 'dark']

  getClasses(color: keyof typeof ColorModeNouns) {
    // Does not set classes on ssr preference is system (because we know them on client-side)
    return this.$colorMode.unknown
      ? {}
      : {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value,
        }
  }
}
</script>

<style lang="scss" scoped>
.feather {
  position: relative;
  top: 0;
  margin: 0;
  padding: 4px;
  border-radius: 5px;
  border: 2px solid var(--primary);
  background-color: var(--secondary);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    top: -5px;
  }

  &.preferred {
    top: -5px;
    border-color: var(--primary);
  }

  &.selected {
    color: var(--primary);
  }
}
</style>
