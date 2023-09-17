import { sectionList } from '@/api/Sections/sections'

import { SearchBar } from '@/components/SearchBar'
import { Section } from '@/components/Sections'
import { TopBar } from '@/components/TopBar'

export function Home() {

    return (
        <>
            <TopBar />
            <SearchBar />

            {
                sectionList.map((section) => (
                    <Section key={section.name} name={section.name} endpoint={section.endpoint}/>
                ))
            }

        </>
    )
}
