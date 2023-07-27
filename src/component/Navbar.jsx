import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'

import {Link} from "react-router-dom";

import logo from '../images/logomain3.png'


const Navbar = () => {

    const[nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
    <div className = 'flex justify-between items-center h-20 max-w-[1340px] mx-auto px-4 text-black bg-gray-300' >
       <img src={logo} className='h-14  '/>
        
        <h1 className='m-3 w-full text-3xl font-bold  text-[#0a0a0a]'>E-learn</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Learn</li>
            <li className='p-4'>Problems</li>
            <li className='p-4' ><Link className="nav-link" to="/Signup_Choice">Signup</Link></li>
            <li className='p-4'><Link className="nav-link" to="/Login_choice">Login</Link></li>
            
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 h-full w-[50%] bg-gray-400 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='pt-5 pl-5 w-full text-3xl font-bold  text-[#0a0a0a]'>E-learn</h1>
            <ul className=' uppercasep p-2'>
                <li className='p-4 border-b border-t'>Home</li>
                <li className='p-4 border-b'>Learn</li>
                <li className='p-4 border-b'>Problems</li>
                <li className='p-4 border-b'><Link className="nav-link" to="/Signup_Choice">Sign_up</Link></li>
                <li className='p-4 border-b'><Link className="nav-link" to="/Login">Login</Link></li>
                
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
