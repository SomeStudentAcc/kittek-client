import Image from "next/image";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ShoppingBag } from "lucide-react";
import ProductCardBtn from "./ProductCardBtn";

const prod = {
  id: 1,
  name: "Milk frother Retro-style White Glossy",
  price: "300 000",
  image: "/prod1.jpg",
};

const FavoriteButton = dynamic(
  () => import("@/components/shared/FavoriteButton"),
  {
    ssr: false,
  }
);

export default function ProductCard() {
  return (
    <div className=" w-full max-w-[300px] cursor-pointer group">
      <Link
        href={"/product/1"}
        className="flex flex-col gap-3 w-full max-w-[300px]  "
      >
        <div className="relative h-auto w-full aspect-square overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center ">
          <Image
            src={prod.image}
            alt="Product Image"
            width={500}
            height={500}
            className="w-full h-auto max-h-[370px] object-cover absolute top-0 left-0"
          />
          <FavoriteButton product={prod} />
        </div>
        <div className="z-10 flex flex-col items-center gap-1 w-full">
          <p className="text-center text-[14px] lg:text-base font-light text-gray-600">
            {prod.name}
          </p>
          <span className=" font-medium text-center ">{prod.price} сум</span>
        </div>
      </Link>
        <ProductCardBtn />
    </div>
  );
}
