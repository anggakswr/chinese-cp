import Image from "next/image";
import React from "react";

interface ICustomCard2 {
  item: {
    img: string;
    text: string;
  };
}

export default function CustomCard2(props: ICustomCard2) {
  return (
    <div className="flex items-center gap-5 rounded-lg bg-white/30 p-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/40">
        <Image width={32} height={32} alt="Swiper 2" src={props.item.img} />
      </div>

      <p className="text-xl">{props.item.text}</p>
    </div>
  );
}
