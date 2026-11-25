import { useState } from 'react'
import { login as loginRequest } from '../api/auth'
import { AuthContext } from './AuthContextValue'

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const data = await loginRequest(email, password)
    const newToken = typeof data === 'string' ? data : data?.token
    if (!newToken) {
      throw new Error('Token absent de la réponse')
    }

    localStorage.setItem('token', newToken)
    setToken(newToken)
    setUser(typeof data === 'object' ? data.user || null : null)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
