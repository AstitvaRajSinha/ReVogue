import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import { ThemeProvider } from './context/theme'
import OrderDetails from './pages/OrderDetails'
import AddResell from './components/AddResell'

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) setThemeMode(savedTheme);
}, []);

useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark');
  document.querySelector('html').classList.add(themeMode);
  localStorage.setItem('theme', themeMode);
}, [themeMode]);

const token = localStorage.getItem('token');
if (!token) {
  console.log('No token found!');
}



  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] dark:bg-zinc-900 '>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/resell' element={<AddResell  token={token}/>} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
