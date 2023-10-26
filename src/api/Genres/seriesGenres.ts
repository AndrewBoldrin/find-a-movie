import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getSeriesGenres() {
  const data = await restClient.get(`${endpoints.genre.series}`)
  return data.data.genres
}
