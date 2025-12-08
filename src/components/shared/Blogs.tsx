"use client";

import React, { useRef, useState } from "react";
import type SwiperType from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = ["/blog1.jpg", "/blog1.jpg", "/blog1.jpg", "/blog1.jpg"];

export default function Blogs() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  return (
    <div className="container mx-auto px-3 md:px-0   py-10 rounded-lg mb-10">
      <div className="relative flex  justify-between lg:justify-center mb-12">
        <h2 className="text-xl sm:text-4xl  font-medium">Блог</h2>
        <div className="absolute right-0 flex gap-3">
          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
              isBeginning ? "bg-white" : "bg-[#111] opacity-50"
            }`}
            onClick={handlePrev}
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
            onClick={handleNext}
            disabled={isEnd}
          >
            <ArrowRight color={`${isEnd ? "#000000" : "#FFFFFF"}`} size={20} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={16}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1,
          },
          450: {
            spaceBetween: 16,
            slidesPerView: 1.5,
          },
          1000: {
            spaceBetween: 16,
            slidesPerView: 2.5,
          },
        }}
        slidesPerView={2.2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Link href={`/sales/${i + 1}`}>
              <Image
                src={src}
                alt={`Sale Image ${i + 1}`}
                width={1000}
                height={500}
                className="w-full h-auto object-cover "
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
