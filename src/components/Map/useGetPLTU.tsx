import { useState, useEffect } from "react";

export default function useGetPLTU() {
  const [pltuData, setPltuData] = useState(null);

  useEffect(() => {
    fetch("/pltu.geojson")
      .then((res) => res.json())
      .then(setPltuData)
      .catch(console.error);
  }, []);

  return { pltuData };
}
