import CompanyList from "../components/transport-companies/company-list";
import TransportBanner from "../components/transport-companies/transport-banner";

export default function TransportCompanies(){
    return(
         <section className="bg-bg pb-10">
      <div className="container">
        <TransportBanner/>
        <CompanyList/>
      </div>
      </section>
    )
}