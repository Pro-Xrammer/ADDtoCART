import React from 'react'
import Carts from './components/Carts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addtocart from './components/pages/Addtocart';
import ItemsinCart from './components/pages/ItemsinCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Addtocart />} path='/addtocart/:id' />
          <Route element={<Carts />} path='/' />
          <Route element={<ItemsinCart />} path='/ItemsinCart' />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App;