import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import SectionHeading from "../common/section-heading";
import EyeBrow from "../common/eye-brow";

function BookingsBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border  py-[26px] pb-[45px]">
      <div className="container relative z-10">
        <div className="mb-[22px] flex items-center gap-2 text-[11px] font-extrabold text-muted">
          <Link to="/" className="hover:text-primary">
            الرئيسية
          </Link>
          <ChevronLeft size={14} />
          <span className="text-text">حجوزاتي</span>
        </div>

        <div className="mb-3">
          <EyeBrow text="كل رحلاتك بمكان واحد"/>
        </div>

        <SectionHeading
          firstText="تذاكرك"
          highlightText="دايماً معك."
          description="راقب حجوزاتك، وارجع لتفاصيل الرحلة وقت ما تحتاج."
        />
      </div>
    </section>
  );
}

export default BookingsBanner;