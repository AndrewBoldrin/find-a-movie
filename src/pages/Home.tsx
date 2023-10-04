import { useState } from 'react'
import { MoviesSections } from '@/components/MoviesSections'
import { SearchBar } from '@/components/SearchBar'
import { SearchMoviesResults } from '@/components/SearchMoviesResults'

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
                <SearchMoviesResults searchInput={searchInput}/>
                :
                <MoviesSections sectionList={sectionList}/>
            }
        </>
    )
}
