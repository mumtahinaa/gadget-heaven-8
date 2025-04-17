// import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Rectangle, CartesianGrid } from 'recharts';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
const Chart = () => {
    const data =[
        { title: "Gaming Laptop X10", price: 1200, total: 1200, rating: 4.8 },
        { title: "Ultra-Slim Laptop", price: 999, total: 999, rating: 4.7 },
        { title: "Business Laptop Pro", price: 1100, total: 1100, rating: 4.7 },
        { title: "Convertible 2-in-1 Laptop", price: 950, total: 950, rating: 4.5 },
        { title: "High-End Desktop Tower", price: 1400, total: 1400, rating: 4.9 },
        { title: "Samsung Galaxy Z", price: 999, total: 999, rating: 4.9 },
        { title: "iPhone 15 Pro", price: 1299, total: 1299, rating: 4.8 },
        { title: "Smart Watch Ultra X", price: 499, total: 499, rating: 4.7 },
        { title: "Fitness Tracker Pro", price: 199, total: 199, rating: 4.5 },
        { title: "Fast Charge Wall Adapter", price: 59, total: 59, rating: 4.6 },
        { title: "Wireless Charging Pad", price: 79, total: 79, rating: 4.7 },
        { title: "10,000mAh Power Bank", price: 89, total: 89, rating: 4.5 },
        { title: "20,000mAh Solar Power Bank", price: 119, total: 119, rating: 4.8 }
      ]
    return (
      <div className="bg-white mx-auto w-11/12 md:w-10/12 lg:w-9/12 rounded-lg">
      <div className="w-full h-[400px] md:h-[500px]"> 
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 35, right: 5, bottom: 8, left: 5 }}
          >
            <XAxis dataKey="title"  tick={{ fontSize: 12 }} />
            <YAxis  tick={{ fontSize: 12 }} />
            <Tooltip  tick={{ fontSize: 12 }}/>
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="price"
              fill="#D9BBF5"
              stroke="#D9BBF5"
            />
            <Bar dataKey="price" barSize={20} fill="#9538E2" />
            <Scatter dataKey="rating" fill="#FF0000" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
};

export default Chart;