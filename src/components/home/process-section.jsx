import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";
import ProcessCard from "./process-card";

export default function ProcessSection() {
  return (
    <div className="bg-surface-alt border-y border-border">
      <div className="container">
        <div className="w-fit mx-auto mb-[35px] text-center mt-15 ">
          <EyeBrow text="السفر صار أبسط" />

          <SectionHeading
            firstText="3 خطوات ... "
            highlightText="وتكون بالطريق"
            description="ما في داعي للتعقيد. كل شي مرتب بواجهة وحدة."
            descriptionCentered
            titleSize="text-3xl"
          />
        </div>
        <div className="relative grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 mb-15">
          <ProcessCard
            number="01"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search sairna-icon"
                aria-hidden="true"
                style={{ width: 28, height: 28 }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            }
            iconBg="bg-[#e6f9f4]"
            iconColor="text-[#0ca88f]"
            firstText="اختار وجهتك"
            description="حدّد من وين لوين وتاريخ الرحلة المناسب إلك."
          />
          <ProcessCard
            number="02"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bus sairna-icon"
                aria-hidden="true"
                style={{ width: 28, height: 28 }}
              >
                <path d="M8 6v6" />
                <path d="M15 6v6" />
                <path d="M2 12h19.6" />
                <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                <circle cx="7" cy="18" r="2" />
                <path d="M9 18h5" />
                <circle cx="16" cy="18" r="2" />
              </svg>
            }
            iconBg="bg-[#fff0df]"
            iconColor="text-[#e99a42]"
            firstText="اختار رحلتك"
            description="قارن بين الرحلات واختار الأنسب إلك."
          />
          <ProcessCard
            number="03"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ticket sairna-icon"
                aria-hidden="true"
                style={{ width: 28, height: 28 }}
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            }
            iconBg="bg-[#eaf0ff]"
            iconColor="text-[#6685e8]"
            firstText="احجز تذكرتك"
            description="أكمل الحجز وخلي تذكرتك جاهزة لرحلتك."
          />
        </div>
      </div>
    </div>
  );
}
