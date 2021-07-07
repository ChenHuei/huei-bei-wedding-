import { BasicSection } from '~/types'

export const DETAILS_INFO: BasicSection = {
  title: 'The Details',
}

export const DETAILS_CONTENT: { time: string; description: string }[] = [
  {
    time: '12:00',
    description: '賓客入席',
  },
  {
    time: '12:30',
    description: '午宴用餐',
  },
  {
    time: '14:30',
    description: '合照送客',
  },
]

export const DETAILS_CALENDAR = {
  text: '按此可複製行程至個人 google 日曆提醒',
  link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20211211T030000Z%2F20211211T070000Z&details=%E7%95%B6%E5%A4%A9%E6%B5%81%E7%A8%8B%EF%BC%9A%0A%0A12%3A00%20%E8%B3%93%E5%AE%A2%E5%85%A5%E5%B8%AD%0A12%3A30%20%E5%8D%88%E5%AE%B4%E7%94%A8%E9%A4%90%0A14%3A30%20%E5%90%88%E7%85%A7%E9%80%81%E5%AE%A2%0A%0A%E8%A9%B3%E7%B4%B0%E8%B3%87%E8%A8%8A%E8%AB%8B%E5%8F%83%E8%80%83%EF%BC%9Ahttps%3A%2F%2F....&location=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E6%B0%91%E7%94%9F%E6%9D%B1%E8%B7%AF%E4%B8%89%E6%AE%B5%208%20%E8%99%9F&text=%5B%E6%8C%AF%E8%BC%9D%2C%E8%93%93%E7%8F%8A%5D%20%E5%A9%9A%E7%A6%AE',
}
