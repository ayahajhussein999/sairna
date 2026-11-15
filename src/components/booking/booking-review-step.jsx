import { useState } from "react";
import {
  CircleCheck,
  UserRound,
  Wallet,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import SectionHeading from "../common/section-heading";
import Button from "../common/button";

function BookingReviewStep({
  passengers = [],
  selectedSeats = [],
  onBack,
  onConfirm,
  onPaymentChange,
  isPending
}) {
  const [payment, setPayment] = useState("office");

  const handlePaymentChange = (value) => {
    setPayment(value);
    onPaymentChange?.(value);
  };

  return (
    <div className="min-w-0">
      <SectionHeading
        title=" كل شي حاهز ؟"
        highlightedText={<CircleCheck size={24}/>}
        description="راجع معلومات الرحلة قبل ما تثبّت الحجز."
       
      />

      {/* Passenger Details */}
      <div className="mb-[18px] rounded-[17px] border border-border p-[22px]">
        <h3 className="mb-[14px] text-[14px] font-bold">
          تفاصيل المسافرين
        </h3>

        {passengers.map((passenger, index) => (
          <div
            key={passenger.seat ?? selectedSeats[index] ?? index}
            className="flex items-center gap-3 border-t border-border py-[10px]"
          >
            <span className="grid size-[39px] shrink-0 place-items-center rounded-full bg-soft-teal text-primary">
              <UserRound size={19} />
            </span>

            <div className="flex min-w-0 flex-col">
              <b className="text-[12px]">
                {passenger.name || "—"}
              </b>

              <span dir="ltr" className="text-[11px] text-muted">
                {passenger.phone || "—"}
              </span>
            </div>

            <small className="mr-auto shrink-0 font-extrabold text-primary">
              المقعد {passenger.seat ?? selectedSeats[index] ?? "—"}
            </small>
          </div>
        ))}
      </div>

      {/* Payment Method */}
      <div className="mb-[18px] rounded-[17px] border border-border p-[22px]">
        <h3 className="mb-[14px] text-[14px] font-bold">
          طريقة تأكيد الحجز
        </h3>

        <label
          className={`mb-[9px] flex cursor-pointer items-center gap-3 rounded-xl border p-[13px] transition-colors ${
            payment === "office"
              ? "border-primary bg-soft-teal"
              : "border-border"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="office"
            checked={payment === "office"}
            onChange={() => handlePaymentChange("office")}
            className="accent-primary"
          />

          <span className="grid size-[43px] shrink-0 place-items-center rounded-[11px] bg-surface-alt text-primary">
            <Wallet size={22} />
          </span>

          <span className="flex min-w-0 flex-1 flex-col">
            <b className="text-[12px]">
              الدفع في مكتب الشركة
            </b>
            <small className="text-[10px] text-muted">
              ادفع عند الحضور لمكتب الشركة قبل الرحلة — عرض تجريبي.
            </small>
          </span>
        </label>

        <label
          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-[13px] transition-colors ${
            payment === "demo"
              ? "border-primary bg-soft-teal"
              : "border-border"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="demo"
            checked={payment === "demo"}
            onChange={() => handlePaymentChange("demo")}
            className="accent-primary"
          />

          <span className="grid size-[43px] shrink-0 place-items-center rounded-[11px] bg-surface-alt text-primary">
            <CreditCard size={22} />
          </span>

          <span className="flex min-w-0 flex-1 flex-col"><b className="text-[12px]">
              دفع إلكتروني (تجريبي)
            </b>
            <small className="text-[10px] text-muted">
              محاكاة لواجهة الدفع فقط؛ لن يتم تحصيل أي مبلغ.
            </small>
          </span>
        </label>
      </div>

      
      <p className="mb-5 flex items-center gap-[9px] text-[11px] text-primary-deep">
        <ShieldCheck size={18} className="shrink-0" />
        بتأكيد الحجز، رح تنضاف تذكرة تجريبية لقائمة «حجوزاتي» في هذا المتصفح.
      </p>

      
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="subtle" onClick={onBack}>
          <ArrowRight size={17} />
          السابق
        </Button>

       <Button
  variant="primary"
  onClick={onConfirm}
  disabled={isPending}
>
  {isPending ? "جاري تأكيد الحجز..." : "تأكيد الحجز"}
  {!isPending && <ArrowLeft size={17} />}
</Button>
      </div>
    </div>
  );
}

export default BookingReviewStep;