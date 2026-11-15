import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/website-service";

export default function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}