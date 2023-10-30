import { useEffect, useState } from 'react'
import { MovieDTO } from '@/api/dto/movieDTO'
import { getMovie } from '@/api/Movie/movie'

type Props = {
  id: string | undefined
}

export function useMovie({ id }: Props) {
  const [movie, setMovie] = useState<MovieDTO>()

  async function handleGetMovie() {
    const { data } = await getMovie(id)
    setMovie(data)
  }

  useEffect(() => {
    handleGetMovie()
  }, [])

  return { movie }
}
