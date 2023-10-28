import { useGenres } from '@/hooks/useGenres'
import { endpoints } from '@/api/endpoints'
import { Loading } from './Loading'
import { SerieCard } from './card/SerieCard'
import { SerieDTO } from '@/api/dto/serieDTO'
import { useSeriesSearch } from '@/hooks/useSeriesSearch'

type Props = {
  searchInput: string
}

export function SearchSeriesResults({ searchInput }: Props) {
  const endpoint = endpoints.search.tv
  const { series, isLoading } = useSeriesSearch({ searchInput, endpoint })
  const { genresList } = useGenres({ type: 'SERIE' })

  return (
    <section className="max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12">
      <div className="flex items-center mb-6">
        <h1 className="font-poppins font-medium text-[1rem] text-center md:text-left">{`Resultados com '${searchInput}'`}</h1>
      </div>
      <div className="grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center">
        {series.length ? (
          series.map((serie: SerieDTO) => (
            <SerieCard key={serie.id} serie={serie} genresList={genresList} />
          ))
        ) : (
          <>nenhum resultado encontrado</>
        )}
        {isLoading && <Loading isLoading={isLoading} />}
      </div>
    </section>
  )
}
