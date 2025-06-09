import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import ProductDitailpage from './components/productDitailPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ChekOute from './pages/chekOute.jsx';
import Orderd from './pages/orderd.jsx';

function App() {


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDitailpage  />} />
        <Route path='/cart/cart/chekoute' element={<ChekOute  />}/>
        <Route path='/orderd' element={<Orderd />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
