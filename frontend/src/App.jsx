import { Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "../src/component/auth/Signup";
import HomePage from "./Pages/HomePage";
import ProductEntryPage from "./Pages/ProductEntryPage";
import UpdateForm from "./Pages/UpdateForm";
import SinglePageProduct from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";
import ProfilePage from "./Pages/Profile";
import Navbar from './component/Navbar/Navbar';
import AddressCard from "./component/AddressComp/AddressCard";
import SelectAddress from "./Pages/SelectAddresspage";
import OrderConfirmation from "./Pages/OrderConfirmationPage";

function App () {
  return (
    <>
    <Navbar />
    {/* {<LoginPage />} */}
    {/* <SignupForm /> */}
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/product-entry-page" element={<ProductEntryPage />} />
      <Route path="/update-form/:id" element={<UpdateForm />} />
      <Route path="/product-details/:id" element={<SinglePageProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-address" element={<AddressCard />} />
      <Route path="/select-address" element={<SelectAddress />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />````
    </Routes>
    </>
  );
}

export default App;