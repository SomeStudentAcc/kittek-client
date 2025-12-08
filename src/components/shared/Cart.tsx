import { ShoppingCart, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "./CartItem";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <ShoppingCart className="size-[25px] cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle className="text-2xl">Корзина</SheetTitle>
            <SheetDescription>5 товаров корзине</SheetDescription>
          </SheetHeader>
          <div className=" flex-1 flex flex-col gap-5 px-4 overflow-y-auto">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <SheetFooter className="w-full flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span>Итого:</span>
              <span>12 750 000 сум</span>
            </div>
            <Link href={'/order-confirm'} className="flex items-center rounded-[16px]  text-white bg-black  w-full py-3 justify-between px-3 select-none">
              <span className="text-center w-full">Оформить заказ</span>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
