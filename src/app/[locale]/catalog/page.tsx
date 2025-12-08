import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CatalogMenu from "./CatalogMenu";

export const dynamic = "force-dynamic";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Каталог",
  },
];

export default async function Branches() {
  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <CatalogMenu />
    </div>
  );
}
