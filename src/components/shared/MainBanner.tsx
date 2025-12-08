"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainBanner = () => {
  const sliders = ["/banner1.jpg", "/banner2.jpg"];
  const sliders2 = ["/bannerMob1.jpg", "/bannerMob2.jpg"];


  return (
    <div className="mb-10">
      {/* DESKTOP */}
      <div className="hidden  md:block  overflow-hidden  ">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={true}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="carousel"
        >
            {sliders.map((slider, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slider}
                  width={1280}
                  height={400}
                  alt={"Slide"}
                  className=" w-full object-contain min-h-[300px] max-h-[700px]"
                  priority
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden ">
        <div className=" overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            loop
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="carousel"
          >
            {sliders2.map((slider, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slider}
                  width={420}
                  height={500}
                  alt={"Slide"}
                  className="w-full object-contain"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;