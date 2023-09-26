import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'

import { useSearch } from '@/hooks/useSearch'
import { useGenres } from '@/hooks/useGenres'

import { endpoints } from '@/api/endpoints'
import { MovieDTO } from '@/api/dto/movieDTO'

type Props = {
    searchInput: string
}

export function SearchResults({ searchInput }: Props) {
    const { movies, nextPage } = useSearch( { searchInput: searchInput, endpoint: endpoints.search.movies})
    const { genresList } = useGenres()

    // console.log(movies)

    useEffect(() => {
        function handleScroll() {
            const pageHeight = document.body.clientHeight
            const screenHeight = screen.height
            const currentlyScrollY = window.scrollY

            const maxScroll = pageHeight - screenHeight

            if(currentlyScrollY >= maxScroll) {
                console.log('getting next page')
                nextPage()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className='max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12'>
            <div className='flex items-center mb-6'>
                <h1 className='font-poppins font-medium text-[1rem] text-center md:text-left'>{`Resultados com '${searchInput}'`}</h1>
            </div>
            <div className='grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center'>
                {
                    movies.length ?
                    movies.map((movie: MovieDTO) => (
                        <MovieCard key={movie.id} movie={movie} genresList={genresList}/>
                    ))
                    :
                    <>
                    nenhum resultado encontrado
                    </>
                }
            </div>
        </section> 
    )
}