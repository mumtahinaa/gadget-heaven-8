import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { addItem, addWish } from "../utility/addtocart";




const CardDetails = () => {
  const data = useLoaderData(); 
  const { product_id } = useParams(); 
  const [gadget, setGadget] = useState(null); 
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleCart =(id)=>{
    addItem(id);
  }

  const handleWishList =(id)=>{
    addWish(id);
  }
   


  useEffect(() => {
    const selectedItem = data.find((product) => product.product_id === parseInt(product_id));
    setGadget(selectedItem); 
  }, [data, product_id]);

  
  if (!gadget) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <DetailsBanner />
      <div className="card card-side bg-base-100 shadow-sm w-10/12 mx-auto p-6 items-center relative -top-52">
        <figure className="h-96 w-2/5  overflow-hidden object-cover object-center p-3 px-3" >
          <img src={gadget.product_image} alt="gadget" className="object-cover" />
        </figure>
        <div className="card-body w-3/5 gap-3">
          <h2 className="card-title font-bold text-2xl">{gadget.product_title}</h2>
          <p className="text-lg font-semibold text-gray-600">Price: $ {gadget.price}</p>
         <div> <span className="text-sm font-medium text-[#309C08] border border-[#309C08] inline-flex px-3 py-1 rounded-3xl bg-green-50">{gadget.availability ? "In Stock" : "Out of Stock"}</span></div>
          <p className="text-base font-normal text-gray-500">{gadget.description}</p>
          <span className="text-base font-bold">Specification:</span>
          <ol className="list-decimal ml-5 text-base font-normal text-gray-500">
          
        {gadget.specification?.map((spec, index) => (
              <li  key={index}>{spec}</li>
            )) || <p>No specifications available.</p>}
          </ol>
          <span className="text-base font-bold">Rating</span>
          <div className="flex items-center gap-4" > 
          <ReactStars
  count={5}
  size={35}
  isHalf={true}
  value={gadget.rating}
  activeColor="#F9C004"
  onChange={ratingChanged}
/>

<span className="text-sm font-medium bg-gray-100 px-4 py-2 rounded-2xl">{gadget.rating}</span></div>
          <div className="card-actions justify-start gap-4">
            <button onClick={()=>handleCart(product_id)} className="btn bg-[#9538E2] text-white font-semibold text-sm py-1 px-4 rounded-3xl">Add To Card <RiShoppingCart2Line  size={20}></RiShoppingCart2Line></button>
            <a onClick={() => handleWishList(product_id)} className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center border  border-gray-200 cursor-pointer"><MdFavoriteBorder size={20}/> </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
