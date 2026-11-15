import { useState } from "react";
import { useParams } from "react-router-dom";

import { useBookingDetails } from "../hooks/use-my-bookings";

import TrackingHeader from "../components/tracking/tracking-header";
import TrackingSidebar from "../components/tracking/tracking-sidebar";
import TrackingMapPanel from "../components/tracking/tracking-map-panel";

function PageTrack() {
  const { id } = useParams();

  const { data, isLoading, isError } = useBookingDetails(id);

  const booking = data?.data || data;

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(89);

  function handleToggle() {
    setIsPlaying((prev) => !prev);
  }

  function handleReset() {
    setProgress(0);
    setIsPlaying(true);
  }

  if (isLoading) {
    return (
      <main className="tracking-main bg-bg py-20 text-center">
        جارٍ تحميل بيانات الرحلة...
      </main>
    );
  }

  if (isError || !booking) {
    return (
      <main className="tracking-main bg-bg py-20 text-center">
        تعذر تحميل بيانات الحجز.
      </main>
    );
  }

  return (
    <main className="tracking-main pb-[60px] bg-bg">
      <TrackingHeader />

      <section className="container grid grid-cols-[349px_minmax(0,1fr)] items-stretch gap-[18px] max-[900px]:grid-cols-1">
        <TrackingSidebar
          booking={booking}
          isPlaying={isPlaying}
          onToggle={handleToggle}
          onReset={handleReset}
          progress={progress}
        />

        <TrackingMapPanel
          origin={booking?.trip?.origin?.name}
          destination={booking?.trip?.destination?.name}
        />
      </section>
    </main>
  );
}

export default PageTrack;