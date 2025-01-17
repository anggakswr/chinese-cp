"use client";

import CustomNav from "@/components/CustomNav";
import CustomSwiper from "@/components/home/CustomSwiper";
import WhiteBox from "@/components/footer/WhiteBox";
import CustomSwiper2 from "@/components/home/CustomSwiper2";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface IHomepage {
  footer1: {
    title: string;
    icon: string;
  }[];
  swiper2: {
    img: string;
    text: string;
  }[];
}

export default function Homepage(props: IHomepage) {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".title", {
      y: 0,
      opacity: 1,
    });

    tl.to(".title2", {
      opacity: 1,
    });

    tl.to(".title3", {
      opacity: 1,
    });

    tl.to(".title4", {
      opacity: 1,
    });

    tl.to(".title5", {
      opacity: 1,
    });
  });

  return (
    <>
      <main className="relative min-h-screen pb-20 text-white">
        <section className="relative z-10">
          {/* navbar */}
          <CustomNav />

          <div className="mx-auto max-w-[1025px] px-3">
            <div className="grid gap-8 py-20 md:grid-cols-2">
              <div>
                <div className="title4 opacity-0 !duration-300">
                  <p className="mb-8 inline-block rounded-lg bg-[#8BC4FF] px-2 py-1 text-lg font-black text-white md:bg-white md:text-[#40E2E8]">
                    풀타임, 파트타임
                  </p>
                </div>

                <div className="title translate-y-10 opacity-0 !duration-500">
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

                  <h3 className="mb-20 hidden text-lg font-black underline md:block">
                    개발자가 필요하신가요?
                  </h3>
                </div>

                <div className="title2 opacity-0 !duration-500">
                  <div className="hidden grid-cols-3 gap-8 text-sm md:grid">
                    <div className="border-t">
                      <p className="mb-2 text-base font-black">
                        평균 월 120만원
                      </p>
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
              </div>

              <div className="title5 opacity-0 !duration-500">
                <div className="flex-col items-center justify-center md:flex">
                  <CustomSwiper />
                </div>
              </div>
            </div>

            <div className="pb-10 md:hidden">
              <div className="flex">
                <div className="w-40">
                  <Checkbox defaultSelected isDisabled className="opacity-100">
                    한국어 능력
                  </Checkbox>
                </div>

                <Checkbox defaultSelected isDisabled className="opacity-100">
                  업무 수행 능력
                </Checkbox>
              </div>

              <div className="flex">
                <div className="w-40">
                  <Checkbox defaultSelected isDisabled className="opacity-100">
                    겸업 여부
                  </Checkbox>
                </div>

                <Checkbox defaultSelected isDisabled className="opacity-100">
                  평판 조회
                </Checkbox>
              </div>

              <p className="mt-5 font-black text-[#FBFF23] underline">
                개발자가 필요하신가요?
              </p>
            </div>

            <div className="title3 opacity-0 duration-500">
              <div className="hidden md:block">
                <CustomSwiper2 items={props.swiper2} />
              </div>
            </div>
          </div>
        </section>

        {/* bg img */}
        <Image src={`/home/bg.jpg`} alt="Background" fill />
      </main>

      <footer className="bg-[#FBFBFB] px-3 py-20 text-black1">
        <div className="mx-auto mb-10 flex max-w-[1025px] flex-col gap-20 md:flex-row">
          <div className="w-full md:w-1/4">
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

            <p className="mb-2 text-[13px] text-xs font-black text-gray1">
              010-0000-0000
            </p>

            <p className="text-[13px] text-xs font-black text-gray1">
              aaaaa@naver.com
            </p>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {props.footer1.map((whiteBox) => (
                <WhiteBox key={whiteBox.title} item={whiteBox} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mb-10 flex max-w-[1025px] flex-col gap-20 md:flex-row">
          <div className="w-full md:w-1/4">
            <div className="flex gap-2">
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">상호명</p>
                <p className="mb-2 text-xs font-black text-gray1">
                  하이퍼하이어
                </p>
                <p className="mb-2 text-xs font-black text-gray1">
                  Hyperhire India Private Limited
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  대표 CEO
                </p>
                <p className="mb-2 text-xs font-black text-gray1">김주현</p>
                <p className="mb-2 text-xs font-black text-gray1">Juhyun Kim</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex flex-col gap-8 md:flex-row">
              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  사업자등록번호 CIN
                </p>
                <p className="mb-2 text-xs font-black text-gray1">
                  427-86-01187
                </p>
                <p className="mb-2 text-xs font-black text-gray1">
                  U74110DL2016PTC290812{" "}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-black text-[#343741]">
                  주소 ADDRESS
                </p>
                <p className="mb-2 text-xs font-black text-gray1">
                  서울특별시 강남대로 479, 지하 1층 238호{" "}
                </p>
                <p className="mb-2 text-xs font-black text-gray1">
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1025px]">
          <p className="text-[13px] text-xs font-black text-gray1">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </footer>
    </>
  );
}
