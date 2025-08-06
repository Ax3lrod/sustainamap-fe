import Map from "@/components/Map";
import Navbar from "@/layouts/Navbar";

export default function Home() {
  return (
    <section className="w-screen h-screen bg-secondary relative">
      <Navbar />
      <Map />
    </section>
  );
}
