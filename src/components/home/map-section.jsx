import EyeBrow from "../common/eye-brow";
import { Link } from "react-router-dom";
import SectionHeading from "../common/section-heading";
import Button from "../common/button";
import { useMyBookings } from "../../hooks/use-my-bookings";
export default function MapSection() {
  const { data: bookingsResponse } = useMyBookings();
  
  const bookings = Array.isArray(bookingsResponse?.data)
    ? bookingsResponse.data
    : Array.isArray(bookingsResponse)
      ? bookingsResponse
      : [];
  
  const trackableBooking = bookings.find(
    (item) => item.status === "CONFIRMED"
  );
  return (
    <section className="py-[58px] min-[901px]:py-[86px] bg-bg ">
      <div className="container ">
        <div className="grid min-h-[435px] grid-cols-1 overflow-hidden rounded-[28px] border border-border  min-[651px]:grid-cols-2 min-[901px]:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 min-[651px]:px-[29px] min-[651px]:py-9 min-[901px]:p-[50px_52px] bg-surface">
            <EyeBrow text="وين وصلت الرحلة؟" />

            <SectionHeading
              firstText="الطريق قدامك."
              highlightText="لحظة بلحظة؟"
              description="بصفحة التتبّع بتشوف خط سير الرحلة ومحطاتها وحالتها ضمن نموذج تفاعلي سهل وواضح."
              twoLines
              titleSize="text-3xl"
            />

            <div className="mt-5 flex flex-col gap-[11px]">
              <span className="flex items-center gap-[6px] text-text font-extrabold text-[11px]">
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[17px] w-[17px] text-primary"
                >
                  <path d="M5 12l4 4L19 6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                عرض المسار على الخريطة
              </span>

              <span className="flex items-center gap-[6px] text-text font-extrabold text-[11px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[17px] w-[17px] text-primary"
                >
                  <path d="M5 12l4 4L19 6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                وقت وصول تقديري ومحطات الطريق
              </span>
            </div>

            <Link to={ trackableBooking
      ? `/track-trip/${trackableBooking.id}`
      : "/my-bookings" }className="inline-block mt-6">
              <Button>
                <span className="flex items-center gap-2">
                  جرّب تتبّع رحلة
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                </span>
              </Button>
            </Link>

            <small className="mt-[13px] block text-[9px] text-[#718493]">
              * الخريطة وحركة الحافلة في هذا النموذج توضيحية وليست GPS مباشر.
            </small>
          </div>

          <div className="relative flex flex-col justify-center bg-[#f0f6f3] p-[15px] min-[651px]:p-[17px] min-[901px]:p-7">
            <div className="relative z-[1] mb-[15px] flex items-center gap-2 text-[12px] font-extrabold text-[#215467]">
              <span className="h-[9px] w-[9px] rounded-full bg-[#13b58d] shadow-[0_0_0_5px_rgba(16,180,141,0.13)]"></span>
              معاينة مسار رحلة
              <b className="mr-auto">حلب ← دمشق</b>
            </div>

            <div
              id="home-route-map"
              aria-label="خريطة تفاعلية بين حلب ودمشق"
              className="relative isolate h-[230px] w-full overflow-hidden rounded-[18px] bg-[#e6efeb] [direction:ltr] min-[651px]:h-[280px]"
            >
              <iframe
                title="Google Maps - حلب إلى دمشق"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=34.85795%2C36.70540&z=7&output=embed"
                className="absolute inset-0 z-[2] block h-full min-h-full w-full border-0"
              />

              <a
                href="https://www.google.com/maps/dir/?api=1&origin=%D8%AD%D9%84%D8%A8%2C+Syria&destination=%D8%AF%D9%85%D8%B4%D9%82%2C+Syria&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[9px] right-[9px] z-[5] rounded-[9px] bg-white px-2 py-[5px] text-[10px] font-extrabold leading-[1.7] text-[#0c5962] shadow-[0_4px_15px_rgba(12,49,58,0.14)] hover:bg-[#e9fbf7] hover:text-[#078b80] min-[651px]:bottom-3 min-[651px]:right-3 min-[651px]:px-3 min-[651px]:py-[7px] min-[651px]:text-[11px]"
              >
                فتح المسار في Google Maps ↗️
              </a>
            </div>

            <div className="relative z-[1] mt-[15px] flex items-center gap-5 text-[11px] font-black text-[#235666]">
              <span className="flex items-center gap-[5px]">حلب</span>

              <div className="relative h-[2px] flex-1 bg-[#b1dbce]">
                <span className="absolute -top-1 right-[48%] h-[10px] w-[10px] rounded-full bg-[#15ac99]"></span>
              </div>

              <span className="flex items-center gap-[5px]">دمشق</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
