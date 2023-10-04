import { useSerieGenres } from '@/hooks/useSeriesGenres'
import { Section } from './Section'

type SectionType = {
    name: string
    endpoint: string
}

type Props = {
    sectionList: SectionType[]
}

export function SeriesSections({ sectionList }: Props) {
    const { genresList } = useSerieGenres()

    return (
        <>
            {
                sectionList?.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint} genresList={genresList} hasPagination={false} />
                ))
            }
        </>
    )
}