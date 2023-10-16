import { endpoints } from '@/api/endpoints'
import { MovieSections } from '@/components/sections/MovieSections'
import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

type SectionList = {
    name: string
    endpoint: string
}

type Props = {
    sectionsList?: SectionList[]
}

export function Movies({ sectionsList }: Props) {
    const [searchInput, setSearchInput] = useState<null | string>('')

    return (
        <>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            {
                searchInput ?
                <SearchResults searchInput={searchInput} type='MOVIE' endpoint={endpoints.search.movies}/>
                :
                sectionsList ?
                    <MovieSections sectionList={sectionsList} />
                :
                    <Outlet />
            }
        </>
    )
}
