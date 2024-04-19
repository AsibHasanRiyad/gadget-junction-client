import  { useEffect, useState } from "react";
// import Asu from "./Asu";

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

const Asus = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const asus = products.filter((product) => product.brandName === "Asus");
  return (
    <div className="pt-4 pb-10 dark:bg-gray-800 dark:text-white">
      {/* slider */}
      <div className="mx-4 lg:mx-20">
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
              src="https://i.ibb.co/hK2CwMF/Screenshot-2023-10-18-at-6-04-29-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/vLVmBVD/Screenshot-2023-10-18-at-6-04-07-PM.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded dark:rounded-none h-full  max-h-[500px] w-screen"
              src="https://i.ibb.co/t3g04k8/Screenshot-2023-10-18-at-6-03-39-PM.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        {asus.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
              {asus.map((asu) => (
                <ProductCard key={asu._id} data={asu}></ProductCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Asus;
