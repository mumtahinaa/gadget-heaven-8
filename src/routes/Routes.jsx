import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Cards from "../components/Cards";
import CardDetails from "../pages/CardDetails";
import AddCart from "../components/AddCart";
import Wish from "../components/Wish";
import ErrorPage from "../components/ErrorPage";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children:[
                    {
                      path:'/',
                      element:<Cards></Cards>,
                      loader: ()=> fetch("../products.json"),
                    },
                    {
                        path:'/cards/:category',
                        element:<Cards></Cards>,
                        loader: ()=> fetch("../products.json"),
                      }
                ]
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
                loader:()=> fetch('../products.json'),
                children:[
                {
                    path:'/dashboard/addCart',
                    element:<AddCart></AddCart>,
                    loader:()=> fetch('../products.json'),
                },
                {
                    path:'/dashboard/wishList',
                    element:<Wish></Wish>,
                    loader:()=> fetch('../products.json'),
                }
            ]
               
            },
            {
                path:'/item/:product_id',
                element:<CardDetails></CardDetails>,
                loader:()=> fetch("../products.json")
            }

        ]
    },
])
export default routes;