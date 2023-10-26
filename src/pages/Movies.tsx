import { endpoints } from '@/api/endpoints'
import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function Movies() {
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
        <Outlet />
      )}
    </>
  )
}
