import { createContext, useState, useContext, useEffect } from 'react'
import fetchUser from '../services/user'

// create context
const UserContext = createContext()

// create provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  const userValue = { user }
  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
}

// create custom hook
const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be defined within the UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
// export both
