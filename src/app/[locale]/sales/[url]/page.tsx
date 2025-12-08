import Breadcrumbs from "@/components/shared/Breadcrumbs";

import Image from "next/image";
import React from "react";

export const revalidate = 600;
export const dynamicParams = true;

export default async function SaleItem({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;

  const scrums = [
    {
      url: "/",
      label: "Главная",
    },
    {
      url: "/blog",
      label: "Блог",
    },
    {
      url: "#",
      label: "Блог 1",
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center sm:text-start text-xl md:text-3xl mb-5">
          Первый блог
        </h2>
        <div>
          <div className="mb-5 relative w-full   overflow-hidden">
            <Image
              src={"/blog1.jpg"}
              width={1000}
              height={500}
              className="w-full h-auto max-h-[750px]  object-cover"
              alt=""
            />
          </div>
          <article className="[&>p]:m-0 [&>p]:mb-2 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-2">
            <h1 className="text-center sm:text-start text-2xl font-bold mb-2">
              Первый блог
            </h1>

            <p className="text-center sm:text-start">
              🎉 Открытие нового филиала Kittek в NEXT! 🤗 Это было незабываемо!
              Мы собрали вместе наших любимых гостей и устроили настоящий
              праздник. ✨ Спасибо всем, кто был с нами в этот день! 😊 Если вы
              пропустили — обязательно заходите, наш магазин уже открыт и ждёт
              вас!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
