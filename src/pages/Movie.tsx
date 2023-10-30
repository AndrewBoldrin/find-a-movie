import { useNavigate, useParams } from 'react-router-dom'
import { useMovie } from '@/hooks/useMovie'

import { API } from '@/api/config'

import DefaultMovieImage from '@/assets/DefaultMovie.png'
import ArrowLeftIcon from '@/assets/ArrowLeft.svg'
import PlusIcon from '@/assets/Plus.svg'
import StarIcon from '@/assets/Star.svg'
import { GenreType } from '@/api/dto/movieDTO'

export function Movie() {
  const { id } = useParams()
  const { movie } = useMovie({ id })

  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  if (!movie)
    return (
      <div>
        <h1 className="w-full xs:mt-0 lg:max-w-[82.5rem] m-auto left-0 right-0 md:max-xl:px-12 px-4 sm:max-md:px-0 mt-4">
          Não foi possível acessar as informações do filme
        </h1>
      </div>
    )

  return (
    <div>
      <div className="relative flex flex-col">
        <img
          src={
            movie.backdrop_path
              ? `${API.baseOriginalImageURL}${movie.backdrop_path}`
              : DefaultMovieImage
          }
          alt="movie poster image"
          className="w-full md:max-h-[40rem] sm:max-h-[30rem] max-h-[20rem] h-full object-cover object-top"
        />
        <div className="lg:absolute inset-0 bg-gradient-to-r from-black"></div>
        <div className="lg:absolute w-full mt-8 xs:mt-0 lg:max-w-[82.5rem] m-auto left-0 right-0 bottom-48 md:max-xl:px-12 px-4 sm:max-md:px-0">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-4 hover:text-zinc-50 mb-12 rounded-lg"
          >
            <img
              src={ArrowLeftIcon}
              alt="botao de voltar"
              className="lg:w-6 lg:h-6 w-4 h-5"
            />
            voltar
          </button>
          <div className="flex items-center lg:gap-12 max-lg:justify-between">
            <h1 className="font-bold font-poppins lg:text-4xl md:text-2xl text-xl text-white">
              {movie?.title}
            </h1>
            <div className="flex items-center">
              <p className="font-inter text-lg">
                {movie?.vote_average.toFixed(2) ?? '?'}
              </p>
              <img src={StarIcon} alt="icone de media de votos" />
            </div>
          </div>
          <h4 className="font-inter font-light text-lg mt-1">
            {movie.genres
              ? movie.genres.map((genre: GenreType) => genre.name).join(', ')
              : 'desconhecido'}
          </h4>
          <p className="font-poppins font-base text-zinc-300 mt-10 text-justify">
            {movie?.overview}
          </p>
          <button className="flex gap-4 items-center font-poppins px-4 py-3 mt-9 text-white text-base bg-red-secondary hover:bg-red-primary rounded-lg">
            Adicione os favoritos
            <img src={PlusIcon} alt="icone de plus" />
          </button>
        </div>
      </div>
    </div>
  )
}
