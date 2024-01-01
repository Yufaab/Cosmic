import { createContext } from 'react'
import YufaabInstance from '../lib/api'

const AuthContext = createContext<YufaabInstance | undefined>(undefined)

export const AuthContextProvider = AuthContext.Provider

export default AuthContext
