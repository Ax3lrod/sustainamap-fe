import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

export default function useGetLaporan () {
    const {data: laporanData} = useQuery({
    queryKey: ['laporan'],
    queryFn: async () => {
        const response = await fetch('http://localhost:5000/laporan')
        const data = await response.json();
        if (!response.ok) {
        throw new Error('Network response was not ok')
        }
        return data;
    },
    });
    return {
        laporanData
    }
}