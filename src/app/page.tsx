import Map from "@/components/Map";
import Toggle from "@/components/Map/Toggle";

export default function Home() {
  return (
    <section className="w-full min-h-screen relative z-0">
      <Map />
      <Toggle/>
    </section>
  );
}
