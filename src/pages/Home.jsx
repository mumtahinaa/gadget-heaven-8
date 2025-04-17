import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Screen from "../components/Screen";
import SideBars from "../components/SideBars";
import DocumentTitle from "../utility/documentTitle";


const Home = () => {
    DocumentTitle("Gadget | Gadget Heaven")
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <Banner></Banner>
            <Screen></Screen>
           <div className="w-10/12 mx-auto lg:-mt-16 md:mt-20 ">
           <h1  className="text-center lg:text-4xl md:text-3xl text-2xl  font-bold mb-12">Explore Cutting-Edge Gadgets</h1>
           </div>
           {/* <div className="w-10/12 mx-auto flex lg:flex-row md:flex-col  flex-col  lg:gap-0 gap-2">
           <div className="w-1/5">
           <SideBars categories={categories}></SideBars>
           </div>
           <div className="w-4/5">
           <Outlet></Outlet>
           </div>
           </div> */}
           <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0">
             {/* Sidebar */}
            <div className="w-full lg:w-1/5">
                <SideBars categories={categories} />
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-4/5">
                <Outlet />
            </div>
</div>

           


        </div>
    );
};

export default Home;