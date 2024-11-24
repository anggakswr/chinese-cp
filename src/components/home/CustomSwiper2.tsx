"use client";

import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomCard2 from "./CustomCard2";

const items = [
  {
    img: "/home/swiper2/icon-marketing.svg",
    text: "해외 마케팅",
  },
  {
    img: "/home/swiper2/icon-image.svg",
    text: "퍼블리셔",
  },
  {
    img: "/home/swiper2/icon-box.svg",
    text: "캐드원(제도사)",
  },
  {
    img: "/home/swiper2/icon-target.svg",
    text: "해외 세일즈",
  },
  {
    img: "/home/swiper2/icon-call.svg",
    text: "해외 CS",
  },
];

export default function CustomSwiper2() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.text}>
            <CustomCard2 item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
