import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { SearchBar } from './SearchBar'
import { SearchResults } from './SearchResults'
import { Sections } from './Sections'

type sectionListType = {
    name: string
    endpoint: string
}

type Props = {
    sectionList: sectionListType[]
}

export function Content({ sectionList }: Props) {
    const [searchInput, setSearchInput] = useState<null | string>('')
    const { pathname } = useLocation()

    return (
        <>
        {
            (pathname === '/' || pathname.includes('/tv')) &&
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        }
            {
                searchInput ?
                <SearchResults searchInput={searchInput}/>
                :
                <Sections sectionList={sectionList}/>
            }
        </>
    )
}