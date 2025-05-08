import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import ProductDitailpage from './components/productDitailPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDitailpage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
