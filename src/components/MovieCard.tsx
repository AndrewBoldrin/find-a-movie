import DefaultMovie from '@/assets/DefaultMovie.png'
import CalendarBlank from '@/assets/CalendarBlank.svg'
import OutlineStar from '@/assets/OutlineStar.svg'
import { MovieDTO } from '@/api/dto/movieDTO'

type Props = {
    movie: MovieDTO;
}

export function MovieCard({ movie } : Props) {

    return (
        <div className='max-w-[342px] max-h-[270px] hover:-translate-y-4 transition-all ease-in-out duration-300 mb-8'>
            <img src={DefaultMovie} alt="imagem do filme" />
            <div className='flex mt-4'>
                <p className='flex-1 font-medium font-poppins text-lg '>Avengers</p>
                <div className='flex gap-3 items-center'>
                    <p className='font-light font-inter text-lg'>7.4</p>
                    <div className='relative group'>
                        <img src={OutlineStar} alt="icone de favoritos" className='hover:scale-125'/>
                        <div className='hidden md:block absolute opacity-0 group-hover:opacity-100 right-[6px] -top-8 group-hover:-top-4 translate-x-1/2 -translate-y-full bg-dark-contrast-dark px-4 py-1 rounded-sm transition-all ease-in-out duration-300'>
                            <div className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-dark-contrast-dark'></div>
                            <p className='whitespace-nowrap font-light text-xs font-inter text-white text-opacity-50'>Adicionar aos favoritos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-4'>
                <div className='flex gap-3'>
                    <p className='font-inter font-thin text-xs mt-auto'>Ação, Comédia, Drama</p>
                </div>
                <div className='flex gap-3'>
                    <img src={CalendarBlank} alt="icone do calendário" />
                    <p className='font-inter'>2018</p>
                </div>
            </div>
        </div> 
    )
}