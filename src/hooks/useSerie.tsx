import { useEffect, useState } from 'react'
import { SerieDTO } from '@/api/dto/serieDTO'
import { getSerie } from '@/api/Serie/serie'

type Props = {
  id: string | undefined
}

export function useSerie({ id }: Props) {
  const [serie, setSerie] = useState<SerieDTO>()

  async function handleGetSerie() {
    const { data } = await getSerie(id)
    setSerie(data)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    handleGetSerie()
  }, [id])

  return { serie }
}
