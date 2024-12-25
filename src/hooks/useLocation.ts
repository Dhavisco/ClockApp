import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../utils/axios"

const baseURL = import.meta.env.VITE_IP_GEOLOCATION_API;

export const useLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: async () => {
        const {data} = await axiosInstance.get(baseURL);
        return data;
    }
  })
}


