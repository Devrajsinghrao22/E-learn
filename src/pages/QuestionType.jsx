import React from 'react'
import NavbarStudent from '../component/NavbarStudent'
import { Link } from 'react-router-dom'

const QuestionType = () => {
  return (
    <>
    <NavbarStudent />
 
  <div className="min-h-screen flex flex-col items-center justify-center text-2xl mt-[-80px]">
      <div className="mb-4 ">
        <button className="p-4 border border-gray-300 cursor-pointer rounded-lg bg-blue-200 w-96 hover:bg-blue-500 text-black m-2">
          <Link className='Nav-link' to="/McqQuestions" >MCQ Type</Link>
        </button>
      </div>
      <div className="mb-4">
        <button className="p-4 border border-gray-300 cursor-pointer rounded-lg bg-blue-200 hover:bg-blue-500 text-black w-96 m-2">
            <Link className='Nav-link' to="/ShortAnswers" >Short Answers Type</Link>
        </button>
      </div>
      <div>
        <button className="p-4 border border-gray-300 cursor-pointer rounded-lg bg-blue-200 hover:bg-blue-500 text-black w-96 m-2">
        <Link className='Nav-link' to="/LongAnswers" >Long Answers Type</Link>
        </button>
      </div>
    </div>
    </>
  )
}

export default QuestionType
