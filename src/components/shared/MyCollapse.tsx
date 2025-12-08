"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function MyCollapse({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b  flex flex-col ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center select-none cursor-pointer ${
          isOpen ? "pt-3 md:pt-4 mb-3" : "md:py-4 py-3"
        }`}
      >
        <h2 className="text-xl md:text-3xl">{title}</h2>
        {isOpen ? <Minus size={35} /> : <Plus size={35} />}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-3 md:pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
