import { endpoints } from '@/api/endpoints'
import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { useGenres } from '@/hooks/useGenres'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function Series() {
  const { genresList } = useGenres({ type: 'SERIE' })
  const [searchInput, setSearchInput] = useState<null | string>('')

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput ? (
        <SearchResults
          searchInput={searchInput}
          type="SERIE"
          endpoint={endpoints.search.tv}
        />
      ) : (
        <Outlet context={[genresList]} />
      )}
    </>
  )
}
