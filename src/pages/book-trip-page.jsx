
import { useSearch } from "../hooks/use-search";

import BookingPanner from "../components/booking/booking-panner";
import CompanyPicker from "../components/booking/company-picker";
import ResultsHeading from "../components/booking/result-heading";
import ResultsLayout from "../components/booking/results-layout";
import SearchSection from "../components/home/search-section";
import { useTrips } from "../hooks/use-website";

export default function BookTripPage() {
  

const { searchData, setSearchData } = useSearch();
  const {
    data: trips = [],
    isLoading,
    isError,
  } = useTrips(searchData.date);

  return (
    <section className="bg-bg pb-10">
      <div className="container">
        <BookingPanner />

        <SearchSection
          key={JSON.stringify(searchData)}
          compact={true}
          onSearch={setSearchData}
          initialOrigin={searchData.origin}
          initialDestination={searchData.destination}
          initialDate={searchData.date}
          initialPeople={searchData.people}
        />

        <CompanyPicker />
        <ResultsHeading />

        <ResultsLayout
          trips={trips}
          isLoading={isLoading}
          isError={isError}
          origin={searchData.origin}
          destination={searchData.destination}
        />
      </div>
    </section>
  );
}