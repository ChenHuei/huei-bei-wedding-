// types
interface Component {
  component: string
}

interface BannerDescriptionComponent extends Component {
  title: string
  description: string[]
}

// constants
export const BANNER_CONTENT: (Component | BannerDescriptionComponent)[] = [
  {
    component: 'BannerDescription',
    title: 'Huei & Bei',
    description: ['Joyfully invite you to wedding celebration'],
  },
  {
    component: 'BannerLine',
  },
  {
    component: 'BannerDescription',
    title: 'December, 11, 2021',
    description: [
      'At 晶宴會館 - 民生館',
      '(台北市中山區民生東路三段 8 號 1 樓)',
    ],
  },
]
