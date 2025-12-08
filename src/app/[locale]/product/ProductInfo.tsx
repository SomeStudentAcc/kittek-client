"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function ProductInfo() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="text-3xl">Холодильник Hofmann RF318CDBS/HF</h1>
        <p>
          <span className="text-[#777777]">Доставка</span>: есть
        </p>
        <p>
          <span className="text-[#777777]">Бренд</span>: Hofmann
        </p>
        <p>
          <span className="text-[#777777]">Модель</span>: RF318CDBS/HF
        </p>
        <p>
          <span className="text-[#777777]">Гарантия</span>: 3 года
        </p>
        <p>
          <span className="text-[#777777]">Цена</span>: 12 750 000 сум
        </p>
      </div>
      {counter > 0 ? (
        <div className="flex items-center rounded-[16px] bg-black/10 max-w-[150px] w-full py-3 justify-between px-3 select-none">
          <Minus onClick={() => setCounter((prev) => prev - 1)} />
          <div>{counter}</div>
          <Plus onClick={() => setCounter((prev) => prev + 1)} />
        </div>
      ) : (
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="bg-black text-lg text-white rounded-[16px] select-none flex justify-center items-center max-w-[250px] w-full py-3"
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
}
