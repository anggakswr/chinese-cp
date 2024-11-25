"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import Swiper core and required modules
import { EffectCards, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomCard from "./CustomCard";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function CustomSwiper() {
  return (
    <>
      <div className="mb-6 flex items-center justify-center">
        <Chip
          size="lg"
          radius="sm"
          className="bg-[#E9F7EF] text-lg font-black text-[#00C696]"
          startContent={
            <Image
              src={`/home/swiper/dollar.svg`}
              alt="Dollar"
              width={26}
              height={26}
            />
          }
        >
          월 100만원
        </Chip>
      </div>

      <div className="flex items-center justify-center gap-8">
        <button className="custom-prev z-10">
          <ChevronLeft size={30} />
        </button>

        <Swiper
          initialSlide={1}
          className="w-[200px] md:w-[292px]"
          effect="cards"
          modules={[EffectCards, Navigation]}
          grabCursor
          cardsEffect={{
            perSlideOffset: 40,
            perSlideRotate: 0,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }} // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="overflow-hidden rounded-lg">
            <CustomCard />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-lg">
            <CustomCard />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-lg">
            <CustomCard />
          </SwiperSlide>
        </Swiper>

        <button className="custom-next z-10">
          <ChevronRight size={30} />
        </button>
      </div>
    </>
  );
}
