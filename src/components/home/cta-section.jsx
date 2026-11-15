import { Link } from "react-router-dom";

import EyeBrow from "../common/eye-brow";
import Button from "../common/button";

export default function CtaSection() {
  return (
    <section className="pb-[85px] bg-bg">
      <div className="container ">
        <div className="relative flex items-center justify-between gap-[30px] overflow-hidden rounded-[24px] bg-[linear-gradient(105deg,#0e4653,#0b756e)] px-[60px] py-[39px] text-white max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[22px] max-[650px]:px-[24px] max-[650px]:py-[29px]">
          <div className="relative z-[1]">
            <EyeBrow text="جاهز تغير جو؟" />

            <h2 className="my-[12px] mb-[2px] text-[31px] font-extrabold max-[650px]:text-[25px]">
              الطريق الجاي بيناديك.
            </h2>

            <p className="m-0 text-[#d4edeb]">
              دوّر على رحلة، واحجز أول مقعد إلك.
            </p>
          </div>

          <Link to="/book-trip" className="relative z-[2]">
            <Button bgColor="bg-white" textColor="text-primary">
              <span className="flex items-center gap-2">
              يلا نلاقي رحلة
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

          <div className="pointer-events-none absolute left-[22%] top-[-140px] h-[230px] w-[230px] rounded-full border border-[rgba(255,255,255,0.12)]" />

          <div className="pointer-events-none absolute bottom-[-360px] right-[30%] h-[430px] w-[430px] rounded-full border border-[rgba(255,255,255,0.12)]" />
        </div>
      </div>
    </section>
  );
}
