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
                  <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addItem()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteItem()}>del</button>
      </div>
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
