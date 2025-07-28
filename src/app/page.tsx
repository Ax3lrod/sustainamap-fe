import Button from "@/components/ui/Button";
import Map from "@/components/Map";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <section className="w-full h-screen bg-primary-500">
      <Typography variant="h1" font="body" weight="extrabold" className="text-center">
        Welcome to Sustainamap
      </Typography>
      <Typography variant="bs" font="title" className="text-center mt-4">
        Explore sustainable practices and initiatives around the globe.
      </Typography>
      <Button size="sm">Click Me</Button>
    </section>
  );
}
