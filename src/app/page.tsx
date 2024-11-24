import CustomNav from "@/components/CustomNav";
import CustomSwiper from "@/components/CustomSwiper";
import WhiteBox from "@/components/footer/WhiteBox";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="relative min-h-screen text-white">
        <section className="relative z-10">
          {/* navbar */}
          <CustomNav />

          <div className="mx-auto max-w-[1024px]">
            <div className="grid grid-cols-2 pt-20">
              <div>
                <p className="mb-8 inline-block rounded-lg bg-white px-2 py-1 text-lg font-black text-[#40E2E8]">
                  풀타임, 파트타임
                </p>

                <h1 className="mb-4 text-4xl font-black">
                  최고의 실력을 가진
                  <br />
                  외국인 인재를 찾고 계신가요?
                </h1>

                <h2 className="mb-4 text-2xl font-black">
                  법률 및 인사관리 부담없이
                  <br />
                  1주일 이내에 원격으로 채용해보세요.
                </h2>

                <h3 className="mb-20 text-lg font-black underline">
                  개발자가 필요하신가요?
                </h3>

                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div className="border-t">
                    <p className="mb-2 text-base font-black">평균 월 120만원</p>
                    <p className="font-black">
                      임금을 해당 국가를 기준으로 계산합니다.
                    </p>
                  </div>

                  <div className="border-t">
                    <p className="mb-2 text-base font-black">
                      최대 3회 인력교체
                    </p>
                    <p className="font-black">
                      막상 채용해보니 맞지 않아도 걱정하지 마세요.
                    </p>
                  </div>

                  <div className="border-t">
                    <p className="mb-2 text-base font-black">
                      평균 3일, 최대 10일
                    </p>
                    <p className="font-black">
                      급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CustomSwiper />
              </div>
            </div>
          </div>
        </section>

        {/* bg img */}
        <Image src={`/home/bg.jpg`} alt="Background" fill />
      </main>

      <footer className="bg-[#FBFBFB] py-20 text-black1">
        <div className="mx-auto mb-10 flex max-w-[1024px] gap-20">
          <div className="w-1/4">
            <Image
              src={`/footer-logo.svg`}
              alt="Footer Logo"
              width={187}
              height={34}
              className="mb-3"
            />

            <p className="mb-5 text-sm font-black">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>

            <p className="text-gray1 mb-2 text-[13px] text-xs font-black">
              010-0000-0000
            </p>

            <p className="text-gray1 text-[13px] text-xs font-black">
              aaaaa@naver.com
            </p>
          </div>

          <div className="w-3/4">
            <div className="grid grid-cols-4 gap-3">
              {whiteBoxes.map((whiteBox) => (
                <WhiteBox key={whiteBox.title} item={whiteBox} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mb-10 flex max-w-[1024px] gap-20">
          <div className="w-1/4">
            <div className="flex gap-2">
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">상호명</p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  하이퍼하이어
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  Hyperhire India Private Limited
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  대표 CEO
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">김주현</p>
                <p className="text-gray1 mb-2 text-xs font-black">Juhyun Kim</p>
              </div>
            </div>
          </div>

          <div className="w-3/4">
            <div className="flex gap-8">
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  사업자등록번호 CIN
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  427-86-01187
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  U74110DL2016PTC290812{" "}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  주소 ADDRESS
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  서울특별시 강남대로 479, 지하 1층 238호{" "}
                </p>
                <p className="text-gray1 mb-2 text-xs font-black">
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1024px]">
          <p className="text-gray1 text-[13px] text-xs font-black">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </footer>
    </>
  );
}

const whiteBoxes = [
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
];
