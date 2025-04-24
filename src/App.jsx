import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import Product from './pages/productPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
