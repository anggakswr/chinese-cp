import Image from "next/image";

interface IWhiteBox {
  item: { title: string; icon: string };
}

export default function WhiteBox(props: IWhiteBox) {
  return (
    <div className="rounded-lg bg-white p-3">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF1F6]">
        <Image src={props.item.icon} alt="Code Icon" width={24} height={24} />
      </div>

      <p className="mb-3 text-xs font-black">{props.item.title}</p>

      <div className="flex items-center gap-1">
        <p className="text-gray1 text-xs font-black">바로가기</p>

        <Image
          src={`/footer/right-square.svg`}
          alt="Right Square"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
