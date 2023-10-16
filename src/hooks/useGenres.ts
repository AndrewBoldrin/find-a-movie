import { getMovieGenres } from '@/api/Genres/moviesGenres'
import { getSeriesGenres } from '@/api/Genres/seriesGenres'
import { useEffect, useState } from 'react'

export type GenreType = {
    id: number,
    name: string
}

type Props = {
    type: 'MOVIE' | 'SERIE'
}

export function useGenres ({ type }: Props) {
    const [genresList, setGenres] = useState<GenreType[]>([])

    async function setMovieGenres() {
        const data = await getMovieGenres()
        setGenres(data)
    }

    async function setSeriesGenres() {
        const data = await getSeriesGenres()
        setGenres(data)
    }

    useEffect(() => {
        if(type === 'MOVIE') {
            setMovieGenres()
        }
        else if(type === 'SERIE') {
            setSeriesGenres()
        }
    }, [])

    return {
        genresList
    }
}