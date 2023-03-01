import React from 'react'

function Dashbar() {
  return (
    <div className='flex gap-12 mx-24'>
        <div className='p-4 px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 '>
            <p>Total Employee</p>
            <p className='text-[10px] font-light'>Total no of employee</p>
            <p className='font-bold text-center text-2xl text-blue-800 pt-3'>112</p>

        </div>
        <div className='p-4 px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 '>
            <p>Gross Salary Per Month </p>
            <p className='text-[10px] font-light'>total of all salaries for all sectors</p>
            <p className='font-bold text-center text-pink-800 pt-3 text-2xl'>Rs.3,20,000</p>

        </div>
        <div className='p-4 px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 '>
            <p>Tax deduction</p>
            <p className='text-[10px] font-light'>Average annual tax</p>
            <p className='font-bold text-center text-green-800 pt-3 text-2xl'>8%</p>

        </div>
        <div className='p-4 px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 '>
            <p>Net Salary</p>
            <p className='text-[10px] font-light'>Net salary per monnth</p>
            <p className='font-bold text-center text-orange-800 pt-3 text-2xl'>Rs.2,80,000</p>

        </div>
    </div>
  )
}

export default Dashbar