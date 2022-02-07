import { createContext, useState, useContext } from 'react'

// create context
const UserContext = createContext()

// create provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
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
