import ArrowRight from '@/assets/ArrowRight.svg'
import ArrowLeft from '@/assets/ArrowLeft.svg'
import { MovieCard } from '../card/MovieCard'
import { MovieDTO } from '@/api/dto/movieDTO'
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'
import { useMovieSections } from '@/hooks/useMovieSections'
import { GenreType } from '@/hooks/useGenres'

type SectionType = {
  name: string
  endpoint: string
}

type Props = {
  section: SectionType
  hasPagination: boolean
}

export function MovieSection({ section, hasPagination }: Props) {
  const { name, endpoint } = section
  const genresList: GenreType[] = useOutletContext()
  const { movies } = useMovieSections({ endpoint, hasPagination })
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleSectionNavigation() {
    navigate(endpoint)
  }

  return (
    <section
      key={name}
      className="max-w-[82.5rem] w-full m-auto px-4 mt-16 md:max-xl:px-12"
    >
      <div className="flex items-center mb-6">
        <h1 className="font-poppins font-medium text-[1.75rem] text-center md:text-left">
          {name}
        </h1>
        {pathname === '/movie' ? (
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
        )}
      </div>
      <div className="grid grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-14 xl:gap-6 place-items-center">
        {movies?.map((show: MovieDTO) => (
          <MovieCard key={show.id} movie={show} genresList={genresList} />
        ))}
      </div>
    </section>
  )
}
