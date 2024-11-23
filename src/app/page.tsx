import CustomNav from "@/components/CustomNav";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <section className="relative z-10">
        <CustomNav />
      </section>

      <Image src={`/home/bg.jpg`} alt="Background" fill />
    </main>
  );
}
