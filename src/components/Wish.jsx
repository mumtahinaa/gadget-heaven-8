import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addItem, getWish } from "../utility/addtocart";
import { PiXCircleThin } from "react-icons/pi";


const Wish = () => {
    const allData = useLoaderData();
    const [listWish,setListWish]=useState([])
    const handleCart =(id)=>{
        addItem(id);
      }
    useEffect(()=>{
        const listItemWish = getWish();
        const listItemWishInt = listItemWish.map(id=> parseInt(id)) 
        const addToWish = allData.filter(card => listItemWishInt.includes(card.product_id))
        setListWish(addToWish);
    },[])
    return (
        <div>
             <div className="w-10/12 mx-auto">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">WishList</h3>
                
            </div>

            {
                listWish.map(wish => <div wish={wish} key={wish.product_id} className="card card-side bg-base-100 shadow-sm items-center my-6 p-2">
                    <figure className="w-52 h-[124px] object-cover object-center ml-2 my-2">
                      <img
                        src={wish.product_image}
                        alt="Movie" />
                    </figure>
                    <div className="card-body gap-4">
                      <h2 className="card-title text-xl font-semibold">{wish.product_title}</h2>
                      <p className="text-base font-normal text-gray-500">{wish.description}</p>
                      <span className="text-lg font-semibold text-gray-600">Price : $ {wish.price}</span>
<div>                      <button onClick={()=>handleCart(wish.product_id)} className="btn bg-[#9538E2] text-white font-semibold text-sm py-1 px-4 rounded-3xl">Add To Card </button>
</div>
                    </div>
                    <div className=" mr-16 mb-20">
                        <button className='text-red-500 '><PiXCircleThin size={36} />

                        </button>
                    </div>
                  </div>
                    
                )
            }
        </div>
        </div>
    );
};

export default Wish;