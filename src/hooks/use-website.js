import { useQuery } from "@tanstack/react-query";
import { getCities , getCompanies , getTrips} from "../services/website-service";

export const useCompanies = () =>
  useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

export const useCities = () =>
  useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  export const useTrips = (date) =>
  useQuery({
    queryKey: ["trips", date],
    queryFn: () => getTrips(date),
    enabled: Boolean(date),
  });
  