import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="absolute top-0 right-0 w-screen h-screen bg-gradient-to-b from-rose-100 to-teal-100 ">
        <div className='p-4 flex justify-between px-[10rem] w-full'><img className='w-16 h-5' src={'/src/assets/emroll.png'} alt='Login'></img><p className='flex gap-2 font-serif'>Don't have an account?
        <Link to='/signup/'><a className='text-blue-900 hover:underline underline-offset-2 cursor-pointer'>Signup</a></Link><p className='text-xl'><BsFillArrowRightSquareFill /></p></p></div>
        <div className='flex justify-center items-center w-screen'>
        <div className='w-[18rem] h-[30rem] mt-28'>
        <h1 className='font-serif font-bold text-xl'>Let's log you in</h1>

<form className='flex flex-col gap-6 mt-4'>
    <div>
        <p className='absolute text-xl m-2'><FaUser/></p>
        
    <input className='p-2 rounded w-full pl-12' placeholder='Enter your email'></input>
    </div>
    <div>
    <p className='absolute text-xl m-2'><AiFillLock/></p>

    <input className='p-2 pl-12 rounded w-full' placeholder='Enter the password'></input>

    </div>
    <p className='relative left-20 text-sm text-blue-900 bottom-4'>Forget password?</p>
    <div>
    <input value='Login' className='w-full bg-black p-2 text-center rounded-full text-white'></input>

    </div>
</form>

</div>

        </div>
   
        

    </div>
  )
}

export default Login