import { Facebook, Instagram, Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black/10  ">
      <div className="container mx-auto px-3 md:px-0 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center py-6 md:py-14">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="logo"
            className="h-auto w-[calc(100px+2vw)] max-w-[150px] cursor-pointer"
          />
        </Link>
        <div>
          <h4 className="text-xl mb-3 font-medium">Навигация</h4>
          <ul className="flex flex-col gap-2">
            <Link href={"/#"} className="cursor-pointer">
              Каталог
            </Link>
            <Link href={"/#"} className="cursor-pointer">
              Акции
            </Link>
            <Link href={"/#"} className="cursor-pointer">
              Блог
            </Link>
            <Link href={"/#"} className="cursor-pointer">
              Магазины
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-3 font-medium">О нас</h4>
          <ul className="flex flex-col gap-2">
            <Link href={"/about-company"} className="cursor-pointer">
              О компании
            </Link>
            <Link href={"/service-center"} className="cursor-pointer">
              Сервисный центр
            </Link>
            <Link href={"/filters"} className="cursor-pointer">
              Публичнвя оферта
            </Link>
            <Link href={"/filters"} className="cursor-pointer">
              доствака и оплата
            </Link>
          </ul>
        </div>

        <div className="flex gap-3">
          <div>
            <h4 className="mb-3 text-xl  font-medium">Наши соц сети</h4>
            <p className="flex items-center gap-2 text-2xl mb-1">
              +998 55 510-30-00
            </p>
            <div className="flex flex-col gap-2  mb-5">
              <p className="flex items-center gap-2">
                <Mail size={18} /> info.uz@hofmannofficial.com
              </p>
            </div>
            <div className="flex gap-2 ">
              <a
                href="https://www.instagram.com/hofmann.uz/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full  border border-black/50 hover:border-black w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://t.me/HofmannUzbekistan"
                target="_blank"
                rel="noreferrer"
                className="rounded-full  border border-black/50 hover:border-black w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Facebook />
              </a>
              <a
                href="https://t.me/HofmannUzbekistan"
                target="_blank"
                rel="noreferrer"
                className="rounded-full  border border-black/50 hover:border-black w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Send size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-center py-[2px]">
        <p className="text-[14px]">2025 © KITTEK — магазин для домашнего комфорта</p>
      </div>
    </div>
  );
}
