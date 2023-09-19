import { getMovieGenres } from '@/api/Genres/genres'
import { useEffect, useState } from 'react'

export type GenreType = {
    id: number,
    name: string
}

export function useGenres () {
    const [genresList, setGenres] = useState<GenreType[]>([])

    async function getWithGenres() {
        const data = await getMovieGenres()
        setGenres(data)
    }

    useEffect(() => {
        getWithGenres()
    }, [])

    return {
        genresList
    }
}