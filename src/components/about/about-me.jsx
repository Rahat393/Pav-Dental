import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const WhyChooseUs = () => {
  return (
    <>
      <section className=" container mx-auto px-10 py-10 mb-40">
        <div className="lg:grid-cols-[32%_62%] grid-cols-[100%] contaier-grid gap-[6%] grid dpdc ">
          <div className="left">
            <div className="image">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3000,
                  stopOnLastSlide: false,
                }}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[
                  Autoplay,
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                ]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <StaticImage
                    className="image object-cover	h-[300px] md:h-[450px] w-full"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1706714278/Picture1_kxskcr.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    className="image object-cover h-[300px] md:h-[450px]	 w-full"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1706714227/Picture2_kwr8fl.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    className="image object-cover	h-[300px] md:h-[450px] w-full"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1706714228/Picture3_qq0xbh.png"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>

              <hr />
              <p className="text-center	pt-10 text-lg">
                The Late Dr Pav Bhogal
                <br /> 03/07/1992 to 16/08/2023 <br />
                <b>Age 31</b>
              </p>
            </div>
            <div className="cardlist">
              <StaticImage
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1697922260/icons8-inverted-commas-48_rxeuf2.png"
                alt=""
              />
              <h5>
                Honoring a Visionary, <br />
                Building a Legacy
              </h5>
            </div>
            <div className="box-cin">
              <h4>Our Mission:</h4>
              <p>
                - To provide exceptional dental care using the latest technology
                and research.
              </p>
              <p>- To promote oral health education and awareness.</p>
              <p>
                -To create a welcoming and compassionate environment for our
                patients.
              </p>
              <p>
                - To expand access to dental services for underserved
                communities.
              </p>
              <p>-To conduct research and contribute</p>
            </div>
          </div>

          <div className="right">
            <div class="intro">
              <div className="introduction">
                <h4>Introduction</h4>
                <p className="text-lg py-2.5 text-justify lg:pr-24 pr-0 pb-16">
                  In memory of the late Pavan Bhogal, a visionary entrepreneur
                  whose life was tragically cut short, we present a remarkable
                  opportunity to invest in a project that not only fulfills his
                  dreams but also serves as a lasting tribute to his vision. The
                  Pavan Bhogal Memorial Dental Clinic aspires to become the
                  largest and most innovative dental healthcare
                </p>
              </div>
              <div className="dilog lg:grid-cols-[47%_47%] grid-cols-[100%] contaier-grid gap-[6%] grid py-2.5">
                <div className="dilog-1">
                  <h4>Pavan Bhogal: A Visionary Healer</h4>
                  <p>
                    Pavan Bhogal, a passionate advocate for dental healthcare,
                    had a vision to revolutionize the field of dentistry. His
                    dreams were grounded in a deep commitment to improving oral
                    health and overall well-being for people worldwide. His
                    journey began with a strong educational foundation in
                    dentistry, and his aspirations were further fueled by a
                    compassionate heart, an innovative spirit, and an unwavering
                    determination to make a difference.
                    <br /> <br /> <br />
                    Pavan's life was a testament to his commitment to his
                    community and his dedication to providing accessible, high-
                    quality dental care. He dreamed of opening a dental clinic
                    that would not only excel in providing cutting-edge dental
                    treatments but would also prioritize patient comfort and
                    experience.
                  </p>
                  <br />
                  <br /> <br />
                  <h4>The Vision Lives On</h4>
                  <p>
                    Tragically, Pavan's life was cut short before he could
                    realize his dream. However, we believe that his vision
                    should not remain unfulfilled. The Pavan Bhogal Memorial
                    Dental Clinic aims to carry forward his legacy.
                  </p>
                </div>
                <div className="dilog-1">
                  <h4>Pavan Bhogal's Commitment to Healthcare Innovation</h4>
                  <p>
                    In addition to his dedication to dental healthcare, Pavan
                    Bhogal's legacy also includes his contributions to enhancing
                    healthcare infrastructure. As a co-founder of Mars Purifier,
                    he supplied Warwickshire County Council with cutting-edge
                    air purifiers, ensuring that communities had access to clean
                    and fresh air, especially during the challenging times of
                    the COVID- 19 pandemic.
                    <br /> <br /> <br />
                    His commitment to healthcare innovation also encompassed
                    supporting NHS dental practices, NHS spirometry facilities,
                    and NHS abortion clinics. He understood the importance of
                    accessible and high-quality healthcare services for all, and
                    his contributions to these critical healthcare sectors
                    exemplify his dedication to improving people's lives through
                    innovation and compassion.
                    <br /> <br /> <br />
                    The Pavan Bhogal Memorial Dental Clinic is an embodiment of
                    his holistic approach to healthcare, striving to provide not
                    only advanced dental services but also contributing to the
                    broader healthcare ecosystem, just as Pavan had envisioned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex-row flex-col flex gap-[6%] my-14">
          <iframe
            className="md:w-[47%] py-4 w-full"
            height="350px"
            src="https://www.youtube.com/embed/tSeCSNEDl3g?si=s_xNx0s7SezBxk6H"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="md:w-[47%] py-4 w-full"
            height="350px"
            src="https://www.youtube.com/embed/lebQf5sdnLU?si=EA3htKUReIjvyuzj"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
