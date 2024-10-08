import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/myContext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, firedb } from '../../firebase/FirebaseConfige'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../../components/Loading/Loader'


function Signup() {
    const [name , setName]= useState("")
    const [email , setEmail]= useState("")
    const [passward , setPassward]= useState("")

    const context = useContext(myContext)

    const {Loading , setLoading} = context

    const signup = async ()=>{
     
        setLoading(true)
        if(name === "" || email === "" || passward === "")
        {
           return toast.error("All fields are required")
            
        }
        try{
            const users = await createUserWithEmailAndPassword(auth, email , passward)
            console.log("run")

            console.log(users)

            const user  = {
                name : name ,
                uid : users.user.uid,
                email : users.user.email,
                time: Timestamp.now()
            }

            const userref = collection(firedb , "users")
            await addDoc(userref , user)
            toast.success("Signup Succesfully")
            setEmail("")
            setName("")
            setPassward("")
            setLoading(false)

        }catch(error){
            console.log(error)
            setLoading(false)

        }


    }

    
   
    return (
        <>
        <div className=' flex justify-center items-center h-screen'>
            {Loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>  
                <div>
                <input type="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        value={passward}
                        onChange={(e)=>setPassward(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Signup