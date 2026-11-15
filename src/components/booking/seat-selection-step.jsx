import Button from "../common/button";
import {
  Armchair,
  Bus,
  Gauge,
  Info,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import SectionHeading from "../common/section-heading";

function SeatSelectionStep({
  seatsData,
  selectedSeats,
  onSeatsChange,
  passengerCount,
  onBack,
  onNext,
}) {
  const totalSeats = seatsData?.totalSeats ?? 0;
  const occupiedSeats = (seatsData?.occupiedSeats ?? []).map(Number);

  const seatRows = Array.from(
    { length: Math.ceil(totalSeats / 4) },
    (_, index) =>
      Array.from(
        { length: Math.min(4, totalSeats - index * 4) },
        (_, seatIndex) => index * 4 + seatIndex + 1
      )
  );

  function toggleSeat(seatNumber) {
  if (occupiedSeats.includes(Number(seatNumber))) return;

  if (selectedSeats.includes(seatNumber)) {
    onSeatsChange(selectedSeats.filter((seat) => seat !== seatNumber));
    return;
  }

  if (selectedSeats.length >= passengerCount) return;

  onSeatsChange([...selectedSeats, seatNumber]);
}
  function renderSeat(seatNumber) {
    const isBusy = occupiedSeats.includes(Number(seatNumber));
    const isSelected = selectedSeats.includes(seatNumber);

    return (
      <button
        key={seatNumber}
        type="button"
        disabled={isBusy}
        aria-label={`مقعد ${seatNumber}`}
        aria-pressed={isSelected}
        onClick={() => toggleSeat(seatNumber)}
        className={`relative grid h-[39px] min-w-0 place-items-center rounded-[9px] border transition-[transform,background,border] duration-200
          ${
            isBusy
              ? "cursor-not-allowed border-[#d9e1e3] bg-[#e2e9eb] text-[#aab9be] opacity-70 dark:bg-[#304755]"
              : isSelected
                ? "border-primary bg-primary text-white"
                : "border-[#c9dade] bg-surface text-[#8fadb4] hover:scale-[1.06] hover:border-primary hover:text-primary"
          }`}
      >
        <Armchair size={24} />
        <small className="absolute bottom-px left-1 font-[var(--font)] text-[8px]">
          {seatNumber}
        </small>
      </button>
    );
  }

  return (
    <>
    <div className="rounded-[20px] border border-border bg-surface p-5">
      <SectionHeading
        firstText="اختار مكانك المفضّل"
        description={`اختار ${passengerCount} مقعد`}
        
        icon={Armchair}
      />

      <div className="grid grid-cols-1 gap-[26px] md:grid-cols-[minmax(270px,1fr)_minmax(190px,.8fr)]">
       
        <div className="mx-auto w-full max-w-[353px] rounded-t-[100px] rounded-b-[26px] border border-border bg-surface-alt px-[18px] pb-[25px] pt-[21px] shadow-[inset_0_0_0_6px_color-mix(in_srgb,var(--border)_35%,transparent)]">
          <div className="mb-[18px] flex items-center justify-between border-b border-dashed border-[#bdced2] px-[10px] pb-4 pt-[7px] text-[10px] font-extrabold text-muted">
            <span className="flex items-center gap-[6px]">
              <Bus size={20} />
              مقدمة الحافلة
            </span>

            <span className="text-[30px] text-text">
              <Gauge size={27} />
            </span>
          </div>

          <div>
            {seatRows.map((row, index) => (
              <div
                key={index}
                className="mb-[9px] grid grid-cols-[27px_1fr_1fr_15px_1fr_1fr] items-center gap-[7px]"
              >
                <span className="text-center text-[10px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {row.slice(0, 2).map(renderSeat)}

                <span />

                {row.slice(2, 4).map(renderSeat)}
              </div>
            ))}
          </div>

          <div className="mt-[14px] flex flex-wrap items-center justify-center gap-[13px] border-t border-border pt-[18px]">
            <span className="flex items-center gap-[5px] text-[10px] text-muted">
              <i className="h-[13px] w-[13px] rounded-[4px] border border-[#b5ced2] bg-surface" />
              متاح
            </span><span className="flex items-center gap-[5px] text-[10px] text-muted">
              <i className="h-[13px] w-[13px] rounded-[4px] border border-primary bg-primary" />
              مختار
            </span>

            <span className="flex items-center gap-[5px] text-[10px] text-muted">
              <i className="h-[13px] w-[13px] rounded-[4px] bg-[#c5d1d5]" />
              محجوز
            </span>
          </div>
        </div>

       
        <div>
          <div className="rounded-[17px] border border-border p-[22px]">
            <span className="mb-[13px] grid size-[50px] place-items-center rounded-[15px] bg-soft-teal text-primary">
              <Armchair size={24} />
            </span>

            <h3 className="mb-[5px] text-base font-bold text-text">
              مكانك، راحتك.
            </h3>

            <p className="text-[11px] leading-[2] text-muted">
              اختار مقعدك حسب تفضيلك. المكان عند الشباك أو بالممر، الخيار إلك.
            </p>

            <div className="flex items-center justify-between border-t border-border pt-[17px] text-[11px]">
              <span className="text-muted">المقاعد المختارة</span>
              <strong className="text-base text-primary">
                {selectedSeats.length} / {passengerCount}
              </strong>
            </div>

            <div className="mt-[14px] flex flex-wrap gap-[6px]">
              {selectedSeats.length > 0 ? (
                selectedSeats.map((seat) => (
                  <span
                    key={seat}
                    className="rounded-[7px] bg-soft-teal px-[10px] py-[5px] text-[10px] font-extrabold text-primary-deep"
                  >
                    مقعد {seat}
                  </span>
                ))
              ) : (
                <span className="text-[11px] text-muted">
                  لسا ما اخترت مقعد
                </span>
              )}
            </div>
          </div>

          <div className="mt-[14px] flex items-start gap-[9px] rounded-[12px] bg-soft-teal p-[13px] text-[10px] font-bold leading-[1.9] text-primary-deep">
            <Info size={19} className="mt-px shrink-0" />
            <span>
              لتكمل، اختار عدد مقاعد مساوي لعدد المسافرين.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[27px] flex items-center justify-between gap-[15px] border-t border-border pt-[22px]">
        <Button
          type="button"
          onClick={onBack}
          className="!bg-bg !text-text"
        >
          <ArrowRight size={17} />
          رجوع للرحلات
        </Button>

        <Button
          type="button"
          disabled={selectedSeats.length !== passengerCount}
          onClick={onNext}
         
        >
          متابعة الحجز
          <ArrowLeft size={17} />
        </Button>
      </div>
      </div>
    </>
  );
}

export default SeatSelectionStep;