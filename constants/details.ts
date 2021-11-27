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
  link: 'https://www.google.com/calendar/render?action=TEMPLATE&text=%5B%E5%A9%9A%E7%A6%AE%5D+%E6%8C%AF%E8%BC%9D+%E8%93%93%E7%8F%8A&details=2021+%E5%B9%B4+12+%E6%9C%88+11+%E6%97%A5+%28%E5%85%AD%29+%E5%8D%88%E5%AE%B4%0A%0A11%EF%BC%9A30+%E8%BF%8E%E8%B3%93%E9%85%92%E6%9C%83%0A12%EF%BC%9A00+%E8%B3%93%E5%AE%A2%E5%85%A5%E5%B8%AD%0A12%EF%BC%9A30+%E5%8D%88%E5%AE%B4%E9%96%8B%E5%B8%AD%0A14%EF%BC%9A30+%E5%90%88%E7%85%A7%E9%80%81%E5%AE%A2%0A%0A%E8%A6%81%E7%95%99%E5%88%B0%E6%9C%80%E5%BE%8C%E8%B7%9F%E6%88%91%E5%80%91%E5%90%88%E7%85%A7%E5%96%B2+%28%28%28o%28%2A%EF%BE%9F%E2%96%BD%EF%BE%9F%2A%29o%29%29%29&location=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E6%B0%91%E7%94%9F%E6%9D%B1%E8%B7%AF%E4%B8%89%E6%AE%B5+8+%E8%99%9F&dates=20211211T033000Z%2F20211211T063000Z'
}
