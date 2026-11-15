import {  Plus, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import EyeBrow from "../components/common/eye-brow";
import SectionHeading from "../components/common/section-heading";
import Button from "../components/common/button";

function FaqPage() {
  const faqs = [
    {
      question: "كيف بحجز رحلة؟",
      answer:
        "حدد المحافظة اللي رح تطلع منها والمحافظة اللي بدك توصل إلها، بعدين اختار التاريخ والشركة والموعد والمقعد، وأكّد الحجز.",
    },
    {
      question: "في دفع إلكتروني حقيقي؟",
      answer:
        "لا. الموقع نموذج تدريبي، وخيارات الدفع معروضة لأغراض التصميم فقط.",
    },
    {
      question: "الخريطة بتعرض مكان الباص الحقيقي؟",
      answer:
        "لا. الخريطة بتعرض مسار تقديري ومحاكاة لحركة الباص. التتبع المباشر يحتاج GPS وAPI من شركة النقل.",
    },
    {
      question: "وين بلاقي حجوزاتي؟",
      answer:
        "من قائمة «حجوزاتي». الحجوزات محفوظة محلياً بنفس المتصفح لأغراض التدريب.",
    },
    {
      question: "هل في حسابات حقيقية؟",
      answer:
        "التسجيل والدخول محاكاة لتجربة الواجهة، وليسا نظام مصادقة حقيقياً.",
    },
  ];

  return (
    <main className="inner-main bg-bg">
      <section className="page-banner py-14 ">
        <div className="container">
         <EyeBrow text="نحن معك"/>
            

          <SectionHeading
           firstText="شو حابب"
            highlightText="تعرف؟"
            description="أسئلة بتساعدك تستخدم نموذج سيرنا بسهولة."
          />
        </div>
      </section>

      <section className="container faq-section grid grid-cols-[minmax(0,1fr)_300px] gap-7 items-start max-[800px]:grid-cols-1 pb-20">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-border rounded-[16px] bg-surface p-5"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-text font-bold text-sm [&::-webkit-details-marker]:hidden">
                {faq.question}

                <Plus
                  size={18}
                  className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                />
              </summary>

              <p className="mt-4 pt-4 border-t border-border text-muted text-[13px] leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="support-aside bg-surface-alt border border-border rounded-[22px] p-7">
          <Headphones size={32} className="text-primary mb-5" />

          <h2 className="text-xl font-extrabold text-text mb-3">
            بحاجة لمساعدة؟
          </h2>

          <p className="text-muted text-[13px] leading-8 mb-6">
            هاد الموقع نموذج واجهات تعليمية، وممكن تطوّرو لاحقاً لتضيفوا نظام دعم حقيقي.
          </p>

          <Link to="/">
            <Button className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap">
              رجوع للرئيسية
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FaqPage;