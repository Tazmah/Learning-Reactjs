import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetCat = () => {
    const { data,
        isLoading,
        error,
        refetch
    } = useQuery(["cat"], async () => {
        return await axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })
    const refetchData = () => {
        alert("Data Refetched")
        refetch()
    }
    return { data, refetchData, error, isLoading }
}