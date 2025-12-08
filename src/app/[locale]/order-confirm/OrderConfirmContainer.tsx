"use client";
import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import OrderCart from "./OrderCart";

export default function OrderConfirmContainer() {
  const [isDelivery, setIsDelivery] = useState(true);
  return (
    <div>
      <h1 className="text-3xl mb-5">Оформление заказа</h1>

      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex-1">
          <div className="mb-5">
            <div className="flex gap-3">
              <button
                onClick={() => setIsDelivery(true)}
                className={`w-full py-3 border rounded-4xl ${
                  isDelivery ? "bg-black/10" : "bg-white"
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => setIsDelivery(false)}
                className={`w-full py-3 border rounded-4xl ${
                  !isDelivery ? "bg-black/10" : "bg-white"
                }`}
              >
                Самовывоз
              </button>
            </div>
          </div>
          <DeliveryInfo />
        </div>
        <div className="max-w-[400px] xl:max-w-[600px] w-full">
          <OrderCart />
        </div>
      </div>
    </div>
  );
}
