// import { useQuery, useQueryClient } from "@tanstack/react-query"
// import axiosInstance from "../utils/axios"


// const baseURL = import.meta.env.VITE_QUOTES_API;
// export const useQuotes = () => {
//     const queryClient = useQueryClient();

//     const refreshQuotes = () => {
//         queryClient.invalidateQueries({queryKey: ['quotes']}) //refresh the quotes data
//     } 

//      const { data, isLoading, isError } = useQuery({
//         queryKey: ['quotes'],
//         queryFn: async () => {
//             const {data} = await axiosInstance.get(`${baseURL}`)
//             console.log(data)
//             return data;
//     }
// });

// return {data, isLoading, isError, refreshQuotes}
// };

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = import.meta.env.VITE_QUOTES_API;
const fetchQuotes = async () => {
  const res = await axios.get(`${baseURL}`);
  const quotes = res.data.quotes;

  // Pick a random quote
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    quote: random.text,
    author: random.author,
  };
};

export const useQuotes = () => {
  const { data, isLoading, refetch } = useQuery({ queryKey: ['quotes'], queryFn: fetchQuotes });

  return {
    data,
    isLoading,
    refreshQuotes: refetch,
  };
};
