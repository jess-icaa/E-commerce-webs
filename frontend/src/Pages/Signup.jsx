import { useState } from 'react';
import ValidationFormObject from '../validation';
import { Link } from 'react-router-dom';

function SignupForm() {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        file:'',
    });

    const [error, setError] = useState('');



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, 
            [name]:value,
        });
        // console.log(data);
    };

    const handleSubmit = () => {
        const NameV = ValidationFormObject.validteName(data.name);
        const EmailV = ValidationFormObject.validteEmail(data.email);
        const PassV = ValidationFormObject.validtePass(data.password);

    if (typeof NameV == 'string' && NameV.length > 1) {
        return setError(NameV);
    }
    if (typeof EmailV == 'string' && EmailV.length > 2) {
        return setError(EmailV);
    }

    if (typeof PassV == 'string' && PassV.length > 2) {
        return setError(PassV);
    }

};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* File Input Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="file">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg , .jpeg, .png"
            onChange={handleChange}
            className="w-full mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Signup
        </button>
        <p className="text-center">
          Already have an account ? <Link to={'/login'}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
