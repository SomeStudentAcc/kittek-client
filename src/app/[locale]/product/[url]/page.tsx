import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductSlider from "../ProductSlider";
import ProductInfo from "../ProductInfo";
import ProductDescription from "../ProductDescription";
import NewProducts from "@/components/shared/NewProducts";

export const dynamic = "force-dynamic";

export default async function Product() {
  const scrums = [
    {
      url: "/",
      label: "Каталог",
    },
    {
      url: "/",
      label: "Бытовая техника",
    },
    {
      url: "/",
      label: "Холодильники",
    },
    {
      url: "/",
      label: "Холодильник HF396BG",
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <div className="mb-10">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="md:w-[60%] xl:w-1/2">
            <ProductSlider />
            <div className="hidden md:block">
              <ProductDescription />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <ProductInfo />
            <div className="md:hidden">
              <ProductDescription />
            </div>
          </div>
        </div>
      </div>
      <div>
        <NewProducts title="Рекомендуем" />
      </div>
    </div>
  );
}
