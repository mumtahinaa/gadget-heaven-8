import { useLocation } from "react-router-dom";
import Toggle from "./Toggle";


const Dynamic = ({heading,description}) => {
    const {pathname} = useLocation();
    
    return (
        <div className="bg-[#9538E2] text-center pb-7 pt-5">
            <h2 className="text-white lg:text-2xl text-xl font-bold">{heading}</h2>
            <p className="py-6 lg:max-w-2xl md:max-w-md max-w-xs mx-auto lg:text-sm md:text-sm text-xs text-white font-normal">{description}</p>
          {
            pathname==='/dashboard/addCart' || pathname==='/dashboard/wishList' || pathname==='/dashboard'? <Toggle> </Toggle>:''
          }
        </div>
    );
};

export default Dynamic;