import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import DetailOrder from './pages/Product'
import Product from './pages/Product'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/order' element={<DetailOrder/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  )
}

export default App
