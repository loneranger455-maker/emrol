import React from 'react'
import Topbar from '../dashboard/Topbar'

function AllEmployee() {
    const emp=[{"name":"Pujan Lamichhane","age":24,"email":"rangerlone547@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":9845119593,
  "address":"Pokhara","salary":"40,000"},{"name":"Saroj Poudel","age":24,"email":"saroj@gmail.com","post":"Flutter Developer",
  "department":"App development","phonenumber":9845119593,
  "address":"Pokhara","salary":"40,000"},{"name":"Tilak Khatri","age":24,"email":"tilakkhatri@gmail.com","post":"Fullstack Developer",
  "department":"Software development","phonenumber":9845119593,
  "address":"Pokhara","salary":"40,000"},{"name":"Nishan Poudel","age":24,"email":"nishan547@gmail.com","post":"Frontend Developer",
  "department":"Website development","phonenumber":9845119593,
  "address":"Pokhara","salary":"40,000"}]
  return (
    <div>
        <Topbar value="Allemp"/>
        <div className='flex  mx-24 mb-8 '>
            <p className='font-serif font-bold text-xl'>112 Employees</p>
           

        </div>
        <div className='grid grid-cols-4 mx-24'>
            {emp.map((values)=>
                <div className='flex divide-y divide-blue-200 flex-col w-[16rem] h-[20rem] border-2 border-[#15C1A1] rounded-xl shadow-xl drop-shadow-lg'>
                   <div className='px-24 py-4 w-full'><img width="80" className='' src='/src/assets/employee.png'/>    </div> 
                   <div className='bg-slate-100 rounded-xl h-full '></div>
                </div>)}
             

            </div>
    </div>
    
  )
}

export default AllEmployee