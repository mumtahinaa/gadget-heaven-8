import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getItem, removeItemCart } from "../utility/addtocart";
import { PiXCircleThin } from "react-icons/pi";
import { PiSlidersLight } from "react-icons/pi";
import image from "../assets/Group.png"
import { AuthContext } from "../utility/AuthProvider";

const AddCart = () => {
  const allCards = useLoaderData();
  const navigate = useNavigate();
  const [listCart, setListCart] = useState([]); 
  const  [totalPrice, setTotalPrice] = useState(0)//listCart will be used for length item
  const [isPurchased, setIsPurchased] = useState(false);
  const {updateCartCount} = useContext(AuthContext)

  useEffect(() => {
    const listItemCart = getItem();

    const listItemCartInt = listItemCart.map((id) => parseInt(id));

    const addToCart = allCards.filter((card) =>
      listItemCartInt.includes(card.product_id)
    );
    setListCart(addToCart);
    updateCartCount();
  },[allCards,updateCartCount]);

  console.log(listCart);

  
  useEffect(() => {
    
    const price = listCart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(price);
  }, [listCart]);

  const handleRemoveItem = (id) => {
    removeItemCart(id);
    // const addedCart = getItem();
    // setListCart(addedCart);
    const listItemCart = getItem();

    const listItemCartInt = listItemCart.map((id) => parseInt(id));

    const addToCart = allCards.filter((card) =>
      listItemCartInt.includes(card.product_id)
    );
    setListCart(addToCart);
    updateCartCount();
  };

  const handleSort = (sortBy) => {
    if (sortBy === "prices") {
      const sortedPrices = [...listCart].sort((a, b) => b.price - a.price);
      setListCart(sortedPrices);
    }

    
  };

  const handlePurchase =()=>{
    // setListCart([]);
    // setTotalPrice(0);
    document.getElementById("my_modal_1").showModal();
    setIsPurchased(true);
    

  }
  const handleClose = () =>{
    localStorage.removeItem("cart");
    setListCart([]);
    updateCartCount();
    setTotalPrice(0);
    navigate('/');


}

  return (
    <div className="lg:w-10/12 md:w-10/12 w-11/12 mx-auto">
      <div className="flex lg:flex-row md:flex-row   flex-col items-center lg:justify-between md:justify-between  gap-7  ">
        <h3 className="text-xl font-bold">Cart</h3>
        <div className="flex lg:flex-row md:flex-row  lg:gap-6 md:gap-6 gap-20 items-center">
        <h3 className="lg:text-xl text-lg font-bold">Total cost: {totalPrice}</h3>
         <div className="flex lg:gap-6 md:gap-6 gap-2">
         <button
          
          onClick={() => handleSort("prices")}
          className="text-base font-semibold text-[#9538E2] lg:border lg:border-[#9538E2] md:border md:border-[#9538E2] lg:px-5 lg:py-2 md:px-5 md:py-2 px-0 py-0 rounded-3xl hover:bg-[#9538E2] hover:text-white flex items-center gap-2  "
        >
         <span className="hidden md:inline">Sort by Price</span>  <PiSlidersLight size={20} />
        </button>
        <button disabled={listCart.length === 0 || isPurchased} className="btn lg:text-base md:text-base text-sm font-medium text-white px-6 py-2 bg-btnBg  bg-center rounded-3xl  " onClick={handlePurchase}>
          Purchase
        </button>
         </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
         
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-center lg:w-3/12 overflow-y-hidden p-6">
                <div className="flex justify-center mb-5"><img src={image} alt=""  /></div>
              <h3 className="font-bold   border-b text-xl pb-4 ">Payment Successfully</h3>
              
              <p className="py-4 font-medium text-sm text-gray-600">
              Thanks for purchasing.
              </p>
              <p className="font-medium text-sm text-gray-600">Total:{totalPrice}</p>
              <div className="modal-action justify-center w-full  ">
                
                  {/* if there is a button in form, it will close the modal */}
                  <button onClick={handleClose} className="btn-ghost bg-gray-200 font-semibold text-sm  w-full py-2 rounded-3xl">Close</button>
                
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {
  listCart.length === 0 ? (
    <p className="text-center text-gray-500 text-xl font-medium">
      No Item Added
    </p>
  ) : (
    <div>
      {listCart.map((cart) => (
        <div
          cart={cart}
          key={cart.product_id}
          className="card card-side bg-base-100 shadow-sm items-center my-6 p-2"
        >
          
          <div className="w-[40%] md:w-52 md:h-[124px] ml-2 my-2">
            <figure className="w-full h-full">
              <img
                src={cart.product_image}
                alt="Movie"
                className="w-full h-full object-fill rounded-lg"
              />
            </figure>
          </div>

          
          <div className="w-[60%] md:flex-1 card-body gap-2 md:gap-4">
            <h2 className="card-title text-base md:text-xl font-semibold">
              {cart.product_title}
            </h2>
            <p className="text-xs md:text-base font-normal text-gray-500">
              {cart.description}
            </p>
            <span className="text-sm md:text-lg font-semibold text-gray-600">
              Price : ${cart.price}
            </span>
          </div>

          {/* Delete Button */}
          <div className="mr-4 md:mr-16 mb-10 md:mb-20">
            <button
              onClick={() => handleRemoveItem(cart.product_id)}
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
  );
};

export default AddCart;
