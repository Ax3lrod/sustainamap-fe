import { useQuery } from "@tanstack/react-query";

export default function useGetForest() {
  const {
    data: forestData,
  } = useQuery({
    queryKey: ["geoData"],
    queryFn: async () =>
      fetch("/forest.json").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch forest data");
        return res.json();
      }),
  });

  return {
    forestData,
  };
}
