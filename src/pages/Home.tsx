import { useState } from 'react'

import { SearchBar } from '@/components/SearchBar'
import { TopBar } from '@/components/TopBar'
import { Sections } from '@/components/Sections'
import { SearchResults } from '@/components/SearchResults'

export function Home() {
    const [searchInput, setSearchInput] = useState<null | string>('')

    return (
        <>
            <TopBar />
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>

            {
                searchInput ?
                <SearchResults searchInput={searchInput}/>
                :
                <Sections />
            }

        </>
    )
}
