import BlogSingle from "@/components/shared/BlogSingle";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SaleSingle from "@/components/shared/SaleSingle";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const data = [
  {
    image: "/blog1.jpg",
    title: "Первый пост в блоге",
    url: "pervyy-post-v-bloge",
  },
  {
    image: "/blog1.jpg",
    title: "Первый пост в блоге",
    url: "pervyy-post-v-bloge",
  },
];

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Блог — Kittek",
    description: "Читайте последние новости, советы и статьи от Kittek.",
    keywords: ["v", "Блог", "Новости", "Советы", "Техника"],
    openGraph: {
      title: "Блог — Kittek",
      description: "Читайте последние новости, советы и статьи от Kittek.",
      type: "website",
    },
  };
};

export default async function Sales() {
  const scrums = [
    {
      url: "/",
      label: "Главная",
    },
    {
      url: "/",
      label: "Акции",
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Акции</h2>
        <div className="grid md:grid-cols-2 !h-auto gap-2.5 md:gap-5">
          {data?.map((el, i) => (
            <SaleSingle sale={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
