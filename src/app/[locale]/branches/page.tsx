import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BranchesContainer from "./BranchesContainer";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const generateMetadata = (): Metadata => {
  return {
    title: "Магазины | Hofmann",
    description:
      "Найдите ближайший магазин бытовой техники Hofmann в вашем городе.",
    keywords: ["Hofmann", "Магазины", "Адреса", "Контакты", "Бытовая техника"],
    openGraph: {
      title: "Магазины | Hofmann",
      description: "Посетите магазины Hofmann по всей стране.",
      type: "website",
    },
  };
};

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Магазины",
  },
];

export default async function Branches() {
  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <BranchesContainer  />
    </div>
  );
}
