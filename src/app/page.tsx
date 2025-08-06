import Map from "@/components/Map";
import Toggle from "@/components/Map/Toggle";
import Navbar from "@/layouts/Navbar";

export default function Home() {
  return (
    <section className="w-screen h-screen bg-secondary relative">
      <Navbar />
      <Map />
      <Toggle/>
    </section>
  );
}
