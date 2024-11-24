import Image from "next/image";

export default function CustomCard() {
  return (
    <div className="bg-white p-8 text-black1">
      <div className="relative mx-auto mb-4 w-[120px]">
        <Image
          src={`/home/swiper/profile.jpg`}
          alt="Swiper Profile"
          width={120}
          height={120}
          className="rounded-full"
        />

        <Image
          className="absolute bottom-0 right-0"
          src={`/home/swiper/flag.svg`}
          alt="Flag"
          width={25}
          height={18}
        />
      </div>

      <div className="mb-6 text-center">
        <p className="text-2xl font-black">Abhishek Gupta</p>
        <p className="font-black text-blue1">마케팅 · 2y+</p>
      </div>

      <div className="text-gray1 text-center">
        <p className="mb-1 inline-block rounded-lg border border-[#C1C5CF] px-2 py-1">
          마케팅 콘텐츠 제작
        </p>

        <p className="mb-1 inline-block rounded-lg border border-[#C1C5CF] px-2 py-1">
          인스타그램 관리
        </p>

        <p className="mb-1 inline-block rounded-lg border border-[#C1C5CF] px-2 py-1">
          트위터 관리
        </p>

        <p className="inline-block rounded-lg border border-[#C1C5CF] px-2 py-1">
          블로그 글 작성
        </p>
      </div>
    </div>
  );
}
