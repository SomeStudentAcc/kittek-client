import { Minus, Plus, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

export default function ProductCardBtn() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-black/10  rounded-bl-md rounded-br-md flex justify-center items-center">
      {counter === 0 ? (
        <div  onClick={() => setCounter(1)} className="flex w-full justify-center items-center py-2">
          <ShoppingBag />
        </div>
      ) : (
        <div className="flex items-center rounded-[16px] max-w-[150px] w-full py-2 justify-between px-3 select-none">
          <Minus onClick={() => setCounter((prev) => prev - 1)} />
          <div>{counter}</div>
          <Plus onClick={() => setCounter((prev) => prev + 1)} />
        </div>
      )}
    </div>
  );
}
