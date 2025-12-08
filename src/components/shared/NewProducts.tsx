"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperType from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";


interface Props{
  title: string;
}



export default function NewProducts({title}:Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

 

  return (
    <div className="container mx-auto px-3 md:px-0 mb-10">
      <div className="relative flex justify-between lg:justify-center">
        <h2 className="mb-10 text-xl lg:text-4xl  font-bold">
          {title}
        </h2>

        <div className="absolute right-0 flex gap-3">
          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
              isBeginning ? "bg-white" : "bg-[#111] opacity-50"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft
              color={`${isBeginning ? "#000000" : "#FFFFFF"}`}
              size={20}
            />
          </button>

          <button
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors duration-200 ${
              isEnd ? "bg-white " : "bg-[#111] opacity-50"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight color={`${isEnd ? "#000000" : "#FFFFFF"}`} size={20} />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={25}
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        className="  h-auto"
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1360: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1.4,
          },
        }}
      >
        {data.map((el, i) => (
          <SwiperSlide
            key={i}
            className="select-none my-h "
          >
            <div className="h-full w-full max-w-[300px]">
              <ProductCard  />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
