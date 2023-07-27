import React from 'react'
import Typed from 'react-typed';
import main from '../images/main.jpg'

const Body = () => {
  return (
    <div className='text-black flex' >
        <div className='max-w-[500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ml-[100px]'>
            <h1 className='md:text-5xl sm:text-3xl text-3xl font-light md:py-6 text-orange-400 font-serif'>
                A NEW WAY TO LEARN
            </h1>
            <div>
                <p className='md:text-4xl sm:text-2xl text-xl font-thin md:py-6 '>
                E-learn is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews
                </p>
                <Typed className='text-3xl'
                    strings={["'One day' or 'day One'","You decide."]}
                    typeSpeed={40} 
                    backSpeed={40} 
                    loop
                />
            </div>
        </div>
        <div className='flex'>
            <img src={main} className=' md:scale-90 sm:scale-75 scale-50 ml-[-30px] '/>
        </div>
      
    </div>
  )
}

export default Body
