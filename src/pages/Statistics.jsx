
import Dynamic from "../components/Dynamic";
import DocumentTitle from "../utility/documentTitle";
import Chart from "../components/Chart";


const Statistics = () => {
    DocumentTitle("Statistics | Gadget Heaven")
    return (
        <div>
            <Dynamic heading={"Statistics"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Dynamic>
            <div className=" w-10/12 mx-auto">
            <h3 className="lg:text-xl text-lg font-bold my-8">Statistics</h3>
            </div>
            <Chart></Chart>
        </div>
    );
};

export default Statistics;