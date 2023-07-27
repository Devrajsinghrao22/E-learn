import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login_student = () => {

    const [formData, setFormData] = useState({
        email: '',
        password:'',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      
    
      const isFormFilled = () => {
    
        return Object.values(formData).every((value) => value.trim() !== '');
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormFilled()) {
          // Perform your submit logic here
          console.log('Form submitted:', formData);
        } else {
          alert('Please fill in all fields before submitting.');
        }
      };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
        
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className='text-center text-4xl mb-8'>Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"

            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            
            onChange={handleInputChange}

          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-indigo-500 text-white py-2 px-4 rounded
            ${
                isFormFilled() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
            type="submit"
          >
            <Link className="nav-link" to="/Student_afterlogin">Log in</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login_student
