export interface User {
  displayName: string
  pictureUrl: string
}

export interface Message {
  id: number
  message: string
  user: User
}
