import React, { useState } from 'react'
import {SiHomebridge} from 'react-icons/si'
import {RiNotification3Fill} from 'react-icons/ri'
import {MdAccountCircle} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {RiUserAddFill} from 'react-icons/ri'
import {IoSettings} from 'react-icons/io5'
import {FaMoneyBillWave} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Topbar(props) {
    const [date,setDate]=useState(Date)
  
    const [color,setColor]=useState({
        Dashboard:"#000000",
        Payroll:"#000000",
        Allemp:"#000000",
        Recruit:"#000000",
        Admin:"#000000",



    })
    
    useState(()=>
    setColor({ ...color,[props.value]:"#15C1A1" })
    ,[])
    setInterval(()=>
    setDate(Date)
    ,1000)
  return (
    <div className='mb-12'>
            <div className='h-[3rem] sticky top-0 '>
            <div className='bg-[#1F373F] p-4 flex justify-between px-[4rem] w-full'><img className='w-16 h-5' src={'/src/assets/emrollwhite.png'} alt='Login'></img>
            <p className='text-sm  text-white font-serif font-bold'>{date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
             <p className='flex gap-6 font-serif text-white text-2xl'>
                <RiNotification3Fill/>
                <MdAccountCircle/>
       <p className='text-xl'></p></p></div>
            </div>
    <div  className='flex gap-12 px-20 pt-5 '>
        <Link to='/dashboard/'>
        <div style={{color:color.Dashboard}} className='flex  gap-2 hover:bg-sky-200 p-4 rounded'>
            <p className='text-4xl'>            <SiHomebridge/>
</p>
            <div className='flex flex-col'>
                <p>Dashboard</p>
                <p className='text-xs text-slate-500'>overall information</p>
            </div>
        </div>
        </Link>
        <Link to="/payroll/">
        <div style={{color:color.Payroll}} className='flex text-[var(--primarycolor)]  gap-2  hover:bg-sky-200 p-4 rounded'>
            <p className='text-4xl'>            <FaMoneyBillWave/>
</p>
            <div className='flex flex-col'>
                <p>Payroll</p>
                <p className='text-xs text-slate-500'>calculate payrolls</p>
            </div>
        </div>
        </Link>
        <Link to="/allemployees/">

        <div style={{color:color.Allemp}} className='flex text-[var(--primarycolor)]  gap-2  hover:bg-sky-200 p-4 rounded'>
            <p className='text-4xl'>     
                   <FaUsers/>
</p>
            <div className='flex flex-col'>
                <p>All Employees</p>
                <p className='text-xs text-slate-500'>employee details</p>
            </div>
        </div>
        </Link>
        <div style={{color:color.Recruit}} className='flex text-[var(--primarycolor)] gap-2  hover:bg-sky-200 p-4 rounded'>
            <p className='text-4xl'>            <RiUserAddFill/>
</p>
            <div className='flex flex-col'>
                <p>Recruitment</p>
                <p className='text-xs text-slate-500'>recruit new employees</p>
            </div>
        </div>
        <div className='flex text-[var(--primarycolor)] gap-2 hover:bg-sky-200 p-4 rounded'>
            <p className='text-4xl'>            <IoSettings/>
</p>
            <div style={{color:color.Admin}} className='flex flex-col'>
                <p>Adminstration</p>
                <p className='text-xs text-slate-500'>admin panel</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Topbar