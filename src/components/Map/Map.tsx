import { MapContainer, TileLayer, ZoomControl, GeoJSON } from "react-leaflet";
import useGetForest from "./useGetForest";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { useEffect, useState } from "react";

const aqicn_token = process.env.NEXT_PUBLIC_AQICN_API_TOKEN;
const googlecloud_token = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_TOKEN;

export default function MyMap() {
  const [defaultPos, setdefaultPos] = useState<[number, number]>([
    -6.1944, 106.8229,
  ]);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setdefaultPos([latitude, longitude]);
      });
    }
  }, []);

  const { forestData } = useGetForest();

  return (
    <MapContainer
      center={defaultPos}
      zoom={8}
      scrollWheelZoom={true}
      className="w-full h-full absolute z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${aqicn_token}`}
        attribution='Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>'
      />
      <TileLayer
        url={`https://airquality.googleapis.com/v1/mapTypes/US_AQI/heatmapTiles/{z}/{x}/{y}?key=${googlecloud_token}`}
        opacity={0.5}
      />
      <GeoJSON
        data={forestData}
        style={(feature) => {
          const forest = feature?.properties?.numerical_value;
          let fillColor;
          if (forest > 80) fillColor = "#005a32";
          else if (forest > 40) fillColor = "#66c2a4";
          else if (forest > 0) fillColor = "#ccece6";
          else fillColor = "#ccc";
          return {
            color: "#FFF",
            weight: 1,
            fillOpacity: 0.7,
            fillColor,
          };
        }}
        onEachFeature={(feature, layer) => {
          const name = feature?.properties?.name;
          const score = feature?.properties?.numerical_value;
          layer.bindPopup(`${name} <br/> ${score}`);
        }}
      />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
