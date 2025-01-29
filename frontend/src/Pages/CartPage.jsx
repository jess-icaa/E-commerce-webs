import React, { useState, useEffect } from "react";
import axios from 'axios';
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
            <Link >
            <button className="bg-slate-800 color-white px-10 py-5 rounded-md ml-40">Checkout</button> 
            </Link>
            {UsersCartData?.map((singleCartObject, index) => {
                return (
                    <div key={index}>
                    <CartCard 
                    title={singleCartObject.productId.title}
                    image={
                        singleCartObject.productId.images[0]
                        ? singleCartObject.productId.images[0]
                        : 'Product Image missing'
                    }
                    Index={index}
                    description={singleCartObject.productId.description}
                    originalPrice={singleCartObject.productId.originalPrice}
                    discountedPrice={singleCartObject.productId.discountedPrice}
                    rating={singleCartObject.productId.rating} 
                    id={singleCartObject._id}
                    createdBy={singleCartObject.userId}
                    />
                    </div>
                );
            })}
        </div>
    );
}

export default CardPage;