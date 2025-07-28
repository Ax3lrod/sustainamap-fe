"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useState, useEffect } from "react";
import MapSidebar from "./MapSidebar";
import useGetForest from "./useGetForest";

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
  const { forestData } = useGetForest();
  const [showAQILayer, setShowAQILayer] = useState(false);
  const [showForestLayer, setShowForestLayer] = useState(false);
  const [showFactoryLayer, setShowFactoryLayer] = useState(false);
  const [showReportLayer, setShowReportLayer] = useState(false);

  return (
    <>
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {showAQILayer &&
      <>
      <TileLayer
        url={`https://airquality.googleapis.com/v1/mapTypes/US_AQI/heatmapTiles/{z}/{x}/{y}?key=${googleapikey}`}
        opacity={0.4}
      />
      <TileLayer
        url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${aqicnApiKey}`}
        attribution='Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>'
      /> </>}
      {showForestLayer && forestData && (
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
          }    
        }}
        onEachFeature={(feature, layer) => {
          const name = feature?.properties?.name || "Unknown";
          const forest = feature?.properties?.numerical_value ?? "N/A";
          layer.bindPopup(`Wilayah: ${name}<br/>Forest Cover: ${forest}%`);
        }}
      />
      )}
    </MapContainer>
    <MapSidebar
      showAQILayer={showAQILayer}
      setShowAQILayer={setShowAQILayer}
      showForestLayer={showForestLayer}
      setShowForestLayer={setShowForestLayer}
      showFactoryLayer={showFactoryLayer}
      setShowFactoryLayer={setShowFactoryLayer}
      showReportLayer={showReportLayer}
      setShowReportLayer={setShowReportLayer}
    ></MapSidebar>
    </>
  );
}

export default Map;
