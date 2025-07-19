import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";

const googleapikey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY;
const aqicnApiKey = process.env.NEXT_PUBLIC_AQICN_API_KEY;

function Map() {
  const [center, setCenter] = useState<[number, number]>([-6.2, 106.816666]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.error("Geolocation permission denied or unavailable.");
      }
    );
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TileLayer
        url={`https://airquality.googleapis.com/v1/mapTypes/US_AQI/heatmapTiles/{z}/{x}/{y}?key=${googleapikey}`}
        opacity={0.4}
      />
      <TileLayer
        url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${aqicnApiKey}`}
        attribution='Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>'
      />
    </MapContainer>
  );
}

export default Map;
