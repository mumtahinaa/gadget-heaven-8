import { Outlet } from "react-router-dom";
import Dynamic from "../components/Dynamic";



const Dashboard = () => {
   
    
    return (
        <div>
            <Dynamic heading={"Dashboard"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}  > </Dynamic>
            <div className="mt-12"><Outlet ></Outlet></div>
        </div>
    );
};

export default Dashboard;