import React from "react";

export default function ServiceCenterContainer() {
  return (
    <div className="lg:w-1/2 bg-black/10 p-5 flex gap-7  lg:justify-center items-center">
      <div className="flex gap-5 flex-col max-w-[340px] w-fill">
        <div>
          <p className="">По любым вопросам звоните:</p>
          <h2 className="text-2xl">+998965098741</h2>
        </div>
        <div>
          <p >ШОТА РУСТВЕЛИ 54</p>
          <p >Режим работы:</p>
          <p>
            Понедельник - Пятница: 09:00 - 18:00 <br />
            Суббота - Воскресенье: Выходной
          </p>
        </div>
        <div className=" text-2xl flex flex-col gap-2">
          <h2>Telegram</h2>
          <h2>@Service</h2>
        </div>
      </div>
    </div>
  );
}
