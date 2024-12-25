import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../utils/axios';

const baseURL = import.meta.env.VITE_WORLD_TIME_API;
export const useTime = () => {
  return useQuery({
    queryKey: ['time'],
    queryFn: async () => {
      // Implement your async logic here
      const {data} = await axiosInstance.get(`${baseURL}/api/ip`);
      return data;
    }
  });
};

