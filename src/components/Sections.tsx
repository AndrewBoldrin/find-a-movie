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
        <section key={name} className='max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12'>
            <h1 className='font-poppins font-medium text-[1.75rem] mb-6 text-center md:text-left'>{ name }</h1>
            <div className='grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center'>
                {
                    movies.map((movie: MovieDTO) => (
                        <MovieCard key={movie.id} movie={movie} genresList={genresList}/>
                    ))
                }
            </div>
        </section> 
    )
}