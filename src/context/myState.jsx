import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { firedb } from '../firebase/FirebaseConfige'


const MyState = (props) => {
    const [mode , setMode] = useState('light')

    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode("dark")
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';

        }
        else {
            setMode("light")
            document.body.style.backgroundColor = "white";
        }

    }
    const [Loading , setLoading] = useState(false)
      const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })


  const AddProducts = async ()=>{
   
      if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productref = collection(firedb , "products")
    setLoading(true)

    try{
      await addDoc(productref , products)
      toast.success("Succesfully added")
      getProductData()
      
      setTimeout(() => { 
        window.location.href = "/dashboard"
      }, 800);
      setLoading(false)
      
}catch(error){

      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product ,setProduct] = useState([])

  const getProductData  = async()=>{
    setLoading(true)
    try{
        const q = query(
              collection(firedb , "products")
              
        )
        const data = onSnapshot(q , (QuerySnapshot)=>{
          let productArray = []
          QuerySnapshot.forEach((doc)=>{
            productArray.push({...doc.data(), id: doc.id})

          })
          setProduct(productArray);
          setLoading(false)

        });
       return ()=> data

    }
    catch(err)
    {
      console.log(err)
      setLoading(false)
    }

  }
  const editHandle = (items)=>{
    console.log(items)
    setProducts(items)
  }

  const UpdateProduct = async()=>{
    try{
      console.log(product.id)
      await setDoc(doc(firedb,"products" , products.id),products) //if any thing in this parenthasis is undefined 
      toast.success("Succesfully updated")        // then this error is displayed
      setTimeout(() => {                          //TypeError: Cannot read properties of undefined (reading 'indexOf')
        
        window.location.href = "/dashboard"
      }, 800);
      
      getProductData()
      setLoading(false)
    }catch(error)
    {
      console.log(error)
      setLoading(false)
    }
   

  }

  const DeleteProduct = async(item)=>{
    setLoading(true)
    try{
      await deleteDoc(doc(firedb , "products",item.id))
      toast.success("Deleted Succesfully")
      setLoading(false)
      getProductData()
    }catch(err){
      toast.success('Product Deleted Falied')
      console.log(err)
      setLoading(false)
    }

  }

  useEffect(()=>{
    getProductData()
  } , [])

    return (
        <MyContext.Provider value={{toggleMode , mode ,Loading ,setLoading
          ,products ,setProducts ,AddProducts ,product,editHandle,UpdateProduct ,DeleteProduct
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState
