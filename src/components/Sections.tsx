import { Section } from './Section'
import { sectionList } from '@/api/Sections/sections'

import { useGenres } from '@/hooks/useGenres'

export function Sections() {
    const { genresList } = useGenres()

    return (
        <>
            {
                sectionList.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint} genresList={genresList} />
                ))
            }
        </>
    )
} 