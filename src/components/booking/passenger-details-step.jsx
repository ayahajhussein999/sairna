import { useState } from "react";
import {
  Users,
  UserRound,
  Phone,
  Info,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import SectionHeading from "../common/section-heading";

function PassengerDetailsStep({
  selectedSeats,
  passengers,
  onPassengersChange,
  onBack,
  onNext,
}) {
  const [error, setError] = useState("");

  function updatePassenger(index, field, value) {
    const updatedPassengers = selectedSeats.map((seat, i) => ({
      seat,
      name: passengers[i]?.name ?? "",
      phone: passengers[i]?.phone ?? "",
    }));

    updatedPassengers[index][field] = value;
    onPassengersChange(updatedPassengers);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = selectedSeats.every((seat, index) => {
      const passenger = passengers[index];
      const name = passenger?.name?.trim() ?? "";
      const phone = passenger?.phone?.trim() ?? "";

      return (
        name.length >= 3 &&
        /^09\d{8}$/.test(phone)
      );
    });

    if (!isValid) {
      setError("تأكدي من إدخال الاسم الكامل ورقم موبايل صحيح لكل مسافر.");
      return;
    }

    onNext();
  }

  return (
    <>
      <SectionHeading
        firstText="مين مسافر معنا؟"
        description="دخل بيانات المسافرين حسب عدد المقاعد المختارة."
        icon={Users}
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[17px]">
          {selectedSeats.map((seat, index) => {
            const passenger = passengers[index] ?? {
              name: "",
              phone: "",
            };

            return (
              <div
                key={`${seat}-${index}`}
                className="rounded-[17px] border border-border p-[22px] max-sm:p-[15px]"
              >
                <div className="mb-[17px] flex items-center gap-[10px]">
                  <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-soft-teal font-black text-primary">
                    {index + 1}
                  </span>

                  <b className="text-xs font-extrabold text-text">
                    المسافر {index + 1}
                  </b>

                  <small className="mr-auto rounded-lg bg-surface-alt px-[9px] py-[5px] text-[10px] text-muted">
                    مقعد رقم {seat}
                  </small>
                </div>

                <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
                  <label className="block min-w-0">
                    <span className="mb-2 block text-[11px] font-extrabold text-text">
                      الاسم الكامل <em className="not-italic text-[#d86161]">*</em>
                    </span>

                    <div className="flex h-[50px] items-center gap-[10px] rounded-[11px] border border-border px-[13px] text-muted transition focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(16,169,154,.09)]">
                      <UserRound size={18} className="shrink-0" />

                      <input
                        type="text"
                        value={passenger.name}
                        onChange={(event) =>
                          updatePassenger(index, "name", event.target.value)
                        }
                        placeholder="مثال: أحمد خالد"
                        minLength={3}
                        required
                        autoComplete="off"
                        className="w-full min-w-0 flex-1 bg-transparent text-xs text-text outline-none placeholder:text-[#a5b4bc]"
                      />
                    </div>
                  </label>

                  <label className="block min-w-0">
                    <span className="mb-2 block text-[11px] font-extrabold text-text">
                      رقم الموبايل <em className="not-italic text-[#d86161]">*</em>
                    </span><div className="flex h-[50px] items-center gap-[10px] rounded-[11px] border border-border px-[13px] text-muted transition focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(16,169,154,.09)]">
                      <Phone size={18} className="shrink-0" />

                      <input
                        type="tel"
                        inputMode="tel"
                        dir="ltr"
                        value={passenger.phone}
                        onChange={(event) =>
                          updatePassenger(index, "phone", event.target.value)
                        }
                        placeholder="09xxxxxxxx"
                        minLength={9}
                        maxLength={18}
                        pattern="[+0-9\s-]{9,18}"
                        required
                        autoComplete="off"
                        className="w-full min-w-0 flex-1 bg-transparent text-left text-xs text-text outline-none placeholder:text-[#a5b4bc]"
                      />
                    </div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-[17px] flex items-start gap-[9px] rounded-[10px] bg-surface-alt p-[13px] text-[10px] leading-[1.9] text-muted">
          <Info size={19} className="mt-px shrink-0 text-primary" />
          <span>
            هذه بيانات تجريبية فقط. لا تدخل معلوماتك الحساسة في نسخة التدريب.
          </span>
        </div>

        {error && (
          <p className="mt-3 text-xs font-bold text-[#d86161]">
            {error}
          </p>
        )}

        <div className="mt-[27px] flex items-center justify-between gap-[15px] border-t border-border pt-[22px]">
          <button
            type="button"
            onClick={onBack}
            className="btn btn-subtle"
          >
            <ArrowRight size={17} />
            السابق
          </button>

          <button type="submit" className="btn btn-primary">
            متابعة الحجز
            <ArrowLeft size={17} />
          </button>
        </div>
      </form>
    </>
  );
}

export default PassengerDetailsStep;