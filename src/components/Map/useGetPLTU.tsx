import { useQuery } from "@tanstack/react-query";

export default function useGetPLTU() {
  const { data: pltuData } = useQuery({
    queryKey: ["pltu"],
    queryFn: async () => {
      const response = await fetch("/pltu.geojson");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  return {
    pltuData,
  };
}
