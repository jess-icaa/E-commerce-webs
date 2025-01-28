import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddressCard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      city,
      country,
      address1,
      address2,
      zipCode,
      addressType,
    };
    console.log(addressData);

    const token = localStorage.getItem('token');
    if(!token) {
      return alert('Token missing');
    }
    const response = await axios.post(`http://localhost:8080/user/add-address?token=${token}`,
      addressData);
      navigate('/profile');
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
      </div>
  
      <div>
        <label htmlFor="country">Country:</label>
        <input
          id="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
      </div>
  
      <div>
        <label htmlFor="address1">Address Line 1:</label>
        <input
          id="address1"
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          placeholder="Street Address"
        />
      </div>
  
      <div>
        <label htmlFor="address2">Address Line 2:</label>
        <input
          id="address2"
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          placeholder="Apartment, suite, etc."
        />
      </div>
  
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter zip code"
        />
      </div>
  
      <div>
        <label htmlFor="addressType">Address Type:</label>
        <select
          id="addressType"
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
  
      <button type="submit">Submit Form</button>
    </form>
  );
  
};

export default AddressCard;

