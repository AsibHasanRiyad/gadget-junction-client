import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Home from "../../pages/Home/Home";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Apples from "../../pages/Apples/Apples";
import Googles from "../../pages/Googles/Googles";
import Samsung from "../../pages/Samsung/Samsung";
import OnePlus from "../../pages/OnePlus/OnePlus";
import Asus from "../../pages/Asus/Asus";
import Huawei from "../../pages/Huawei/Huawei";
import Sony from "../../pages/Sony/Sony";
import Xiaomi from "../../pages/Xiaomi/Xiaomi";


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
        {
            path:'/OnePlus',
            element:<OnePlus></OnePlus>
        },
        {
            path:'/Asus',
            element:<Asus></Asus>
        },
        {
            path:'/Huawei',
            element:<Huawei></Huawei>
        },
        {
            path:'/Sony',
            element:<Sony></Sony>
        },
        {
            path:'/Xiaomi',
            element:<Xiaomi></Xiaomi>
        },
      ]
    },
  ]);

  export default MainRoute;