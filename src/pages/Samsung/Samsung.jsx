import React, { useEffect, useState } from "react";
import Sam from "./Sam";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Samsung = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5007/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const samsung = products.filter((product) => product.brandName === "Samsung");
  return (
    <div className=" mb-4 mt-10">
      <div className=" mx-4 lg:mx-20">
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
              className=" rounded h-full md:h-[80vh] w-full "
              src="https://i.ibb.co/XsJGrX3/Screenshot-2023-10-18-at-4-10-53-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded h-full md:h-[80vh] w-full"
              src="https://i.ibb.co/7kW5D26/Screenshot-2023-10-18-at-4-11-43-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded h-full md:h-[80vh] w-full"
              src="https://i.ibb.co/4RxRckj/Screenshot-2023-10-18-at-4-17-46-PM.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        {samsung.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
              {samsung.map((sam) => (
                <Sam key={sam._id} sam={sam}></Sam>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Samsung;
