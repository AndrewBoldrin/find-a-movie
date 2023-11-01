import { useNavigate } from 'react-router-dom'
import ArrowLeft from '@/assets/ArrowLeft.svg'
import { MovieCard } from '@/components/card/MovieCard'
import { SerieCard } from '@/components/card/SerieCard'
import { MovieDTO } from '@/api/dto/movieDTO'
import { SerieDTO } from '@/api/dto/serieDTO'
import { Loading } from '@/components/Loading'
import { useFavorites } from '@/hooks/useFavorites'

export function Favorites() {
  const { movies, series, isLoading, moviesGenres, seriesGenres } =
    useFavorites()
  const navigate = useNavigate()

  return (
    <section className="max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12 pb-48">
      <div className="flex items-center mb-6">
        <h1 className="font-poppins font-medium text-[1.75rem] text-center md:text-left">
          Favorites
        </h1>
        <button
          className="flex items-center gap-1 ml-6 text-sm font-light hover:text-zinc-400"
          onClick={() => navigate(-1)}
        >
          <img
            src={ArrowLeft}
            alt="icone seta para direita"
            className="w-3 h-3"
          />
          voltar
        </button>
      </div>
      <div className="grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center">
        {movies.map((movie: MovieDTO) => (
          <MovieCard key={movie.id} movie={movie} genresList={moviesGenres} />
        ))}
        {series.map((serie: SerieDTO) => (
          <SerieCard key={serie.id} serie={serie} genresList={seriesGenres} />
        ))}
        <Loading isLoading={isLoading} />
      </div>
    </section>
  )
}
