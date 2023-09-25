import { API } from './config'

export function setQueryParams(page: number) {
    return `language=${API.language}&page=${page}`
}

export const endpoints = Object.freeze({
    section: {
        popular: '/movie/popular',
        top_rated: '/movie/top_rated',
        upcoming: '/movie/upcoming',
    },
    genre: {   
        genres: '/genre/movie/list',
    },
    movies: {
        movie: '/movie/',
    }
})