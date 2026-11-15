import { Building2, ArrowLeft, Snowflake, Plug } from "lucide-react";



export default function CompanyCard({ company, onViewTrips }) {
  return (
    <article className="flex flex-col rounded-[20px] border border-border bg-surface p-[22px] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-lg">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex size-[68px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-soft-teal text-primary">
          {company.logoUrl ? (
            <img
              src={company.logoUrl}
              alt={company.name}
              className="size-full object-contain"
            />
          ) : (
            <Building2 size={30} />
          )}
        </div>

        <h2 className="min-w-0 text-[17px] font-black text-text">
          {company.name}
        </h2>
      </div>

      <p className="mb-5 text-[12px] leading-7 text-muted">
        رحلات مريحة لتوصلك لوجهتك بسهولة.
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-3 py-2 text-[11px] font-bold text-muted">
          <Snowflake size={14} />
          مكيّف
        </span>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-3 py-2 text-[11px] font-bold text-muted">
          <Plug size={14} />
          شحن USB
        </span>
      </div>
<div className="mb-6 grid grid-cols-2 gap-3 border-t border-border py-4">
  <div className="text-center">
    <b className="block text-[16px] font-black text-text">+12</b>
    <small className="text-[11px] font-bold text-muted">
      وجهة تجريبية
    </small>
  </div>

  <div className="text-center">
    <b className="block text-[16px] font-black text-text">يومياً</b>
    <small className="text-[11px] font-bold text-muted">
      مواعيد متاحة
    </small>
  </div>
</div>
      <button
        type="button"
        onClick={onViewTrips}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-bold text-text transition-colors hover:text-primary hover:border-primary"
      >
        عرض رحلات الشركة
        <ArrowLeft size={17} />
      </button>
    </article>
  );
}