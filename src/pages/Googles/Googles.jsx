import { useEffect, useState } from "react";
import Google from "./Google";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Googles = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const googles = products.filter((product) => product.brandName === "Google");
  console.log(googles);
  return (
    <div className=" pb-10 pt-4 bg-base-100 dark:bg-gray-800 dark:text-white">
      {/* slider */}
      <div className=" mx-4 md:mx-20">
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
              src="https://i.ibb.co/hKggT8z/Screenshot-2023-10-18-at-4-45-57-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/DK6k45L/Screenshot-2023-10-18-at-4-44-58-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/m4fsDdr/Probably-the-best-one-for-the-bl-width-1600-format-webp-1.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        {googles.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
              {googles.map((google) => (
                <Google key={google._id} google={google}></Google>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Googles;
