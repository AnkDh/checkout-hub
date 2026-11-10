import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const RequestShop = lazy(() => import('./pages/RequestShop'))
const AdminShops = lazy(() => import('./pages/AdminShops'))

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/" className="font-bold">CheckoutHub</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/request-shop">Request Shop</Link>
          <Link to="/admin/shops">All Shops</Link>
        </nav>
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/request-shop" element={<ProtectedRoute allowedRoles={[1]}><RequestShop /></ProtectedRoute>} />
            <Route path="/admin/shops" element={<ProtectedRoute allowedRoles={[0]}><AdminShops /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}


