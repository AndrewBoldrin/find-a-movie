import { endpoints, setQueryParams } from '../endpoints.ts'
import { restClient } from '../restClient.ts'

export const movieSections = {
    popular: {
        name: 'Popular',
        endpoint: endpoints.movies.sections.popular
    },
    top_rated: {
        name: 'Top Rated',
        endpoint: endpoints.movies.sections.top_rated
    },
    upcoming: {
        name: 'Upcoming',
        endpoint: endpoints.movies.sections.upcoming
    },
}

export const seriesSections = {
    airing_today: {
        name: 'Airing today',
        endpoint: endpoints.series.sections.airing_today
    },
    on_the_air: {
        name: 'On the air',
        endpoint: endpoints.series.sections.on_the_air
    },
    popular: {
        name: 'Popular',
        endpoint: endpoints.series.sections.popular
    },
    top_rated: {
        name: 'Top rated',
        endpoint: endpoints.series.sections.top_rated
    },
}

export async function getSection(section: string, page = 1) {
    const queryParams = setQueryParams(page)
    const data = await restClient.get(`${section}?${queryParams}`)
    return data.data.results
}