import React from 'react'
import Cart from "./cart";
import {cartSelector} from "../../features/user/userSlice";
import {useSelector} from "react-redux";

const GlobalCart = () => {
    const cartItems =useSelector(cartSelector)
    return (
            <div>
                <Cart/>
            </div>
        )
};

export default GlobalCart;





















