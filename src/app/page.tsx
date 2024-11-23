import CustomNav from "@/components/CustomNav";
import CustomSwiper from "@/components/CustomSwiper";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen">
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
                  <p className="mb-2 text-base font-black">최대 3회 인력교체</p>
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
  );
}
