import { sectionList } from '@/api/Sections/sections'

import { SearchBar } from '@/components/SearchBar'
import { Section } from '@/components/Sections'
import { TopBar } from '@/components/TopBar'
import { useGenres } from '@/hooks/useGenres'

export function Home() {
    const { genresList } = useGenres()

    return (
        <>
            <TopBar />
            <SearchBar />

            {
                sectionList.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint} genresList={genresList} />
                ))
            }

        </>
    )
}
