import { useState } from "react";
import { useSearch } from "../../hooks/use-search";
import {
  MapPin,
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";
import EyeBrow from "../common/eye-brow";
import Button from "../common/button";
import { useCities } from "../../hooks/use-website";

export default function SearchSection({
  showHeading = true,
  compact = false,
  initialOrigin = "2",
  initialDestination = "1",
  initialDate = "2026-11-08",
  initialPeople = "1",
  onSearch,
}) {
  const { data: cities = [], isLoading, isError } = useCities();

  const { searchData, setSearchData } = useSearch();

const [origin, setOrigin] = useState(searchData?.origin ?? initialOrigin);
const [destination, setDestination] = useState(searchData?.destination ?? initialDestination);
const [date, setDate] = useState(searchData?.date ?? initialDate);
const [people, setPeople] = useState(searchData?.people ?? initialPeople);

  function handleSwap() {
    setOrigin(destination);
    setDestination(origin);
  }

 function handleSearch(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  setSearchData(data);
  onSearch?.(data);
}

  return (
    
    <div
      className={
        compact
          ? "relative z-[2]  rounded-[18px] border border-border bg-[var(--surface)] p-[18px] shadow-[var(--shadow)] max-[650px]:p-3"
          : "relative z-[3] mt-[25px] rounded-[21px] border border-border bg-[var(--surface)] px-6 pb-[25px] pt-[22px] shadow-[0_21px_58px_rgba(11,71,72,0.1)] max-[650px]:mt-5 max-[650px]:px-[14px] max-[650px]:py-[18px]"
      }
    >
      {showHeading && !compact && (
        <div className="mb-4 flex items-center justify-between max-[650px]:items-start max-[650px]:gap-[10px]">
          <div className="flex items-center gap-[11px] max-[650px]:flex-wrap max-[650px]:gap-[6px]">
            <span className="size-[9px] shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_0_5px_var(--soft-teal)]" />

            <strong className="text-[15px] font-extrabold text-[var(--text)] max-[650px]:text-[13px]">
              وين رحلتك الجاية؟
            </strong>

            <span className="text-[11px] text-muted max-[650px]:basis-full max-[650px]:text-[10px]">
              اختار وجهتك وباقي التفاصيل علينا
            </span>
          </div>

          <EyeBrow text="الحجز ب 3 خطوات" />
        </div>
      )}

      <form
        className={`grid items-end ${
          compact ? "gap-[9px]" : "gap-[11px]"
        } grid-cols-[1.12fr_34px_1.12fr_1fr_0.74fr_1.14fr] max-[1150px]:grid-cols-[1fr_27px_1fr_1fr_0.7fr_1.1fr] max-[1150px]:gap-[7px] max-[900px]:grid-cols-[1fr_30px_1fr_1fr_1fr] max-[900px]:gap-2 max-[650px]:grid-cols-[1fr_29px_1fr] max-[650px]:gap-[9px] max-[370px]:grid-cols-[1fr_21px_1fr] max-[370px]:gap-[6px]`}
        onSubmit={handleSearch}
      >
        <label className="relative flex h-[60px] min-w-0 items-center gap-[10px] rounded-[11px] border border-border bg-[var(--surface)] px-[14px] pb-[5px] pt-[11px] transition-[border-color,box-shadow] focus-within:border-[var(--primary)] focus-within:shadow-[0_0_0_3px_rgba(13,172,155,0.08)] max-[1150px]:gap-[6px] max-[1150px]:px-[10px] max-[900px]:h-14 max-[650px]:h-[58px] max-[650px]:gap-1 max-[650px]:px-[9px] max-[650px]:pb-1 max-[650px]:pt-2">
          <span className="absolute right-[14px] top-[7px] text-[10px] font-bold text-muted max-[650px]:right-[9px]">
            من وين؟
          </span>

          <MapPin
            size={19}
            className="mt-3 shrink-0 text-primary max-[650px]:size-4"
          />

          <select
            name="origin"
            aria-label="محافظة الانطلاق"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
            disabled={isLoading || isError}
            className="mt-[11px] h-[30px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[11px] font-black text-[var(--text)] outline-none max-[650px]:mt-[10px]"
          >
            {cities.map((city) => (
              <option key={city.id} value={String(city.id)}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={handleSwap}
          aria-label="تبديل المحافظات"
          className="mb-[11px] grid size-[38px] w-[34px] place-items-center rounded-[10px] border-0 bg-soft-teal text-primary-deep transition-transform duration-300 hover:rotate-180 max-[1150px]:w-[27px] max-[900px]:mb-2 max-[650px]:col-start-2 max-[650px]:row-start-1 max-[650px]:size-[38px] max-[650px]:w-[29px] max-[370px]:w-[21px]"
        >
          <ArrowLeftRight size={19} />
        </button>

        <label className="relative flex h-[60px] min-w-0 items-center gap-[10px] rounded-[11px] border border-border bg-surface px-[14px] pb-[5px] pt-[11px] transition-[border-color,box-shadow] focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(13,172,155,0.08)] max-[1150px]:gap-[6px] max-[1150px]:px-[10px] max-[900px]:h-14 max-[650px]:col-start-3 max-[650px]:row-start-1 max-[650px]:h-[58px] max-[650px]:gap-1 max-[650px]:px-[9px] max-[650px]:pb-1 max-[650px]:pt-2">
          <span className="absolute right-[14px] top-[7px] text-[10px] font-bold text-muted max-[650px]:right-[9px]">
            لوين؟
          </span>

          <MapPin
            size={19}
            className="mt-3 shrink-0 text-primary max-[650px]:size-4"
          />

          <select
            name="destination"
            aria-label="محافظة الوصول"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            disabled={isLoading || isError}
            className="mt-[11px] h-[30px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[11px] font-black text-text outline-none max-[650px]:mt-[10px]"
          >
            {cities.map((city) => (
              <option key={city.id} value={String(city.id)}>
                {city.name}
              </option>
            ))}
          </select>
        </label>

        <label
          className={`relative flex h-[60px] min-w-0 items-center gap-[10px] rounded-[11px] border border-border bg-surface px-[14px] pb-[5px] pt-[11px] focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(13,172,155,0.08)] max-[1150px]:px-[10px] max-[900px]:h-14 max-[650px]:col-span-2 max-[650px]:col-start-1 max-[650px]:row-start-2 max-[650px]:h-[58px] max-[650px]:gap-1 max-[650px]:px-[9px] max-[650px]:pb-1 max-[650px]:pt-2 ${
            compact ? "max-[650px]:h-[53px]" : ""
          }`}
        >
          <span className="absolute right-[14px] top-[7px] text-[10px] font-bold text-muted">
            تاريخ الرحلة
          </span>

          <CalendarDays
            size={19}
            className="mt-3 shrink-0 text-primary max-[650px]:size-4"
          />

          <input
            name="date"
            type="date"
           value={date}
onChange={(e) => setDate(e.target.value)}
            min="2026-11-07"
            required
            className="mt-[11px] h-[30px] w-full min-w-0 cursor-default appearance-none border-0 bg-transparent p-0 text-[11px] font-black text-text outline-none max-[650px]:mt-[10px]"
          />
        </label>

        <label
          className={`relative flex h-[60px] min-w-0 items-center gap-[10px] rounded-[11px] border border-border bg-surface px-[14px] pb-[5px] pt-[11px] focus-within:border-[var(--primary)] focus-within:shadow-[0_0_0_3px_rgba(13,172,155,0.08)] max-[1150px]:px-[10px] max-[900px]:h-14 max-[650px]:col-start-3 max-[650px]:row-start-2 max-[650px]:h-[58px] max-[650px]:gap-1 max-[650px]:px-[9px] max-[650px]:pb-1 max-[650px]:pt-2 ${
            compact ? "max-[650px]:h-[53px]" : ""
          }`}
        >
          <span className="absolute right-[14px] top-[7px] text-[10px] font-bold text-muted max-[650px]:right-[9px]">
            المسافرين
          </span>

          <Users
            size={19}
            className="mt-3 shrink-0 text-primary max-[650px]:size-4"
          />
          <select
            name="people"
            aria-label="عدد المسافرين"
            value={people}
onChange={(e) => setPeople(e.target.value)}
            className="mt-[11px] h-[30px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[11px] font-black text-text outline-none max-[650px]:mt-[10px]"
          >
            <option value="1">1 مسافر</option>
            <option value="2">2 مسافرين</option>
            <option value="3">3 مسافرين</option>
            <option value="4">4 مسافرين</option>
          </select>
        </label>

        <Button
          type="submit"
          size="md"
          className="flex h-[60px] w-full items-center justify-center gap-2 text-xs"
        >
          <Search size={18} />
          ابحث عن رحلة
        </Button>
      </form>

      {isError && (
        <p className="mt-3 text-sm text-red-500">
          تعذّر تحميل المدن، حاولي تحديث الصفحة.
        </p>
      )}
    </div>
  );
}
