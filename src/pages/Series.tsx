import { endpoints } from '@/api/endpoints'
import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { SerieSections } from '@/components/sections/SerieSections'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

type SectionList = {
    name: string
    endpoint: string
}

type Props = {
    sectionsList?: SectionList[]
}

export function Series({ sectionsList }: Props) {
    const [searchInput, setSearchInput] = useState<null | string>('')

    return (
        <>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            {
                searchInput ?
                <SearchResults searchInput={searchInput} type='SERIE' endpoint={endpoints.search.tv} />
                :
                sectionsList ?
                    <SerieSections sectionList={sectionsList} />
                :
                    <Outlet />
            }
        </>
    )
}
