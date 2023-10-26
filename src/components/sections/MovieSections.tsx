import { useGenres } from '@/hooks/useGenres'
import { MovieSection } from '../section/MovieSection'

type SectionType = {
  name: string
  endpoint: string
}

type Props = {
  sectionList: SectionType[]
}

export function MovieSections({ sectionList }: Props) {
  const { genresList } = useGenres({ type: 'MOVIE' })
  const pagination: boolean = !(sectionList.length > 1)

  return (
    <>
      {sectionList?.map((section) => (
        <MovieSection
          key={section.name}
          name={section.name}
          endpoint={section.endpoint}
          genresList={genresList}
          hasPagination={pagination}
        />
      ))}
    </>
  )
}
