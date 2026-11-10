import { createContext, useContext, useState, type ReactNode } from 'react'

export type User = {
  id: number
  name: string
  email: string
  user_type: number // 0 = SuperAdmin, 1 = Admin
}

type AuthContextType = {
  user: User | null
  login: (userType: number) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const login = (userType: number) => {
    const fakeUser: User = userType === 0
      ? { id: 1, name: 'Super Admin', email: 'super@checkouthub.com', user_type: 0 }
      : { id: 2, name: 'Shop Admin', email: 'admin@checkouthub.com', user_type: 1 }
    setUser(fakeUser)
    localStorage.setItem('user', JSON.stringify(fakeUser))
    localStorage.setItem('token', 'fake-token-for-testing')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
