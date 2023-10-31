import ArrowRight from '@/assets/ArrowRight.svg'
import ArrowLeft from '@/assets/ArrowLeft.svg'
import { GenreType } from '@/hooks/useGenres'
import {
  useNavigate,
  useLocation,
  useOutletContext,
  useParams,
} from 'react-router-dom'
import { SerieDTO } from '@/api/dto/serieDTO'
import { SerieCard } from '../card/SerieCard'
import { useSerieSection } from '@/hooks/useSeriesSection'
import { Loading } from '../Loading'

type SectionType = {
  name: string
  endpoint: string
}

type Props = {
  section: SectionType
  hasPagination: boolean
}

export function SerieSection({ section, hasPagination }: Props) {
  const { name, endpoint } = section
  const { series, isLoading } = useSerieSection({ endpoint, hasPagination })
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { id } = useParams()

  const genresList: GenreType[] = useOutletContext()

  function handleSectionNavigation() {
    navigate(endpoint)
  }

  return (
    <section
      key={name}
      className="max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12 pb-48"
    >
      <div className="flex items-center mb-6">
        <h1 className="font-poppins font-medium text-[1.75rem] text-center md:text-left">
          {name}
        </h1>
        {pathname === '/tv' ? (
          <button
            onClick={handleSectionNavigation}
            className="flex items-center gap-1 hover:gap-2 ml-6 text-sm font-light hover:text-zinc-400 transition-all ease-in-out duration-150"
          >
            ver mais
            <img
              src={ArrowRight}
              alt="icone seta para direita"
              className="w-3 h-3"
            />
          </button>
        ) : (
          !id && (
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
          )
        )}
      </div>
      <div className="grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center">
        {series.map((serie: SerieDTO) => (
          <SerieCard key={serie.id} serie={serie} genresList={genresList} />
        ))}
        <Loading isLoading={isLoading} />
      </div>
    </section>
  )
}
