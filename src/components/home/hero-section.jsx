import EyeBrow from "../common/eye-brow";
import SearchSection from "./search-section";
import SectionHeading from "../common/section-heading";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/use-search";

function HeroSection() {
  const navigate = useNavigate();
  const { setSearchData } = useSearch();

  return (
    <>
      <div className="bg-bg pt-10 pb-12 sm:pt-[65px] sm:pb-[71px]">
        <div className="container">
          <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-8 lg:gap-[36px]">

              
              <div className="relative z-[1] pb-4 lg:pb-[34px]">
                <EyeBrow text="اهلا فيكم بسيرنا" />

                <SectionHeading
                  firstText="المحطة الجاية ؟"
                  highlightText="على كيفك ."
                  description="من حلب لدمشق، ومن الساحل للجزيرة. لاقي الرحلة اللي بتناسبك، اختار مقعدك، وخلّي الطريق علينا."
                  twoLines
                  titleSize="text-4xl sm:text-5xl lg:text-7xl"
                />

                <div className="flex flex-wrap items-center gap-4 sm:gap-[20px] mt-7">
                  {["حجز سهل", "خيارات متنوعة", "متابعة رحلتك"].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-[6px] text-text font-extrabold text-[11px]"
                    >
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
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 sm:mt-[40px] flex items-center gap-[14px]">
                  <div className="flex flex-row">
                    <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full border-[3px] border-surface -ml-[7px] bg-[#f3d2a6] font-black text-[#5e3a36]">
                      م
                    </span>
                    <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full border-[3px] border-surface -ml-[7px] bg-[#c2dadb] font-black text-[#5e3a36]">
                      س
                    </span>
                    <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full border-[3px] border-surface -ml-[7px] bg-[#e4bed1] font-black text-[#5e3a36]">
                      ع
                    </span>
                    <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full border-[3px] border-surface -ml-[7px] bg-[#b9d2ed] font-black text-[#5e3a36]">
                      ر
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-[3px] leading-[1.5] tracking-[1px] text-[13px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-[14px] w-[14px] text-[#f7b843]"
                        >
                          <path d="M12 2l3 6.5 7 1-5 5 1.2 7-6.2-3.3L5.8 21l1.2-7-5-5 7-1L12 2z" />
                        </svg>
                      ))}
                      <b>4.9/5</b>
                    </div>
                    <small className="text-muted">
                      تجربة سفر بتستاهل تجرّبها
                    </small>
                  </div>
                </div>
              </div>
              <div className="relative min-w-0 pt-[18px] px-4 sm:px-6 lg:pr-[20px] lg:pl-0 pb-[18px]">
                <div className="relative isolate aspect-[1.45] min-h-[240px] sm:min-h-[320px] overflow-visible rounded-[24px] sm:rounded-[30px] bg-[#dff3ed] shadow-[0_30px_70px_rgba(10,62,70,0.15)] [transform:rotate(-1.5deg)]">

                
                  <div className="absolute inset-0 overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-[#e5f6ef] via-[#c6e9df] to-[#a8d9ce]">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/30 blur-2xl" />
                    <div className="absolute bottom-0 left-0 h-24 w-full bg-[#8fc9b8]/20" />

                
                    <svg
                      viewBox="0 0 600 420"
                      preserveAspectRatio="xMidYMid slice"
                      className="absolute inset-0 h-full w-full"
                      fill="none"
                    >
                      <path
                        d="M0 260 Q100 190 200 250 T400 230 T600 245 V420 H0Z"
                        fill="#8dc9b8"
                        opacity=".22"
                      />
                      <path
                        d="M0 300 Q120 230 260 290 T520 270 T700 300 V420 H0Z"
                        fill="#6eb5a4"
                        opacity=".2"
                      />

                     
                      <path
                        d="M-30 355 C90 355 100 265 205 275 S310 355 370 260 S440 105 630 95"
                        stroke="#ffffff"
                        strokeWidth="58"
                        strokeLinecap="round"
                        opacity=".65"
                      />
                      <path
                        d="M-30 355 C90 355 100 265 205 275 S310 355 370 260 S440 105 630 95"
                        stroke="#7baca2"
                        strokeWidth="48"
                        strokeLinecap="round"
                        opacity=".45"
                      />
                      <path
                        d="M-30 355 C90 355 100 265 205 275 S310 355 370 260 S440 105 630 95"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeDasharray="12 12"
                        strokeLinecap="round"
                      />

                    
                      <circle cx="105" cy="315" r="8" fill="#ffffff" />
                      <circle cx="105" cy="315" r="4" fill="#0aa99b" />
                      <circle cx="370" cy="260" r="8" fill="#ffffff" />
                      <circle cx="370" cy="260" r="4" fill="#0aa99b" />

                     
                      <g>
                        <g>
                          <rect x="-25" y="-13" width="50" height="26" rx="7" fill="#078e87" />
                          <rect x="-17" y="-8" width="13" height="10" rx="2" fill="#dff7f1" />
                          <rect x="2" y="-8" width="13" height="10" rx="2" fill="#dff7f1" />
                          <rect x="-3" y="5" width="8" height="3" rx="1" fill="#b6e7db" />
                          <circle cx="-14" cy="13" r="4" fill="#164454" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="14" cy="13" r="4" fill="#164454" stroke="#ffffff" strokeWidth="1.5" />
                          <rect x="20" y="-5" width="4" height="6" rx="1" fill="#f7c76b" />
                        </g>
                        <animateMotion
                          dur="11s"
                          repeatCount="indefinite"
                          rotate="auto"
                          path="M-30 355 C90 355 100 265 205 275 S310 355 370 260 S440 105 630 95"
                        />
                      </g>
                    </svg>
                    <div className="absolute bottom-[18%] left-[13%] rounded-xl bg-[#f2fbf7]/85 border border-white/70 backdrop-blur-md px-3 py-2 text-[#114252] shadow-md">
                      <b className="block text-xs">حلب</b>
                      <small className="text-[10px] text-muted">محطة الانطلاق</small>
                    </div>

                    <div className="absolute top-[17%] right-[12%] rounded-xl bg-[#f2fbf7]/85 border border-white/70 backdrop-blur-md px-3 py-2 text-[#114252] shadow-md">
                      <b className="block text-xs">دمشق</b>
                      <small className="text-[10px] text-muted">وجهتك القادمة</small>
                    </div>

                    <div className="absolute bottom-4 right-5 rounded-full bg-white/75 px-3 py-1.5 text-[10px] font-bold text-[#078e87] backdrop-blur-sm">
                      رحلتك بتبلّش من هون
                    </div>
                  </div>

                 
                  <div className="absolute left-[-8px] sm:left-[-26px] top-[20px] sm:top-[36px] z-[2] flex items-center gap-[10px] rounded-[16px] bg-white px-3 sm:px-[16px] py-3 text-[#114252] shadow-[0_15px_28px_rgba(15,61,69,0.17)] [transform:rotate(1.5deg)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-[18px] w-[18px]"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <div>
                      <b>14 محافظة</b>
                      <br />
                      <small>وجهات بتجمعنا</small>
                    </div>
                  </div>

                 
                  <div className="absolute right-[-8px] sm:right-[-22px] bottom-[30px] sm:bottom-[45px] z-[2] flex items-center gap-[10px] rounded-[16px] bg-white px-3 sm:px-[16px] py-3 text-[#114252] shadow-[0_15px_28px_rgba(15,61,69,0.17)] [transform:rotate(1.5deg)]">
                    <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[12px] bg-[#e6f9f4] text-[#0ca88f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-[20px] w-[20px]"
                      >
                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <b>سافر براحة</b>
                      <br />
                      <small>من أول حجز لآخر محطة</small>
                    </div>
                  </div>
                </div>

               
                <div className="absolute -z-10 left-[-20px] sm:left-[-62px] top-[-15px] sm:top-[-35px] h-[120px] w-[120px] sm:h-[220px] sm:w-[220px] rounded-full border-[1.5px] border-dashed border-[#99d6cc]"></div>

                <div className="absolute -z-10 right-[-15px] sm:right-[-50px] bottom-0 h-[90px] w-[90px] sm:h-[150px] sm:w-[150px] rounded-full border-[1.5px] border-dashed border-[#99d6cc]"></div>
              </div>
            </div>
          </section>

          <SearchSection
            onSearch={(data) => {
              setSearchData(data);
              navigate("/book-trip");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;