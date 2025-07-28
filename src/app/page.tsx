import Button from "@/components/ui/Button";
import Map from "@/components/Map";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <section className="w-full h-screen bg-primary-500">
      <Typography variant="h1" weight="extrabold" className="text-center">
        Welcome to Sustainamap
      </Typography>
      <Button size="sm">Click Me</Button>
    </section>
  );
}
