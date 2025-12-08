import React from "react";

interface IBranch {
  address: string;
  contacts: string;
  id: number;
  is_active: boolean;
  latitude: string;
  longitude: string;
  sort: number;
  title: string;
  url: string;
  working_hours: string;
}

interface Props {
    branch: IBranch;
}

export default function BranchSingle({ branch }: Props) {
  return (
    <div className="flex gap-5 md:gap-0 flex-col md:flex-row md:justify-between border-b py-10">
      <div className="flex flex-col justify-between">
        <h4 className="uppercase text-2xl lg:text-4xl font-semibold mb-3">
          {branch?.title}
        </h4>
        <div className="flex flex-col gap-1 max-w-[390px] w-full">
          <p className="uppercase font-semibold ">адрес</p>
          <span className="">{branch?.address}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 max-w-[390px] w-full">
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-lg font-semibold ">режим работы</h4>
          <span className="">{branch?.working_hours}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-lg font-semibold">контакты</h4>
          <span>{branch?.contacts}</span>
        </div>
      </div>
    </div>
  );
}
