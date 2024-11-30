
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem } from "../utility/addtocart";
import { PiXCircleThin } from "react-icons/pi";
import { PiSlidersLight } from "react-icons/pi";




const AddCart = () => {
   
    const allCards = useLoaderData();
    const [listCart,setListCart] = useState([]);//listCart will be used for length item 

   

    useEffect(() => {
       
        const listItemCart = getItem();
        const listItemCartInt = listItemCart.map(id=> parseInt(id)) 

        console.log( listItemCart,allCards);
        const addToCart = allCards.filter(card => listItemCartInt.includes(card.product_id))
        setListCart(addToCart);

    }, [allCards]);
    console.log(listCart)


    const handleSort=(sortBy)=>{

        if(sortBy ==="prices"){
            const sortedPrices = [...listCart].sort((a,b) => b.price - a.price);
            setListCart(sortedPrices)
        }
       }
    return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex gap-6 items-center">
                    <h3 className="text-xl font-bold">Total cost:</h3>
                    <button onClick={()=> handleSort("prices")} className="text-base font-semibold text-[#9538E2] border border-[#9538E2] px-5 py-2 rounded-3xl hover:bg-[#9538E2] hover:text-white flex items-center gap-2 ">Sort by Price <PiSlidersLight size={20} />
                    </button>
                    <button className="text-base font-medium text-white px-6 py-2 bg-btnBg  bg-center rounded-3xl ">Purchase</button>
                </div>
            </div>

            {
                listCart.map(cart=> <div cart={cart} key={cart.product_id} className="card card-side bg-base-100 shadow-sm items-center my-6 p-2">
                    <figure className="w-52 h-[124px] object-cover object-center ml-2 my-2">
                      <img
                        src={cart.product_image}
                        alt="Movie" />
                    </figure>
                    <div className="card-body gap-4">
                      <h2 className="card-title text-xl font-semibold">{cart.product_title}</h2>
                      <p className="text-base font-normal text-gray-500">{cart.description}</p>
                      <span className="text-lg font-semibold text-gray-600">Price : $ {cart.price}</span>
                    </div>
                    <div className=" mr-16 mb-20">
                        <button className='text-red-500 '><PiXCircleThin size={36} />

                        </button>
                    </div>
                  </div>
                    
                )
            }
        </div>
    );
};

export default AddCart;