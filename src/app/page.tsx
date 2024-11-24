import Homepage from "@/components/home/Homepage";

export default async function Page() {
  const res = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/footer/1`),
    fetch(`${process.env.BASE_URL}/api/swiper/2`),
  ]);

  const footer1 = await res[0].json();
  const swiper2 = await res[1].json();

  return (
    <>
      <Homepage footer1={footer1.data} swiper2={swiper2.data} />
    </>
  );
}
