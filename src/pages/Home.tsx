import { useState } from 'react'
import { MovieSections } from '@/components/sections/MovieSections'
import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { endpoints } from '@/api/endpoints'

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
      {searchInput ? (
        <SearchResults
          searchInput={searchInput}
          type="MOVIE"
          endpoint={endpoints.search.movies}
        />
      ) : (
        <MovieSections sectionList={sectionList} />
      )}
    </>
  )
}
