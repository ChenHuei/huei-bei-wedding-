export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface BasicSection {
  title: string
  description: string
}

export interface MenuItem {
  title: string
  offsetTop: number
}
