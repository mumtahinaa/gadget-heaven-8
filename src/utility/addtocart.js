import toast from "react-hot-toast";

const getItem = () =>{
   const  storedAddStr = localStorage.getItem("cart")
   if(storedAddStr){
   const storedItem = JSON.parse(storedAddStr);
   return storedItem;
   }
   else{
    return [];
   }
}
const addItem =(id)=>{
    const storedItem = getItem();
    if(storedItem.includes(id)){
        console.log(id,'already exist')
    }
    else{
        storedItem.push(id)
        const storedStr = JSON.stringify(storedItem)
        localStorage.setItem("cart",storedStr);
    }
}

const getWish = () =>{
    const  WishAddStr = localStorage.getItem("wish")
    if(WishAddStr){
    const storedWish = JSON.parse(WishAddStr);
    return storedWish;
    }
    else{
     return [];
    }
 }

const addWish =(id)=>{
    const storedWish = getWish();
    if(storedWish.includes(id)){
        console.log(id,'already exist')
        // toast.error('Item Already Added!');

        

    }
    else{
        storedWish.push(id)
        const storedWishStr = JSON.stringify(storedWish)
        localStorage.setItem("wish",storedWishStr);
        // toast.success('Item Added to WishList!');
    }
}




export {addItem,addWish,getItem,getWish}