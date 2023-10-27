import { endpoints } from '../endpoints'

export type SectionType = {
  path: string
  name: string
  endpoint: string
}

export type SeriesSectionType = {
  [name: string]: SectionType[]
}

export const seriesSections = {
  airing_today: {
    path: 'airing_today',
    name: 'Airing today',
    endpoint: endpoints.series.sections.airing_today,
  },
  on_the_air: {
    path: 'on_the_air',
    name: 'On the air',
    endpoint: endpoints.series.sections.on_the_air,
  },
  popular: {
    path: 'popular',
    name: 'Popular',
    endpoint: endpoints.series.sections.popular,
  },
  top_rated: {
    path: 'top_rated',
    name: 'Top rated',
    endpoint: endpoints.series.sections.top_rated,
  },
}
