import React from 'react'
import { Routes, Route, RouterProvider } from 'react-router-dom'

/*Components*/
import Home from "./pages/Home";
import Culture from './pages/Culture';
import Wanda from './pages/Wanda';
import Login from './pages/Login';
import Sneakers from './pages/Sneakers';
import Apparel from './pages/Apparel';
import Accessory from './pages/Accessory';
import Shop from './pages/Shop';

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path='/culture'>
            <Route index element={<Culture />} />
            <Route path=":blog" element={<Wanda />}/>
          </Route>

          <Route path='/shop'>
            <Route index element={<Shop />}></Route>
            <Route path=':query' element={<Shop/>}></Route>
          </Route>

          <Route path='/sneakers' element={<Sneakers />} />
          <Route path='/apparel' element={<Apparel />} />
          <Route path='/accessory' element={<Accessory />} />

          <Route path='/login' element={<Login />} />
          
          <Route path="*" element={<p>error</p>} />
        </Routes>
    </>
  )
}

export default AllRoutes