import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Screen from "../components/Screen";
import SideBars from "../components/SideBars";


const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <Banner></Banner>
            <Screen></Screen>
           <div className="w-10/12 mx-auto -mt-16 ">
           <h1  className="text-center text-4xl font-bold mb-12">Explore Cutting-Edge Gadgets</h1>
           </div>
           <div className="w-10/12 mx-auto flex lg:flex-row md:flex-col  flex-col  lg:gap-0 gap-2">
           <div className="w-1/5">
           <SideBars categories={categories}></SideBars>
           </div>
           <div className="w-4/5">
           <Outlet></Outlet>
           </div>
           </div>


        </div>
    );
};

export default Home;