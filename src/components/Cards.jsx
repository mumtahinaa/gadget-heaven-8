import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";



const Cards = () => {
    const {category} = useParams();
    ;
    const products = useLoaderData();
    const [items, setItems] = useState([])
    useEffect(()=>{
   if(category){
    const categoryProduct = [...products].filter(product => product.category === category)
    setItems(categoryProduct);
   }
   else{
    setItems(products);
   }
    },[products,category])
    // console.log(items);
    // console.log(products);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-6 md:gap-x-6 px-8 md:px-auto lg:px-0  md:py-6 py-6 lg:py-0">
            {
              items.map(product => (<SingleCard key={product.product_id} product={product}></SingleCard>))
            }
        </div>
    );
};

export default Cards;