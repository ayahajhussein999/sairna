import { Bus, Ticket, ShieldCheck, ArrowLeft } from "lucide-react";

function BookingSummary({ trip, searchData, selectedSeats = [] }) {
  const passengerCount = Number(searchData?.people) || 0;
  const price = Number(trip?.price) || 0;
  const totalPrice = price * passengerCount;

  const formatTime = (value) => {
    if (!value) return "--:--";

    return new Date(value).toLocaleTimeString("ar", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (value) => {
    if (!value) return "—";

    return new Date(value).toLocaleDateString("ar", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const origin = trip?.origin?.name ?? trip?.origin ?? "—";
  const destination =
    trip?.destination?.name ?? trip?.destination ?? "—";

  const company =
    trip?.company?.name ?? trip?.companyName ?? trip?.company ?? "شركة النقل";

  return (
    <aside className="sticky top-[110px] rounded-[20px] border border-border bg-surface p-4 shadow-[var(--shadow)]">
      <div className="flex items-center gap-2 border-b border-border pb-3 text-primary">
        <Ticket size={20} />
        <h3 className="text-base font-bold text-text">ملخص الحجز</h3>
      </div>

      <div className="my-3 flex items-center gap-2">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-soft-teal text-primary">
          <Bus size={21} />
        </span>
        <div>
          <strong className="block text-xs text-text">{company}</strong>
          <small className="text-[10px] text-muted">رحلة مباشرة</small>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-surface-alt p-3">
        <div className="min-w-0">
          <small className="block text-[10px] text-muted">الانطلاق</small>
          <strong className="block text-sm text-text">{origin}</strong>
          <span className="text-[10px] text-muted">
            {formatTime(trip?.departureAt)}
          </span>
        </div>

        <ArrowLeft size={19} className="shrink-0 text-primary" />

        <div className="min-w-0 text-left">
          <small className="block text-[10px] text-muted">الوصول</small>
          <strong className="block text-sm text-text">{destination}</strong>
          <span className="text-[10px] text-muted">
            {formatTime(trip?.arrivalAt)}
          </span>
        </div>
      </div>

      <div className="my-3 flex flex-col gap-2">
        <div className="flex justify-between gap-2 text-[11px]">
          <span className="text-muted">تاريخ الرحلة</span>
          <strong className="text-text">{formatDate(searchData?.date)}</strong>
        </div>

        <div className="flex justify-between gap-2 text-[11px]">
          <span className="text-muted">المسافرين</span>
          <strong className="text-text">{passengerCount}</strong>
        </div>

        <div className="flex justify-between gap-2 text-[11px]">
          <span className="text-muted">المقاعد</span>
          <strong className="text-text">
            {selectedSeats.length
              ? [...selectedSeats].sort((a, b) => a - b).join("، ")
              : "لم تُحدّد بعد"}
          </strong>
        </div>

        <div className="flex justify-between gap-2 text-[11px]">
          <span className="text-muted">السعر للمسافر</span>
          <strong className="text-text">
            {price.toLocaleString("en-US")}
          </strong>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-dashed border-border pt-3">
        <strong className="text-xs text-text">السعر الإجمالي</strong>
        <strong className="text-lg font-extrabold text-primary">
          {totalPrice.toLocaleString("en-US")}
        </strong>
      </div>

      <p className="mt-3 flex items-center gap-2 rounded-lg bg-surface-alt p-2 text-[10px] text-muted">
        <ShieldCheck size={16} className="shrink-0 text-primary" />
        لا يوجد دفع حقيقي ضمن المشروع التعليمي.
      </p>
    </aside>
  );
}

export default BookingSummary;