
import { useContext } from "react";
import AllProducts from "../../components/AllProducts/AllProducts";
import Brands from "../../components/Brands/Brands";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
      return <div className=" h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
      </div>
  }
    return (
        <div className="mx-4">
            <div className=" flex flex-col lg:flex-row flex-1 gap-2">
            <HomeBanner></HomeBanner>
            <div className=" w-30% space-y-2 hidden lg:block">
                <img className=" lg:h-[34vh] xl:h-[39vh]"  src="https://i.ibb.co/YX5jXzW/Apple-Watch-Series-9-Top-Banner-9485.webp" alt="" />
                <img className=" lg:h-[34vh] xl:h-[40vh]" src="https://i.ibb.co/QpbK9YS/Air-Pods-Pro-2nd-Gen-Type-C-Top-Banner-1814.webp" alt="" />
            </div>
            </div>
            <Brands></Brands>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;