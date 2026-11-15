import { Link } from "react-router-dom";
import { ChevronLeft, Bus } from "lucide-react";
import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";

export default function BookingPanner(){
    return(
        <>
         <div className=" relative z-10">
         <section className="relative overflow-hidden bg-bg px-0 py-[26px] pb-[45px] after:pointer-events-none after:absolute after:-left-[120px] after:-top-[180px] after:size-[350px] after:rounded-full after:border after:border-dashed after:border-[rgba(25,167,154,0.1)] max-md:py-[22px] max-md:pb-[40px]">
     
        <div className="mb-[22px] flex items-center gap-2 text-[11px] font-extrabold text-muted">
          <Link to="/" className="transition-colors hover:text-primary">
            الرئيسية
          </Link>
          <ChevronLeft size={14} />
          <span className="text-text">احجز رحلة</span>
        </div>

        <div className="flex items-center justify-between gap-[25px]">
          <div>
            <EyeBrow text="لنكمل الطريق" />

            <SectionHeading
              firstText="اختار الرحلة"
              highlightText="اللي بتشبهك."
              description="قارن بين الشركات والأوقات، واحجز مقعدك بكل سهولة."
            />
          </div>

          <div className="-rotate-[7deg] text-primary opacity-35 max-md:hidden">
            <Bus size={70} />
          </div>
        </div>
    </section>
     
      </div>
     </>
    )
}