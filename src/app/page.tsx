import Button from "@/components/ui/Button";
import Map from "@/components/Map";

export default function Home() {
  return (
    <section className="w-full bg-secondary h-screen">
      <h1 className="text-4xl font-bold text-center text-black font-poppins">
        Welcome to Sustainamap
      </h1>
      <Button>Click Me</Button>
      <Map />
    </section>
  );
}
