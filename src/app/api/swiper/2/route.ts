export function GET() {
  return Response.json({
    data: [
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
    ],
  });
}
