import { API } from '../config'
import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getSeriesGenres() {
  const data = await restClient.get(
    `${endpoints.genre.series}?language=${API.language}`,
  )
  return data.data.genres
}
