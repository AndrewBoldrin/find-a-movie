import { useEffect, useState } from 'react'

import ArrowRight from '@/assets/ArrowRight.svg'
import { MovieCard } from './MovieCard'
import { MovieDTO } from '@/api/dto/movieDTO'
import { getSection } from '@/api/Sections/sections'
import { GenreType } from '@/hooks/useGenres'

type Props = {
    name: string,
    endpoint: string,
    genresList: GenreType[]
}

export function Section({ name, endpoint, genresList }: Props) {
    const [movies, setMovies] = useState<MovieDTO[]>([])

    async function getMoviesFromSection() {
        const data = await getSection(endpoint)
        setMovies(data)
    }

    useEffect(() => {
        getMoviesFromSection()
    }, [])

    return (
        <section key={name} className='max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12'>
            <div className='flex items-center mb-6'>
                <h1 className='font-poppins font-medium text-[1.75rem] text-center md:text-left'>{ name }</h1>
                <a href="" className='flex items-center gap-1 hover:gap-2 ml-6 text-sm font-light hover:text-zinc-400 transition-all ease-in-out duration-150'>ver mais
                    <img src={ArrowRight} alt="icone seta para direita" className='w-3 h-3'/> 
                </a>
            </div>
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