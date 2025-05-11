import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import ProductDitailpage from './components/productDitailPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { useEffect, useState } from 'react';
import { useHandelProductAmount } from './hooks/addRemoveCart.jsx';

function App() {
  const [ cart, setCart ] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const {addToCart, getAmount, removeCart } = useHandelProductAmount(cart, setCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/product/:id' element={<ProductDitailpage cart={cart} addToCart={addToCart} removeCart={removeCart} getAmount={getAmount} />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
