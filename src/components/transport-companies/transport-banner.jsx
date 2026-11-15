import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";

export default function TransportBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(140deg,var(--surface-alt),var(--bg))] py-[26px] pb-[45px] max-[650px]:py-[22px] max-[650px]:pb-[40px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[120px] -top-[180px] size-[350px] rounded-full border border-dashed border-[rgba(25,167,154,0.1)]"
      />

      <div className="relative">
        <div className="mb-[22px] flex items-center gap-2 text-[11px] font-extrabold text-muted">
          <Link to="/" className="transition-colors hover:text-primary">
            الرئيسية
          </Link>

          <ChevronLeft size={14} />

          <span className="text-text">شركات النقل</span>
        </div>

        <EyeBrow text="شركاء الطريق" />

        <SectionHeading
          firstText="شركات بتوصلك"
          highlightText="لوين ما بدك."
          description="تعرّف على شركات النقل الموجودة في النموذج واختار الأنسب إلك."
         
        />
      </div>
    </section>
  );
}