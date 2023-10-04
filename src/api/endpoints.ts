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
        movies: '/genre/movie/list',
        series: '/genre/tv/list',
    },
    movies: {
        movie: '/movie/',
        sections: {
            popular: '/movie/popular',
            top_rated: '/movie/top_rated',
            upcoming: '/movie/upcoming',
        },
    },
    search: {
        movies: '/search/movie',
        tv: '/search/tv'
    }
})