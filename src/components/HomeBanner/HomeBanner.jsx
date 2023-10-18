
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeBanner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeBanner() {
  return (
    <>
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
        <SwiperSlide >
            <img className=' rounded h-full md:h-[80vh] w-full'  src="https://i.ibb.co/WpWLppC/akhil-yerabati-Q2u-V5-Tkj-Nz8-unsplash.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className=' rounded h-full md:h-[80vh] w-full' src="https://i.ibb.co/4fg2JZs/brandon-romanchuk-NOFy-Rm-SQf-UQ-unsplash.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className=' rounded h-full md:h-[80vh] w-full' src="https://i.ibb.co/XzWzWQ6/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg" alt="" />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
