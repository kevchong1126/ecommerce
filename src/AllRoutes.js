import React from 'react'
import { Routes, Route } from 'react-router-dom'

/*Components*/
import Home from "./pages/Home";
import Culture from './pages/Culture';
import Wanda from './pages/Wanda';
import Login from './pages/Login';

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path='/culture'>
            <Route index element={<Culture />} />
            <Route path=":blog" element={<Wanda />}/>
          </Route>
          
          <Route path='/login' element={<Login />} />
          
          <Route path="*" element={<p>error</p>} />
        </Routes>
    </>
  )
}

export default AllRoutes