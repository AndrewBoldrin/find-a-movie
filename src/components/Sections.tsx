import { Section } from './Section'
import { useGenres } from '@/hooks/useGenres'

type SectionType = {
    name: string
    endpoint: string
}

type Props = {
    sectionList: SectionType[]
}

export function Sections({ sectionList }: Props) {
    const { genresList } = useGenres()
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