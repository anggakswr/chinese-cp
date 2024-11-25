"use client";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomCard2 from "./CustomCard2";
import "swiper/css/navigation";

interface ICustomSwiper2 {
  items: {
    img: string;
    text: string;
  }[];
}

export default function CustomSwiper2(props: ICustomSwiper2) {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        style={{ overflow: "inherit" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {props.items.map((item) => (
          <SwiperSlide key={item.text}>
            <CustomCard2 item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
