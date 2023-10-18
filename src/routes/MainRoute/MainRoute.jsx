import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Home from "../../pages/Home/Home";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Apples from "../../pages/Apples/Apples";
import Googles from "../../pages/Googles/Googles";
import Samsung from "../../pages/Samsung/Samsung";


const MainRoute = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addproduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/Apple',
            element:<Apples></Apples>
        },
        {
            path:'/Google',
            element:<Googles></Googles>
        },
        {
            path:'/Samsung',
            element:<Samsung></Samsung>
        },
      ]
    },
  ]);

  export default MainRoute;