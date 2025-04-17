import {  createContext, useEffect, useState } from "react";
import { getItem, getWish } from "./addtocart";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [count,setCount] = useState(0);
    const [cartCount,setCartCount] = useState(0);
    useEffect(()=>{
        const listItemWish = getWish();
        setCount(listItemWish.length);
        // console.log(listItemWish.length);
    },[])
    
    const updateCount = ()=>{
        const listItemWish = getWish();
        setCount(listItemWish.length);
    }
    useEffect(()=>{
        const listItemCart = getItem();
        setCartCount(listItemCart.length);
    },[])
    const updateCartCount =()=>{
        const listItemCart = getItem();
        setCartCount(listItemCart.length);
    }

    const data = {
        count,
        updateCount,
        setCartCount,
        updateCartCount,
        cartCount
    }
    return (
        <div>
           <AuthContext.Provider value={data}>{children}</AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;