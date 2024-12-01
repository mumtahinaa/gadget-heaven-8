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
        toast.error('This is an error!');

    }
    else{
        storedItem.push(id)
        const storedStr = JSON.stringify(storedItem)
        localStorage.setItem("cart",storedStr);
        toast.success('Item added to cart!');
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
        toast.error('Item already exist!');



    }
    else{
        storedWish.push(id)
        const storedWishStr = JSON.stringify(storedWish)
        localStorage.setItem("wish",storedWishStr);
        toast.success('Item added to wishlist');

    }
}

const removeItemCart =(id)=>{
    
    const storedItem = getItem();
    const remainItems = storedItem.filter(removeItem => removeItem != id)
    localStorage.setItem("cart",JSON.stringify(remainItems))
    toast.success('Successfully Deleted!');

}


const removeItemWish =(id)=>{
    
    const storedItemWish = getWish();
    const remainItems = storedItemWish.filter(removeItem => removeItem != id)
    localStorage.setItem("wish",JSON.stringify(remainItems))
    toast.success('Successfully Deleted!');

}






export {addItem,addWish,getItem,getWish,removeItemCart,removeItemWish}