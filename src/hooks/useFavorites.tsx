import { useContext, useEffect, useState } from 'react'
import { useGenres } from './useGenres'
import { getAuth } from 'firebase/auth'
import { UserContext, UserContextType } from '@/contexts/UserContextProvider'
import { getMovie } from '@/api/Movie/movie'
import { getSerie } from '@/api/Serie/serie'
import { child, get, getDatabase, ref } from 'firebase/database'
import { MovieDTO } from '@/api/dto/movieDTO'
import { SerieDTO } from '@/api/dto/serieDTO'

export function useFavorites() {
  const [movies, setMovies] = useState<MovieDTO[]>([])
  const [series, setSeries] = useState<SerieDTO[]>([])
  const { genresList: moviesGenres } = useGenres({ type: 'MOVIE' })
  const { genresList: seriesGenres } = useGenres({ type: 'SERIE' })
  const [isLoading, setIsLoading] = useState(false)

  const auth = getAuth()
  const { isLogged } = useContext(UserContext) as UserContextType

  async function handleGetMovie(moviesIds: string[]) {
    moviesIds.map(async (movieId: string) => {
      const { data } = await getMovie(movieId)
      setMovies((prevMovies) => [...prevMovies, data])
    })
  }

  async function handleGetSerie(seriesIds: string[]) {
    seriesIds.map(async (serieId: string) => {
      const { data } = await getSerie(serieId)
      setSeries((prevSeries) => [...prevSeries, data])
    })
  }

  async function getFavorites() {
    const dbRef = ref(getDatabase())
    const userId = auth.currentUser?.uid
    if (userId) {
      get(child(dbRef, `favorites/${userId}`))
        .then((data) => {
          if (data.exists()) {
            const favoriteTitles = data.val()
            const movies = Object.keys(favoriteTitles.movies)
            const series = Object.keys(favoriteTitles.series)
            setIsLoading(true)
            handleGetMovie(movies)
            handleGetSerie(series)
            setIsLoading(false)
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  useEffect(() => {
    getFavorites()
  }, [isLogged])

  return { movies, series, isLoading, moviesGenres, seriesGenres }
}
