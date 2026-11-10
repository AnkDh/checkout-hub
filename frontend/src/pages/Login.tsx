import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (userType: number) => {
    login(userType)
    navigate('/dashboard')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-2 text-gray-600">Temporary test login. Real login will come after backend.</p>
      <div className="mt-4 flex gap-4">
        <button onClick={() => handleLogin(1)} className="bg-blue-500 text-white px-4 py-2 rounded">Login as Admin</button>
        <button onClick={() => handleLogin(0)} className="bg-black text-white px-4 py-2 rounded">Login as SuperAdmin</button>
      </div>
    </div>
  )
}
