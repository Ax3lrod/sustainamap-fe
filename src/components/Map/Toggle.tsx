"use client"

import React from "react";
import Typography from "../Typography";

interface Toggle {
    showAQILayer: boolean;
    setShowAQILayer: (value: boolean) => void;
    showPLTULayer: boolean;
    setShowPLTULayer: (value: boolean) => void; 
    showForestLayer: boolean;
    setShowForestLayer: (value: boolean) => void;
    showReportLayer: boolean;
    setShowReportLayer: (value: boolean) => void;
}

export default function Toggle ({showAQILayer, setShowAQILayer, showPLTULayer, setShowPLTULayer, showForestLayer, setShowForestLayer, showReportLayer, setShowReportLayer} : Toggle) {
    const clickAQI = () => {
        setShowAQILayer(!showAQILayer)
    }

    const clickPLTU = () => {
        setShowPLTULayer(!showPLTULayer)
    }

    const clickForest = () => {
        setShowForestLayer(!showForestLayer)
    }

    const clickReport = () => {
        setShowReportLayer(!showReportLayer)
    }

    return (
        <div className="bg-secondary md:w-48 md:space-y-6 h-fit px-6 justify-center items-center flex-col md:rounded-l-xl py-8 absolute bottom-0 grid grid-cols-2 gap-4 md:flex rounded-t-xl w-full md:top-48 md:z-10 md:right-0">
             <button onClick={clickAQI}  className={showAQILayer ? "bg-primary-600 w-full py-1 rounded-full border-1 border-secondary"  : "bg-secondary w-full py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showAQILayer ?"text-secondary":"text-black"}>
                    Kualitas Udara
                </Typography>
            </button>
             <button onClick={clickPLTU}  className={showPLTULayer ? "bg-primary-600 w-full py-1 rounded-full border-1 border-secondary"  : "bg-secondary w-full py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showPLTULayer ?"text-secondary":"text-black"}>
                    PLTU/Pabrik
                </Typography>
            </button>
            <button onClick={clickForest}  className={showForestLayer ? "bg-primary-600 w-full py-1 rounded-full border-1 border-secondary"  : "bg-secondary w-full py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showForestLayer ?"text-secondary":"text-black"}>
                    Tutupan Hutan
                </Typography>
            </button>
            <button onClick={clickReport}  className={showReportLayer ? "bg-primary-600 w-full py-1 rounded-full border-1 border-secondary"  : "bg-secondary w-full py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showReportLayer ?"text-secondary":"text-black"}>
                    Report Warga
                </Typography>
            </button>
        </div>
    )
}