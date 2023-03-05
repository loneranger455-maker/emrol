import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../redux/slice/userSlice'
import { Navigate } from 'react-router-dom'

function Login() {
  const dispatch=useDispatch()
  const { message } = useSelector((state) => state.message);
  const {user,entities,loading}=useSelector((state)=>state.auth)
  if (user){
    return <Navigate to='/dashboard'/>
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formdata=new FormData(e.target)
    dispatch(login(formdata))
    console.log(entities)
 
  }
  if (loading) return <p>loading...</p>


  return (
    <div className="absolute top-0 right-0 w-screen h-screen bg-gradient-to-b from-rose-100 to-teal-100 ">
        <div className='p-4 flex justify-between px-[10rem] w-full'><img className='w-16 h-5' src={'/src/assets/emroll.png'} alt='Login'></img><p className='flex gap-2 font-serif'>Don't have an account?
        <Link to='/signup/'><a className='text-blue-900 hover:underline underline-offset-2 cursor-pointer'>Signup</a></Link><p className='text-xl'><BsFillArrowRightSquareFill /></p></p></div>
        <div className='flex justify-center items-center w-screen'>
        <div className='w-[24rem] h-max mt-28 p-12  shadow-2xl drop-shadow-xl rounded'>
        <h1 className='font-serif font-bold text-xl text-center'>Let's log you in</h1>
<form className='flex flex-col gap-6 mt-4' onSubmit={handleSubmit}>
    <div>
        <p className='absolute text-xl m-2'><FaUser/></p>
        
    <input className='p-2 rounded w-full pl-12' placeholder='Enter your email' name='email'></input>
    </div>
    <div>
    <p className='absolute text-xl m-2'><AiFillLock/></p>

    <input type='password' className='p-2 pl-12 rounded w-full' placeholder='Enter the password' name='password'></input>

    </div>
    <p className='relative left-40 text-sm text-blue-900 bottom-4'>Forget password?</p>
    <div>
    <input type="submit" value='Login' className='w-full bg-black p-2 text-center rounded-full text-white'></input>

    </div>
</form>
{
  message?message.nonfielderrors?<div class="p-2 mb-4 absolute bottom-0.125 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-700" role="alert">
    <span className='font-bold'>error </span>
 {message.nonfielderrors}
</div>:"some error occured":""
}
</div>

        </div>
   
        

    </div>
  )
}

export default Login