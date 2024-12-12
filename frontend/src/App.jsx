import LoginPage from "./component/auth/Login";
import SignupForm from "../src/component/auth/Signup";
import { Routes, Route } from "react-router-dom";
function App () {
  return (
    <>
    {/* {<LoginPage />} */}
    {/* <SignupForm /> */}
    <Routes>
      <Route path="/"/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}

export default App;