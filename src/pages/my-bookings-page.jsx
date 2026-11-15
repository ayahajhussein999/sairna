import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BookingsBanner from "../components/my-bookings/bookings-banner";
import BookingsList from "../components/my-bookings/bookings-list";
import BookingTicketModal from "../components/my-bookings/booking-ticket-modal";
import { useCancelBooking } from "../hooks/use-my-bookings";
import { useMyBookings } from "../hooks/use-my-bookings";

function MyBookingsPage() {
  const navigate = useNavigate();
  const cancelMutation = useCancelBooking();

function handleCancelBooking(booking) {
  cancelMutation.mutate(booking.id);
}

  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useMyBookings();

  const bookings = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data?.bookings)
        ? data.bookings
        : [];

  function handleTrackTrip(booking) {
    navigate("/track-trip", {
      state: { booking },
    });
  }

  return (
    <main className="inner-main bg-bg">
      <BookingsBanner />

      <BookingsList
        bookings={bookings}
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        onShowTicket={(booking) => setSelectedBookingId(booking.id)}
        onTrackTrip={handleTrackTrip}
        onCancelBooking={handleCancelBooking}
      />

      <BookingTicketModal
        bookingId={selectedBookingId}
        onClose={() => setSelectedBookingId(null)}
      />
    </main>
  );
}

export default MyBookingsPage;