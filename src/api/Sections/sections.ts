import { endpoints, setQueryParams } from '../endpoints.ts'
import { restClient } from '../restClient.ts'

export const sectionList = [
    {
        name: 'Popular',
        endpoint: endpoints.section.popular
    },
    {
        name: 'Top Rated',
        endpoint: endpoints.section.popular
    },
    {
        name: 'Upcoming',
        endpoint: endpoints.section.popular
    },
]

export async function getSection(section: string, page = 1) {
    const queryParams = setQueryParams(page)
    const data = await restClient.get(`${section}${queryParams}`)
    return data.data.results
}