import {
  ArrowLeft,
  Check,
  Bus,
  MapPin,
  Route,
  Clock,
  Pause,
  Play,
  RotateCcw,
  Info,
} from "lucide-react";

import Button from "../common/button";

function formatTime(date) {
  if (!date) return "--:--";

  return new Date(date).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
function calculateDistanceKm(origin, destination) {
  const lat1 = Number(origin?.latitude);
  const lon1 = Number(origin?.longitude);
  const lat2 = Number(destination?.latitude);
  const lon2 = Number(destination?.longitude);

  if (![lat1, lon1, lat2, lon2].every(Number.isFinite)) {
    return null;
  }

  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const earthRadius = 6371;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const distance =
    2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(distance);
}
function TrackingSidebar({
  booking,
  isPlaying,
  onToggle,
  onReset,
  progress = 89,
}) {
    const distance = calculateDistanceKm(
  booking?.trip?.origin,
  booking?.trip?.destination
);
  const trip = booking?.trip;

  const origin = trip?.origin?.name || "—";
  const destination = trip?.destination?.name || "—";
  const company = trip?.company?.name || "—";

  return (
    <aside className="rounded-[19px] border border-border bg-surface p-[22px] max-[650px]:p-[19px]">
      <div className="flex items-center gap-2 text-[11px] font-extrabold text-[#10966f]">
        <span className="size-[9px] animate-pulse rounded-full bg-[#13b98d] shadow-[0_0_0_4px_#e3f7ee]" />
        الرحلة قيد العرض التجريبي

        <small className="mr-auto text-muted" dir="ltr">
          {booking?.code || "—"}
        </small>
      </div>

     
      <div className="my-[25px] flex items-center justify-between gap-3">
        <div>
          <small className="text-[11px] text-muted">من</small>
          <h2 className="my-[2px] text-[22px] font-bold text-text">
            {origin}
          </h2>
        </div>

        <span className="text-primary">
          <ArrowLeft size={21} />
        </span>

        <div>
          <small className="text-[11px] text-muted">إلى</small>
          <h2 className="my-[2px] text-[22px] font-bold text-text">
            {destination}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-[9px]">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-soft-teal font-bold text-primary">
          {company.charAt(0)}
        </span>

        <div className="flex flex-col">
          <b className="text-[12px] text-text">{company}</b>
          <small className="text-[10px] text-muted">
            موعد الانطلاق {formatTime(trip?.departureAt)}
          </small>
        </div>
      </div>

      <div className="my-[22px] border-t border-dashed border-border" />

     
      <div className="mb-[10px] flex items-center justify-between">
        <h3 className="text-[13px] font-bold text-text">تقدّم الرحلة</h3>
        <strong className="text-[13px] text-primary">{progress}%</strong>
      </div>

      <div className="h-[9px] overflow-hidden rounded-full bg-surface-alt">
        <span
          className="block h-full rounded-full bg-gradient-to-r from-[#0cb5a3] to-[#69d1b2] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

     
      <div className="relative my-[25px] mb-[18px]">
        <div className="absolute right-[15px] top-[15px] bottom-[26px] border-r-2 border-dashed border-[#cce1de]" />

        <div className="relative mb-[29px] flex items-start gap-3">
          <span className="z-10 grid size-[31px] shrink-0 place-items-center rounded-full border-[3px] border-surface bg-primary text-white">
            <Check size={13} />
          </span>

          <div className="flex flex-col">
            <b className="text-[12px] text-text">{origin}</b>
            <small className="text-[10px] text-muted">محطة الانطلاق</small>
          </div>

          <time className="mr-auto text-[10px] text-muted">
            {formatTime(trip?.departureAt)}
          </time>
        </div>

        <div className="relative mb-[29px] flex items-start gap-3">
          <span className="z-10 grid size-[31px] shrink-0 place-items-center rounded-full border-[3px] border-surface bg-primary text-white">
            <Bus size={14} />
          </span>

          <div className="flex flex-col">
            <b className="text-[12px] text-text">على الطريق</b>
            <small className="text-[10px] text-muted">
              تقدم توضيحي للمحاكاة
            </small>
          </div><time className="mr-auto text-[10px] font-bold text-primary">
            الآن*
          </time>
        </div>

        <div className="relative flex items-start gap-3">
          <span className="z-10 grid size-[31px] shrink-0 place-items-center rounded-full border-[3px] border-surface bg-surface-alt text-muted">
            <MapPin size={13} />
          </span>

          <div className="flex flex-col">
            <b className="text-[12px] text-text">{destination}</b>
            <small className="text-[10px] text-muted">محطة الوصول</small>
          </div>

          <time className="mr-auto text-[10px] text-muted">
            {formatTime(trip?.arrivalAt)}
          </time>
        </div>
      </div>

     
      <div className="grid grid-cols-2 gap-[9px]">
        <div className="flex flex-col rounded-[11px] border border-border p-[13px]">
          <span className="flex items-center gap-[6px] text-[10px] text-muted">
            <Route size={16} />
            المسافة الكلية
          </span>
          <b className="mt-[5px] text-base text-text">{distance !== null ? `${distance} كم` : "غير متوفر"}</b>
        </div>

        <div className="flex flex-col rounded-[11px] border border-border p-[13px]">
          <span className="flex items-center gap-[6px] text-[10px] text-muted">
            <Clock size={16} />
            المتبقي التقديري
          </span>
          <b className="mt-[5px] text-base text-text">
            1 ساعة تقريباً
          </b>
        </div>
      </div>

     
      <div className="mt-[18px] flex gap-[9px]">
        <Button
          onClick={onToggle}
          className="inline-flex flex-1 flex-row items-center justify-center gap-2 whitespace-nowrap"
        >
          {isPlaying ? <Pause size={17} /> : <Play size={17} />}
          {isPlaying ? "إيقاف الحركة" : "استئناف الحركة"}
        </Button>

        <Button
          onClick={onReset}
          className="inline-flex size-[49px] flex-row items-center justify-center"
        >
          <RotateCcw size={17} className="shrink-0 text-text"/>
        </Button>
      </div>

      <p className="mt-[17px] flex items-start gap-[7px] text-[10px] leading-[1.85] text-muted">
        <Info size={17} className="shrink-0" />
        هذه محاكاة تعليمية فوق خريطة جغرافية حقيقية، وليست تتبع GPS.
        خط الربط بين المدن تقريبي؛ افتح Google Maps لمعرفة الطرق الفعلية.
      </p>
    </aside>
  );
}

export default TrackingSidebar;