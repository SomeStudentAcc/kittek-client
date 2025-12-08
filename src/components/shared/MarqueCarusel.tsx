/* "use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.jpg",
  "/brand5.png",
  "/brand6.png",
  "/brand7.png",
  "/brand8.png",
  "/brand9.png",
  "/brand10.png",
  "/brand11.png",
  "/brand12.png",
  "/brand13.jpg",
];

export default function MarqueCarusel() {
  return (
    <div className="container mx-auto w-full py-6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={5000}
        allowTouchMove={false}
        className="flex items-center h-auto"
      >
        {brands.map((src, idx) => (
          <SwiperSlide key={idx} className="w-auto! h-auto!">
            <div className="flex justify-center items-center px-6 h-full">
              <Image
                src={src}
                width={120}
                height={60}
                alt="brand"
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 */

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const brands = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.jpg",
  "/brand5.png",
  "/brand6.png",
  "/brand8.png",
  "/brand9.png",
  "/brand10.png",
  "/brand11.png",
  "/brand12.png",
  "/brand13.jpg",
];

export default function MarqueCarusel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.7; // pixels per frame, adjust for speed

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset when halfway through (since we duplicated the content)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="container mx-auto px-3 md:px-0 w-full py-6 overflow-hidden mb-1">
      <h2 className="text-center text-4xl font-bold mb-5">Наши бренды</h2>
      <div ref={scrollRef} className="flex">
        {/* First set */}
        {brands.map((src, idx) => (
          <div
            key={`first-${idx}`}
            className="shrink-0 flex justify-center items-center px-2 md:px-6"
          >
            <Image
              src={src}
              width={1000}
              height={1000}
              alt="brand"
              className="object-contain opacity-80 hover:opacity-100 transition h-20 w-40 md:h-[100px] md:w-[200px]"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {brands.map((src, idx) => (
          <div
            key={`second-${idx}`}
            className="shrink-0 flex justify-center items-center px-2 md:px-6"
          >
            <Image
              src={src}
              width={120}
              height={60}
              alt="brand"
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
