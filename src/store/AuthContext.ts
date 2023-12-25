import { createContext } from 'react'

const AuthContext = createContext<any>(null)

export const AuthContextProvider = AuthContext.Provider

export default AuthContext
