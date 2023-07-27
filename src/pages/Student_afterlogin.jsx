import React from 'react'
import NavbarStudent from '../component/NavbarStudent'
import main from '../images/main.jpg'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

const Student_afterlogin = () => {
  return (
    <>
    <NavbarStudent />

    <div className='text-black flex' >
        <div className='max-w-[500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ml-[100px]'>
            <h1 className='md:text-5xl sm:text-3xl text-3xl font-light md:py-6 text-orange-400 font-serif'>
                Hello Student
            </h1>
            <Typed className='text-3xl'
                    strings={["'One day' or 'day One'","You decide."]}
                    typeSpeed={40} 
                    backSpeed={40} 
                    loop
                />
            <div>
                <p className='md:text-3xl sm:text-2xl text-xl font-thin md:py-6 '>
                We craft learning journeys for every student that address their unique needs. We believe in the power of one-to-one learning that addresses every child's learning needs, allows students to be holistically involved in their education and be active, lifelong learners.
                </p>
                
            </div>
            <div className='text-center'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white  py-3 px-6 rounded mt-10 text-2xl">
                    <Link className="nav-link" to="/QuestionType"> Start Quiz</Link>
                </button>
            </div>
        </div>
        <div className='flex'>
            <img src={main} alt='main' className=' md:scale-90 sm:scale-75 scale-50 ml-[-29px] '/>
        </div>
      
    </div>
    </>
  )
}

export default Student_afterlogin
