import {  ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import EyeBrow from "../components/common/eye-brow";
import SectionHeading from "../components/common/section-heading";
import Button from "../components/common/button";

function AboutSairnaPage() {
  return (
    <div className="bg-bg">
    <main className="inner-main ">
      <section className="page-banner ">
        <div className="container pt-15">
          <EyeBrow text="قصتنا"/>
          <SectionHeading
            firstText="سيرنا."
            highlightText="رحلة أبسط لكل حدا."
            description="فكرة موقع لحجز الرحلات البرية بين المحافظات السورية، انبنت كنموذج لتعليم تصميم وتطوير الويب."
          />
        </div>
      </section>

      <section className="container section grid grid-cols-2 items-center gap-10 max-[768px]:grid-cols-1 mt-9 mb-9 ">
        <div>
          <h2 className="text-2xl font-extrabold text-text mb-4">
            فكرة صغيرة... تجربة كبيرة.
          </h2>

          <p className="text-muted text-sm leading-8 mb-4">
            بدنا تجربة واضحة للمستخدم من لحظة اختيار مدينة الانطلاق والوصول،
            وصولاً لمقارنة الشركات، اختيار المقاعد، تأكيد التذكرة،
            ومشاهدة مسار الرحلة على الخريطة.
          </p>

          <p className="text-muted text-sm leading-8 mb-6">
            تم تطوير هذا النموذج باستخدام HTML وCSS وJavaScript دون إطار عمل،
            ليكون مناسباً للتدريب والتوسع لاحقاً وربطه بواجهة API حقيقية.
          </p>

          <Link to="/book-trip">
            <Button className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap">
              جرّب رحلة
              <ArrowLeft size={17} />
            </Button>
          </Link>
        </div>

        <img
          src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/d/d3/Beach_Latakia_1.jpg&w=1100&q=85"
          alt="الساحل السوري في اللاذقية"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full min-h-[320px] object-cover rounded-[22px]"
        />
      </section>
    </main>
    </div>
  );
}

export default AboutSairnaPage;