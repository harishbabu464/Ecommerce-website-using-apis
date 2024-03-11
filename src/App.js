import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Navigation from './components/Navigation'
import Product from './components/Product'
function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/products/:id" element={<Product/>} />
      </Routes>

    </>
  )
}

export default App
