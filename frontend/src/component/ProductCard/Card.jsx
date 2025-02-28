import axios from 'axios';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Card({ 
  title,
  image, 
  description, 
  rating,
  discountedPrice,
  originalPrice, 
  id,
  handleDelete, 
}) {
  const handleAddToCart=async()=>{
    const token=localStorage.getItem('token')
    try{
      await axios.post(`http://localhost:8080/cart/add-to-cart?token=${token}`,
        {
          productID: id, quantity: 1
        }
      )
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          -20%
        </span>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {/* Wireless Noise-Canceling Headphones */}
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="ml-2 text-sm text-gray-600">{rating}</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">{originalPrice}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              {discountedPrice}
            </span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
            Add to cart
          </button>
          <Link to={`/update-form/${id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
            Update
          </button>
          </Link>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200" onClick={()=>handleDelete(id)}>
            🗑️
          </button>``
      </div>
    </div>
  );
}

export default Card;