import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight} from "lucide-react";
import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";

function BookingHead({ currentStep = 1 }) {
  const steps = [
    "اختيار المقاعد",
    "بيانات المسافرين",
    "المراجعة والتأكيد",
  ];

  return (
    <section className="container">
      
      <div className="flex items-center gap-2 text-sm text-[#718493] mb-8">
        <Link to="/">الرئيسية</Link>
        <ChevronLeft size={14} />
        <Link to="/book-trip">الرحلات</Link>
        <ChevronLeft size={14} />
        <span className="text-text">إتمام الحجز</span>
      </div>

     
       <EyeBrow text="باقي شوي وتوصل"/>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      
       <SectionHeading firstText="كمل حجز" highlightText="رحلتك" />
        <Link
          to="/book-trip"
          className="flex items-center gap-2"
        >
          <ArrowRight size={17} />
          تغيير الرحلة
        </Link>
      </div>

     
      <div className="mt-8 flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={step} className="contents">
              <div
                className={`flex items-center gap-2 ${
                  isCurrent
                    ? "text-[#078e87]"
                    : isCompleted
                    ? "text-[#078e87]"
                    : "text-[#718493]"
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                    isCurrent || isCompleted
                      ? "border-[#078e87] bg-[#e6f8f3]"
                      : "border-[#e4ecef]"
                  }`}
                >
                  {isCompleted ? "✓" : stepNumber}
                </span>

                <b className="text-sm">{step}</b>
              </div>

              {index !== steps.length - 1 && (
                <div className="h-px min-w-3 flex-1 bg-[#e4ecef]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BookingHead;