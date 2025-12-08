import Image from "next/image";

export default function MainCategorySingle() {
  return (
    <div className="relative cursor-pointer flex flex-col gap-3 group">
      <Image
        src={"/cat1.jpg"}
        alt="Sale Image"
        width={1000}
        height={500}
        className="
          w-full h-auto object-cover max-h-[540px]
          transition-all duration-300
          group-hover:grayscale
        "
      />
      <p className="text-xl">Бытовая техника</p>
    </div>
  );
}
