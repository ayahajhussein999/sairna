import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, UserRound } from "lucide-react";
import useCurrentUser from "../../hooks/use-current-user";
import { useMyBookings } from "../../hooks/use-my-bookings";

export default function Header() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useCurrentUser();
  const user = data?.user ?? data;
  const userName = user?.name?.trim();

  const navigate = useNavigate();
  const { data: bookingsResponse } = useMyBookings();

  const bookings = Array.isArray(bookingsResponse?.data)
    ? bookingsResponse.data
    : Array.isArray(bookingsResponse)
      ? bookingsResponse
      : [];

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [dark]);

  const navItems = [
    { to: "/", label: "الرئيسية" },
    { to: "/book-trip", label: "احجز رحلة" },
    { to: "/transport-companies", label: "شركات نقل" },
    { to: "/my-bookings", label: "حجوزاتي" },
  ];

  const navClass = ({ isActive }) => {
    return isActive
      ? "text-text text-[11px] font-extrabold relative whitespace-nowrap py-2 border-b-2 border-primary"
      : "text-muted text-[11px] font-extrabold relative whitespace-nowrap py-2 border-b-2 border-transparent hover:text-text hover:border-primary";
  };

  const handleOpenTracking = () => {
    const booking = bookings.find(
      (item) => item.status === "CONFIRMED"
    );

    if (booking) {
      navigate(`/track-trip/${booking.id}`);
    } else {
      navigate("/my-bookings");
    }

    setMenuOpen(false);
  };

  return (
    <>
      
      <div className="min-h-[32px] bg-[var(--color-dark-deep)] text-[#d4f2ec] text-[10px] font-bold flex items-center justify-center gap-[9px] tracking-[0.1px] px-3 text-center">
        <span className="w-[6px] h-[6px] shrink-0 bg-[#58d7bb] rounded-full shadow-[0_0_0_4px_rgba(88,215,187,0.12)]" />

        <span>رحلات بين المدن السورية، بخطوات بسيطة وواضحة</span>

        <span className="inline-flex items-center justify-center text-[#ffce87] shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[13px] h-[13px]"
            aria-hidden="true"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        </span>
      </div>

      
      <div className="relative z-50 bg-[color-mix(in_srgb,var(--color-surface)_96%,transparent)] border-b border-border backdrop-blur-[16px]">
        <div className="container h-[83px] flex items-center justify-between gap-[22px] max-[900px]:h-[71px] max-[900px]:gap-3">

          
          <Link to="/" className="inline-flex items-center gap-[10px] shrink-0">
            <span className="w-[48px] h-[48px] grid place-items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjMjBjNGFlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA4YTk4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMiIgeT0iMyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjU4IiByeD0iMjAiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNMTEgMzlWMjNjMC02IDUtMTAgMTEtMTBoMjBjNyAwIDEyIDUgMTIgMTJ2MTVIMTFaIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTciIHk9IjIwIiB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIHJ4PSI0IiBmaWxsPSIjYjhlYWYwIi8+PHBhdGggZD0ibTI5IDIwIDcgMTMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTAiIHk9IjM2IiB3aWR0aD0iNDUiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZjJmYWZiIi8+PGNpcmNsZSBjeD0iMjIiIGN5PSI0NSIgcj0iNS4yIiBmaWxsPSIjMTAzZDUxIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjQ0IiBjeT0iNDUiIHI9IjUuMiIgZmlsbD0iIzEwM2Q1MSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIgMjhoNU00OCAyOGg1IiBzdHJva2U9IiMwZDc4OTMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==" alt=""/>
            </span>

            <span className="flex flex-col leading-[1.2]">
              <strong className="text-[30px] tracking-[-1.5px] font-black text-[var(--color-text)] max-[380px]:text-[25px]">
                سيرنا<span className="text-primary">.</span>
              </strong>
              <small className="text-[9px] font-bold mt-[7px] text-muted whitespace-nowrap">
                رحلتك بتبلّش من هون
              </small>
            </span>
          </Link>

         
          <nav className="flex mx-auto items-center gap-6 max-[1100px]:gap-3 max-[900px]:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="/track-trip"
              onClick={(e) => {
                e.preventDefault();
                handleOpenTracking();
              }}
              className={navClass({ isActive: false })}
            >
              تتبّع رحلة
            </a>
          </nav>

         
          <div className="flex items-center gap-3 max-[900px]:gap-2 shrink-0">

        
            <button
              type="button"
              onClick={() => setDark((prev) => !prev)}
              aria-label="تغيير المظهر"
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-surface-alt"
            >
              {dark ? "☀️" : "🌙"}
            </button>

           
            <div className="flex items-center gap-3 max-[900px]:hidden">
              {userName ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-text font-bold text-sm hover:text-primary transition-colors"
                >
                  <span>{userName}</span>
                  <UserRound size={21} />
                </Link>
              ) : (
                <>
                  <Link to="/login" className="text-text font-bold text-sm">
                    دخول
                  </Link>

                  <Link
                    to="/register"
                    className="bg-dark text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap"
                  >
                    إنشاء حساب
                  </Link>
                </>
              )}
            </div>

           
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              className="hidden max-[900px]:grid w-10 h-10 place-items-center rounded-full hover:bg-surface-alt text-text"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

     
        {menuOpen && (
          <div className="hidden max-[900px]:block border-t border-border bg-[var(--color-surface)]"><nav className="container flex flex-col py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={navClass}
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="/track-trip"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenTracking();
                }}
                className={navClass({ isActive: false })}
              >
                تتبّع رحلة
              </a>

              <div className="flex items-center gap-3 pt-4">
                {userName ? (
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 border border-border rounded-lg py-3 text-text font-bold text-sm"
                  >
                    <UserRound size={19} />
                    <span>{userName}</span>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 text-center border border-border rounded-lg py-3 text-text font-bold text-sm"
                    >
                      دخول
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 text-center bg-dark text-white rounded-lg py-3 font-bold text-sm"
                    >
                      إنشاء حساب
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}