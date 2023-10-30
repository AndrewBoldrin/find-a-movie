import { API } from '../config'
import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getMovie(movieId: string | undefined) {
  const data = await restClient.get(
    `${endpoints.movies.movie}/${movieId}?language=${API.language}`,
  )
  return data
}
