"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useController, Control, Path } from "react-hook-form";
import { Input } from "@heroui/react";
import { z } from "zod";
import { LaporanSubmissionSchema } from "@/validation/laporan";
import { useEffect, useState } from "react";

type FormValues = z.infer<typeof LaporanSubmissionSchema>;

type LocationPickerProps = {
  nameLat: Path<FormValues>;
  nameLng: Path<FormValues>;
  control: Control<FormValues>;
  defaultPosition?: [number, number];
};

export default function LocationPicker({
  nameLat,
  nameLng,
  control,
  defaultPosition = [-6.2, 106.8],
}: LocationPickerProps) {
  const [initialPosition, setInitialPosition] =
    useState<[number, number]>(defaultPosition);

  const {
    field: { value: latRaw, onChange: setLat },
  } = useController({
    name: nameLat,
    control,
    defaultValue: initialPosition[0],
  });

  const {
    field: { value: lngRaw, onChange: setLng },
  } = useController({
    name: nameLng,
    control,
    defaultValue: initialPosition[1],
  });

  const lat =
    typeof latRaw === "number" ? latRaw : Number(latRaw) || initialPosition[0];
  const lng =
    typeof lngRaw === "number" ? lngRaw : Number(lngRaw) || initialPosition[1];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setLat(userLat);
        setLng(userLng);
        setInitialPosition([userLat, userLng]);
      });
    }
  }, [setLat, setLng]);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLat(e.latlng.lat);
        setLng(e.latlng.lng);
      },
    });

    return <Marker position={[lat, lng]} />;
  };

  const RecenterMap = () => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng], map.getZoom());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lat, lng, map]);
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [newLat, newLng] = e.target.value
      .replace("[", "")
      .replace("]", "")
      .split(",")
      .map((v) => parseFloat(v.trim()));
    if (!isNaN(newLat)) setLat(newLat);
    if (!isNaN(newLng)) setLng(newLng);
  };

  return (
    <div className="w-full flex flex-col h-full gap-9">
      <div className="h-[400px] rounded-3xl w-full overflow-hidden">
        <MapContainer
          center={initialPosition}
          zoom={10}
          className="h-full w-full"
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
          <RecenterMap />
        </MapContainer>
      </div>
      <Input
        label="Koordinat Lokasi"
        placeholder="[latitude, longitude]"
        value={`[${lat}, ${lng}]`}
        onChange={handleInputChange}
        labelPlacement="outside-top"
        className="w-full"
        classNames={{
          label: "font-bold text-black",
        }}
        isRequired
      />
    </div>
  );
}
