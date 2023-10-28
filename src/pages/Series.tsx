import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { SearchBar } from '@/components/SearchBar'
import { useGenres } from '@/hooks/useGenres'

import { SearchSeriesResults } from '@/components/SearchSeriesResults'

export function Series() {
  const { genresList } = useGenres({ type: 'SERIE' })
  const [searchInput, setSearchInput] = useState<null | string>('')

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput ? (
        <SearchSeriesResults searchInput={searchInput} />
      ) : (
        <Outlet context={genresList} />
      )}
    </>
  )
}
