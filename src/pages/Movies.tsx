import { SearchBar } from '@/components/SearchBar'
import { SearchResults } from '@/components/SearchResults'
import { useGenres } from '@/hooks/useGenres'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function Movies() {
  const [searchInput, setSearchInput] = useState<null | string>('')
  const { genresList } = useGenres({ type: 'MOVIE' })

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput ? (
        <SearchResults searchInput={searchInput} />
      ) : (
        <Outlet context={genresList} />
      )}
    </>
  )
}
