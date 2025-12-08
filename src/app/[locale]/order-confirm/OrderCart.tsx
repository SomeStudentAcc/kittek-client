import React from "react";
import OrderCartItem from "./OrderCartItem";
import { Button } from "@/components/ui/button";

export default function OrderCart() {
  return (
    <div className=" w-full ">
      <div>
        <OrderCartItem />
        <OrderCartItem />
        <OrderCartItem />
        <OrderCartItem />
      </div>
      <button
        className={`w-full py-3 border rounded-4xl bg-black flex justify-center items-center  text-white mt-5`}
      >
        Оформить заказ
      </button>
    </div>
  );
}
