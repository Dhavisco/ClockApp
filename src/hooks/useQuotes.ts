import { useQuery, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "../utils/axios"


const baseURL = import.meta.env.VITE_QUOTES_API;
export const useQuotes = () => {
    const queryClient = useQueryClient();

    const refreshQuotes = () => {
        queryClient.invalidateQueries({queryKey: ['quotes']}) //refresh the quotes data
    }

     const { data, isLoading, isError } = useQuery({
        queryKey: ['quotes'],
        queryFn: async () => {
            const {data} = await axiosInstance.get(`${baseURL}/random`)
            console.log('quotes data',data)
            return data;
    }
});

return {data, isLoading, isError, refreshQuotes}
};