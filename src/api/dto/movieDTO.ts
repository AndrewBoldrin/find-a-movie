import { GenreType } from './genreDTO'

export type MovieDTO = {
  adult: boolean
  backdrop_path: string
  genres?: GenreType[]
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
