import { useLocation, useNavigate } from "react-router-dom";
import { Check, Sparkles, Ticket, Route } from "lucide-react";
import Button from "../components/common/button";

function BookingSuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const booking = state?.booking;

  if (!booking) {
    return (
      <main className="container py-16 text-center">
        <p className="text-muted">ما لقينا معلومات الحجز.</p>
        <Button onClick={() => navigate("/my-bookings")}>
          الذهاب إلى حجوزاتي
        </Button>
      </main>
    );
  }

  const origin = booking.trip?.origin?.name || "";
  const destination = booking.trip?.destination?.name || "";

  const seatNumbers =
    booking.seats?.map((seat) => seat.seatNumber).join("، ") || "—";

  return (
    <main className="container py-16">
      <div className="mx-auto max-w-2xl rounded-[22px] border border-border bg-surface px-6 py-10 text-center shadow-sm sm:px-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-soft-teal text-primary">
          <Check size={43} strokeWidth={1.85} />
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-soft-teal px-4 py-2 text-sm font-semibold text-primary">
          <Sparkles size={13} />
          صار الحجز جاهز
        </span>

        <h1 className="mb-4 text-3xl font-bold text-text">
          يا سلام! <span className="text-primary">تم تأكيد حجزك.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg leading-8 text-muted">
          انضافت التذكرة إلى «حجوزاتي». هلق بتقدر تراجعها وتتابع الرحلة.
        </p>

       <div className="mb-8 flex flex-row items-center justify-between gap-3 rounded-2xl border border-border bg-surface-alt p-4">
  <div className="flex min-w-0 flex-col items-center gap-2">
    <span className="text-xs text-muted">رقم الحجز</span>
    <strong dir="ltr" className="text-sm text-text">
      {booking.code}
    </strong>
  </div>

  <div className="h-10 border-l border-dashed border-border" />

  <div className="flex min-w-0 flex-col items-center gap-2">
    <span className="text-xs text-muted">الوجهة</span>
    <strong className="text-sm text-text">
      {origin} ← {destination}
    </strong>
  </div>

  <div className="h-10 border-l border-dashed border-border" />

  <div className="flex min-w-0 flex-col items-center gap-2">
    <span className="text-xs text-muted">المقاعد</span>
    <strong className="text-sm text-text">{seatNumbers}</strong>
  </div>
</div>

       <div className="flex flex-col justify-center items-center  gap-3 sm:flex-row">
  <Button
    variant="primary"
    onClick={() => navigate("/my-bookings")}
  >
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      عرض تذكرتي
      <Ticket size={17} />
    </span>
  </Button>

  <Button
    variant="subtle"
    onClick={() => navigate("/track-trip", { state: { booking } })}
  >
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      تتبّع الرحلة
      <Route size={17} />
    </span>
  </Button>
</div>
      </div>
    </main>
  );
}

export default BookingSuccessPage;