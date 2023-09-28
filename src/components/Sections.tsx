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

    return (
        <>
            {
                sectionList?.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint} genresList={genresList} />
                ))
            }
        </>
    )
} 