import { setQueryParams } from '../endpoints'
import { restClient } from '../restClient'

export async function searchByName(query: string, endpoint: string, page = 1)  {
    console.log('pagina', page)
    const queryParams = setQueryParams(page)
    const data = await restClient.get(`${endpoint}?query=${query}&${queryParams}`)
    return data.data.results
}