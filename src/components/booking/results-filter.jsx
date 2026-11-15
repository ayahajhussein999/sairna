import { Filter, Shield, RotateCcw } from "lucide-react";

const timeOptions = [
  { value: "all", label: "كل الأوقات" },
  { value: "morning", label: "صباحاً (قبل 12)" },
  { value: "afternoon", label: "ظهراً (12–17)" },
  { value: "evening", label: "مساءً (بعد 17)" },
];

export default function ResultsFilters({
  companies = [],
  trips = [],
  selectedCompany = "all",
  selectedTime = "all",
  onCompanyChange,
  onTimeChange,
  onClearFilters,
}) {
  const getCompanyCount = (companyId) =>
    trips.filter((trip) => String(trip.company.id) === String(companyId))
      .length;

  return (
    <aside className="sticky top-[103px] rounded-[17px] border border-border bg-surface p-[22px] max-[900px]:static max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-[25px] max-[900px]:gap-y-[10px] max-[900px]:p-[18px] max-[650px]:gap-3 max-[650px]:p-[14px]">
      <div className="flex items-center justify-between gap-[7px] border-b border-border pb-[19px] max-[900px]:col-span-full">
        <h3 className="m-0 flex items-center gap-2 text-[13px] font-bold text-text">
          <Filter size={19} />
          تصفية النتائج
        </h3>

        <button
          type="button"
          onClick={onClearFilters}
          className="flex items-center gap-1 border-0 bg-transparent text-[12px] font-extrabold text-primary"
        >
          <RotateCcw size={13} />
          إعادة ضبط
        </button>
      </div>

      <div className="pt-[22px] max-[900px]:p-[5px] max-[650px]:p-0">
        <h4 className="mb-[13px] mt-0 text-[12px] font-bold text-text max-[650px]:text-[11px]">
          شركة النقل
        </h4>

        <div className="flex flex-col gap-3 max-[650px]:gap-[9px]">
          <label className="flex cursor-pointer items-center gap-[10px] text-[11px] font-bold text-muted max-[650px]:text-[10px]">
            <input
              type="radio"
              name="company-filter"
              value="all"
              checked={String(selectedCompany) === "all"}
              onChange={() => onCompanyChange("all")}
              className="cursor-pointer accent-primary"
            />
            كل الشركات
            <span className="mr-auto rounded-md bg-surface-alt px-[7px] text-[10px] text-muted">
              {trips.length}
            </span>
          </label>

          {companies.map((company) => (
            <label
              key={company.id}
              className="flex cursor-pointer items-center gap-[10px] text-[11px] font-bold text-muted max-[650px]:text-[10px]"
            >
              <input
                type="radio"
                name="company-filter"
                value={company.id}
                checked={String(selectedCompany) === String(company.id)}
                onChange={() => onCompanyChange(company.id)}
                className="cursor-pointer accent-primary"
              />
              {company.name}
              <span className="mr-auto rounded-md bg-surface-alt px-[7px] text-[10px] text-muted">
                {getCompanyCount(company.id)}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-[22px] max-[900px]:p-[5px] max-[650px]:p-0">
        <h4 className="mb-[13px] mt-0 text-[12px] font-bold text-text max-[650px]:text-[11px]">
          وقت الانطلاق
        </h4>

        <div className="flex flex-col gap-3 max-[650px]:gap-[9px]">
          {timeOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-[10px] text-[11px] font-bold text-muted max-[650px]:text-[10px]"
            >
              <input
                type="radio"
                name="time-filter"
                value={option.value}
                checked={selectedTime === option.value}
                onChange={() => onTimeChange(option.value)}
                className="cursor-pointer accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div><div className="mt-[27px] flex gap-[9px] rounded-xl bg-soft-teal p-[13px] text-primary-deep max-[900px]:col-span-full max-[900px]:m-0">
        <Shield size={22} className="shrink-0" />

        <p className="m-0 text-[10px] leading-[2] text-text">
          <b className="text-[11px]">الحجز بشكل واضح</b>
          <br />
          كل تفاصيل الرحلة قدامك قبل التأكيد.
        </p>
      </div>
    </aside>
  );
}