import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Order from './pages/Order'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register' element={<Login/>}/>
      </Routes>
  )
}

export default App
