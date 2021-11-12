export type CounterState = {
  value: number
}

export type GetUser = {
  id: number
  name: string
  posts: {
    id: number
    text: string
    user_id: number
    created_at: string
    updated_at: string
  }[]
  created_at: string
}

export type PostUser = {
  name: string
}
