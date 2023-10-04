import { SearchBar } from '@/components/SearchBar'
import { SearchMoviesResults } from '@/components/SearchMoviesResults'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function Movies() {
    const [searchInput, setSearchInput] = useState<null | string>('')

    return (
        <>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            {
                searchInput ?
                <SearchMoviesResults searchInput={searchInput}/>
                :
                <Outlet />
            }
        </>
    )
}
