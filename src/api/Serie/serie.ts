import { API } from '../config'
import { endpoints } from '../endpoints'
import { restClient } from '../restClient'

export async function getSerie(serieId: string | undefined) {
  const data = await restClient.get(
    `${endpoints.series.serie}/${serieId}?language=${API.language}`,
  )
  return data
}
