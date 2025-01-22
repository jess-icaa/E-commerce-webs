import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    
    const[credentials, setCreds] = useState({
        email : '',
        password : '',
    });

    const navigate= useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreds({
          ...credentials,
          [name]:value,
        });
    };

    const handleClickLogin = async (e) => {
      e.preventDefault();
      const response = await axios.post('http://localhost:8080/user/login', credentials);
      localStorage.setItem('token', response.data.token);
      console.log(data);
      navigate('/');
    };

    return (
        <>
          <h1 className="text-3xl font-bold text-center mt-8">Login Page</h1>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={{handleClickLogin}}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Enter Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="abc@example.com"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Enter Password:
            ``    </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**************"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Login
              </button>

              <div>

          </div>
          <p className="text-center">
            Dont have an account ? <Link to={'/signup'}>Sign up</Link>
          </p>
            </form>
          </div>
        </>
      );

}

export default LoginPage;