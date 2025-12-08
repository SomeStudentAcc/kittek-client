/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useRef, useState } from "react";

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
    working_hours: "Ежедневно с 10:00 - 19:00 ; В воскресенье с 11:00 - 18:00",
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

export default function BranchesMap() {
  const mapRef = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  const handleMapLoad = (ymap: any) => {
    mapRef.current = ymap;
    setMapReady(true);
  };

  const goToBranch = (latitude: number, longitude: number) => {
    if (mapRef.current && typeof mapRef.current.setCenter === "function") {
      mapRef.current.setCenter([latitude, longitude], 14, { duration: 500 });
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 md:col-span-9">
        <YMaps>
          <div style={{ width: "100%", height: "600px" }}>
            <Map
              defaultState={{
                center: [41.33706448715841, 69.355573846876],
                zoom: 12,
              }}
              width="100%"
              height="100%"
              instanceRef={handleMapLoad}
            >
              {/*   {branches.map((location) => (
                <Placemark
                  key={location.id}
                  geometry={[location.latitude, location.longitude]}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/placeMark.svg",
                    iconImageSize: [130, 130],
                  }}
                  properties={{
                    balloonContent: `
                      <div style="padding: 25px; background: white; color:black; max-width: 320px; width: 100%; font-family: sans-serif;">
                        <strong style=" color:black; ">${location.title}</strong><br/>
                        ${location.contacts}
                      </div>
                    `,
                  }}
                  modules={["geoObject.addon.balloon"]}
                />
              ))} */}
            </Map>
          </div>
        </YMaps>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-3 md:max-h-[600px]  md:overflow-y-auto  custom-scrollbar md:pr-2">
        {data.map((branch) => (
          <div
            key={branch.id}
            onClick={() =>
              goToBranch(Number(branch.latitude), Number(branch.longitude))
            }
            className="flex gap-5 md:gap-0 flex-col cursor-pointer border-[#F3F3F3] border-b py-10"
          >
            <div className="flex flex-col justify-between">
              <h4 className="uppercase text-lg font-semibold mb-3">
                {branch?.title}
              </h4>
              <div className="flex flex-col gap-1 max-w-[300px] w-full">
                <p className="uppercase font-semibold">адрес</p>
                <span className="text-[14px]">{branch?.address}</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 max-w-[300px] w-full">
              <div className="flex flex-col gap-1">
                <h4 className="uppercase text-lg font-semibold">
                  режим работы
                </h4>
                <span className="text-[14px]">{branch?.working_hours}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="uppercase text-lg font-semibold">контакты</h4>
                <span>{branch?.contacts}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
