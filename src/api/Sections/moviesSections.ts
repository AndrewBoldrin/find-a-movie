import { endpoints } from '../endpoints'

export type SectionType = {
  path: string
  name: string
  endpoint: string
}

export type MovieSectionsType = {
  [name: string]: SectionType[]
}

export const movieSections = {
  popular: {
    path: 'popular',
    name: 'Popular',
    endpoint: endpoints.movies.sections.popular,
  },
  top_rated: {
    path: 'top_rated',
    name: 'Top Rated',
    endpoint: endpoints.movies.sections.top_rated,
  },
  upcoming: {
    path: 'upcoming',
    name: 'Upcoming',
    endpoint: endpoints.movies.sections.upcoming,
  },
}
