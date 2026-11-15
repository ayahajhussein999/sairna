import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PassengerDetailsStep from "../components/booking/passenger-details-step";
import BookingHead from "../components/booking/booking-head";
import BookingSummary from "../components/booking/booking-summary";
import SeatSelectionStep from "../components/booking/seat-selection-step";
import BookingReviewStep from "../components/booking/booking-review-step";

import useTripSeats from "../hooks/use-trip-seats";
import useCreateBooking from "../hooks/use-create-booking";

function BookingCheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { trip, searchData } = location.state || {};

  const [passengers, setPassengers] = useState(
    location.state?.passengers || []
  );

  const [selectedSeats, setSelectedSeats] = useState(
    location.state?.selectedSeats || []
  );

  const [currentStep, setCurrentStep] = useState(
    location.state?.currentStep || 1
  );

  const { mutateAsync: createBookingMutation, isPending } =
    useCreateBooking();

  const passengerCount = Number(searchData?.people);

  const {
    data: seatsData,
    isLoading,
    isError,
  } = useTripSeats(trip?.id);

  function handleBackToTrips() {
    navigate(-1);
  }

  function handleNextStep() {
    if (selectedSeats.length !== passengerCount) return;

    setPassengers((previous) =>
      selectedSeats.map((seat, index) => ({
        seat,
        name: previous[index]?.name ?? "",
        phone: previous[index]?.phone ?? "",
      }))
    );

    setCurrentStep(2);
  }

  function handlePassengerNext() {
    setCurrentStep(3);
  }

  async function handleConfirmBooking() {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (!token) {
      navigate("/login", {
        state: {
          from: {
            pathname: "/booking-checkout",
            state: {
              trip,
              searchData,
              passengers,
              selectedSeats,
              currentStep: 3,
            },
          },
        },
      });

      return;
    }

    const bookingData = {
      tripId: trip.id,
      seats: passengers.map((passenger) => ({
        seatNumber: Number(passenger.seat),
        passengerName: passenger.name,
        passengerPhone: passenger.phone,
      })),
    };

    try {
      const booking = await createBookingMutation(bookingData);

      navigate("/booking-success", {
        state: { booking },
      });
    } catch (error) {
      console.error("Booking error:", error.response?.data || error);
    }
  }

  return (
    <div className="bg-bg">
      <main className="container py-8">
        <BookingHead currentStep={currentStep} />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            {currentStep === 1 ? (
              isLoading ? (
                <p>جاري تحميل المقاعد...</p>
              ) : isError ? (
                <p>تعذر تحميل المقاعد، حاولي مرة أخرى.</p>
              ) : (
                <SeatSelectionStep
                  seatsData={seatsData}
                  selectedSeats={selectedSeats}
                  onSeatsChange={setSelectedSeats}
                  passengerCount={passengerCount}
                  onBack={handleBackToTrips}
                  onNext={handleNextStep}
                />
              )
            ) : currentStep === 2 ? (
              <PassengerDetailsStep
                selectedSeats={selectedSeats}
                passengers={passengers}
                onPassengersChange={setPassengers}
                onBack={() => setCurrentStep(1)}
                onNext={handlePassengerNext}
              />
            ) : (
              <BookingReviewStep
                passengers={passengers}
                selectedSeats={selectedSeats}
                onBack={() => setCurrentStep(2)}
                onConfirm={handleConfirmBooking}
                isPending={isPending}
              />
            )}
          </div><BookingSummary
            trip={trip}
            searchData={searchData}
            selectedSeats={selectedSeats}
          />
        </div>
      </main>
    </div>
  );
}

export default BookingCheckoutPage;