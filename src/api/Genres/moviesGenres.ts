import { API } from '../config'
import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getMovieGenres() {
  const data = await restClient.get(
    `${endpoints.genre.movies}?language=${API.language}`,
  )
  return data.data.genres
}
