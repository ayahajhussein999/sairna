import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../services/website-service";

function useCreateBooking() {
  return useMutation({
    mutationFn: createBooking,
  });
}

export default useCreateBooking;