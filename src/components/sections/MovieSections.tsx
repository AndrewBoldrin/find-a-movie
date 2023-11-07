import { MovieSection } from '../section/MovieSection'

type SectionType = {
  name: string
  path: string
  endpoint: string
}

type Props = {
  sectionList: SectionType[]
}

export function MovieSections({ sectionList }: Props) {
  return (
    <>
      {sectionList?.map((section) => (
        <MovieSection
          key={section.name}
          section={section}
          hasPagination={false}
        />
      ))}
    </>
  )
}
