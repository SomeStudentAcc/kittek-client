"use client";

import { ArrowLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  isMobNav: boolean;
  setMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const data = {
  categories: [
    {
      id: 1,
      title: "Холодильники",
      url: "refrigerators",
      subCategories: [
        { id: 11, title: "Двухкамерные", url: "double-door" },
        { id: 12, title: "Однокамерные", url: "single-door" },
        { id: 13, title: "Морозильники", url: "freezers" },
      ],
    },

    {
      id: 2,
      title: "Плиты и духовки",
      url: "ovens",
      subCategories: [
        { id: 21, title: "Духовые шкафы", url: "built-in-ovens" },
        { id: 22, title: "Варочные панели", url: "cooktops" },
        { id: 23, title: "Газовые плиты", url: "gas-stoves" },
      ],
    },

    {
      id: 3,
      title: "Микроволновки",
      url: "microwaves",
      subCategories: [
        { id: 31, title: "С грилем", url: "with-grill" },
        { id: 32, title: "Соло", url: "solo" },
      ],
    },

    {
      id: 4,
      title: "Посудомойки",
      url: "dishwashers",
      subCategories: [
        { id: 41, title: "Полноразмерные", url: "full-size" },
        { id: 42, title: "Компактные", url: "compact" },
        { id: 43, title: "Встраиваемые", url: "built-in" },
      ],
    },

    {
      id: 5,
      title: "Мелкая кухонная техника",
      url: "small-appliances",
      subCategories: [
        { id: 51, title: "Блендеры", url: "blenders" },
        { id: 52, title: "Миксеры", url: "mixers" },
        { id: 53, title: "Электрочайники", url: "kettles" },
        { id: 54, title: "Кофеварки", url: "coffee-machines" },
      ],
    },
  ],
};

export default function MobileNav({ isMobNav, setMobNav }: Props) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<null | {
    title: string;
    url: string;
    subCategories: { id: number; title: string; url: string }[];
  }>(null);

  const [catalog, setCatalog] = useState(false);

  return (
    <>
      {/* Overlay */}
      {(isMobNav || selectedCategory) && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 bg-opacity-50 z-40"
          onClick={() => {
            setMobNav(false);
            setSelectedCategory(null);
          }}
        />
      )}

      {/* Main Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-white  z-50 transform transition-transform duration-300 ${
          isMobNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-5 overflow-y-auto gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Меню</h2>
            <button
              className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full  group cursor-pointer transition duration-200 "
              onClick={() => setMobNav(false)}
            >
              <X
                size={24}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>
          <ul>
            <li
              onClick={() => setCatalog(true)}
              className="flex justify-between text-[#666666] items-center border-b border-white/10 py-4 cursor-pointer hover:text-gray-300"
            >
              <span>Каталог</span> <ChevronRight className="w-4 h-4" />
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/sales");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Акции
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/blog");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Блог
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/branches");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Магазины
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/service-center");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Сервисный центр
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/about-us");
                }, 50);
              }}
              className="text-[#666666]"
            >
              О нас
            </span>
          </div>

          <div className="flex flex-col gap-5 ">
            <a
              href="https://www.youtube.com/@hofmannuzbekistan"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/hofmann.uz/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://t.me/HofmannUzbekistan"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>

          <div className="flex flex-col gap-1  mt-auto">
            <p className="text-[#666666]">По любым вопросам звоните:</p>
            <p>+998 55 510-30-00</p>
          </div>
        </div>
      </div>

      {/* Subcategory Sidebar */}
      {catalog && (
        <div
          className="fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-white  z-50 transform transition-transform duration-300"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Каталог</h2>
              <button
                className="p-3 flex md:hidden justify-center items-center bg-black/10 rounded-full  group cursor-pointer transition duration-200 "
                onClick={() => setCatalog(false)}
              >
                <ArrowLeft
                  size={24}
                  className="transition-transform duration-300 "
                />
              </button>
            </div>

            <ul>
              {data?.categories.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-[#666666] items-center border-b border-white/10 py-4 cursor-pointer hover:text-gray-300"
                  onClick={() =>
                    setSelectedCategory({
                      title: item.title,
                      subCategories: item.subCategories || [],
                      url: item.url,
                    })
                  }
                >
                  <span>{item?.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {selectedCategory && (
        <div
          className="fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-white  z-50 transform transition-transform duration-300"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
            <div className="flex items-center justify-between">
              <Link
                /*  href={`/catalog/${selectedCategory.url}`} */
                href={`/filters?categoryUrl=${selectedCategory.url}`}
                onClick={() => {
                  setSelectedCategory(null);
                  setMobNav(false);
                }}
                className="text-xl font-semibold"
              >
                {selectedCategory.title}
              </Link>
              <button
                className="p-3 flex md:hidden justify-center items-center bg-black/10 rounded-full  group cursor-pointer transition duration-200 "
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft
                  size={24}
                  className="transition-transform duration-300 "
                />
              </button>
            </div>

            <ul>
              {selectedCategory.subCategories.map((sub) => (
                <li key={sub.id} className="py-4 border-b border-white/10">
                  <Link
                    /*  href={`/catalog/${selectedCategory.url}/${sub.url}`} */
                    href={`/filters?subCategoryUrl=${sub.url}`}
                    onClick={() => {
                      setSelectedCategory(null);
                      setMobNav(false);
                    }}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
