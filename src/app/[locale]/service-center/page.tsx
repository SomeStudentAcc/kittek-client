import Breadcrumbs from "@/components/shared/Breadcrumbs";
import React from "react";
import ServiceCenterContainer from "./ServiceCenterContainer";
import ServiceCenterMap from "@/components/shared/ServiceCenterMap";


const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Сервисный центр",
  },
];


export const dynamic = "force-dynamic";

export default async function ServiceCenter() {
  

  

  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div className="mb-20">
        <h2 className="text-center text-3xl mb-5">Сервисный центр</h2>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="w-full lg:w-1/2">
            <ServiceCenterMap  />
          </div>
          <ServiceCenterContainer />
        </div>
      </div>
    </div>
  );
}
