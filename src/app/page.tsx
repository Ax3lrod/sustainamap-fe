import Map from "@/components/Map";
import Navbar from "@/layouts/Navbar";

export default function Home() {
  return (
    <section className="w-full h-screen bg-primary-500 relative">
      <Navbar />
      <Map></Map>
    </section>
  );
}
