import React from "react";
import Typography from "@/components/Typography";
import Navbar from "@/layouts/Navbar";
import LaporanForm from "./components/LaporanForm";

export default function LingkunganPage() {
  return (
    <section className="w-full flex justify-center lg:py-[10%] lg:px-[5%] bg-secondary relative">
      <Navbar />
      <div className="w-full bg-white h-full lg:rounded-[60px] lg:shadow-md flex flex-col gap-9 px-[7%] py-[3%]">
        <Typography
          variant="h4"
          className="text-black font-bold w-full text-center"
        >
          Laporan Titik Polusi
        </Typography>
        <LaporanForm />
      </div>
    </section>
  );
}
