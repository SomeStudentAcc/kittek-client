import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";

interface IBlog {
  image: string;
  title: string;
  url: string;
}
interface Props {
  sale: IBlog;
}

export default function SaleSingle({ sale }: Props) {
  return (
    <Link
      href={`/sales/${sale.url}`}
      className="relative overflow-hidden  block"
    >
      {/* Image */}
      {/*  <div className="relative w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 "
        />
      </div> */}
      <Image
        src={sale.image}
        alt={`S`}
        width={1000}
        height={500}
        className="w-full h-auto object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition duration-500  z-[2]" />

      {/* Text */}
      <p className="absolute top-0 left-0 w-full text-white p-3  line-clamp-2 z-[3]">
        {sale.title}
      </p>
    </Link>
  );
}
