import { Link } from "react-router-dom";


const SingleCard = ({product}) => {
    const {product_id,product_title,product_image,price}=product;
    return (
        <div className="card bg-base-100 w-80 shadow-xl p-4 hover:scale-105">
  <figure className="w-full h-48  overflow-hidden object-cover object-center">
    <img className=" object-cover"
      src={product_image}
      alt="gadget" />
  </figure>
  <div className="card-body px-2 pb-3">
    <h2 className=" font-semibold text-xl">{product_title}</h2>
    <p className=" font-medium text-lg  text-gray-500">Price:${price}</p>
    <div className="card-actions justify-start">
      <Link to={`/item/${product_id}`}><button className="btn btn-outline  text-base font-semibold text-[#9538E2] px-4 py-3 rounded-3xl hover:text-white hover:bg-[#9538E2]">View Details</button></Link>

    </div>
  </div>
</div>
    );
};

export default SingleCard;