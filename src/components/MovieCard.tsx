import DefaultMovieImage from '@/assets/DefaultMovie.png'
import CalendarBlank from '@/assets/CalendarBlank.svg'
import OutlineStar from '@/assets/OutlineStar.svg'
import { MovieDTO } from '@/api/dto/movieDTO'
import { GenreType } from '@/hooks/useGenres'
import { formatMovieGenres } from '@/util/formatGenres'

import { API } from '@/api/config'

type Props = {
    movie: MovieDTO;
    genresList: GenreType[]
}

export function MovieCard({ movie, genresList } : Props) {
    const genres = formatMovieGenres(genresList, movie.genre_ids)
    const POSTER_SIZE = 400

    return (
        <div className='w-full md:max-w-[18.75rem] hover:-translate-y-4 transition-all ease-in-out duration-300 mb-12'>
            <div className='w-full max-h-[16.875rem] h-full rounded-md overflow-hidden'>
                {
                    movie.backdrop_path ?
                        <img src={`${API.baseImageURL}${POSTER_SIZE}${movie.backdrop_path}`} alt="imagem do filme" className='object-cover h-full' />
                    :
                        <img src={DefaultMovieImage} alt="imagem do filme" className='object-cover h-full' />
                }
            </div>
            <div className='flex mt-4'>
                <p className='flex-1 font-medium font-poppins text-lg truncate'>{movie.title}</p>
                <div className='flex gap-3 items-center'>
                    <p className='font-light font-inter text-lg'>{movie.vote_average}</p>
                    <div className='relative group'>
                        <img src={OutlineStar} alt="icone de favoritos" className='hover:scale-125'/>
                        <div className='hidden lg:hidden 2xl:block absolute opacity-0 group-hover:opacity-100 right-[6px] -top-8 group-hover:-top-4 translate-x-1/2 -translate-y-full bg-dark-contrast-dark px-4 py-1 rounded-sm transition-all ease-in-out duration-300'>
                            <div className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-dark-contrast-dark'></div>
                            <p className='whitespace-nowrap font-light text-xs font-inter text-white text-opacity-50'>Adicionar aos favoritos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-4'>
                <div className='flex gap-3'>
                    <p className='font-inter font-thin text-xs mt-auto'>{genres}</p>
                </div>
                <div className='flex gap-3'>
                    <img src={CalendarBlank} alt="icone do calendário" />
                    <p className='font-inter'>{movie.release_date.split('-')[0]}</p>
                </div>
            </div>
        </div> 
    )
}