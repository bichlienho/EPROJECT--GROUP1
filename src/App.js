import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import Termsofservice from './Pages/Termsofservice';
import Privacypolicy from './Pages/Privacypolicy';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer.jsx';
import Products4 from './Pages/Products4.jsx';
import Products3 from './Pages/Products3.jsx';
import Products2 from './Pages/Products2.jsx';
import Products1 from './Pages/Products1.jsx';

function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/termsofservive' element={<Termsofservice />} />
          <Route path='/privacypolicy' element={<Privacypolicy />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/categories/:id' element={<Categories />} />
          <Route path='/productsamsung' element={<Products4 />} />
          <Route path='/productstoshiba' element={<Products3 />} />
          <Route path='/productslg' element={<Products2 />} />
          <Route path='/productspanasonic' element={<Products1 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
