import { useEffect, useState } from 'react'

import { searchByName } from '@/api/Search/search'
import { MovieDTO } from '@/api/dto/movieDTO'

type Props = {
    searchInput: string | null,
    endpoint: string
}

export function useSearch({ searchInput, endpoint }: Props) {
    const [movies, setMovies] = useState<MovieDTO[]>([])

    async function getSearchedMovies() {
        if(searchInput) {
            const data = await searchByName(searchInput ?? '', endpoint)
            setMovies(data)
        }
    }

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
        movies
    }
}