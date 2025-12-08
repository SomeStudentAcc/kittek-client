"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

const prod = {
  id: 1,
  name: "Milk frother Retro-style White Glossy",
  price: "300 000",
  image: "/prod1.jpg",
};

import dynamic from "next/dynamic";

const FavoriteButton = dynamic(
  () => import("@/components/shared/FavoriteButton"),
  {
    ssr: false,
  }
);

// 🟢 DUMMY DATA
const data = {
  images: ["/prodSingle1.png", "/prodSingle2.png", "/prodSingle3.png"],
};

export default function ProductSlider() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div className=" ">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mb-16"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setSelectedIndex(swiper.realIndex);
        }}
      >
        {data.images.map((img, index) => (
          <SwiperSlide key={index} className="select-none ">
            <div className="relative w-full max-w-[800px] mx-auto">
              <div
                className="absolute right-0 z-10 p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <FavoriteButton  product={prod} />
              </div>

              <Image
                src={img}
                alt={`Product image ${index + 1}`}
                width={800}
                height={600}
                className="object-contain w-full h-auto max-h-[500px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-3 mb-16 overflow-x-auto w-full scroll-mt-5">
        {data.images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer h-20 w-20 md:w-[110px] md:h-[110px] p-2 transition shrink-0 ${
              selectedIndex === index ? "border border-black" : ""
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        :global(.swiper-pagination) {
          bottom: 0px !important;
          left: 0px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
        }

        :global(.swiper-pagination-bullet) {
          width: 40px !important;
          height: 4px !important;
          background-color: rgba(255, 255, 255, 0.3) !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
          transition: all 0.3s ease-in-out !important;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: white !important;
          height: 6px !important;
        }

        @media (max-width: 768px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
