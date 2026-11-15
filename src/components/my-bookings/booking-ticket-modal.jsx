import {
  Ticket,
  X,
  ArrowLeft,
  Copy,
  Bus,
  Armchair,
  Wallet,
  CalendarDays,
  Clock,
} from "lucide-react";

import { useBookingDetails } from "../../hooks/use-my-bookings";

function formatDate(date) {
  if (!date) return "—";

  return new Date(date).toLocaleDateString("ar-SY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(date) {
  if (!date) return "—";

  return new Date(date).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatPrice(price) {
  if (price == null) return "—";

  return `${Number(price).toLocaleString("en-US")} ل.س`;
}

function BookingTicketModal({ bookingId, onClose }) {
  const { data, isLoading, isError } = useBookingDetails(bookingId);

  if (!bookingId) return null;

  const booking = data?.data || data;
  const trip = booking?.trip;
  const seats = booking?.seats || [];

  async function handleCopyCode() {
    try {
      await navigator.clipboard.writeText(booking.code);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[480px] overflow-hidden rounded-[22px] border border-border bg-surface shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-surface-alt text-muted"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center gap-2 bg-soft-teal px-6 py-7 text-primary">
          <Ticket size={30} />
          <span className="text-lg font-bold">تذكرتك مع سيرنا</span>
          <strong className="text-xs tracking-[3px]">SAIRNA</strong>
        </div>

        <div className="p-6">
          {isLoading && (
            <p className="py-10 text-center text-sm text-muted">
              جارٍ تحميل تفاصيل التذكرة...
            </p>
          )}

          {isError && (
            <p className="py-10 text-center text-sm text-red-500">
              تعذر تحميل تفاصيل الحجز.
            </p>
          )}

          {!isLoading && !isError && booking && (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-muted">رقم الحجز</span>
                <strong dir="ltr" className="text-xl font-bold text-text">
                  {booking.code}
                </strong>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 text-xs font-bold text-primary"
                >
                  <Copy size={14} />
                  نسخ رقم الحجز
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 border-y border-dashed border-border py-6">
                <span className="text-xl font-bold text-text">
                  {trip?.origin?.name || "—"}
                </span>
                <ArrowLeft size={22} className="shrink-0 text-primary" />
                <span className="text-xl font-bold text-text">
                  {trip?.destination?.name || "—"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-start gap-2">
                  <Bus size={17} className="mt-0.5 text-primary" />
                  <div>
                    <span className="block text-[11px] text-muted">شركة النقل</span>
                    <strong className="text-sm text-text">
                      {trip?.company?.name || "—"}
                    </strong>
                  </div>
                </div><div className="flex items-start gap-2">
                  <CalendarDays size={17} className="mt-0.5 text-primary" />
                  <div>
                    <span className="block text-[11px] text-muted">التاريخ</span>
                    <strong className="text-sm text-text">
                      {formatDate(trip?.departureAt)}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock size={17} className="mt-0.5 text-primary" />
                  <div>
                    <span className="block text-[11px] text-muted">موعد الانطلاق</span>
                    <strong className="text-sm text-text">
                      {formatTime(trip?.departureAt)}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Armchair size={17} className="mt-0.5 text-primary" />
                  <div>
                    <span className="block text-[11px] text-muted">المقاعد</span>
                    <strong className="text-sm text-text">
                      {seats.map((seat) => seat.seatNumber).join("، ") || "—"}
                    </strong>
                  </div>
                </div>

                <div className="col-span-2 flex items-start gap-2 border-t border-border pt-4">
                  <Wallet size={17} className="mt-0.5 text-primary" />
                  <div>
                    <span className="block text-[11px] text-muted">الإجمالي</span>
                    <strong className="text-base font-bold text-text">
                      {formatPrice(booking.totalPrice)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingTicketModal;