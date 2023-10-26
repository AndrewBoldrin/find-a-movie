import { useGenres } from '@/hooks/useGenres'
import { SerieSection } from '../section/SerieSection'

type SectionType = {
  name: string
  endpoint: string
}

type Props = {
  sectionList: SectionType[]
}

export function SerieSections({ sectionList }: Props) {
  const { genresList } = useGenres({ type: 'SERIE' })

  return (
    <>
      {sectionList?.map((section) => (
        <SerieSection
          key={section.name}
          name={section.name}
          endpoint={section.endpoint}
          genresList={genresList}
          hasPagination={false}
        />
      ))}
    </>
  )
}
