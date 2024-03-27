import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slide() {
  return (
    <div className=' mb-2 sm:mb-8'>
    <>
      <Swiper 
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cakesonline.monginis.net/assets/images/top-banners/banner1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cakesonline.monginis.net/assets/images/top-banners/valentines_day.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cakesonline.monginis.net/assets/images/top-banners/banner2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cakesonline.monginis.net/assets/images/top-banners/banner4.png" />
        </SwiperSlide>
      </Swiper>
    </>
  </div>
  );
}