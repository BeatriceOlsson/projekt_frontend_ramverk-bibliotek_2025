import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import ProductDitailpage from './components/productDitailPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ChekOute from './pages/chekOute.jsx';
import Orderd from './pages/orderd.jsx';
import { useEffect, useState } from 'react';
import { useHandelProductAmount } from './hooks/addRemoveCart.jsx';

function App() {
  /*Kollar om en "cart" redan är påbörjad eller inte. 
  Plaserat här då al data skickas neråt och alla förändringar speglas på alla sidor*/
  const [ cart, setCart ] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const {addToCart, getAmount, removeCart, clearCart } = useHandelProductAmount(cart, setCart);

  //Sparar alla ändringar i localStorage. 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart cart={cart} removeCart={removeCart} />} />
        <Route path='/product/:id' element={<ProductDitailpage cart={cart} addToCart={addToCart} removeCart={removeCart} getAmount={getAmount} />} />
        <Route path='/cart/cart/chekoute' element={<ChekOute cart={cart} clearCart={clearCart} />}/>
        <Route path='/orderd' element={<Orderd />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
