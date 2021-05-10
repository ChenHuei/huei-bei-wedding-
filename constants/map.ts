import { BasicSection } from '~/types'

export const MAP_INFO: BasicSection = {
  title: 'Map',
}

export const MAP_LOCATION: string[] = [
  'At 晶宴會館 - 民生館',
  '(台北市中山區民生東路三段 8 號 B2)',
]

export const MAP_TRAFFIC: {
  category: string
  content: { title: string; description: string[] }[]
}[] = [
  {
    category: '搭乘公車',
    content: [
      {
        title: '',
        description: [
          '請搭乘下列公車至「合江街口站」下車:',
          '277、286副線、643、505、518、5、612、612(區間車)、638、680、博愛公車。',
        ],
      },
    ],
  },
  {
    category: '搭乘捷運',
    content: [
      {
        title: '捷運 → 步行',
        description: [
          '捷運中和新蘆線 「行天宮站」: 由 1 號出口步行約 10 分鐘',
          '捷運文湖線 「中山國中站」: 出口步行約 12 分鐘',
        ],
      },
      {
        title: '捷運 → 公車',
        description: [
          '捷運文湖線 「中山國中站」: 捷運出口右轉直行至民生東路，轉乘下列公車至「合江街口站」下車',
          '→ 286副線、680、643',
          '捷運淡水線 「雙連站」: 捷運站 1 號出口右轉，轉乘下列公車至「合江街口站」下車',
          '→ 518',
        ],
      },
    ],
  },
  {
    category: '自行開車',
    content: [
      {
        title: '',
        description: [
          '中山高：中山高 → 圓山交流道下 → 建國高架橋 → 下民權東路閘道 → 民生東路左轉即可至本會館',
        ],
      },
    ],
  },
  {
    category: '停車資訊',
    content: [
      {
        title: '',
        description: ['南山大樓 B5-B6 停車場 (免費)'],
      },
    ],
  },
]
