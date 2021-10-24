<template>
  <BasicSection v-bind="information">
    <div class="w-full flex flex-col justify-center items-center">
      <DetailsLaurel :direction="Direction.LEFT" />
      <DetailsLaurel :direction="Direction.RIGHT" />
      <DetailsDescription
        v-for="(item, index) in list"
        :key="item.time"
        :index="index"
        v-bind="item"
      />
    </div>
    <DetailsCalendar v-bind="calendar" />
  </BasicSection>
</template>

<script lang="ts">
/**
 *  @author leo.chen 2021-03-12
 *  @description description
 *
 *  @summary summary
 */

import { Component, Vue } from 'vue-property-decorator'

// constants
import {
  DETAILS_INFO,
  DETAILS_CONTENT,
  DETAILS_CALENDAR,
} from '@/constants/details'

// types
import { Direction } from '@/constants'

@Component({
  data() {
    return {
      Direction,
      information: DETAILS_INFO,
      list: DETAILS_CONTENT,
      calendar: DETAILS_CALENDAR,
    }
  },
})
export default class Details extends Vue {}
</script>
