import { GenreType } from '@/hooks/useGenres'

export function formatMovieGenres(genresList: GenreType[], genres: number[]) {
    const filteredGenres = genresList.filter((genre: GenreType) => {
        if(genres?.includes(genre.id)) return genre.name
    })
    const formatedFilteredGenres = filteredGenres.map(genre => genre.name).join(', ')

    return formatedFilteredGenres
}