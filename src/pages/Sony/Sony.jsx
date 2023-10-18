import { useEffect, useState } from "react";
import Son from "./Son";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sony = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5007/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const sony = products.filter((product) => product.brandName === "Sony");
  return (
    <div className=" mt-10 mb-4">
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
              className=" rounded h-full max-h-[600px]   w-full "
              src="https://i.ibb.co/dBzH835/james-feaver-cv3wn-Erx7w-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded h-full  max-h-[600px]  w-full"
              src="https://i.ibb.co/z8V1BC7/nikita-kostrykin-D3-Zdf-Bq-A4n-Q-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded h-full  max-h-[600px]  w-full"
              src="https://i.ibb.co/N2FPNtV/nikita-kostrykin-i1-Q9pphr-WUw-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        {sony.length === 0 ? (
          <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
            No Product is Available
          </h1>
        ) : (
          <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
              {sony.map((son) => (
                <Son key={son._id} son={son}></Son>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sony;
