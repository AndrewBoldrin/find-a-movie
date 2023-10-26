import { getSection } from '@/api/Sections/sections'
import { MovieDTO } from '@/api/dto/movieDTO'
import { useEffect, useState } from 'react'

type Props = {
  endpoint: string
  hasPagination: boolean
}

export function useMovieSections({ endpoint, hasPagination }: Props) {
  const [movies, setMovies] = useState<MovieDTO[]>([])
  const [page, setPage] = useState(1)

  let timeout: NodeJS.Timeout | null = null

  async function getFirstPage() {
    const data = await getSection(endpoint)
    setMovies(data)
  }

  async function getNextPage() {
    const data = await getSection(endpoint, page)
    setMovies([...movies, ...data])
  }

  function nextPage() {
    setPage((prev) => prev + 1)
  }

  function handleScroll() {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      const pageHeight = document.body.clientHeight
      const screenHeight = screen.height
      const currentlyScrollY = window.scrollY

      const maxScroll = pageHeight - screenHeight

      if (currentlyScrollY + 400 >= maxScroll) {
        nextPage()
      }
    }, 1100)
  }

  useEffect(() => {
    getFirstPage()
    if (hasPagination) {
      handleScroll()

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (page > 1) {
      getNextPage()
    }
  }, [page])

  return {
    movies,
  }
}
