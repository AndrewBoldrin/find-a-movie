import { API } from './config'

export function setQueryParams(page: number) {
  return `language=${API.language}&page=${page}`
}

export const endpoints = Object.freeze({
  genre: {
    movies: '/genre/movie/list',
    series: '/genre/tv/list',
  },
  movies: {
    movie: '/movie',
    similar: (id: string) => `/movie/${id}/similar?language=${API.language}`,
    sections: {
      popular: '/movie/popular',
      top_rated: '/movie/top_rated',
      upcoming: '/movie/upcoming',
    },
  },
  series: {
    serie: '/tv',
    similar: (id: string) => `/tv/${id}/similar?language=${API.language}`,
    sections: {
      airing_today: '/tv/airing_today',
      on_the_air: '/tv/on_the_air',
      popular: '/tv/popular',
      top_rated: '/tv/top_rated',
    },
  },
  search: {
    movies: '/search/movie',
    tv: '/search/tv',
  },
})
