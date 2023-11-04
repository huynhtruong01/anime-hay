export interface IRespond<T> {
  data: T[]
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
}

export interface IParams {
  limit: number
  page: number
}

export interface IInfiniteProps<T> {
  url: string
  page: Ref<number>
  totalPage: Ref<number>
  animeList: Ref<T[]>
}

export interface IAnimeRespond<T> {
  data: T
}

export interface IAnimesRespond<T> {
  data: T[]
}
