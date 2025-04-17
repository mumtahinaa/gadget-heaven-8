import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { addItem, addWish, getWish } from "../utility/addtocart";
import DocumentTitle from "../utility/documentTitle";
import { AuthContext } from "../utility/AuthProvider";




const CardDetails = () => {
  DocumentTitle("Gadget Details | Gadget Heaven")
  const data = useLoaderData(); 
  const { product_id } = useParams(); 
  
  const [gadget, setGadget] = useState([]); 
  const [isWish,setIsWish] = useState(false);
  const {updateCount,updateCartCount} = useContext(AuthContext);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleCart =(id)=>{
    addItem(id);
    console.log(id)
    updateCartCount();
  }

  const handleWishList =(id)=>{
    addWish(id);
    console.log(id);
    updateCount();
    setIsWish(true);
    
    
  }
   


  useEffect(() => {
    const selectedItem = data.find((product) => product.product_id === parseInt(product_id));
    setGadget(selectedItem); 
    const favorate = getWish()
   console.log(favorate) 
   const isExist = favorate.find(item =>parseInt(item) == selectedItem.product_id)

   if(isExist){
  setIsWish(true)
   }
   
   
}, [data, product_id]);

  
  if (!gadget) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <DetailsBanner />
      <div className="card bg-base-100 shadow-sm w-11/12 md:w-11/12 mx-auto p-4 md:p-6 items-center relative -top-44 md:-top-52 flex flex-col md:flex-row gap-6">
  
  {/* Image Section */}
  <div className="w-full lg:w-2/5 md:w-4/6 h-60 md:h-96 overflow-hidden p-2">
    <figure className="w-full h-full">
      <img src={gadget.product_image} alt="gadget" className="w-full h-full md:object-fill lg:object-cover object-cover rounded-lg" />
    </figure>
  </div>

  {/* Text Section */}
  <div className="w-full md:w-3/5 card-body gap-3">
    <h2 className="card-title font-bold text-xl md:text-2xl">{gadget.product_title}</h2>

    <p className="text-base md:text-lg font-semibold text-gray-600">
      Price: $ {gadget.price}
    </p>

    <div>
      <span className="text-xs md:text-sm font-medium text-[#309C08] border border-[#309C08] inline-flex px-3 py-1 rounded-3xl bg-green-50">
        {gadget.availability ? "In Stock" : "Out of Stock"}
      </span>
    </div>

    <p className="text-sm md:text-base font-normal text-gray-500">{gadget.description}</p>

    <span className="text-sm md:text-base font-bold">Specification:</span>
    <ol className="list-decimal ml-4 md:ml-5 text-sm md:text-base font-normal text-gray-500">
      {gadget.specification?.map((spec, index) => (
        <li key={index}>{spec}</li>
      )) || <p>No specifications available.</p>}
    </ol>

    <span className="text-sm md:text-base font-bold">Rating</span>
    <div className="flex items-center gap-3">
      <ReactStars
        count={5}
        size={24} // smaller star size for mobile
        isHalf={true}
        value={gadget.rating}
        activeColor="#F9C004"
        onChange={ratingChanged}
      />
      <span className="text-xs md:text-sm font-medium bg-gray-100 px-3 py-1 rounded-2xl">
        {gadget.rating}
      </span>
    </div>

    {/* Action Buttons */}
    <div className="card-actions justify-start gap-4 mt-2">
      <button
        onClick={() => handleCart(gadget.product_id)}
        className="btn bg-[#9538E2] text-white font-semibold text-xs md:text-sm py-2 px-4 rounded-3xl flex items-center gap-2"
      >
        Add To Cart <RiShoppingCart2Line size={18} />
      </button>

      <button
        disabled={isWish}
        onClick={() => handleWishList(product_id)}
        className="btn-ghost bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 cursor-pointer"
      >
        <MdFavoriteBorder size={20} />
      </button>
    </div>

  </div>
</div>

    </div>
  );
};

export default CardDetails;
