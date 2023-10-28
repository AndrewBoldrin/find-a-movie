import { useEffect, useState } from 'react'

import { searchByName } from '@/api/Search/search'
import { SerieDTO } from '@/api/dto/serieDTO'

type Props = {
  searchInput: string | null
  endpoint: string
}

export function useSeriesSearch({ searchInput, endpoint }: Props) {
  const [series, setSeries] = useState<SerieDTO[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  let timeout: NodeJS.Timeout | null = null

  async function getFirstPage() {
    if (searchInput) {
      const data = await searchByName(searchInput ?? '', endpoint)
      setSeries(data)
    }
  }

  async function getNextPage() {
    if (searchInput) {
      setIsLoading(true)
      const data = await searchByName(searchInput ?? '', endpoint, page)
      setSeries([...series, ...data])
      setIsLoading(false)
    }
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
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (page > 1) {
      getNextPage()
    }
  }, [page])

  useEffect(() => {
    if (searchInput) {
      const delay = setTimeout(() => {
        setPage(1)
        getFirstPage()
      }, 900)

      return () => {
        clearTimeout(delay)
      }
    }
  }, [searchInput])

  return {
    series,
    isLoading,
  }
}
