import React from 'react';
import '../swipers/swiper-style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperSlideLayout(){
    return (
        <div>
            <div className='title'></div>
            
        </div>
    );
}

const ExperienceSwiper = () => {
  return (
    <div className=''>
      <Swiper className='swiper-layout'
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
      >
        <SwiperSlide className="slide-layout"><SwiperSlideLayout/></SwiperSlide>
        <SwiperSlide className="slide-layout">2</SwiperSlide>
        <SwiperSlide className="slide-layout">3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExperienceSwiper
