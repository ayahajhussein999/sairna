export default function MetricsStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container grid grid-cols-2 lg:grid-cols-4 min-h-[107px] items-center gap-y-6 py-6 lg:gap-y-0 lg:py-0">

        <div className="flex flex-col items-center text-center">
          <strong className="text-[24px] sm:text-[27px] leading-[1.4] font-black text-text">
            14
          </strong>
          <span className="text-[10px] sm:text-[11px] font-bold text-muted">
            محافظة سورية
          </span>
        </div>

        <div className="flex flex-col items-center text-center lg:border-r lg:border-border">
          <strong className="text-[24px] sm:text-[27px] leading-[1.4] font-black text-text">
            4
          </strong>
          <span className="text-[10px] sm:text-[11px] font-bold text-muted">
            شركات نقل تجريبية
          </span>
        </div>

        <div className="flex flex-col items-center text-center lg:border-r lg:border-border">
          <strong className="text-[24px] sm:text-[27px] leading-[1.4] font-black text-text">
            +30
          </strong>
          <span className="text-[10px] sm:text-[11px] font-bold text-muted">
            خيار رحلة باليوم
          </span>
        </div>

        <div className="flex flex-col items-center text-center lg:border-r lg:border-border">
          <strong className="text-[24px] sm:text-[27px] leading-[1.4] font-black text-text">
            24/7
          </strong>
          <span className="text-[10px] sm:text-[11px] font-bold text-muted">
            سهولة الوصول للموقع
          </span>
        </div>

      </div>
    </section>
  );
}