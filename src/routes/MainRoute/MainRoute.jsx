import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Home from "../../pages/Home/Home";

const MainRoute = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default MainRoute;