import Link from "next/link";
import React from "react";

type GridConfig = {
  colSpan: string;
  rowSpan: string;
  height: string;
};

const getGridConfig = (index: number) => {
  const configs: { [key: number]: GridConfig } = {
    0: { colSpan: "col-span-6", rowSpan: "row-span-2", height: "h-full" },
    1: { colSpan: "col-span-6", rowSpan: "", height: "h-40 lg:h-56 xl:h-90" },
    2: { colSpan: "col-span-6", rowSpan: "", height: "h-40 lg:h-56 xl:h-90" },
  };

  return (
    configs[index] || { colSpan: "col-span-3", rowSpan: "", height: "h-56" }
  );
};


const data = ["/grid1.jpg", "/grid2.jpg", "/grid3.jpg"];

export default function CategoryGrid() {
  return (
    <div>
      <div className="container mx-auto px-3 md:px-0 mb-5 hidden md:block">
        <div
          className="grid grid-cols-6 gap-5 overflow-hidden "
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "auto",
      
          }}
        >
          {data.map((banner, index) => {
            const { colSpan, rowSpan, height } = getGridConfig(index);

            return (
              <Link
                key={index}
                href={`#`}
                className={`${colSpan} ${rowSpan} ${height} w-full ${index} bg-cover bg-center  relative cursor-pointer `}
                style={{ backgroundImage: `url(${banner})` }}
              >
             
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
