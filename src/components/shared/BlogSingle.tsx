import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlog {
  image: string;
  title: string;
  url: string;
}
interface Props {
  blog: IBlog;
}

export default function BlogSingle({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.url}`}
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
        src={blog.image}
        alt={`S`}
        width={1000}
        height={500}
        className="w-full h-auto object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition duration-500  z-[2]" />

      {/* Text */}
      <p className="absolute top-0 left-0 w-full text-white p-3  line-clamp-2 z-[3]">
        {blog.title}
      </p>
    </Link>
  );
}
