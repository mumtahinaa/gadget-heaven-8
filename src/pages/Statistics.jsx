import Dynamic from "../components/Dynamic";
import DocumentTitle from "../utility/documentTitle";


const Statistics = () => {
    DocumentTitle("Statistics | Gadget Heaven")
    return (
        <div>
            <Dynamic heading={"Statistics"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Dynamic>
            
        </div>
    );
};

export default Statistics;