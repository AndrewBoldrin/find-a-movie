import { useEffect, useState } from 'react'
import { getSeriesGenres } from '@/api/Genres/seriesGenres'

export type GenreType = {
    id: number,
    name: string
}

export function useSerieGenres () {
    const [genresList, setGenres] = useState<GenreType[]>([])

    async function getGenres() {
        const data = await getSeriesGenres()
        setGenres(data)
    }

    useEffect(() => {
        getGenres()
    }, [])

    return {
        genresList
    }
}