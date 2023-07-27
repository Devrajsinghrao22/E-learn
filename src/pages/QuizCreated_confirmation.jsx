import React from 'react'
import NavbarTeacher from '../component/NavbarTeacher'


const QuizCreated_confirmation = () => {
  return (
    <div>
        <NavbarTeacher />
        <div className='text-center mt-[220px]'>
            <div>
                <label className='text-5xl'>Quiz Created Successfully!</label><br />
            </div>
            <div className='p-3'>
                <label className='text-2xl ' >Watch Leaderboard to see the performance of students</label>
            </div>
        </div>
    </div>
  )
}

export default QuizCreated_confirmation
