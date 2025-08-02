import React from "react";
import Typography from "@/components/Typography";
import Navbar from "@/layouts/Navbar";
import LaporanForm from "./components/laporanForm";

export default function LingkunganPage() {
  return (
    <section className="w-full flex justify-center lg:pt-[10%] lg:px-[5%] bg-secondary relative">
      <Navbar />
      <div className="w-full bg-white h-full rounded-[60px] shadow-md flex justify-center gap-9 px-8 py-[82px]">
        <Typography variant="h4" className="text-black font-semibold">
          Laporan Titik Polusi
        </Typography>
        <LaporanForm />
      </div>
    </section>
  );
}
