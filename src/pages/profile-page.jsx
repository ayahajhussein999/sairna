import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
  
  
  Ticket,
  LogOut,
  ArrowLeft,
  UserRound,
} from "lucide-react";

import useCurrentUser from "../hooks/use-current-user";
import SectionHeading from "../components/common/section-heading";
import EyeBrow from "../components/common/eye-brow";
import toast from "react-hot-toast";
export default function ProfilePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useCurrentUser();
  console.log("Current User:", data);

  
  const user = data?.user ?? data;

  const name = user?.name || "";
  const email = user?.email || "";
  const firstName = name.trim().split(" ")[0];
  const avatarLetter = firstName.charAt(0);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");


  queryClient.setQueryData(["currentUser"], null);
  toast.success("تم تسجيل الخروج بنجاح")

    navigate("/login");
  };

  if (isLoading) {
    return (
      <main className="container py-20 text-center">
        <p className="text-muted">جاري تحميل بيانات حسابك...</p>
      </main>
    );
  }

  if (error || !user?.name) {
    return (
      <main className="container py-20 text-center">
        <UserRound size={40} className="mx-auto mb-4 text-primary" />

        <h2 className="mb-2 text-xl font-black text-text">
          أهلاً فيك!
        </h2>

        <p className="mb-5 text-sm text-muted">
          سجّل دخول حتى تشوف معلومات حسابك.
        </p>

        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white"
        >
          تسجيل الدخول
        </Link>
      </main>
    );
  }

  return (
    <main className="inner-main">
   
    <div className="container relative">
  <EyeBrow text="ملفك الشخصي" />

  <SectionHeading
  firstText="أهلاً"
  highlightText={`${firstName} 👋`}
  description="هون كل التفاصيل المتعلقة بحسابك."
  titleSize="text-4xl"
/>
</div>
      
      <section className="container py-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[300px_minmax(0,1fr)]">

         
          <div className="rounded-[19px] border border-border bg-surface p-[27px] text-center">
            <div className="mx-auto mb-[13px] grid h-[90px] w-[90px] place-items-center rounded-[30px] bg-soft-teal text-[43px] font-black text-primary">
              {avatarLetter}
            </div>

            <h2 className="m-0 text-xl font-black text-text">
              {name}
            </h2>

            <span className="text-xs text-muted" dir="ltr">
              {email}
            </span>

            <div className="my-[22px] flex items-center justify-center gap-2 rounded-xl bg-surface-alt p-[13px] text-xs text-text">
              <Ticket size={19} className="text-primary" />
              <span>حسابك على سيرنا</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-bold text-text transition hover:border-primary hover:text-primary"
            >
              <LogOut size={17} />
              تسجيل الخروج
            </button>
          </div>
          <div className="rounded-[19px] border border-border bg-surface p-[27px]">
            <h2 className="border-b border-border pb-[17px] text-xl font-black text-text">
              معلومات الحساب
            </h2>

            <div className="flex items-center justify-between gap-3 border-b border-border py-[18px] text-xs">
              <span className="text-muted">الاسم الكامل</span>
              <b className="text-text">{name}</b>
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-border py-[18px] text-xs">
              <span className="text-muted">البريد الإلكتروني</span>
              <b className="text-text" dir="ltr">{email}</b>
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-border py-[18px] text-xs">
              <span className="text-muted">نوع الحساب</span>
              <b className="text-text">مستخدم</b>
            </div>

            <Link
              to="/my-bookings"
              className="mt-[25px] inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-deep"
            >
              انتقل لحجوزاتي
              <ArrowLeft size={17} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}