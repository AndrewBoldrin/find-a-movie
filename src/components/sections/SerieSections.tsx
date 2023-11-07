import { SerieSection } from '../section/SerieSection'

type SectionType = {
  name: string
  endpoint: string
  path: string
}

type Props = {
  sectionList: SectionType[]
  hasPagination?: boolean
}

export function SerieSections({ sectionList, hasPagination = false }: Props) {
  return (
    <>
      {sectionList?.map((section) => (
        <SerieSection
          key={section.name}
          section={section}
          hasPagination={hasPagination}
        />
      ))}
    </>
  )
}
