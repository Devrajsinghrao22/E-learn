import React from 'react'
import NavbarStudent from '../component/NavbarStudent'
import { useState } from 'react';

const ShortAnswers = () => {

    const questionsData = [
        {
          question: 'Why you workout everyday?',
        },
        {
          question: 'what comes after earth in solar system?',
        },
        // Add more questions as needed
      ];
      
    
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [answer, setAnswer] = useState('');
      const [isAnswerLocked, setIsAnswerLocked] = useState(false);
      const [quizCompleted, setQuizCompleted] = useState(false);
    
      const handleAnswerChange = (event) => {
        if (!isAnswerLocked) {
          setAnswer(event.target.value);
        }
      };
    
      const handleLockAnswer = () => {
        setIsAnswerLocked(true);
      };
    
      const handleNextQuestion = () => {
        // Save the answer and lock status before moving to the next question.
        setIsAnswerLocked(false);
        setAnswer('');
    
        if (currentQuestionIndex + 1 === questionsData.length) {
          setQuizCompleted(true);
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
      };
    
      const currentQuestion = questionsData[currentQuestionIndex];
    
      return (
        <>

        <NavbarStudent />

        <div className="min-h-screen flex flex-col items-center justify-center mt-[-80px]">
          {quizCompleted ? (
            <h1 className="text-2xl font-bold mb-4">Yours answers are submitted!</h1>
          ) : (
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold">{currentQuestion.question}</h1>
              <textarea
                type="text"
                value={answer}
                onChange={handleAnswerChange}
                className={`mt-2 p-2 border rounded md:w-[500px]  h-28 ${
                  isAnswerLocked ? 'bg-gray-200' : 'border-gray-300 '
                }`}
                placeholder={isAnswerLocked ? 'Answer locked' : 'Enter your answer...'}
                readOnly={isAnswerLocked}
              />
            </div>
          )}
          <div className="space-x-4">
            {!quizCompleted && (
              <>
                {!isAnswerLocked ? (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleLockAnswer}
                    disabled={!answer}
                  >
                    Lock Answer
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleNextQuestion}
                  >
                    Next Question
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        </>
      );
}

export default ShortAnswers
