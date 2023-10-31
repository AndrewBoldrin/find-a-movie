import { UserContext, UserContextType } from '@/contexts/UserContextProvider'
import { getAuth } from 'firebase/auth'
import { getDatabase, onValue, ref, remove, update } from 'firebase/database'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleAuthentication } from './useGoogleAuthentication'

type Props = {
  id: number
  title: string
}

export function useMovieCard({ id, title }: Props) {
  const { setUsername, isLogged, setIsLogged } = useContext(
    UserContext,
  ) as UserContextType
  const { login } = useGoogleAuthentication()
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false)

  const db = getDatabase()
  const navigate = useNavigate()
  const auth = getAuth()
  const userId = auth.currentUser?.uid

  const databasePath = `favorites/${userId}/movies/${id}`

  function handleMovieNavigation() {
    navigate(`/movie/${id}`)
  }

  function addTofavorites() {
    update(ref(db, databasePath), {
      name: title,
    })
      .then(() => {
        setIsInFavorites(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function removeFromFavorites() {
    remove(ref(db, databasePath))
      .then(() => {
        setIsInFavorites(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function toggleFavorites() {
    if (isInFavorites) {
      removeFromFavorites()
      setIsInFavorites(false)
    } else {
      addTofavorites()
      setIsInFavorites(true)
    }
  }

  async function onGoogleLogin() {
    try {
      const response = await login()
      setIsLogged(true)
      setUsername(response?.user?.displayName)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleFavoritesClick() {
    if (auth.currentUser?.uid) {
      toggleFavorites()
    } else {
      await onGoogleLogin()
    }
  }

  function checkMovieInFavorites() {
    const fav = ref(db, databasePath)

    onValue(fav, (value) => {
      setIsInFavorites(value.exists())
    })
  }

  useEffect(() => {
    checkMovieInFavorites()
  }, [isLogged])

  return {
    isInFavorites,
    isLogged,
    handleMovieNavigation,
    handleFavoritesClick,
  }
}
