import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function OrderCartItem() {
  const [counter, setCounter] = useState(0);
  return (
    <div className=" py-2">
      <div className="md:hidden flex flex-col gap-3 relative w-full">
        <div className="border w-fit">
          <Image
            src={"/prodSingle1.png"}
            alt="Product Image"
            width={100}
            height={100}
            className="border"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className=" w-full text-end font-medium xl:text-[18px] leading-[20px]">
            Холодильник Hofmann RF318CDBS/HF
          </h3>
          <div className="flex justify-between">
            <span>Цена:</span>
            <p>12 750 000 сум</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Количество:</p>
          <div className="flex items-center rounded-[16px] bg-black/10 max-w-[120px] w-full  justify-between  select-none">
            <button
              className="p-2"
              disabled={counter <= 0}
              onClick={() => setCounter((prev) => prev - 1)}
            >
              <Minus />
            </button>
            <div className="p-2">{counter}</div>
            <button
              className="p-2"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              <Plus />
            </button>
          </div>
        </div>

        <X className="absolute top-1 right-1 " />
      </div>

      <div className="hidden md:flex justify-between items-center">
        <div className="border mr-1">
          <Image
            src={"/prodSingle1.png"}
            alt="Product Image"
            width={100}
            height={100}
            className="xl:w-[110px] w-[90px] h-auto border"
          />
        </div>

        <div>
          <p className="max-w-[150px] md:max-w-[200px] w-full text-[14px] xl:text-base">
            Холодильник Hofmann RF318CDBS/HF
          </p>
          <p>
            <span className="text-[14px] xl:text-base">Цена: 12 750 000 сум</span>
          </p>
        </div>
        <div className="flex items-center rounded-[16px] bg-black/10 max-w-[105px] w-full  justify-between select-none">
          <button
            className="p-2"
            disabled={counter <= 0}
            onClick={() => setCounter((prev) => prev - 1)}
          >
            <Minus />
          </button>
          <div className="p-2">{counter}</div>
          <button
            className="p-2"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            <Plus />
          </button>
        </div>
        <X />
      </div>
    </div>
  );
}
