export interface Root {
  tickets: Ticket[]
  users: User[]
}

export interface Ticket {
  id: string
  title: string
  tag: string[]
  userId: string
  status: string
  priority: number
}

export interface User {
  id: string
  name: string
  available: boolean
}
