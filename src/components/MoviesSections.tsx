import { useMoviesGenres } from '@/hooks/useMoviesGenres'
import { Section } from './Section'

type SectionType = {
    name: string
    endpoint: string
}

type Props = {
    sectionList: SectionType[]
}

export function MoviesSections({ sectionList }: Props) {
    const { genresList } = useMoviesGenres()
    const pagination: boolean = sectionList.length > 1 ? false : true

    return (
        <>
            {
                sectionList?.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint} genresList={genresList} hasPagination={pagination} />
                ))
            }
        </>
    )
} 