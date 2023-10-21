import React, { useEffect, useState } from "react";
import Huaw from "./Huaw";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Huawei = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const huawei = products.filter((product) => product.brandName === "Huawei");
  return (
    <div className=" pb-10 pt-4 bg-base-100 dark:bg-gray-800 dark:text-white">
      {/* slider */}
      <div className=" mx-4 ">
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
              className=" rounded dark:rounded-none h-full  max-h-[600px] w-screen "
              src="https://i.ibb.co/rM3ZmPp/Screenshot-2023-10-18-at-5-59-06-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[600px] w-screen"
              src="https://i.ibb.co/chf0HXM/Screenshot-2023-10-18-at-5-57-37-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[600px] w-screen"
              src="https://i.ibb.co/tbySt29/Screenshot-2023-10-18-at-5-58-51-PM.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        {huawei.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
              {huawei.map((huaw) => (
                <Huaw key={huaw._id} huaw={huaw}></Huaw>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Huawei;
