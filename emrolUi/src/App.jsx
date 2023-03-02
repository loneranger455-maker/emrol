import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import Dashboard from './components/dashboard/Dashboard';
import Payroll from './components/payroll/Payroll';
import AllEmployee from './components/allemp/AllEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='signup/' element={<Signup/>}></Route>
        <Route path='dashboard/' element={<Dashboard/>}></Route>
        <Route path='payroll/' element={<Payroll/>}></Route>
        <Route path='allemployees/' element={<AllEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
