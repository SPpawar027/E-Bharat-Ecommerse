import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import {Dashboard} from "./pages/admin/dashboard/Dashboard"
import { Cart } from './pages/cart/Cart'
import { Nopage } from './pages/nopage/Nopage'
import Order from './pages/Order/Order'
import MyState from './context/myState'

import Signup from './pages/registration/Signup'
import Productinfo from './pages/productinfo/Productinfo'
import AddProduct from './pages/admin/Pages/Addproducts'
import UpdateProduct from './pages/admin/Pages/Updateproduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/registration/Login.jsx'





const App = () => {
  return (
    <MyState>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={
        <protectedRoute>
          <Order/>

        </protectedRoute>
        }/>
      <Route path='/Dashboard' element={
        <ProtectedRouteForAdmin>
          <Dashboard/>
        </ProtectedRouteForAdmin>
        
        } />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Productinfo/:id' element={<Productinfo/>}/>
      <Route path='/Addproduct' element={
        <ProtectedRouteForAdmin>
          <AddProduct/>

        </ProtectedRouteForAdmin>
        }/>
      <Route path='/Updateproduct' element={
        <ProtectedRouteForAdmin>

          <UpdateProduct/>
        </ProtectedRouteForAdmin>
        }/>
      <Route path='/*' element={<Nopage/>}/> 
    </Routes>
        <ToastContainer/>
    </MyState>
  )
}

export const protectedRoute = ({children})=>{
  const user = localStorage.getItem("user")
  if(user){
    return children
  }
  else{
    <Navigate to={"/login"} />
  }

}

export const ProtectedRouteForAdmin =({children}) => {
  const admin =JSON.parse(localStorage.getItem("user"))
  if(admin.user.email === "sagarpawar2700@gmail.com"){
    return children
  }
  else{
    return <Navigate to={"/login"} />
  }

}



export default App
