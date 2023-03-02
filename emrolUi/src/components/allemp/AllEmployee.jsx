import React from 'react'
import Topbar from '../dashboard/Topbar'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import Footer from '../dashboard/Footer'

function AllEmployee() {
    const emp=[{"name":"Pujan Lamichhane","age":24,"email":"rangerlone547@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Saroj Poudel","age":24,"email":"saroj@gmail.com","post":"Flutter Developer",
  "department":"App development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Tilak Khatri","age":24,"email":"tilakkhatri@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Nishan Poudel","age":24,"email":"nishan547@gmail.com","post":"Frontend Developer",
  "department":"Website development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Pujan Lamichhane","age":24,"email":"rangerlone547@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Saroj Poudel","age":24,"email":"saroj@gmail.com","post":"Flutter Developer",
  "department":"App development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Tilak Khatri","age":24,"email":"tilakkhatri@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"},{"name":"Nishan Poudel","age":24,"email":"nishan547@gmail.com","post":"Frontend Developer",
  "department":"Website development","phonenumber":"9845119593",
  "address":"Pokhara","salary":"40,000"}]
  return (
    <div>
        <Topbar value="Allemp"/>
        <div className='flex  mx-24 mb-8 '>
            <p className='font-serif font-bold text-xl'>112 Employees</p>
           

        </div>
        <div className='grid grid-cols-4 mx-24 gap-8 p-0'>
            {emp.map((values)=>
                <div className='p-0 flex flex-col w-[16rem] h-[18rem] border-2 rounded-xl shadow-[0_20px_40px_-12px_rgb(0,0,0,0.3)] drop-shadow-lg'>
                   <div className=' py-4 w-full text-center '><img width="80" className='mx-20' src='/src/assets/employee.png'/>  
                   <div className=' font-semibold font-sans'>{values.name}</div>
                   <div className=' font-light text-sm font-serif text-gray-600'>{values.post}</div>
                  


                     </div> 
                   <div className='m-0 bg-[#e7e8ec] rounded-b-xl h-full flex flex-col gap-3 '>
                   
                    <div className='flex justify-between px-2'>
                    <div>
                      <p className='font-light font-serif text-gray-600'>Department</p>
                      <p className='text-sm'>{values.department}</p>
                    </div>
                    <div>
                      <p className='font-light font-serif text-gray-600'>Date hired</p>
                      <p className='text-sm'>18/02/2022</p>
                    </div>
                   </div>
                   <div className='p-2 text-gray-800 font-serif'>
                   <div className='flex gap-2  align-items-center'>
                    <p className='pt-1'><AiOutlineMail/></p>
                    <p>{values.email}</p></div>
                    <div className='flex gap-2  align-items-center'>
                    <p className='pt-0.5'><AiOutlinePhone/></p><p>+977-{values.phonenumber}</p></div>
                    </div>
                    </div>
                   
                </div>)}
             

            </div>
            <Footer/>
    </div>
    
  )
}

export default AllEmployee