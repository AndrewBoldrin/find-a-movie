import { getMovieGenres } from '@/api/Genres/moviesGenres'
import { useEffect, useState } from 'react'

export type GenreType = {
    id: number,
    name: string
}

export function useMoviesGenres () {
    const [genresList, setGenres] = useState<GenreType[]>([])

    async function getGenres() {
        const data = await getMovieGenres()
        setGenres(data)
    }

    useEffect(() => {
        getGenres()
    }, [])

    return {
        genresList
    }
}