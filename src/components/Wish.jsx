import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addItem, getWish, removeItemWish } from "../utility/addtocart";
import { PiXCircleThin } from "react-icons/pi";
import { AuthContext } from "../utility/AuthProvider";


const Wish = () => {
    const allData = useLoaderData();
    const [listWish,setListWish]=useState([])
    const {updateCount,updateCartCount} = useContext(AuthContext);
    const handleCart =(id)=>{
        addItem(id);
        console.log(id);
        updateCartCount();
      }
    useEffect(()=>{
        const listItemWish = getWish();
        const listItemWishInt = listItemWish.map(id=> parseInt(id)) 
        const addToWish = allData.filter(card => listItemWishInt.includes(card.product_id))
        setListWish(addToWish);
        updateCount();
    },[allData,updateCount])

    const handleRemoveWish=(id)=>{
        removeItemWish(id)
        const listItemWish = getWish();
        const listItemWishInt = listItemWish.map(id=> parseInt(id)) 
        const addToWish = allData.filter(card => listItemWishInt.includes(card.product_id))
        setListWish(addToWish);
        updateCount();
        
    }
    return (
        <div>
             <div className="md:w-10/12 w-11/12 mx-auto">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">WishList</h3>
                
            </div>



            {
  listWish.length === 0 ? (
    <p className="text-center text-gray-500 text-xl font-medium">
      No WishList Added
    </p>
  ) : (
    <div>
      {listWish.map((wish) => (
        <div
          wish={wish}
          key={wish.product_id}
          className="card card-side bg-base-100 shadow-sm items-center my-6 md:p-2"
        >
          {/* Image Section */}
          <div className="w-[40%] md:w-52 md:h-[124px] ml-2 my-2">
            <figure className="w-full h-full">
              <img
                src={wish.product_image}
                alt="Movie"
                className="w-full h-full object-fill rounded-lg"
              />
            </figure>
          </div>

          {/* Text Section */}
          <div className="w-[60%] md:flex-1 card-body gap-2 md:gap-4">
            <h2 className="card-title text-base md:text-xl font-semibold">
              {wish.product_title}
            </h2>
            <p className="text-xs md:text-base font-normal text-gray-500">
              {wish.description}
            </p>
            <span className="text-sm md:text-lg font-semibold text-gray-600">
              Price : ${wish.price}
            </span>
            <div>
              <button
                onClick={() => handleCart(wish.product_id)}
                className=" btn bg-[#9538E2] text-white font-semibold text-xs md:text-sm md:py-1 md:px-4 py-0   rounded-3xl"
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <div className="mr-4 md:mr-16 mb-10 md:mb-20">
            <button
              onClick={() => handleRemoveWish(wish.product_id)}
              className="text-red-500"
            >
              <PiXCircleThin size={30} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

            
           
        </div>
        </div>
    );
};

export default Wish;