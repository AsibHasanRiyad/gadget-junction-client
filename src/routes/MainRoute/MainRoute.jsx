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
import Details from "../../pages/Details/Details";
import Update from "../../pages/Update/Update";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";


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
            path:'/update',
            element:<Update></Update>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader:() => fetch('http://localhost:5007/products')
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