import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CartCard from "../component/ProductCard/CartCard";

function CardPage() {
        const [UsersCartData, setUsersCartDAta] = useState([]);

        useEffect(() => {
        const getCArtData = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                return alert('Token is missing, Please login');
            }
            const response = await axios.get(
                `http://localhost:8080/cart/get-user-cart-data?token=${token}`
            );
            console.log(response);
            setUsersCartDAta(response.data.cartData);
        };

        getCArtData();
        }, []);
        return (
        <div>
            {UsersCartData.length > 0 ? (
        <>
          <Link to={`/select-address`}>
            <button className="bg-slate-800 text-white px-5 py-2 rounded-md ml-40">
              Checkout
            </button>
          </Link>
          {UsersCartData?.map((singleCartObject, index) => {
            return (
              <div key={index}>
                <CartCard
                  title={singleCartObject.productId?.title}
                  images={singleCartObject.productId?.images}
                  //   Index={index}
                  description={singleCartObject.productId?.description}
                  originalPrice={singleCartObject.productId?.originalPrice}
                  discountedPrice={singleCartObject.productId?.discountedPrice}
                  id={singleCartObject.productId?._id}
                  createdBy={"sarah@gmail.com"}
                />
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex justify-center max-h-[100vh] items-center">
          <h1>Cart is empty</h1>
        </div>
      )}
        </div>
    );
}

export default CardPage;