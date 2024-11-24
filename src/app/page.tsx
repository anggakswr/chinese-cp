import Homepage from "@/components/home/Homepage";
import getDomain from "@/helpers/getDomain";

export default async function Page() {
  const domain = await getDomain();

  const res = await Promise.all([
    fetch(`${domain}/api/footer/1`),
    fetch(`${domain}/api/swiper/2`),
  ]);

  const footer1 = await res[0].json();
  const swiper2 = await res[1].json();

  return (
    <>
      <Homepage footer1={footer1.data} swiper2={swiper2.data} />
    </>
  );
}
