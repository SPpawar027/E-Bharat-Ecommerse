import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import {Dashboard} from "./pages/admin/dashboard/Dashboard"
import { Cart } from './pages/cart/Cart'
import { Nopage } from './pages/nopage/Nopage'
import Order from './pages/Order/Order'
import MyState from './context/myState'
import Login from './pages/Registration/Login'
import Signup from './pages/registration/Signup'
import Productinfo from './pages/productinfo/Productinfo'
import AddProduct from './pages/admin/Pages/Addproducts'
import UpdateProduct from './pages/admin/Pages/Updateproduct'




const App = () => {
  return (
    <MyState>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Productinfo/:id' element={<Productinfo/>}/>
      <Route path='/Addproduct' element={<AddProduct/>}/>
      <Route path='/Updateproduct' element={<UpdateProduct/>}/>
      <Route path='/*' element={<Nopage/>}/> 
    </Routes>
    </MyState>
  )
}

export default App
