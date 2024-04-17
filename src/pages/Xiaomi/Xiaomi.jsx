import { useEffect, useState } from "react";
// import Xiao from "./Xiao";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ProductCard } from "../../components/Global/ProductCard";

const Xiaomi = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const xiaomi = products.filter((product) => product.brandName === "Xiaomi");
  console.log(xiaomi);
  return (
    <div className="pt-4 pb-10  bg-base-100 dark:bg-gray-800 dark:text-white">
      {/* slider */}
      <div className="mx-4  lg:mx-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen "
              src="https://i.ibb.co/8Xx0RbK/Screenshot-2023-10-18-at-5-52-35-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/LxwHBXs/Screenshot-2023-10-18-at-5-55-04-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/T4t3312/Screenshot-2023-10-18-at-5-52-15-PM.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        {xiaomi.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
              {xiaomi.map((xiao) => (
                <ProductCard key={xiao._id} data={xiao}></ProductCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Xiaomi;
