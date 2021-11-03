import { BasicSection } from '~/types'

export const DETAILS_INFO: BasicSection = {
  title: 'The Details',
}

export const DETAILS_CONTENT: { time: string; description: string }[] = [
  {
    time: '11:30',
    description: '迎賓酒會',
  },
  {
    time: '12:00',
    description: '賓客入席',
  },
  {
    time: '12:30',
    description: '午宴開席',
  },
  {
    time: '14:30',
    description: '合照送客',
  },
]

export const DETAILS_CALENDAR = {
  text: '按此可複製行程至個人 google 日曆提醒',
  link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=NjJ2ZWhuYjAzbmRmMGMybHI4YzFiNzdyMzQgbGVvLmNoZW5Ac2hvYWx0ZXIuY29t&tmsrc=leo.chen%40shoalter.com'
}
