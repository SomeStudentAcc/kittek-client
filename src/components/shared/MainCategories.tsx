import React from "react";
import MainCategorySingle from "./MainCategorySingle";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function MainCategories() {
  return (
    <div className="container mx-auto px-3 md:px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
      {arr.map((el, i) => (
        <MainCategorySingle key={i} />
      ))}
    </div>
  );
}
