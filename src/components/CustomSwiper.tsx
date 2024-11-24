"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import Swiper core and required modules
import { EffectCards, Navigation } from "swiper/modules";
import CustomCard from "./home/CustomCard";

export default function CustomSwiper() {
  return (
    <>
      <Swiper
        className="w-[292px]"
        effect="cards"
        modules={[EffectCards, Navigation]}
        grabCursor
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CustomCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
