import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import Dashboard from './components/dashboard/Dashboard';
import Payroll from './components/payroll/Payroll';
import AllEmployee from './components/allemp/AllEmployee';
import { PrivateRoute } from './utils/Privateroute';
import { useSelector } from 'react-redux';


function App() {
  const {user} = useSelector(x => x.auth);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
   
        <Route path='signup/' element={<Signup/>}></Route>
    

        <Route path='dashboard/' element={<PrivateRoute><Dashboard/></PrivateRoute> }></Route>
        <Route path='payroll/' element={<PrivateRoute><Payroll/></PrivateRoute> }></Route>
        <Route path='allemployees/' element={<PrivateRoute><AllEmployee/></PrivateRoute> }></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
