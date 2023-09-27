import { useEffect, useState } from 'react'

import { searchByName } from '@/api/Search/search'
import { MovieDTO } from '@/api/dto/movieDTO'

type Props = {
    searchInput: string | null,
    endpoint: string
}

export function useSearch({ searchInput, endpoint }: Props) {
    const [movies, setMovies] = useState<MovieDTO[]>([])
    const [page, setPage] = useState(1)

    let timeout: NodeJS.Timeout | null = null

    async function getFirstPage() {
        if(searchInput) {
            const data = await searchByName(searchInput ?? '', endpoint)
            setMovies(data)
        }
    }

    async function getNextPage() {
        if(searchInput) {
            const data = await searchByName(searchInput ?? '', endpoint, page)
            setMovies([...movies, ...data])
        }
    }

    function nextPage() {
        setPage(prev => prev + 1)
    }

    function handleScroll() {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            const pageHeight = document.body.clientHeight
            const screenHeight = screen.height
            const currentlyScrollY = window.scrollY

            const maxScroll = pageHeight - screenHeight

            if(currentlyScrollY + 400 >= maxScroll) {
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
        if(page > 1) {
            getNextPage()
        }
    }, [page])

    useEffect(() => {
        if(searchInput) {
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
        movies 
    }
}