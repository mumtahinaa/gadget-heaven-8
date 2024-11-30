import {  NavLink } from "react-router-dom";


const Toggle = () => {
    return (
        <div className=" flex gap-6 justify-center">
            <NavLink to='/dashboard/addCart' className={({isActive}) => `px-14 py-3  border border-white rounded-3xl ${isActive ? "text-base font-medium  bg-white text-[#9538E2]  rounded-3xl" : " text-white border border-white"}`}>Cart </NavLink>
            
<NavLink to='/dashboard/wishList' className={({isActive}) => `px-14 py-3  border border-white rounded-3xl ${isActive ? "text-base font-medium  bg-white text-[#9538E2]  rounded-3xl" : " text-white"}`} >Wishlist</NavLink>
        </div>
    );
};

export default Toggle;