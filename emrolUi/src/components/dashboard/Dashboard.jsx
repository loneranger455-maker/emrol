import React from 'react'
import Dashbar from './Dashbar'
import Footer from './Footer'
import Topbar from './Topbar'

function Dashboard() {
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
<Topbar value='Dashboard'/>
<Dashbar/>
<div className='flex gap-8 mx-24 p-4  '>
  <div className='flex flex-col gap-4 '>
    <p className='p-4 font-bold text-xl text-center'>Top Earning Employes</p>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Employee Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Department                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Salary
                </th>
            </tr>
        </thead>
        <tbody>
          {emp.map((value)=>(
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    <div className='flex gap-2 '>
      <img className='w-6' src={'/src/assets/employee.png'}/>
    {value.name}

    </div>
  </th>
  <td class="px-6 py-4">
      {value.email}
  </td>
  <td class="px-6 py-4">
      {value.address}
  </td>
  <td class="px-6 py-4">
      {value.age}
  </td>
  <td class="px-6 py-4">
      {value.phonenumber}
  </td>
  <td class="px-6 py-4">
      {value.department}
  </td>
  <td class="px-6 py-4">
      {value.salary}
  </td>
 
</tr>

          ))}
          
        </tbody>
    </table>
    <p className='font-serif font-semibold ml-[90%]'>View all</p>
</div>
  
  
   

  </div>

</div>
<Footer/>
    </div>
  )
}

export default Dashboard