import React from 'react'
import { useState } from 'react';
import NavbarTeacher from '../component/NavbarTeacher';
import { Link } from 'react-router-dom'

const Createquiz_teacher = () => {
    const [questions, setQuestions] = useState([
        { question: '', questionType: 'text', options: [''] },
      ]);
    
      const handleQuestionChange = (index, event) => {
        const { name, value } = event.target;
        const newQuestions = [...questions];
        newQuestions[index][name] = value;
        setQuestions(newQuestions);
      };
    
      const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', questionType: 'text', options: [''] }]);
      };
    
      const handleAddOption = (index) => {
        const newQuestions = [...questions];
        newQuestions[index].options.push('');
        setQuestions(newQuestions);
      };
    
      const handleOptionChange = (questionIndex, optionIndex, event) => {
        const { value } = event.target;
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
      };
    
      const handleSubmit = () => {
        // Handle form submission here
        console.log(questions);
      };
    
      return (
        <div>
        <NavbarTeacher />
        <div className="container mx-auto p-8 w-[500px] bg-gray-300 mt-[50px]">
            <h1 className="text-3xl font-bold mb-6 text-center">Add Question</h1>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 font-bold" htmlFor={`question-${index}`}>
                Question {index + 1}:
              </label>
              <input
                type="text"
                id={`question-${index}`}
                name="question"
                value={question.question}
                onChange={(e) => handleQuestionChange(index, e)}
                className="w-full px-4 py-2 mb-2 border rounded-lg"
                placeholder="Enter your question"
              />
    
              <label className="block mb-2 font-bold">Question Type:</label>
              <select
                name="questionType"
                value={question.questionType}
                onChange={(e) => handleQuestionChange(index, e)}
                className="w-full px-4 py-2 mb-2 border rounded-lg"
              >
                <option value="multiple_choice">Multiple Choice</option>
                <option value="text">Short answer</option>
                <option value="text">Long answer</option>
                
              </select>
    
              {question.questionType === 'multiple_choice' && (
                <>
                  <label className="block mb-2 font-bold">Options:</label>
                  {question.options.map((option, optionIndex) => (
                    <input
                      key={optionIndex}
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, optionIndex, e)}
                      className="w-full px-4 py-2 mb-2 border rounded-lg"
                      placeholder="Enter option"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddOption(index)}
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                  >
                    Add Option
                  </button>
                </>
              )}
            </div>
          ))}
    
          <button
            type="button"
            onClick={handleAddQuestion}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Add Question
          </button>
    
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 mt-4 text-white bg-indigo-500 hover:bg-green-600 rounded-lg ml-4"
          >
            <Link className="nav-link" to="/Quizcreated_confirmation">Submit</Link>
           
          </button>
        </div>
        </div>
      );
}

export default Createquiz_teacher
