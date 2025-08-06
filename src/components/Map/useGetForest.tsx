import { useQuery } from "@tanstack/react-query"

export default function useGetForest () {
    const {data: forestData} = useQuery({
    queryKey: ['forest'],
    queryFn: async () => {
        const response = await fetch('/forest.geojson')
        if (!response.ok) {
        throw new Error('Network response was not ok')
        }
        return response.json()
    },
    });
    return {
        forestData
    }
}