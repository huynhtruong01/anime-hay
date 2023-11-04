import { MediaType } from "./../enums"

export interface IGenre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface IImage {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface IAnime {
  mal_id: number
  images: {
    jpg: IImage
    webp: IImage
  }
  title: string
  status: string
  source: string
  duration: string
  score: number
  rank: number
  synopsis: string
  members: number
  favorites: number
  background: string
  genres: IGenre[]
  season: string
  year: number
  name: string
  popularity: number
  published: {
    from?: Date
    to?: Date
  }
  chapters: number
  about: string
  trailer: {
    embed_url: string
    url: string
    youtube_id: string
    images: IImage
  }
}

export interface ICharacter {
  character: {
    mal_id: number
    url: string
    images: {
      jpg: IImage
      webp: IImage
    }
    name: string
  }
  role: string
  favorites: number
}

export interface IPromo {
  title: string
  trailer: {
    youtubeId: string
    url: string
    embed_url: string
    images: IImage
  }
}

export interface IEpisode {
  mal_id: number
  title: string
  episode: string
  url: string
  images: {
    jpg: IImage
  }
}

export interface IVideos {
  promo: IPromo[]
  episodes: IEpisode[]
}

export interface IRecommendAnime {
  entry: {
    mal_id: number
    url: string
    images: {
      jpg: IImage
      webp: IImage
    }
    title: string
  }
  url: string
  votes: number
}

export interface ICharacterManga {
  role: string
  manga: {
    mal_id: number
    images: {
      jpg: IImage
      webp: IImage
    }
    title: string
  }
}

export type IMediaType =
  | MediaType.ANIME
  | MediaType.MANGA
  | MediaType.CHARACTERS
