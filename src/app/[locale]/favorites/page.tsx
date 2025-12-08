"use client";

import Link from "next/link";
import { useFavoriteStore } from "@/stores/useFavStore ";
import FavoriteButton from "@/components/shared/FavoriteButton";
import ProductCard from "@/components/shared/ProductCard";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <div className="container mx-auto px-3 md:px-0 mb-20 h-full mt-12">
      <div>
        {favorites.length > 0 ? (
          <div>
            <h2 className="text-center text-3xl mb-5">Избранные</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-5 auto-rows-fr">
              {favorites.map((prod, index) => {
                return <ProductCard key={index} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" text-center text-3xl mb-5">Пока ничего нет</h1>
            <div className="flex justify-center">
              <Link
                href={"/"}
                className="border flex justify-center px-5 py-3 text-black cursor-pointer"
              >
                На главную
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
