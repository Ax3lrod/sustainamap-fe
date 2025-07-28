"use client"

import Typography from "../Typography";

type MapSideBarProps = {
    showAQILayer: boolean;
    setShowAQILayer: (value: boolean) => void;
    showFactoryLayer: boolean;
    setShowFactoryLayer: (value: boolean) => void;
    showReportLayer: boolean;
    setShowReportLayer: (value: boolean) => void;
    showForestLayer: boolean;
    setShowForestLayer: (value: boolean) => void;
}

export default function MapSidebar({showAQILayer,setShowAQILayer,showFactoryLayer,setShowFactoryLayer,showReportLayer,setShowReportLayer,showForestLayer,setShowForestLayer,}: MapSideBarProps) {
    const items = [
        {
            name: "Kualitas Udara",
            active: showAQILayer,
            toggle: () => setShowAQILayer(!showAQILayer),
        },
        {
            name: "Tutupan Hutan",
            active: showForestLayer,
            toggle: () => setShowForestLayer(!showForestLayer)
        },
        {
            name: "PLTU/Pabrik",
            active: showFactoryLayer,
            toggle: () => setShowFactoryLayer(!showFactoryLayer),
        },
        {
            name: "Laporan Warga",
            active: showReportLayer,
            toggle: () => setShowReportLayer(!showReportLayer),
        }
    ]
  return (
    <div className="absolute bottom-0 w-full grid-cols-2 gap-6 grid rounded-t-4xl md:w-fit md:top-48 md:flex md:flex-col md:right-0 z-10 bg-secondary h-fit py-10 px-6 md:rounded-l-4xl md:rounded-r-none md:space-y-4">
    {items.map((item) => (
      <button key={item.name} onClick={item.toggle} className={`rounded-full py-2 px-6 cursor-pointer ${
            item.active ? "bg-primary-600 border-solid border-2 border-primary-600" : "bg-secondary border-solid border-2 border-primary-600"}`}>
        <Typography variant="bs" font="body" weight="medium" className={`${item.active ?"text-secondary": "text-primary-600"}`}> {item.name} </Typography>
      </button>
    ))}
    </div>
  );
}
