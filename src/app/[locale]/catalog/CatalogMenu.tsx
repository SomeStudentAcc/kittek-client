"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Props {
  url?: string;
}

export interface ISubCategory {
  id: number;
  name: string;
  img: string;
}

export interface ICategory {
  id: number;
  name: string;
  img: string;
  subcategories: ISubCategory[];
}

export const categories: ICategory[] = [
  {
    id: 1,
    name: "Кухонная утварь и оргонайзеры",
    img: "/cat1.jpg",
    subcategories: [
      { id: 11, name: "Subcategory 1-1", img: "/cat1.jpg" },
      { id: 12, name: "Subcategory 1-2", img: "/cat1.jpg" },
      { id: 13, name: "Subcategory 1-3", img: "/cat1.jpg" },
      { id: 14, name: "Subcategory 1-4", img: "/cat1.jpg" },
      { id: 15, name: "Subcategory 1-5", img: "/cat1.jpg" },
      { id: 16, name: "Subcategory 1-6", img: "/cat1.jpg" },
    ],
  },
  {
    id: 2,
    name: "Ножи",
    img: "/cat1.jpg",
    subcategories: [
      { id: 21, name: "Subcategory 2-1", img: "/cat1.jpg" },
      { id: 22, name: "Subcategory 2-2", img: "/cat1.jpg" },
      { id: 23, name: "Subcategory 2-3", img: "/cat1.jpg" },
      { id: 24, name: "Subcategory 2-4", img: "/cat1.jpg" },
      { id: 25, name: "Subcategory 2-5", img: "/cat1.jpg" },
      { id: 26, name: "Subcategory 2-6", img: "/cat1.jpg" },
      { id: 27, name: "Subcategory 2-7", img: "/cat1.jpg" },
    ],
  },
  {
    id: 3,
    name: "Посуда для приготовления",
    img: "/cat1.jpg",
    subcategories: [
      { id: 31, name: "Subcategory 3-1", img: "/cat1.jpg" },
      { id: 32, name: "Subcategory 3-2", img: "/cat1.jpg" },
      { id: 33, name: "Subcategory 3-3", img: "/cat1.jpg" },
      { id: 34, name: "Subcategory 3-4", img: "/cat1.jpg" },
    ],
  },
  {
    id: 4,
    name: "Бытовая техника",
    img: "/cat1.jpg",
    subcategories: [{ id: 41, name: "Subcategory 4-1", img: "/cat1.jpg" }],
  },
  {
    id: 5,
    name: "Товары для дома",
    img: "/cat1.jpg",
    subcategories: [
      { id: 51, name: "Subcategory 5-1", img: "/cat1.jpg" },
      { id: 52, name: "Subcategory 5-2", img: "/cat1.jpg" },
      { id: 53, name: "Subcategory 5-3", img: "/cat1.jpg" },
    ],
  },
];

export default function CatalogMenu({ url }: Props) {
  const selectedCategory = url
    ? categories.find((cat) => cat.id.toString() === url) || null
    : null;

  return (
    <div className="flex flex-col md:flex-row gap-4 xl:gap-10">
      <div className="relative hidden md:block ">
        <div className="border w-auto top-30 sticky">
          {categories.map((category) => (
            <Link
              href={`/catalog/${category.id}`}
              key={category.id}
              className={`px-2 xl:px-4 py-2 border-b cursor-pointer block ${
                selectedCategory?.id === category.id ? "bg-black/10 " : ""
              }`}
            >
              <p className="max-w-[200px] lg:max-w-full w-full">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {selectedCategory && url ? (
        <div className="flex-1 px-4">
          <div className="flex flex-col items-center gap-5 mb-10">
            <Image
              src={selectedCategory.img}
              alt="Category Image"
              className="rounded-full object-cover w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]  lg:w-[220px] lg:h-[220px]  xl:w-[250px] xl:h-[250px]  "
              width={400}
              height={400}
            />
            <h2 className="  text-2xl   md:text-3xl   lg:text-4xl  text-center">
              {selectedCategory.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {selectedCategory.subcategories.map((subcategory) => (
              <Link
              href={'/filters'}
                key={subcategory.id}
                className="relative cursor-pointer flex flex-col gap-3 group h-auto"
              >
                <Image
                  src={subcategory.img}
                  alt={subcategory.name}
                  width={1000}
                  height={500}
                  className="
                    w-full h-auto object-cover max-h-[250px] lg:max-h-[500px]
                    transition-all duration-300
                    group-hover:grayscale
                  "
                />
                <p className="text-md xl:text-xl">{subcategory.name}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 text-2xl flex justify-center flex-1  items-center">
          Выберите категорию
        </div>
      )}
    </div>
  );
}
