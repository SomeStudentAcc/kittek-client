import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CatalogMenu from "../CatalogMenu";

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

export default async function CatalogSingle({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <CatalogMenu url={url} />
    </div>
  );
}
