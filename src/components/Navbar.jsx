
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../utility/AuthProvider';


const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname);
   const {count,cartCount} = useContext(AuthContext);

 
    return (
       <div >
        {
          pathname==='/'?<div className='border-x-[1px] border-gray-300  px-1 border-t-[1px] pt-1 rounded-t-2xl mt-5 mx-5 '>
          <div className='bg-[#9538E2]  mx-auto rounded-t-2xl ' >
             <div className="navbar bg-[#9538E2] lg:w-10/12 md:w-11/12 w-11/12 mx-auto ">
   <div className="navbar-start">
     <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M4 6h16M4 12h8m-8 6h16" />
         </svg>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow  bg-[#9538E2]">
         <NavLink to='/' role='tab' className={({isActive}) => `text-sm font-normal text-white  ${isActive?'font-semibold underline':' '}`}>Home</NavLink>
        
           <NavLink to='/statistics' role='tab' className={({isActive})=>`text-sm font-normal text-white hover:underline hover:font-semibold ${isActive?'font-semibold text-[#9538E2]':''}`}  >Statistics</NavLink>
         
         
             <NavLink to='/dashboard/addCart' role='tab' className={({isActive})=>`text-sm font-normal text-white hover:underline hover:font-semibold ${isActive?'font-semibold text-[#9538E2]':''}`}  >Dashboard</NavLink>
       </ul>
     </div>
     <Link to='/' className="text-xl font-bold text-white">Gadget Heaven</Link>
   </div>
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 gap-9 items-center ">
     <NavLink to='/' role='tab' className={({isActive})=>`text-sm font-normal text-white  ${isActive?'font-semibold underline':''}`}>Home</NavLink>
         
           <NavLink to='/statistics' role='tab' className={({isActive})=>`text-sm font-normal text-white hover:underline hover:font-semibold ${isActive?'font-semibold text-[#9538E2]':''}`} >Statistics</NavLink>
         
         <NavLink to='/dashboard/addCart' role='tab' className={({isActive})=>`text-sm font-normal text-white hover:underline hover:font-semibold ${isActive?'font-semibold text-[#9538E2]':''}`}  >Dashboard</NavLink>
     </ul>
   </div>
   <div className="navbar-end gap-4">
     <Link to='/dashboard/addCart' className=" bg-white rounded-full   w-[40px] h-[40px] flex items-center justify-center"> <RiShoppingCart2Line size={20} />
     </Link>
     {cartCount > 0 && (
        <span className="absolute lg:top-2 lg:right-[200px] md:top-2 md:right-28 top-3 right-[100px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
     <Link to='/dashboard/wishList' className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"><MdFavoriteBorder size={20} />
     </Link>
     {count > 0 && (
        <span className="absolute lg:top-2 lg:right-36 md:top-2 md:right-14 right-11 top-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
   </div>
   
 </div>
         </div>
        </div>
        :
        <div>
        
         <div className='bg-white  mx-auto ' >
            <div className="navbar bg-white lg:w-10/12 md:w-11/12 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box  mt-3 w-52 p-2 shadow z-10 bg-white">
        <NavLink to='/' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2] hover:text-[#9538E2] hover:font-semibold ${isActive?'text-white underline font-semibold ':'text-[#9538E2]'}`}>Home</NavLink>
      
      <NavLink to='/statistics' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2] hover:text-[#9538E2] hover:font-semibold ${isActive?'text-[#9538E2]  font-semibold ':'text-[#9538E2] '}`} >Statistics</NavLink>
    
   <NavLink to='/dashboard/addCart' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2]  hover:text-[#9538E2] hover:font-semibold ${isActive?'text-[#9538E2] font-semibold ':'text-[#9538E2] '}`} >Dashboard</NavLink>
      </ul>
    </div>
    <Link to='/' className="  text-xl font-bold text-[#0B0B0B]">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-9 items-center">
    <NavLink to='/' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2]  hover:text-[#9538E2] hover:font-semibold ${isActive?'text-[#9538E2] underline font-semibold ':'text-[#9538E2]'}`}>Home</NavLink>
      
          <NavLink to='/statistics' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2]  hover:text-[#9538E2] hover:font-semibold ${isActive?'text-[#9538E2]  font-semibold ':'text-[#9538E2] '}`} >Statistics</NavLink>
        
       <NavLink to='/dashboard/addCart' role='tab' className={({isActive})=>`text-sm font-normal text-[#9538E2]  hover:text-[#9538E2] hover:font-semibold ${isActive?'text-[#9538E2] font-semibold ':'text-[#9538E2] '}`} >Dashboard</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <Link to='/dashboard/addCart' className=" bg-white rounded-full   w-[40px] h-[40px] flex items-center justify-center border border-gray-200 "> <RiShoppingCart2Line  size={20} />
    </Link>
    {cartCount > 0 && (
        <span className="absolute lg:top-0 lg:right-[186px] md:right-8 top-1 right-[78px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    <Link to='/dashboard/wishList' className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center border  border-gray-200"><MdFavoriteBorder size={20} />
    </Link>
    {count > 0 && (
        <span className="absolute lg:top-0 lg:right-32 md:right-[90px] top-1 right-5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
  </div>
  
</div>
        </div>
      
        </div>
        }
       </div>
    );
};

export default Navbar;