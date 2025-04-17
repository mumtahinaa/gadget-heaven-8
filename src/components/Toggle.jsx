import {  NavLink } from "react-router-dom";


const Toggle = () => {
    return (
       
        <div className="flex lex-row gap-4 md:gap-6 justify-center items-center">
  <NavLink
    to="/dashboard/addCart"
    className={({ isActive }) =>
      `px-8 md:px-14 py-2 md:py-3 border border-white rounded-3xl text-center md:text-base text-sm ${
        isActive
          ? "md:text-base text-sm font-medium bg-white text-[#9538E2] rounded-3xl"
          : "text-white border border-white"
      }`
    }
  >
    Cart
  </NavLink>

  <NavLink
    to="/dashboard/wishList"
    className={({ isActive }) =>
      `px-6 md:px-14 py-2 md:py-3 border border-white rounded-3xl text-center md:text-base text-sm ${
        isActive
          ? "md:text-base text-sm font-medium bg-white text-[#9538E2] rounded-3xl"
          : "text-white"
      }`
    }
  >
    Wishlist
  </NavLink>
</div>

    );
};

export default Toggle;