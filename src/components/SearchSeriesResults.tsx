import { MovieCard } from './card/MovieCard'

import { useSearch } from '@/hooks/useSearch'
import { useSerieGenres } from '@/hooks/useSeriesGenres'

import { endpoints } from '@/api/endpoints'
import { MovieDTO } from '@/api/dto/movieDTO'
import { Loading } from './Loading'

type Props = {
  searchInput: string
}

export function SearchSeriesResults({ searchInput }: Props) {
  const endpoint = endpoints.search.tv
  const { movies, isLoading } = useSearch({ searchInput, endpoint })
  const { genresList } = useSerieGenres()

  return (
    <section className="max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12">
      <div className="flex items-center mb-6">
        <h1 className="font-poppins font-medium text-[1rem] text-center md:text-left">{`Resultados com '${searchInput}'`}</h1>
      </div>
      <div className="grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center">
        {movies.length ? (
          movies.map((movie: MovieDTO) => (
            <MovieCard key={movie.id} movie={movie} genresList={genresList} />
          ))
        ) : (
          <>nenhum resultado encontrado</>
        )}
        {isLoading && <Loading isLoading={isLoading} />}
      </div>
    </section>
  )
}
