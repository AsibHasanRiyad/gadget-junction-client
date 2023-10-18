import React, { useEffect, useState } from 'react';
import One from './One';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../components/HomeBanner/HomeBanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OnePlus = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    const onePlus = products.filter(product => product.brandName === 'One Plus')
    console.log(onePlus);
    return (
        <div className=' mb-10 mt-4'>
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
            className=" rounded h-full md:h-[80vh] w-full "
            src="https://i.ibb.co/CB8RSkm/Screenshot-2023-10-18-at-3-55-52-PM.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded h-full md:h-[80vh] w-full"
            src="https://i.ibb.co/X57pRxr/Screenshot-2023-10-18-at-3-57-11-PM.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded h-full md:h-[80vh] w-full"
            src="https://i.ibb.co/QKpKxpJ/Screenshot-2023-10-18-at-4-27-11-PM.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
        <div>
        {
           onePlus.length === 0 ? 
           <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">No Product is Available</h1> 
           : 
           <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Available Products</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
               {
            onePlus.map(one => <One key={one._id} one={one}></One>)
        }
           </div>
           </div>
        }
       </div>
        </div>
    );
};

export default OnePlus;