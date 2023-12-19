import { useState } from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  )
}

export default App
