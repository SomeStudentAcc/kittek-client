import Breadcrumbs from "@/components/shared/Breadcrumbs";
import MarqueCarusel2 from "@/components/shared/MarqueCarusel2";
import Image from "next/image";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "#",
    label: " О нас",
  },
];

const history = [
  {
    year: "1999",
    event:
      "Основана группа компаний Kittek Group. Начало официального импорта бытовой техники мировых брендов в Узбекистан.",
  },
  {
    year: "2000",
    event:
      "Компания становится официальным представителем ряда международных брендов бытовой техники и активно расширяет ассортимент.",
  },
  {
    year: "2005–2015",
    event:
      "Успешное сотрудничество с крупными мировыми компаниями, укрепление позиций на рынке, рост дистрибуции и сервисной сети.",
  },
  {
    year: "2015",
    event:
      "Запуск собственного OEM-бренда бытовой техники Kittek, созданного для обеспечения рынка качественной и доступной продукцией.",
  },
  {
    year: "2015",
    event:
      "Представление премиального итальянского бренда Smeg на рынке Узбекистана, начало долгосрочного сотрудничества.",
  },
  {
    year: "2016",
    event:
      "Развитие ассортимента собственного бренда Kittek, внедрение итальянского дизайна и усиление контроля качества продукции.",
  },
  {
    year: "2018",
    event:
      "Компания становится официальным представителем итальянской премиальной кухонной посуды Ballarini.",
  },
  {
    year: "2019",
    event:
      "Получение дистрибуции британского бренда Joseph Joseph. Запуск собственного бренда кухонных аксессуаров Fletter.",
  },
  {
    year: "2020",
    event:
      "Открытие сети фирменных магазинов Kittek — шаг к развитию розничного направления и повышению удобства для покупателей.",
  },
  {
    year: "2020–2023",
    event:
      "Расширение присутствия по городам Узбекистана. Увеличение штата сотрудников, сервисных центров, складских и торговых площадей.",
  },
  {
    year: "2023",
    event:
      "Усиление инфраструктуры компании: улучшение логистики, открытие новых шоурумов и рост объёмов импорта.",
  },
  {
    year: "2024",
    event:
      "Среди партнёров Kittek — десятки мебельных и строительных компаний, дизайнеров и региональных сетей. Компания становится одним из ключевых игроков рынка техники.",
  },
  {
    year: "2025",
    event:
      "Планы на ближайшие годы включают расширение импорта, привлечение новых мировых брендов и выход на рынки Центральной Азии.",
  },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <div className="flex flex-col md:grid grid-cols-12 gap-5">
          <div className="flex flex-col justify-center gap-5 col-span-4">
            <h2 className="text-3xl lg:text-4xl font-semibold">О нас</h2>
            <p>
              Kittek Group — это группа компаний, работающая на рынке бытовой
              техники Узбекистана с 1999 года. Мы начали свою деятельность,
              когда рынок нуждался в качественной фирменной технике с
              официальной гарантией и сервисом. Сегодня мы — один из ведущих
              импортёров бытовой техники в стране. Мы верим, что техника — это
              не просто устройства. Это время, удобство, спокойствие и качество
              жизни.
            </p>
          </div>
          <div className=" block text-center col-span-8 max-h-[600px]   w-full relative ">
            <Image
              src={"/company1.webp"}
              alt={""}
              width={10000}
              height={10000}
              className="block w-full h-full object-contain"
            />
          </div>
        </div>

        <MarqueCarusel2 />

        <div className="flex flex-col md:grid grid-cols-12 gap-5 mb-10">
          <div className=" block text-center col-span-8 max-h-[600px]   w-full relative ">
            <Image
              src={"/company1.webp"}
              alt={""}
              width={10000}
              height={10000}
              className="block w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 col-span-4">
            <h2 className="text-3xl lg:text-4xl font-semibold">Наша миссия</h2>
            <p>
              Особое внимание мы уделяем кухонной бытовой технике — потому что
              кухня это сердце дома. В Узбекистане большие семьи, домашний уют и
              традиции — часть нашей культуры. Мы понимаем, насколько важна
              надёжная техника для повседневной жизни. Наша цель — облегчить
              быт, сэкономить время и подарить комфорт.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-5">
            История компании
          </h2>
          <div className="grid grid-cols-2 gap-1 md:gap-5">
            {history.map((item, index) => (
              <div key={index} className="p-4 border-b ">
                <h3 className="text-xl font-semibold">{item.year}</h3>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
