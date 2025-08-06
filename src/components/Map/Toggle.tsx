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
        <div className="bg-secondary w-fit space-y-6 h-fit px-6 justify-center items-center flex flex-col rounded-l-xl py-8 absolute top-48 z-10 right-0">
             <button onClick={clickAQI}  className={showAQILayer ? "bg-primary-600 px-4 py-1 rounded-full border-1 border-secondary"  : "bg-secondary px-4 py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showAQILayer ?"text-secondary":"text-black"}>
                    Kualitas Udara
                </Typography>
            </button>
             <button onClick={clickPLTU}  className={showPLTULayer ? "bg-primary-600 px-4 py-1 rounded-full border-1 border-secondary"  : "bg-secondary px-4 py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showPLTULayer ?"text-secondary":"text-black"}>
                    PLTU/Pabrik
                </Typography>
            </button>
            <button onClick={clickForest}  className={showForestLayer ? "bg-primary-600 px-4 py-1 rounded-full border-1 border-secondary"  : "bg-secondary px-4 py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showForestLayer ?"text-secondary":"text-black"}>
                    Tutupan Hutan
                </Typography>
            </button>
            <button onClick={clickReport}  className={showReportLayer ? "bg-primary-600 px-4 py-1 rounded-full border-1 border-secondary"  : "bg-secondary px-4 py-1 rounded-full border-1 border-primary-600"}>
                <Typography variant="bs" font="body" className={showReportLayer ?"text-secondary":"text-black"}>
                    Report Warga
                </Typography>
            </button>
        </div>
    )
}