import { Link } from "react-router-dom";
import { ChevronLeft, Navigation,  ArrowRight } from "lucide-react";

import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";
import Button from "../common/button";

function TrackingHeader() {
  return (
    <section className="container flex items-end justify-between gap-5 pt-[29px] pb-[25px] max-[650px]:flex-col max-[650px]:items-start">
      <div>
        <div className="mb-[17px] flex items-center gap-2 text-[11px] font-bold text-muted">
          <Link to="/">الرئيسية</Link>
          <ChevronLeft size={14} />
          <Link to="/my-bookings">حجوزاتي</Link>
          <ChevronLeft size={14} />
          <span className="text-text">تتبّع الرحلة</span>
        </div>

        <EyeBrow text="تابع الطريق"/>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <SectionHeading
            firstText="رحلتك قدام عيونك"
            description="خط السير على الخريطة مع محطات ووقت وصول توضيحي."
          />

          <span className="inline-flex items-center gap-[5px] rounded-full border border-[#a0e6c7] bg-[#e8fff4] px-[11px] py-[6px] text-[10px] font-bold text-[#10a578]">
            <Navigation size={15} />
            محاكاة تفاعلية
          </span>
        </div>
      </div>

      <Link to="/my-bookings">
        <Button className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap">
          <ArrowRight size={17} />
          كل الحجوزات
        </Button>
      </Link>
    </section>
  );
}

export default TrackingHeader;