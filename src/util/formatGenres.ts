import { GenreType } from '@/api/dto/genreDTO'

export function formatMovieGenres(genresList: GenreType[], genres: number[]) {
  // eslint-disable-next-line array-callback-return
  const filteredGenres = genresList.filter((genre: GenreType) => {
    if (genres?.includes(genre.id)) return genre.name
  })
  const formatedFilteredGenres = filteredGenres
    .map((genre) => genre.name)
    .join(', ')

  return formatedFilteredGenres
}
