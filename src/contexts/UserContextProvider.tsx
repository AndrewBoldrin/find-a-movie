import { createContext, useState } from 'react'

type ChildrenType = {
  children: React.ReactNode
}

export type UserContextType = {
  isLogged: boolean
  username: string | null
  photo: string | null
  setIsLogged: (isLogged: boolean) => void
  setUsername: (username: string | null) => void
  setPhoto: (photo: string | null) => void
}

export const UserContext = createContext<UserContextType | null>(null)

export function UserContextProvider({ children }: ChildrenType) {
  const [isLogged, setIsLogged] = useState(false)
  const [username, setUsername] = useState<string | null>('')
  const [photo, setPhoto] = useState<string | null>('')

  return (
    <UserContext.Provider
      value={{ username, isLogged, photo, setIsLogged, setUsername, setPhoto }}
    >
      {children}
    </UserContext.Provider>
  )
}
