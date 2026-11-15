import { Calendar, ArrowLeft } from "lucide-react";

export default function ResultsHeading({
  count,
  origin,
  destination,
  date,
  passengers,
  sort,
  onSortChange,
}) {
  return (
    <div className="mb-[22px] mt-[38px] flex items-end justify-between gap-[18px] max-[650px]:mb-[18px] max-[650px]:mt-[28px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[11px]">
      <div>
        <h2 className="mb-[5px] flex items-center gap-[14px] text-[20px] font-bold text-text max-[650px]:flex-wrap max-[650px]:gap-[7px] max-[650px]:text-[17px]">
          {count} رحلات متاحة

          <span className="inline-flex items-center gap-[6px] rounded-[7px] bg-soft-teal px-[10px] py-[5px] text-[12px] text-primary-deep max-[650px]:text-[10px]">
            {origin}
            <ArrowLeft size={17} />
            {destination}
          </span>
        </h2>

        <p className="m-0 flex items-center gap-[6px] text-[11px] text-muted">
          <Calendar size={15} />
          {date} · {passengers} {passengers === 1 ? "مسافر" : "مسافرين"}
        </p>
      </div>

      <div className="flex items-center gap-[10px] text-[11px] font-bold">
        <label htmlFor="sort-select" className="whitespace-nowrap text-muted">
          ترتيب حسب
        </label>

        <select
          id="sort-select"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="min-h-[42px] cursor-pointer rounded-[10px] border border-border bg-surface px-3 text-text"
        >
          <option value="earliest">وقت الانطلاق</option>
          <option value="cheap">أقل سعر</option>
          <option value="quick">أقصر مدة</option>
        </select>
      </div>
    </div>
  );
}