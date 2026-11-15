import { Building2, ChevronLeft } from "lucide-react";
import { useCompanies } from "../../hooks/use-website";
import { useSearch } from "../../hooks/use-search";

export default function CompanyPicker() {
  const {
    data: companies = [],
    isLoading,
    isError,
  } = useCompanies();
const {selectedCompany , setSelectedCompany} = useSearch();

  const activeCompanies = companies.filter(
    (company) => company.isActive
  );

  return (
    <section className="mt-[31px]">
      <div className="mb-[15px] flex items-center justify-between gap-4 max-[650px]:items-start">
        <div className="flex items-center gap-[11px]">
          <span className="grid size-9 place-items-center rounded-xl bg-soft-teal text-[14px] font-black text-primary">
            01
          </span>

          <div>
            <h3 className="m-0 text-[15px] font-bold text-text">
              اختار شركة النقل
            </h3>
            <p className="m-0 text-[11px] text-muted">
              حدد الشركة اللي بتفضّلها، ومنعرضلك مواعيدها المتاحة.
            </p>
          </div>
        </div>

        <span className="flex items-center gap-[7px] text-[11px] font-extrabold text-muted max-[650px]:hidden">
          02
          <ChevronLeft size={15} />
          اختار الوقت والمقعد
        </span>
      </div>

      {isLoading ? (
        <p className="text-sm text-muted">جاري تحميل الشركات...</p>
      ) : isError ? (
        <p className="text-sm text-red-500">
          تعذّر تحميل شركات النقل.
        </p>
      ) : activeCompanies.length === 0 ? (
        <p className="text-sm text-muted">
          لا توجد شركات نقل متاحة حالياً.
        </p>
      ) : (
        <div className="grid grid-cols-5 gap-[11px] max-[650px]:grid-cols-3 max-[650px]:gap-2 ">
            <button onClick={() => setSelectedCompany("all")} className="flex min-w-0 flex-col items-center gap-[7px] rounded-[13px] border border-border bg-surface px-[11px] py-[15px] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary ">
  <span className="grid size-8 place-items-center rounded-[9px] bg-soft-teal text-primary">
    <Building2 size={18} />
  </span>
  <span className="text-center text-[11px] font-black text-text">
    كل الشركات
  </span>
  
</button>
          {activeCompanies.map((company) => (
            <button
            type="button"
              key={company.id}
               onClick={() => setSelectedCompany(String(company.id))}
             className={`flex min-w-0 flex-col items-center gap-[7px] rounded-[13px] border px-[11px] py-[15px] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary max-[650px]:px-[5px] max-[650px]:py-3  ${
  selectedCompany === String(company.id)
    ? "border-primary bg-soft-teal"
    : "border-border bg-surface"
}`}
            >
              {company.logoUrl ? (
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="size-8 object-contain"
                />
              ) : (
                <span className="grid size-8 place-items-center rounded-full bg-soft-teal text-primary">
                  <Building2 size={18} />
                </span>
              )}

              <span className="text-center text-[11px] font-black leading-[1.45] text-text max-[650px]:text-[10px]">
                {company.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}