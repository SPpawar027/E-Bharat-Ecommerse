import React, { useContext } from 'react'
import Layout from '../../components/layout/layout'
import MyContext from '../../context/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import { ProuductCart } from '../../components/productcart/ProuductCart'
import { Track } from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
     const dispatch = useDispatch()
     const cartItem = useSelector(state => state.cart)
    console.log(cartItem)

     const addItem = ()=>{
        dispatch(addToCart("shirt"))

     }
     const deleteItem = ()=>{
        dispatch(deleteFromCart("shirt"))
     }
  
    return (
        <div>
            <Layout>
            <ToastContainer/>   
             
              <HeroSection/>
              <Filter/>
              <ProuductCart/>
              <Track/>
              <Testimonial/>
            
            </Layout>
        </div>
    )
}

export default Home
