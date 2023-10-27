import { setQueryParams } from '../endpoints.ts'
import { restClient } from '../restClient.ts'

export async function getSection(section: string, page = 1) {
  const queryParams = setQueryParams(page)
  const data = await restClient.get(`${section}?${queryParams}`)
  return data.data.results
}
