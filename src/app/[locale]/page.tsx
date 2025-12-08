import CategoryGrid from "@/components/shared/CategoryGrid";
import MainBanner from "@/components/shared/MainBanner";
import MarqueCarusel from "@/components/shared/MarqueCarusel";
import NewProducts from "@/components/shared/NewProducts";
import Blogs from "@/components/shared/Blogs";
import MainCategories from "@/components/shared/MainCategories";
import MarqueCarusel2 from "@/components/shared/MarqueCarusel2";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <NewProducts title="Новинки" />
      <CategoryGrid />
{/*       <MarqueCarusel />
 */}      <MarqueCarusel2 />
      <MainCategories />
      <NewProducts title="Топ продаж" />
      <Blogs />
    </div>
  );
}
