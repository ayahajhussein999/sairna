import { useState } from "react";
import { Link, useNavigate , useLocation} from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import EyeBrow from "../components/common/eye-brow";
import SectionHeading from "../components/common/section-heading";
import useAuth from "../hooks/use-auth";

import toast from "react-hot-toast";

export default function AuthPage({ mode = "login" }) {
  const location = useLocation() ;
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const queryClient = useQueryClient() ;

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const { loginMutation, registerMutation } = useAuth();

  const loading =
    loginMutation.isPending || registerMutation.isPending;

  const mutationError =
    loginMutation.error || registerMutation.error;

  const message = mutationError?.response?.data?.message;

  const error =
    message === "EMAIL_TAKEN"
      ? "هذا البريد الإلكتروني مسجل مسبقاً."
      : message === "Unauthorized" ||
          message === "INVALID_CREDENTIALS"
        ? "البريد الإلكتروني أو كلمة المرور غير صحيحة."
        : mutationError
          ? message || mutationError.message || "حدث خطأ، حاول مرة أخرى."
          : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginMutation.reset();
    registerMutation.reset();

    const formData = new FormData(e.currentTarget);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      let response;

      if (isLogin) {
        response = await loginMutation.mutateAsync(userData);
      } else {
        await registerMutation.mutateAsync({
          name: formData.get("name"),
          ...userData,
        });

        response = await loginMutation.mutateAsync(userData);
      }

      const token = response.accessToken;

      if (!token) {
        throw new Error("لم يتم استلام رمز الدخول من الخادم.");
      }

      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");

      if (isLogin && !rememberMe) {
        sessionStorage.setItem("accessToken", token);
      } else {
        localStorage.setItem("accessToken", token);
      }
queryClient.setQueryData(["currentUser"], response.user);

toast.success(
  isLogin
    ? "تم تسجيل الدخول بنجاح"
    : "تم إنشاء الحساب وتسجيل الدخول بنجاح"
);


    

     const from = location.state?.from;

navigate(from?.pathname || "/profile", {
  replace: true,
  state: from?.state,
});
    } catch  {
     
      mutationError ;
    }
  };

  return (
    <main className="py-10 md:py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">

         
          <div className="rounded-[22px] border border-border bg-surface p-6 shadow-sm sm:p-9">

            <div className="mb-8">
              <EyeBrow
                text={isLogin ? "أهلاً برجعتك" : "انضم لعيلة سيرنا"}
              />

              <SectionHeading
                firstText={isLogin ? "منوّر،" : "خلّينا نبدأ"}
                highlightText={isLogin ? "اشتقنالك!" : "المشوار سوا."}
                description={
                  isLogin
                    ? "ادخل على حسابك، وكمّل حجز رحلتك براحة."
                    : "حساب بسيط، ورحلاتك كلها بين إيديك."
                }
                titleSize="text-3xl"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {!isLogin && (
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-text">
                    الاسم الكامل
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    placeholder="اسمك الكامل"
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
                  />
                </label>
              )}<label className="block">
                <span className="mb-2 block text-sm font-bold text-text">
                  البريد الإلكتروني
                </span>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  autoComplete="email"
                  dir="ltr"
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-left text-sm text-text outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-text">
                  كلمة المرور
                </span>

                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    placeholder="8 أحرف على الأقل"
                    autoComplete={
                      isLogin ? "current-password" : "new-password"
                    }
                    dir="ltr"
                    className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 pl-12 text-left text-sm text-text outline-none transition focus:border-primary"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </label>

              {isLogin ? (
                <div className="flex items-center justify-between gap-3 text-sm">
                  <label className="flex cursor-pointer items-center gap-2 text-muted">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-primary"
                    />
                    تذكرني
                  </label>

                 <Link to="/faq"
                    className="font-bold text-primary-deep"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>
              ) : (
                <label className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-muted">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-primary"
                  />

                  <span>
                    أوافق على استخدام بيانات تجريبية في هذا النموذج التعليمي.
                  </span>
                </label>
              )}

              {error && (
                <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3.5 font-bold text-white transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "يرجى الانتظار..."
                  : isLogin
                    ? "تسجيل الدخول"
                    : "إنشاء حساب"}

                <span>←</span>
              </button>
            </form><p className="mt-6 text-center text-sm text-muted">
              {isLogin ? "لسا ما عندك حساب؟" : "عندك حساب من قبل؟"}{" "}

             <Link
  to={isLogin ? "/register" : "/login"}
  state={location.state}
  className="font-bold text-primary-deep"
>
  {isLogin ? "أنشئ حساب جديد" : "سجّل دخولك"}
</Link>
            </p>

            <div className="mt-6 rounded-xl bg-surface-alt p-3 text-xs leading-6 text-muted">
              تسجيل الدخول وإنشاء الحساب مرتبطان بخادم سيرنا، ولا يتم حفظ
              كلمة المرور في المتصفح.
            </div>
          </div>

          
          <div className="relative h-full min-h-[620px] overflow-hidden rounded-[28px] bg-dark p-8 text-white lg:flex lg:flex-col lg:justify-between">

            <div className="relative z-10">
              <span className="mb-5 inline-flex items-center gap-2 text-sm font-bold">
                ✦ عالم جديد بانتظارك
              </span>

              <h2 className="mb-3 text-3xl font-black leading-relaxed">
                كل الطرق
                <br />
                بتوصّل لذكريات.
              </h2>

              <p className="text-sm text-white/75">
                ومن أول محطة رح نكون معك.
              </p>
            </div>

            <img
              src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/68/Syria%2C_Damascus%2C_The_Umayyad_Mosque.jpg&w=1100&q=85"
              alt="الجامع الأموي في دمشق"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-black/30 p-4 text-sm font-bold backdrop-blur-sm">
              <span>✓ سهل وواضح</span>
              <span>♧ حجز بخطوات بسيطة</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}