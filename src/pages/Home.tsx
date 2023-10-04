import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { Sections } from '@/components/Sections'
import { useState } from 'react'

type sectionListType = {
    name: string
    endpoint: string
}

type Props = {
    sectionList: sectionListType[]
}

export function Home({ sectionList }: Props) {
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
