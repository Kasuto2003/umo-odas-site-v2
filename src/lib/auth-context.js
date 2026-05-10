'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({ user: null, login: () => {}, logout: () => {} })

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('umo-user')
      if (saved) setUser(JSON.parse(saved))
    } catch {}
  }, [])

  const login = (userData) => {
    setUser(userData)
    try { localStorage.setItem('umo-user', JSON.stringify(userData)) } catch {}
  }

  const logout = () => {
    setUser(null)
    try { localStorage.removeItem('umo-user') } catch {}
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
