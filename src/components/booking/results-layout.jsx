import { useState } from "react";
import ResultsFilters from "./results-filter";
import TripList from "./trip-list";
import { useCompanies } from "../../hooks/use-website";
import { useSearch } from "../../hooks/use-search";

export default function ResultsLayout({
  trips = [],
  isLoading,
  isError,
  origin,
  destination,
}) {
  const { data: companies = [] } = useCompanies();

  const {selectedCompany, setSelectedCompany}= useSearch();
  const [selectedTime, setSelectedTime] = useState("all");

  const routeTrips = trips.filter(
    (trip) =>
      String(trip.origin.id) === String(origin) &&
      String(trip.destination.id) === String(destination)
  );

  const filteredTrips = routeTrips.filter((trip) => {
    const matchesCompany =
      selectedCompany === "all" ||
      String(trip.company.id) === String(selectedCompany);

    const hour = Number(
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        hourCycle: "h23",
        timeZone: "Asia/Damascus",
      }).format(new Date(trip.departureAt))
    );

    const matchesTime =
      selectedTime === "all" ||
      (selectedTime === "morning" && hour < 12) ||
      (selectedTime === "afternoon" && hour >= 12 && hour < 17) ||
      (selectedTime === "evening" && hour >= 17);

    return matchesCompany && matchesTime;
  });

  function clearFilters() {
    setSelectedCompany("all");
    setSelectedTime("all");
  }

  return (
    <div className="grid grid-cols-[244px_minmax(0,1fr)] items-start gap-5 max-[900px]:grid-cols-1">
      <ResultsFilters
        companies={companies}
        trips={routeTrips}
        selectedCompany={selectedCompany}
        selectedTime={selectedTime}
        onCompanyChange={setSelectedCompany}
        onTimeChange={setSelectedTime}
        onClearFilters={clearFilters}
      />

      <TripList
        trips={filteredTrips}
        isLoading={isLoading}
        isError={isError}
        onClearFilters={clearFilters}
      />
    </div>
  );
}