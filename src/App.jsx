import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Routes from './routes/AppRoutes'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRoutes />
  )
}

export default App 
