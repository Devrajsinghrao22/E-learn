import React from 'react'
import ButtonImage1 from '../images/teacher1.webp';
import ButtonImage2 from '../images/student.png';
import { Link } from 'react-router-dom'


const Signup_choice = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Sign up</h1>
      <div className='flex p-4 '>
      <div className="mb-4 p-4 ">
        <img src={ButtonImage1} alt="Image 1" className=" w-96 h-64 rounded-lg shadow-lg" />
        <div className='text-center'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-2">
            <Link className="nav-link" to="/Signup_teacher">As a Teacher</Link>
            </button>
        </div>
      </div>
      <div className="mb-4 p-4">
        <img src={ButtonImage2} alt="Image 2" className="w-96 h-64 rounded-lg shadow-lg" />
        <div className='text-center'>
            <button className=" bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded mt-2">
            <Link className="nav-link" to="/Signup_student">As a Student</Link>
            </button>
        </div>
      </div>
      </div>
      <div className="space-y-4">
        
        
      </div>
    </div>
  )
}

export default Signup_choice

/*
<div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          As a Teacher
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          As a Student
        </button>
      </div>
    </div>

*/