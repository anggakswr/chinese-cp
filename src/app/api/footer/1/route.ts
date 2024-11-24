export function GET() {
  return Response.json({
    data: [
      {
        title: "해외 개발자 원격 채용",
        icon: "/footer/icon-code.svg",
      },
      {
        title: "외국인 원격 채용 (비개발)",
        icon: "/footer/icon-avatar.svg",
      },
      {
        title: "한국어 가능 외국인 채용",
        icon: "/footer/icon-kor.svg",
      },
      {
        title: "해외 개발자 활용 서비스",
        icon: "/footer/icon-gear.svg",
      },
    ],
  });
}
