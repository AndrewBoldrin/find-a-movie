import { useNavigate, useParams } from 'react-router-dom'

import { API } from '@/api/config'

import DefaultMovieImage from '@/assets/DefaultMovie.png'
import ArrowLeftIcon from '@/assets/ArrowLeft.svg'
import PlusIcon from '@/assets/Plus.svg'
import RemoveIcon from '@/assets/Trash.svg'
import StarIcon from '@/assets/Star@2x.svg'
import { GenreType } from '@/api/dto/genreDTO'
import { useSerie } from '@/hooks/useSerie'
import { endpoints } from '@/api/endpoints'
import { SerieSection } from '@/components/section/SerieSection'
import { useSerieCard } from '@/hooks/useSerieCard'

export function Serie() {
  const { id } = useParams()
  const { serie } = useSerie({ id })
  const { isInFavorites, handleFavoritesClick } = useSerieCard({
    id: id ? parseInt(id) : 1,
    title: serie ? serie.name : '',
  })

  const navigate = useNavigate()

  function handleGoBack() {
    navigate(`${import.meta.env.VITE_BASE_PATH}tv`)
  }

  if (!serie)
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
            serie.backdrop_path
              ? `${API.baseOriginalImageURL}${serie.backdrop_path}`
              : DefaultMovieImage
          }
          alt="serie poster image"
          className="w-full md:max-h-[40rem] sm:max-h-[30rem] max-h-[20rem] h-full object-cover object-top"
        />
        <div className="lg:absolute inset-0 bg-gradient-to-r from-black"></div>
        <div className="lg:absolute w-full mt-8 xs:mt-0 lg:max-w-[82.5rem] m-auto left-0 right-0 bottom-24 md:max-xl:px-12 px-4 sm:max-md:px-0">
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
          </button>{' '}
          <div className="flex items-center lg:gap-12 max-lg:justify-between">
            <h1 className="font-bold font-poppins lg:text-4xl md:text-2xl text-xl text-white">
              {serie?.name}
            </h1>
            <div className="flex items-center">
              <p className="font-inter text-lg">
                {serie?.vote_average.toFixed(2) ?? '?'}
              </p>
              <img src={StarIcon} alt="icone de media de votos" />
            </div>
          </div>
          <h4 className="font-inter font-light text-lg mt-1">
            {serie.genres
              ? serie.genres.map((genre: GenreType) => genre.name).join(', ')
              : 'desconhecido'}
          </h4>
          <p className="font-poppins font-base text-zinc-300 mt-10 text-justify">
            {serie?.overview}
          </p>
          <button
            onClick={handleFavoritesClick}
            className="flex gap-4 items-center font-poppins px-4 py-3 mt-9 text-white text-base bg-red-secondary hover:bg-red-primary rounded-lg"
          >
            {isInFavorites ? 'Remover dos favoritos' : 'Adicione os favoritos'}
            {isInFavorites ? (
              <img src={RemoveIcon} alt="icone de Remover" />
            ) : (
              <img src={PlusIcon} alt="icone de plus" />
            )}
          </button>
        </div>
      </div>
      <SerieSection
        section={{
          name: 'Títulos similares',
          endpoint: endpoints.series.similar(id ?? ''),
        }}
        hasPagination={false}
      />
    </div>
  )
}
