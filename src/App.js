import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signup_choice from "./component/Signup_choice";
import Signup_teacher from './pages/Signup_teacher'
import Signup_student from "./pages/Signup_student"
import Teacher__afterlogin from "./pages/Teacher__afterlogin";
import FormComponent from "./pages/FormComponent";
import Login_student from "./pages/Login_student";
import Notfound from "./pages/Notfound";
import Createquiz_teacher from "./pages/Createquiz_teacher";
import QuizCreated_confirmation from "./pages/QuizCreated_confirmation";
import Leaderboard from "./pages/Leaderboard";
import Login_choice from "./pages/Login_choice";
import Login_teacher from "./pages/Login_teacher";
import Student_afterlogin from "./pages/Student_afterlogin";
import McqQuestions from "./pages/McqQuestions";
import QuestionType from "./pages/QuestionType";
import ShortAnswers from "./pages/ShortAnswers";
import LongAnswers from "./pages/LongAnswers";

//testing pages
import Testing from "./pages/Testing";
import Testing2 from "./pages/Testing2";
import Testing3 from "./pages/Testing3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup_choice" element={<Signup_choice />} />
      <Route path="/Signup_teacher" element={<Signup_teacher />} />
      <Route path="/Signup_student" element={<Signup_student />} />
      <Route path="/Teacher__afterlogin" element={<Teacher__afterlogin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup_choice" element={<Signup_choice />} />
      <Route path="/Login_student" element={<Login_student />} />
      <Route path="/Createquiz_teacher" element={<Createquiz_teacher />} />
      <Route path="/Quizcreated_confirmation" element={<QuizCreated_confirmation />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
      <Route path='/Login_choice' element={<Login_choice />} />
      <Route path="/Login_teacher" element={<Login_teacher />} />
      <Route path="/Student_afterlogin" element={<Student_afterlogin />} />
      <Route path="/McqQuestions" element={<McqQuestions />} />
      <Route path="/QuestionType" element={<QuestionType />} />
      <Route path="/ShortAnswers" element={<ShortAnswers />} />
      <Route path="/LongAnswers" element={<LongAnswers />} />

      <Route path="*" element={<Notfound />} />

      <Route path="/Testing" element={<Testing />} />
      <Route path="/Testing2" element={<Testing2 />} />
      <Route path="/Testing3" element={<Testing3 />} />
      
      

      <Route path="/FormComponent" element={<FormComponent />} />
    </Routes>
  );
}

export default App;

/*
<div className="App">
      <Home />
    </div>
    */