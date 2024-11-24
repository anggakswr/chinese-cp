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

export default function CustomSwiper() {
  return (
    <div className="flex items-center justify-center gap-8">
      <button className="custom-prev">
        <ChevronLeft size={30} />
      </button>

      <Swiper
        initialSlide={1}
        className="w-[292px]"
        effect="cards"
        modules={[EffectCards, Navigation]}
        grabCursor
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // onSlideChange={() => console.log("slide change")}
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

      <button className="custom-next">
        <ChevronRight size={30} />
      </button>
    </div>
  );
}