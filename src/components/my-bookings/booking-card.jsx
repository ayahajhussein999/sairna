import {
  Ticket,
  CircleCheck,
  Info,
  Bus,
  Armchair,
  Wallet,
  Route,
} from "lucide-react";
import Button from "../common/button";
import { Link } from "react-router-dom";

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

  return ` ${Number(price).toLocaleString("en-US")} ل.س` ;
}

function BookingCard({ booking, onShowTicket,  onCancelBooking}) {
  const trip = booking.trip;
  const seats = booking.seats || [];
  const isConfirmed = booking.status === "CONFIRMED";

  return (
    <article className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
     
      <div className="flex items-center justify-between gap-[15px] border-b border-dashed border-border bg-surface-alt px-[25px] py-[19px] max-[650px]:p-[13px]">
        <div className="flex items-center gap-[10px]">
          <span className="grid size-[41px] shrink-0 place-items-center rounded-[12px] bg-soft-teal text-primary">
            <Ticket size={20} />
          </span>

          <div className="flex flex-col">
            <span className="text-[10px] text-muted">رقم الحجز</span>
            <b dir="ltr" className="text-[13px] font-bold text-text">
              {booking.code}
            </b>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-[5px] rounded-full px-3 py-[6px] text-[10px] font-bold ${
            isConfirmed
              ? "bg-soft-teal text-primary-deep"
              : "bg-surface-alt text-muted"
          }`}
        >
          {isConfirmed ? (
            <CircleCheck size={15} />
          ) : (
            <Info size={15} />
          )}

          {isConfirmed ? "تم تأكيد الحجز" : booking.status}
        </span>
      </div>

     
      <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[25px] px-[25px] py-[30px] max-[650px]:grid-cols-1 max-[650px]:px-[15px] max-[650px]:py-[21px]">

        
        <div className="flex items-center justify-between gap-[15px]">
          <div className="flex min-w-0 flex-col">
            <small className="text-[10px] text-muted">من</small>
            <h3 className="my-[2px] text-[21px] font-bold text-text max-[650px]:text-[18px]">
              {trip?.origin?.name || "—"}
            </h3>
            <b className="text-[12px] font-bold text-text">
              {formatTime(trip?.departureAt)}
            </b>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-[6px] text-primary">
            <Bus size={20} />

            <div className="w-full border-t border-dashed border-border" />

            <small className="whitespace-nowrap text-[9px] text-muted max-[650px]:whitespace-normal max-[650px]:text-center">
              {formatDate(trip?.departureAt)}
            </small>
          </div>

          <div className="flex min-w-0 flex-col">
            <small className="text-[10px] text-muted">إلى</small>
            <h3 className="my-[2px] text-[21px] font-bold text-text max-[650px]:text-[18px]">
              {trip?.destination?.name || "—"}
            </h3>
            <b className="text-[12px] font-bold text-text">
              {formatTime(trip?.arrivalAt)}
            </b>
          </div>
        </div>

       
        <div className="flex flex-col gap-[9px] border-r border-border pr-[26px] max-[650px]:border-r-0 max-[650px]:border-t max-[650px]:pt-[15px] max-[650px]:pr-0">
          <span className="flex items-center gap-2 text-[11px] font-bold text-muted">{trip?.company?.logoUrl ? (
              <img
                src={trip.company.logoUrl}
                alt={trip.company.name}
                className="size-5 rounded-full object-contain"
              />
            ) : (
              <Bus size={16} />
            )}
            {trip?.company?.name || "—"}
          </span>

          <span className="flex items-center gap-2 text-[11px] font-bold text-muted">
            <Armchair size={16} />
            المقعد:{" "}
            {seats.length
              ? seats.map((seat) => seat.seatNumber).join("، ")
              : "—"}
          </span>

          <span className="flex items-center gap-2 text-[11px] font-bold text-muted">
            <Wallet size={16} />
            {formatPrice(booking.totalPrice)}
          </span>
        </div>
      </div>

     
      <div className="flex gap-[9px] border-t border-border px-[25px] py-4 max-[650px]:flex-wrap max-[650px]:p-3">
       <Link to={`/track-trip/${booking.id}`}>
  <Button>
    <span className="flex flex-row items-center justify-center gap-2 whitespace-nowrap">
      <Route size={17} />
      تتبّع الرحلة
    </span>
  </Button>
</Link>

        <Button  onClick={() => onShowTicket(booking)}>
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            <Ticket size={17} />
            عرض التذكرة
          </span>
        </Button>
        <Button
  className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap"
  onClick={() => onCancelBooking(booking)}
>
  إلغاء الحجز
</Button>
      </div>
    </article>
  );
}

export default BookingCard;