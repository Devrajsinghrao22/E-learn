import React from 'react'
import main from '../images/main.jpg'
const Imagemain = () => {
  return (
    <div className=''>
        <div className='max-w-[500px] mt-[-726px] w-full h-screen mx-auto text-center flex flex-col justify-center ml-[800px] '>
            <img src={main} className='h-96 md:scale-150 sm:scale-100 scale-50 '/>
        </div>
    </div>
  )
}

export default Imagemain
