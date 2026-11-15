import { Building2, Bus, ArrowLeft, Armchair } from "lucide-react";
import Button from "../common/button";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/use-search";
const formatTime = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Damascus",
  }).format(new Date(date));

const formatDuration = (departure, arrival) => {
  const minutes = Math.round(
    (new Date(arrival) - new Date(departure)) / 60000
  );

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours} س ${remainingMinutes} د;`
};

const formatMoney = (price) =>
 ` ${Number(price).toLocaleString("en-US")} ل.س;`

export default function TripCard({ trip }) {
  const {
    company,
    departureAt,
    arrivalAt,
    origin,
    destination,
    price,
    availableSeats,
  } = trip;
const navigate = useNavigate();
const {searchData} = useSearch();
  return (
    <article className="overflow-hidden rounded-[17px] border border-border bg-surface transition-all duration-300 hover:-translate-y-[3px] hover:border-[#b4e4db] hover:shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between gap-2 px-[23px] pb-[13px] pt-[19px] max-[650px]:px-[14px] max-[650px]:pb-2 max-[650px]:pt-[15px]">
        <div className="flex items-center gap-[11px]">
          <span className="grid size-[49px] shrink-0 place-items-center rounded-[14px] bg-soft-teal text-primary-deep max-[650px]:size-[42px]">
            {company.logoUrl ? (
              <img
                src={company.logoUrl}
                alt={company.name}
                className="size-full rounded-[14px] object-cover"
              />
            ) : (
              <Building2 size={25} />
            )}
          </span>

          <strong className="text-[13px] font-bold text-text max-[650px]:text-xs">
            {company.name}
          </strong>
        </div>

        <span className="inline-flex items-center gap-[6px] rounded-[20px] border border-border px-[11px] py-[5px] text-[10px] font-bold text-muted max-[650px]:text-[9px]">
          <Bus size={16} />
          حافلة سياحية
        </span>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_180px] items-center gap-[14px] px-[23px] pb-[23px] pt-[14px] max-[650px]:grid-cols-1 max-[650px]:gap-[18px] max-[650px]:px-[14px] max-[650px]:py-[15px]">
        <div className="flex items-center justify-between gap-[17px] max-[650px]:gap-[7px]">
          <div className="flex min-w-[60px] flex-col">
            <b className="text-[23px] font-black leading-[1.5] text-text max-[650px]:text-xl">
              {formatTime(departureAt)}
            </b>
            <span className="text-[11px] font-extrabold text-muted">
              {origin.name}
            </span>
          </div>

          <div className="flex min-w-[110px] flex-1 flex-col items-center max-[650px]:min-w-[80px]">
            <span className="text-[10px] font-extrabold text-muted">
              {formatDuration(departureAt, arrivalAt)}
            </span>

            <div className="my-1 flex w-full items-center justify-center gap-[9px] text-primary">
              <i className="flex-1 border-t border-dashed border-[#b6ccd2]" />
              <Bus size={18} />
              <i className="flex-1 border-t border-dashed border-[#b6ccd2]" />
            </div>

            <small className="text-[10px] font-extrabold text-primary">
              مباشرة
            </small>
          </div>

          <div className="flex min-w-[60px] flex-col">
            <b className="text-[23px] font-black leading-[1.5] text-text max-[650px]:text-xl">
              {formatTime(arrivalAt)}
            </b>
            <span className="text-[11px] font-extrabold text-muted">
              {destination.name}
            </span>
          </div>
        </div>

        <div className="flex flex-col border-r border-border pr-5 max-[650px]:grid max-[650px]:grid-cols-[1fr_auto] max-[650px]:gap-x-[9px] max-[650px]:border-r-0 max-[650px]:border-t max-[650px]:pt-[15px]">
          <small className="text-[10px] text-muted">السعر للشخص</small><b className="whitespace-nowrap text-[19px] font-black text-text max-[650px]:text-lg">
            {formatMoney(price)}
          </b>

          <span className="mb-[11px] flex items-center gap-[5px] text-[10px] font-extrabold text-primary max-[650px]:mb-0">
            <Armchair size={15} />
            {availableSeats} مقعد متاح
          </span>
<Button
  type="button"
  onClick={() => {
    navigate("/booking-checkout", {
      state: { trip ,
        searchData
       },
    });
  }}
  className="btn bg-primary flex gap-2 justify-center min-h-[38px] px-[10px] py-[7px] text-[11px] max-[650px]:col-start-2 max-[650px]:row-span-3"
>
  اختيار المقاعد
  <ArrowLeft size={16} />
</Button>
        </div>
      </div>
    </article>
  );
}