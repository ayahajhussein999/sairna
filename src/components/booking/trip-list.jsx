import { Search } from "lucide-react";
import TripCard from "./trip-card";

export default function TripList({
  trips = [],
  isLoading,
  isError,
  onSelectTrip,
  onClearFilters,
}) {
  if (isLoading) {
    return (
      <div className="rounded-[17px] border border-border bg-surface p-8 text-center text-muted">
        جاري تحميل الرحلات...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-[17px] border border-border bg-surface p-8 text-center text-red-500">
        تعذّر تحميل الرحلات. حاولي مرة أخرى.
      </div>
    );
  }

  if (trips.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-[17px] border border-border bg-surface px-5 py-10 text-center">
        <Search size={32} className="mb-3 text-muted" />

        <h3 className="mb-2 text-base font-bold text-text">
          ما في رحلات مطابقة
        </h3>

        <p className="mb-4 text-sm text-muted">
          جرّبي تغيّري الشركة أو وقت الانطلاق.
        </p>

        <button
          type="button"
          onClick={onClearFilters}
          className="font-bold text-primary"
        >
          عرض كل الرحلات
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-[15px]">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onSelect={onSelectTrip}
        />
      ))}
    </div>
  );
}