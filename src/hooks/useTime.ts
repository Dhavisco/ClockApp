import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

const baseURL = import.meta.env.VITE_WORLD_TIME_API;

console.log(baseURL);

export const useTime = (ip?: string) => {
  return useQuery({
    queryKey: ["time", ip],
   queryFn: async () => {
   try {
      const requestUrl = `${baseURL}/api/time/current/ip?ipAddress=${ip}`;
      // console.log("Requesting URL:", requestUrl);
      const { data } = await axiosInstance.get(requestUrl);
      // console.log("Time Data:", data);
      return data;
   } catch (error) {
      // console.error("Time API Error:", error);
      throw error; // Important to re-throw the error for the query's error state
   }
}

  });
};

