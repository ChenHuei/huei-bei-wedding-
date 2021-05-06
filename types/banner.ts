export interface Component {
  component: string
  class?: string[] | string
}

export interface BannerDescriptionComponent extends Component {
  title: string
  description: string[]
  titleClasses: string[]
}
