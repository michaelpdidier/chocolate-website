

import './css/App.css'
import './css/Navbar.css'
import './css/Hero.css'
import './css/Card.css'
import './css/Cart.css'
import './css/Store.css'
import './css/Step.css'
import './css/Footer.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Process from './pages/Process'
import Store from './pages/Store'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Process />} />
        <Route path='/store' element={<Store />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/photos" element={<Photos />} /> */}
      </Routes>
    </Router>
  )
}

export default App
