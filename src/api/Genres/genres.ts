import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getMovieGenres() {
    const data = await restClient.get(`${endpoints.genre.genres}`)
    return data.data.genres
}