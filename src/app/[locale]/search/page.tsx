import BlogSingle from "@/components/shared/BlogSingle";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

import type { Metadata } from "next";
import SearchContainer from "./SearchContainer";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "поиск — Kittek",
    description: "Читайте последние новости, советы и статьи от Kittek.",
    keywords: ["v", "Блог", "Новости", "Советы", "Техника"],
    openGraph: {
      title: "Поиск — Kittek",
      description: "Читайте последние новости, советы и статьи от Kittek.",
      type: "website",
    },
  };
};

export default async function SearchPage() {
  const scrums = [
    {
      url: "/",
      label: "Главная",
    },
    {
      url: "/",
      label: "Поиск",
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <SearchContainer />
    </div>
  );
}
