import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../utils/axios"

const baseURL = import.meta.env.VITE_IP_GEOLOCATION_API;

export const useLocation = () => {
  return useQuery({
    queryKey: ['location'],
    // Error handling can be done inside the queryFn or globally in QueryClient configuration
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get(baseURL);
        // console.log("Location Data:", data);
        return data;
      } catch (error) {
        // console.error("Location API Error:", error);
        throw error; // Ensure the error is propagated
      }
    }
  });
};



