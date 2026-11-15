import { useQuery , useMutation , useQueryClient } from "@tanstack/react-query";
import {
  getMyBookings,
  getBookingById,
  cancelBooking 
} from "../services/website-service";

export function useMyBookings() {
  return useQuery({
    queryKey: ["myBookings"],
    queryFn: getMyBookings,
  });
}

export function useBookingDetails(bookingId) {
  return useQuery({
    queryKey: ["myBookings", bookingId],
    queryFn: () => getBookingById(bookingId),
    enabled: Boolean(bookingId),
  });
}
export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
}