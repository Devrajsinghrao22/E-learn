import React from 'react'
import main from '../images/main.jpg'
import { Link } from 'react-router-dom'

import Navbarteacher from '../component/NavbarTeacher';


const Teacher__afterlogin = () => {

    

  return (
    <div>
    <Navbarteacher />
    <div className='text-black flex' >
        <div className='max-w-[500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ml-[100px]'>
            <h1 className='md:text-5xl sm:text-3xl text-3xl font-light md:py-6 text-orange-400 font-serif'>
                Hello Teacher
            </h1>
            <div>
                <p className='md:text-4xl sm:text-2xl text-xl font-thin md:py-6 '>
                This Platform will provide you the best tools to enhance your teaching efficiency.
                </p>
                
            </div>
            <div className='text-center'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white  py-3 px-6 rounded mt-10 text-2xl">
                    <Link className="nav-link" to="/Createquiz_teacher">Create Quiz</Link>
                </button>
            </div>
        </div>
        <div className='flex'>
            <img src={main} alt='main' className=' md:scale-90 sm:scale-75 scale-50 ml-[-29px] '/>
        </div>
      
    </div>
    </div>
    
  )

}

export default Teacher__afterlogin
