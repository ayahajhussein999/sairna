import { useNavigate } from "react-router-dom";
import { useCompanies } from "../../hooks/use-website";
import { useSearch } from "../../hooks/use-search";
import CompanyCard from "./company-card";

export default function CompanyList() {
  const navigate = useNavigate();
  const { setSelectedCompany } = useSearch();

  const {
    data: companies = [],
    isLoading,
    isError,
  } = useCompanies();

  function handleViewTrips(companyId) {
    setSelectedCompany(String(companyId));
    navigate("/book-trip");
  }

  if (isLoading) {
    return <p className="py-10 text-center text-muted">جاري تحميل الشركات...</p>;
  }

  if (isError) {
    return <p className="py-10 text-center text-red-500">حدث خطأ أثناء تحميل الشركات.</p>;
  }

  const activeCompanies = companies.filter((company) => company.isActive);

  return (
    <section className="py-[86px] max-[767px]:py-[58px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[650px]:grid-cols-1">
          {activeCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onViewTrips={() => handleViewTrips(company.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}