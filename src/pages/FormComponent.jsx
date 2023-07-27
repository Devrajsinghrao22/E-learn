import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <div className="container mx-auto mt-8 p-4">
    <h1 className="text-3xl font-bold mb-4">Contact Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        disabled={!isFormFilled()}
        className={`bg-indigo-500 text-white py-2 px-4 rounded ${
          isFormFilled() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
        }`}
        
      >
            <Link className="nav-link" to="/">Submit</Link>
        
      </button>
    </form>
    </div>
  );
};

export default FormComponent;