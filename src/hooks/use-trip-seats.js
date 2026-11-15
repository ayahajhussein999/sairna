import { useQuery } from "@tanstack/react-query";
import { getTripSeats } from "../services/website-service";

function useTripSeats(tripId) {
  return useQuery({
    queryKey: ["tripSeats", tripId],
    queryFn: () => getTripSeats(tripId),
    enabled: Boolean(tripId),
  });
}

export default useTripSeats;