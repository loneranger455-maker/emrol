import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


import {ImOffice} from 'react-icons/im'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="absolute top-0 right-0 w-screen h-screen bg-gradient-to-b from-rose-100 to-teal-100 ">
    <div className=' p-4 flex justify-between px-[10rem] w-full'><img className='w-16 h-5' src={'/src/assets/emroll.png'} alt='Signup'></img><p className='flex gap-2 font-serif'>Already have an account? 
   
    <Link to="/"><a className='text-blue-900 hover:underline underline-offset-2 cursor-pointer'>Login</a></Link><p className='text-xl'><BsFillArrowRightSquareFill /></p></p></div>
    <div className='flex justify-center items-center w-screen'>
    <div className='w-[24rem] h-max mt-10 p-12 shadow-2xl drop-shadow-xl rounded'>
    <h1 className='font-serif font-bold text-xl text-center '>Let's create your account</h1>

<form className='flex flex-col gap-6 mt-4'>
<div>
    <p className='absolute text-xl m-2'><MdEmail/></p>
    
<input className='p-2 rounded w-full pl-12' placeholder='Enter your email'></input>
</div>
<div>
    <p className='absolute text-xl m-2'><FaUserTie/></p>
    
<input className='p-2 rounded w-full pl-12' placeholder='Enter your full name'></input>
</div>
<div>
    <p className='absolute text-xl m-2'><ImOffice/></p>
    
<input className='p-2 rounded w-full pl-12' placeholder='Enter your bussiness name'></input>
</div>
<div>
<p className='absolute text-xl m-2'><AiFillLock/></p>

<input className='p-2 pl-12 rounded w-full' placeholder='Enter the password'></input>

</div>
<div>
<p className='absolute text-xl m-2'><AiFillLock/></p>

<input className='p-2 pl-12 rounded w-full' placeholder='Confirm your password'></input>

</div>
<div>
<input value='Sign Up' className='w-full bg-black p-2 text-center rounded-full text-white'></input>

</div>
</form>

</div>

    </div>

    

</div>
  )
}

export default Signup