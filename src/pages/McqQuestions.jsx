import React from 'react'
import { useState } from 'react';
import NavbarTeacher from '../component/NavbarTeacher';
import { Link } from 'react-router-dom'

const McqQuestions = () => {
    const questionsData = [
        {
          question: 'The keyword used to transfer control from a function back to the calling function is',
          options: ['switch', 'goto', 'go back', 'return'],
          correctAnswer: 'return',
        },
        {
            question: 'If the two strings are identical, then strcmp() function returns?',
            options: ['-1', '1', '0', 'Yes'],
            correctAnswer: '0',
          },
          {
            question: 'What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?',
            options: ['The element will be set to 0.', 
                      'The compiler would report an error.', 
                      'The program may crash if some important data gets overwritten.', 
                      'The array size would appropriately grow.'],
            correctAnswer: 'The program may crash if some important data gets overwritten.',
          },
          {
            question: 'Which of the following is the correct usage of conditional operators used in Ce?',
            options: ['a>b ? c=30 : c=40;', 
                      'a>b ? c=30;', 
                      'max = a>b ? a>c?a:c:b>c?b:c', 
                      'return (a>b)?(a:b)'],
            correctAnswer: 'max = a>b ? a>c?a:c:b>c?b:c',
          },
          {
            question: 'Which bitwise operator is suitable for turning off a particular bit in a number?',
            options: ['&& operator', 
                      '& operator', 
                      '|| operator', 
                      '! operator'],
            correctAnswer: '& operator',
          },

      ];
      
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedOption, setSelectedOption] = useState('');
        const [showResult, setShowResult] = useState(false);
        const [score, setScore] = useState(0);
      
        const handleOptionChange = (option) => {
          setSelectedOption(option);
        };
      
        const handleNextQuestion = () => {
          setShowResult(false);
          setSelectedOption('');
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        };
      
        const handleShowResult = () => {
          setShowResult(true);
          if (selectedOption === questionsData[currentQuestionIndex].correctAnswer) {
            setScore((prevScore) => prevScore + 1);
          }
        };
      
        return (
         <>
         
         <NavbarTeacher />
          <div className="container mx-auto  h-screen justify-center items-center mt-[-80px] ">
            {currentQuestionIndex < questionsData.length ? (
              <div className="min-h-screen flex items-center justify-center">
              <div className="bg-gray-400 w-[70%]">
                <div className="text-center text-xl font-bold mb-4">
                  Question {currentQuestionIndex + 1}
                </div>
                <div className="text-center mb-4">{questionsData[currentQuestionIndex].question}</div>
                {questionsData[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedOption === option
                        ? 'bg-blue-500 text-white'
                        : showResult
                        ? option === questionsData[currentQuestionIndex].correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-200 text-black'
                    } p-4 mb-2 ml-12 mr-12 border border-gray-300 cursor-pointer rounded `}
                    onClick={() => handleOptionChange(option)}
                  >
                    {option}
                  </div>
                ))}
                <div className="text-center mt-4">
                  {!showResult ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                      onClick={handleShowResult}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                      onClick={handleNextQuestion}
                    >
                      Next Question
                    </button>
                  )}
                </div>
                
              </div>
              </div>
            ) : (
              <div className="text-center text-xl font-bold  mt-[-80px]">
                <div className="min-h-screen flex flex-col items-center justify-center text-4xl">
                SCORE
                <div className="bg-blue-500 w-64 h-64 rounded-full flex items-center justify-center mb-4">
                {/* Content inside the circle */}
                <p className="text-white text-center text-8xl">{score*2}0%</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold ">
                    <Link className='Nav-link' to="/Student_afterlogin">Complete</Link>
                </button>
                </div>
              </div>
            )}
          </div>
          </>
        );
}

export default McqQuestions
/*
<div className="text-center text-xl font-bold">
    Quiz Completed! Your score is {score} out of {questionsData.length}
</div>
  */