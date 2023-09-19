import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { getSection } from '@/api/Sections/sections'
import { MovieDTO } from '@/api/dto/movieDTO'
import { GenreType } from '@/hooks/useGenres'

type Props = {
    name: string,
    endpoint: string,
    genresList: GenreType[]
}

export function Section({ name, endpoint, genresList }: Props) {
    const [movies, setMovies] = useState([])

    async function getMoviesFromSection() {
        const data = await getSection(endpoint)
        setMovies(data)
    }

    useEffect(() => {
        getMoviesFromSection()
    }, [])

    return (
        <section key={name} className='max-w-[1170px] w-full m-auto mt-16'>
            <h1 className='font-poppins font-medium text-[1.75rem] mb-6 text-center md:text-left'>{ name }</h1>
                <div className='w-full grid grid-cols-1 place-items-center md:grid-cols-3 gap-x-[4.625rem] gap-y-4 md:gap-y-12'>
                    {
                        movies.map((movie: MovieDTO) => (
                            <MovieCard key={movie.id} movie={movie} genresList={genresList}/>
                        ))
                    }
                </div>
        </section> 
    )
}