import React from 'react'
import Carts from './components/Carts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addtocart from './components/pages/Addtocart';
import ItemsinCart from './components/pages/ItemsinCart';
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
    </>
  )
}

export default App;