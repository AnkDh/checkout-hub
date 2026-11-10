import { useEffect, useState } from 'react'

export default function Home() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus('Backend is not reachable'))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to CheckoutHub</h1>
      <p className="mt-2 text-gray-600">Request a shop, pay, and start selling.</p>
      <p className="mt-4">Backend status: {backendStatus}</p>
    </div>
  )
}
