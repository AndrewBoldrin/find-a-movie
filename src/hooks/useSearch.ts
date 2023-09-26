import { useEffect, useState } from 'react'

import { searchByName } from '@/api/Search/search'
import { MovieDTO } from '@/api/dto/movieDTO'

type Props = {
    searchInput: string | null,
    endpoint: string
}

export function useSearch({ searchInput, endpoint }: Props) {
    const [movies, setMovies] = useState<MovieDTO[]>([])
    const [loadPage, setLoadPage] = useState(false)

    async function getSearchedMovies() {
        if(searchInput) {
            const data = await searchByName(searchInput ?? '', endpoint)
            setMovies(data)
        }
    }

    function nextPage() {
        setLoadPage(prev => !prev)
    }

    async function getMoreMovies() {
        const page = (movies.length / 20) + 1
        const data = await searchByName(searchInput ?? '', endpoint, page)
        setMovies([...movies, ...data])
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            getMoreMovies()
        }, 1000)

        return () => {
            clearTimeout(delay)
        }
    }, [loadPage])

    useEffect(() => {
        if(searchInput) {
            const delay = setTimeout(() => {
                console.log('new request', searchInput)
                getSearchedMovies()
            }, 1000)

            return () => {
                clearTimeout(delay)
            }
        }
    }, [searchInput])

    return {
        movies, nextPage
    }
}