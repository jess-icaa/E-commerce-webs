import { useState } from "react";

function LoginPage() {
    
    const[credentials, setCreds] = useState({
        email : '',
        password : '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreds({
            ...credentials,
            [name] : value
        })
        console.log(name, value);
    };
    const handleClickLogin = () => {};
    return (
        <>
          <h1 className="text-3xl font-bold text-center mt-8">Login Page</h1>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded-md w-96">
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
                </label>
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
            </form>
          </div>
        </>
      );

}

export default LoginPage;


// return (
    //     <>
    //     <h1>Login Page</h1>
    //     <div>
    //         <form action="">
    //             <div>
    //             <label htmlFor="">Enter Email :</label>
    //             <input type="email" placeholder="abc@example.com" />
    //             </div>
    //             <div>
    //                 <label htmlFor="">Enter Password :</label>
    //                 <input type="password" placeholder="**************"/>
    //             </div>
    //             <button>Login</button>
    //         </form>
    //     </div>
    //     </>
    // )