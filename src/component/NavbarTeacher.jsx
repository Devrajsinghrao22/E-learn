import React,{useState} from 'react'
import logo from '../images/logomain3.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar_teacher = () => {
    const[nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
   
    <div>
      <div className = 'flex justify-between items-center h-20 max-w-[1340px] mx-auto px-4 text-black bg-gray-300' >
       <img src={logo} alt='logo' className='h-14  '/>
        
        <h1 className='m-3 w-full text-3xl font-bold  text-[#0a0a0a]'>E-learn</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link className="nav-link" to="/Teacher__afterlogin">Home</Link></li>
            <li className='p-4'>Your_Activity</li>
            <li className='p-4'><Link className="nav-link" to="/Leaderboard">Leaderboard</Link></li>
            <li className='p-4' >About</li>
            <li className='p-4'><Link className="nav-link" to="/">Log_Out</Link></li>
            <li><FaUserCircle size={24} className='mt-4'/></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 h-full w-[50%] bg-gray-400 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='pt-5 pl-5 w-full text-3xl font-bold  text-[#0a0a0a]'>E-learn</h1>
            <ul className=' uppercasep p-2'>
                <li className='p-4 border-b border-t'><Link className="nav-link" to="/Teacher__afterlogin">Home</Link></li>
                <li className='p-4 border-b'>Your_Activity</li>

                <li className='p-4 border-b'><Link className="nav-link" to="/Leaderboard">Leaderboard</Link></li>
                <li className='p-4 border-b'></li>
                <li className='p-4 border-b'><Link className="nav-link" to="/">Log_Out</Link></li>
                <li><FaUserCircle size={25}  className='ml-8'/></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar_teacher
