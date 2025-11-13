"use client"

import { useQuery } from "@tanstack/react-query";
import { hitServerApi } from "./useServerApi";

export const useStats = () => {
  return useQuery({
    queryKey: ["stats"], // caching key
    queryFn: () => hitServerApi("stats"), // calls http://localhost:5000/api/stats
    staleTime: 5 * 60 * 1000, // 5 minutes stale time
 
    refetchOnWindowFocus: false,
  });
};