import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
<div className="min-h-screen flex items-center justify-center bg-gray-200">
  <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-semibold mb-6">Sign Up As a Student</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="name"
          placeholder="Enter your username"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
          
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit" 
          disabled={!isFormFilled()}
          className={`bg-indigo-500 text-white py-2 px-4 rounded ${
            isFormFilled() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
          }`}
        
        >
            <Link className="nav-link" to="/Student_afterlogin">Signup</Link>
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Already have an account? Sign In
        </a>
      </div>
    </form>
  </div>
</div>
)
}

export default Signup
