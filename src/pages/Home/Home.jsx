

import AllProducts from "../../components/AllProducts/AllProducts";
import Brands from "../../components/Brands/Brands";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marque from "../../components/Marque/Marque";
import Marquee2 from "../../components/Marquee2/Marquee2";
import StoreLocation from "../../components/StoreLocation/StoreLocation";

const Home = () => {

    return (
        <div className="">
            <Marque></Marque>
            <div className=" mx-4 mt-4">
            <div className=" flex flex-col lg:flex-row flex-1 gap-2">
            <HomeBanner></HomeBanner>
            <div className=" w-30% space-y-2 hidden lg:block">
                <img className=" lg:h-[34vh] xl:h-[39vh]"  src="https://i.ibb.co/YX5jXzW/Apple-Watch-Series-9-Top-Banner-9485.webp" alt="" />
                <img className=" lg:h-[34vh] xl:h-[40vh]" src="https://i.ibb.co/QpbK9YS/Air-Pods-Pro-2nd-Gen-Type-C-Top-Banner-1814.webp" alt="" />
            </div>
            </div>
            <Brands></Brands>
            <AllProducts></AllProducts>
            <Marquee2></Marquee2>
            <StoreLocation></StoreLocation>
            </div>
        </div>
    );
};

export default Home;