import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Button } from "@material-tailwind/react";
import { Link } from "gatsby";
import Energency from "./EmergencyHomeBanner";
import Teethforpal from "./Teethforpal";
import {
  BsFillCalendar2CheckFill,
  BsFillCalendarDateFill,
  BsExclamationCircleFill,
} from "react-icons/bs";
import MyModal from "./MyDialog";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="hero-slide1">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  ACCESSIBLE SMILES
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Making Private Dentistry
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    More Affordable
                  </span>
                </h2>
                <a
                  href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
                  target="_blank"
                >
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendar2CheckFill className="mr-3 text-lg" />
                    Book - £35
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="hero-slide77">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  Teeth for Palestine
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    100% of NHS profits will be
                  </span>
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    100% of NHS profits will be
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    donated to Charity
                  </span>
                </h2>
                <a
                  href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
                  target="_blank"
                >
                  <a href="/register">
                    <Button
                      className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                      variant="filled"
                      size="lg"
                    >
                      <BsFillCalendarDateFill className="mr-3 text-lg" />
                      Register NHS Under 18 
                    </Button>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <Energency />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  Exclusive Offer
                </h3>
                <h2 className="text-xl md:text-4xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Accepting New NHS Patients Under 18.
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Adults Welcome at a Private Rate,
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Only £9.20 Above NHS Pricing.
                  </span>
                </h2>
                <a href="/register">
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendarDateFill className="mr-3 text-lg" />
                    Register now
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero-slide2">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  FACIAL AESTHETICS
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Rediscover Your
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Youthful Radiance
                  </span>
                </h2>
                <Link to="/services/aesthetics">
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendarDateFill className="mr-3 text-lg" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
