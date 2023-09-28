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

    return (
        <>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            {
                searchInput ?
                <SearchResults searchInput={searchInput}/>
                :
                <Sections sectionList={sectionList}/>
            }
        </>
    )
}