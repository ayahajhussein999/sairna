import { Link } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";
import { useMyBookings } from "../../hooks/use-my-bookings";

function Footer() {
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
    <footer className="bg-dark text-[#d2e4e9] pt-14">
      <div className="container">

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.25fr] gap-10 pb-[50px]">

      
          <div>
            <Link to="/" className="inline-flex items-center gap-[10px] shrink-0">
              <span className="w-[48px] h-[48px] grid place-items-center">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjMjBjNGFlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA4YTk4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMiIgeT0iMyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjU4IiByeD0iMjAiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNMTEgMzlWMjNjMC02IDUtMTAgMTEtMTBoMjBjNyAwIDEyIDUgMTIgMTJ2MTVIMTFaIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTciIHk9IjIwIiB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIHJ4PSI0IiBmaWxsPSIjYjhlYWYwIi8+PHBhdGggZD0ibTI5IDIwIDcgMTMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTAiIHk9IjM2IiB3aWR0aD0iNDUiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZjJmYWZiIi8+PGNpcmNsZSBjeD0iMjIiIGN5PSI0NSIgcj0iNS4yIiBmaWxsPSIjMTAzZDUxIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjQ0IiBjeT0iNDUiIHI9IjUuMiIgZmlsbD0iIzEwM2Q1MSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIgMjhoNU00OCAyOGg1IiBzdHJva2U9IiMwZDc4OTMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg=="
                  alt="سيرنا"
                />
              </span>

              <span className="flex flex-col leading-[1.2]">
                <strong className="text-[30px] tracking-[-1.5px] font-black text-white max-[380px]:text-[25px]">
                  سيرنا<span className="text-primary">.</span>
                </strong>
                <small className="text-[9px] font-bold mt-[7px] text-[#a3c0ca] whitespace-nowrap">
                  رحلتك بتبلّش من هون
                </small>
              </span>
            </Link>

            <p className="text-[#a3c0ca] text-[12px] leading-7 mt-5 max-w-[300px]">
              طريقة أجمل وأسهل للسفر بين المحافظات السورية.
              ابحث، اختار، واحجز بكل راحة.
            </p>

           
            <div className="flex gap-[9px] mt-5">
              <a
                href="#"
                aria-label="الموقع الإلكتروني"
                className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition"
              >
                <Globe size={17} />
              </a>

              <a
                href="mailto:hello@sairna.example"
                aria-label="البريد الإلكتروني"
                className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition"
              >
                <Mail size={17} />
              </a>

              <a
                href="tel:+963999999999"
                aria-label="اتصل بنا"
                className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[13px] items-start">
            <h3 className="text-white font-extrabold text-sm mb-2">
              استكشف
            </h3>

            <Link to="/" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              الرئيسية
            </Link>

            <Link to="/book-trip" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              احجز رحلتك
            </Link>

            <Link to="/transport-companies" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              شركات النقل
            </Link>
            <Link
  to={
    trackableBooking
      ? `/track-trip/${trackableBooking.id}`
      : "/my-bookings"
  }
  className="text-[#a3c0ca] text-[12px] hover:text-primary transition"
>
  تتبّع رحلتك
</Link>
          </div>

         
          <div className="flex flex-col gap-[13px] items-start">
            <h3 className="text-white font-extrabold text-sm mb-2">
              حسابك
            </h3>

            <Link to="/login" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              تسجيل الدخول
            </Link>

            <Link to="/register" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              إنشاء حساب
            </Link>

            <Link to="/my-bookings" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              حجوزاتي
            </Link>

            <Link to="/profile" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              الملف الشخصي
            </Link>
          </div>

         
          <div className="flex flex-col gap-[13px] items-start">
            <h3 className="text-white font-extrabold text-sm mb-2">
              نحن هون لمساعدتك
            </h3>

            <Link to="/about-sairna" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              عن سيرنا
            </Link>

            <Link to="/faq" className="text-[#a3c0ca] text-[12px] hover:text-primary transition">
              مركز المساعدة
            </Link>

            <a
              href="mailto:hello@sairna.example"
              className="flex gap-2 items-center text-[#a3c0ca] text-[11px] [direction:ltr] hover:text-primary transition"
            >
              <Mail size={16} />
              hello@sairna.example
            </a>
          </div>
        </div>

        
        <div className="border-t border-white/10 py-5 text-[#a3c0ca] text-[10px] leading-7">
          مصادر الصور (Wikimedia Commons):

          <a
            href="https://commons.wikimedia.org/wiki/File:Syria,_Damascus,_The_Umayyad_Mosque.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            {" "}دمشق / الهيرو — Vyacheslav Argenberg (CC BY 4.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Citadel_of_Aleppo,_Gates,_Aleppo,_Syria.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            حلب — Vyacheslav Argenberg (CC BY 4.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Beach_Latakia_1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            اللاذقية — Ahmad Ahmad (CC BY-SA 3.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Homs_Khalid_Ibn_al-Walid_Mosque_3074.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            حمص — Dosseman (CC BY-SA 4.0)
          </a>

          . تُحمّل الصور عند الاتصال بالإنترنت؛ تُعرض الروابط البديلة عند فشل المصدر الأول.
        </div>

       
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#a3c0ca] text-[11px]">
          <p>
            © {new Date().getFullYear()} سيرنا. جميع الحقوق محفوظة.
          </p>

          <p>صُنع بكل حب ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;