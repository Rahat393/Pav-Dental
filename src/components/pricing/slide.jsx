import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        slidesPerView={6}
        breakpoints={{
          280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Denplan_Logo.svg"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://static.aviva.io/assets/logo/aviva-logo.svg"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1702302131/Asset_1_uc4wy8.svg"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://www.vitality.co.uk/media-online/presales/system/vitality-logo-ellipse-pink.svg?h=56&w=56&la=en&hash=2B0FB65DDE9B610603B112DE74A1B02D"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/c_crop,ar_16:9/v1702372238/freedom-hi-logo-square_m86p7r.png"
            alt="img-class"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="img-class"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/800px-AXA_Logo.svg.png"
            alt="img-class"
          />
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}
