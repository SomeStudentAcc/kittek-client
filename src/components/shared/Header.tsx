"use client";
import { Link, useRouter } from "@/i18n/navigation";
import {
  Globe,
  Heart,
  Menu,
  SearchIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Cart from "./Cart";

const navItems = [
  { title: "Каталог", url: "/catalog" },
  { title: "Акции", url: "/sales" },
  { title: "Блог", url: "/blog" },
  { title: "Магазины", url: "/branches" },
/*   { title: "Сервисный центр", url: "/service-center" }, */
  { title: "О нас", url: "/about-us" },
];

export default function Header() {
  const [isMobNav, setMobNav] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="border-b hidden md:block">
        <div className="container mx-auto px-3 md:px-0 flex justify-between items-center  py-0.5 text-[14px]">
          <p>Как сделать заказ?</p>
          <p>Отвечаем на ваши вопросы +998 78 148 88 83</p>
          <p> Доставка и оплата</p>
        </div>
      </div>
      <div className="sticky top-0 bg-white z-20 w-full flex flex-col border-b ">
        <div className=" w-full container mx-auto px-3 md:px-0 py-3 flex justify-between items-center">
          <div className="md:hidden flex items-center gap-5">
            <div className="flex items-center gap-3 text-lg font-medium cursor-pointer">
              <Menu
                onClick={() => setMobNav(true)}
                className="size-[25px] cursor-pointer md:hidden"
              />
              <Heart
                onClick={() => router.push("/favorites")}
                className="size-[25px] cursor-pointer  md:hidden"
              />
              <Globe className="size-[25px] cursor-pointer md:hidden" />
            </div>
          </div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="logo"
              className="h-auto w-[calc(100px+2vw)] max-w-[150px] cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            <SearchIcon
              onClick={() => router.push("/search")}
              className="size-[25px] cursor-pointer "
            />
            <Globe className="size-[25px] cursor-pointer hidden md:block" />
            <User
              onClick={() => router.push("/profile")}
              className=" size-[25px] cursor-pointer"
            />
            <Heart
              onClick={() => router.push("/favorites")}
              className="size-[25px] cursor-pointer hidden md:block"
            />
            <Cart />
          </div>
        </div>
        <div className="container mx-auto px-3 hidden md:flex justify-center ">
          <div className="flex items-center gap-5 text-lg font-medium pb-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isMobNav && <MobileNav isMobNav={isMobNav} setMobNav={setMobNav} />}
    </>
  );
}
