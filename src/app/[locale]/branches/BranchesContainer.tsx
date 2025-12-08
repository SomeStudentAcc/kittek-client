"use client";
import BranchesMap from "@/components/shared/BranchesMap";
import BranchSingle from "@/components/shared/BranchSingle";

import React, { useState } from "react";

export default function BranchesContainer() {
  const [selectedView, setSelectedView] = useState(1);

  const data = [
    {
      address:
        "100017 Узбекистан ул. Шарафа Рашидова Ташкент (ор-р Gentlemen's Pub) ",
      contacts: "+998 71 235 55 05",
      id: 1,
      is_active: true,
      latitude: "41.328165356530356",
      longitude: "69.27398595422618",
      sort: 1,
      title: " Шоу-рум Ц5",
      url: "Shou-rum-C5",
      working_hours:
        "Ежедневно с 10:00 - 19:00 ; В воскресенье с 11:00 - 18:00",
    },
    {
      address:
        "ул. Мирабадский район, улица Ферганская 792 (ор-р Кредит Азия, VIP бренд, ТЦ Компас)",
      contacts: "+998 33 512 30 00",
      id: 2,
      is_active: true,
      latitude: "41.243325536523265",
      longitude: "69.32709618632742",
      sort: 2,
      title: "Шоу-ром Куйлюк",
      url: "Shou-rom-Kujlyuk",
      working_hours: "Ежедневно с 10:00 до 19:00",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-semibold">Магазины</h2>
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            onClick={() => setSelectedView(2)}
            className={`py-3 px-8 flex-1 text-center border  ${
              selectedView === 2 ? "border-[3px] border-[#D1D1D1]" : ""
            }`}
          >
            карта
          </button>
          <button
            onClick={() => setSelectedView(1)}
            className={`py-3 px-8 flex-1 text-center border  ${
              selectedView === 1 ? "border-[3px] border-[#D1D1D1]" : ""
            }`}
          >
            список
          </button>
        </div>
      </div>

      <div className="mt-6">
        {selectedView === 1 ? (
          <div className="w-full">
            {data.map((el) => (
              <BranchSingle key={el.id} branch={el} />
            ))}
          </div>
        ) : (
          <div className="w-full mb-20">
            <BranchesMap />
          </div>
        )}
      </div>
    </div>
  );
}
