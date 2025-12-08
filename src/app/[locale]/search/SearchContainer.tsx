"use client";
import { X } from "lucide-react";
import React, { useState } from "react";

export default function SearchContainer() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <div className="flex items-center gap-5 mb-20">
        <input
          type="text"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          placeholder="поиск товаров"
          className="w-full px-3 py-1.5 border-b outline-none border-gray-300 rounded placeholder-black text-black text-[1.5rem] lg:text-[3rem] font-bold"
        />
        <X
          className="size-10 cursor-pointer"
          onClick={() => setSearchItem("")}
        />
      </div>
      {searchItem.trim().length > 0 ? (
        <div>
          <h3 className="text-3xl text-center mb-10">Мы нашли кое-что</h3>
        </div>
      ) : (
        <div className="flex gap-8 flex-col justify-center items-center">
          <div className="flex gap-3 flex-col text-center">
            <h3 className="text-3xl">Ничего не найдено!</h3>
            <p>Попробуйте еще раз</p>
          </div>
        </div>
      )}
    </div>
  );
}
