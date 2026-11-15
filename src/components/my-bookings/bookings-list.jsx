import { Link } from "react-router-dom";
import { Plus, Ticket } from "lucide-react";
import BookingCard from "./booking-card";
import Button from "../common/button";

function BookingsList({
  bookings,
  isLoading,
  isError,
  onRetry,
  onShowTicket,
 
  onCancelBooking,
}) 
{
    


  return (
    <section className="container pb-[60px] pt-9">
     
      <div className="trips-top mb-[22px] flex items-center justify-between gap-5 max-[650px]:items-start">
        <div>
          <h2 className="text-[22px] font-bold text-text max-[650px]:text-[17px]">
            رحلاتي القادمة
          </h2>

          <p className="mt-1 text-[12px] text-muted">
            {bookings.length
              ? "جميع حجوزاتك وتفاصيل رحلاتك."
              : "ما عندك حجوزات حالياً."}
          </p>
        </div>

        <Link to="/book-trip">
  <Button>
    <Plus size={17} />
    حجز جديد
  </Button>
</Link>
      </div>

      
      {isLoading && (
        <div className="flex justify-center py-12 text-sm text-muted">
          جارٍ تحميل حجوزاتك...
        </div>
      )}

     
      {!isLoading && isError && (
        <div className="flex flex-col items-center gap-3 rounded-[18px] border border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">
            ما قدرنا نحمّل حجوزاتك، حاول مرة تانية.
          </p>

          <button
            type="button"
            onClick={onRetry}
            className="text-sm font-bold text-primary"
          >
            إعادة المحاولة
          </button>
        </div>
      )}

    
      {!isLoading && !isError && bookings.length > 0 && (
        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onShowTicket={onShowTicket}
              
              onCancelBooking={onCancelBooking}
            />
          ))}
        </div>
      )}

     
      {!isLoading && !isError && bookings.length === 0 && (
        <div className="flex flex-col items-center gap-3 rounded-[20px] border border-border bg-surface px-5 py-12 text-center">
          <span className="grid size-14 place-items-center rounded-2xl bg-soft-teal text-primary">
            <Ticket size={25} />
          </span>

          <h3 className="font-bold text-text">
            لسه ما عندك حجوزات
          </h3>

          <p className="max-w-sm text-sm text-muted">
            احجز رحلتك القادمة، ورح تلاقي تذكرتك وتفاصيلها هون.
          </p>

         <Link to="/book-trip">
  <Link to="/book-trip">
  <Button >
    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
    <Plus size={17} />
    حجز جديد
    </span>
  </Button>
</Link>
</Link>
        </div>
      )}
    </section>
  );
}

export default BookingsList;