import { ArrowLeft } from "lucide-react";
import EyeBrow from "../common/eye-brow";
import SectionHeading from "../common/section-heading";
import Button from "../common/button";
import { useNavigate } from "react-router-dom";
import { useCities } from "../../hooks/use-website";
import { useSearch } from "../../hooks/use-search";
const destinations = [
  {
    id: "damascus",
    name: "دمشق",
    description: "مدينة الياسمين",
    image:
      "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/68/Syria%2C_Damascus%2C_The_Umayyad_Mosque.jpg&w=1100&q=85",
  },
  {
    id: "aleppo",
    name: "حلب",
    description: "عاصمة الشهباء",
    image:
      "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/5/59/Citadel_of_Aleppo%2C_Gates%2C_Aleppo%2C_Syria.jpg&w=1100&q=85",
  },
  {
    id: "latakia",
    name: "اللاذقية",
    description: "نسمة من البحر",
    image:
      "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/d/d3/Beach_Latakia_1.jpg&w=1100&q=85",
  },
  {
    id: "homs",
    name: "حمص",
    description: "قلب سوريا",
    image:
      "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/e/eb/Homs_Khalid_Ibn_al-Walid_Mosque_3074.jpg&w=1100&q=85",
  },
];

export default function DestinationsSection() {
  
  const navigate = useNavigate();
const { data: cities = [] } = useCities();
const {searchData , setSearchData} = useSearch();

function handleDestinationClick(destination) {
  const city = cities.find(
    (city) => city.name?.trim() === destination.name
  );

  if (!city) return;

  setSearchData({
    ...searchData,
    destination: String(city.id),
  });

  navigate("/book-trip");
}
  return (
    <section className="py-[86px] max-[650px]:py-[58px] bg-bg">
      <div className="container">
        <div className="mb-7 flex items-end justify-between gap-[25px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[10px]">
          <div>
            <EyeBrow text="اكتشف سوريا" />

            <SectionHeading
              firstText="    على وين حابب"
              highlightText="تسافر؟"
              description="وجهات مختلفة، ونفس الشعور الحلو لما تكون بالطريق."
            />
          </div>

          <Button
            size="sm"
            bgColor="bg-transparent"
            textColor="text-primary-deep"
            className="flex items-center gap-[10px] whitespace-nowrap text-xs hover:opacity-100 [&_svg]:transition-transform [&:hover_svg]:-translate-x-[5px]"
            onClick={() =>
              document
                .getElementById("results")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            استكشف الرحلات
            <ArrowLeft size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[650px]:gap-[11px]">
          {destinations.map((destination) => (
            <button
              key={destination.id}
              type="button"
              onClick={() => {
                handleDestinationClick(destination)
              }}
              className="group relative block aspect-[0.87] overflow-hidden rounded-[19px] p-0 text-right shadow-[var(--shadow)] transition-[transform,box-shadow] duration-300 ease-in-out hover:-translate-y-[7px] hover:shadow-[var(--shadow-md)] max-[900px]:aspect-[1.35] max-[650px]:aspect-[0.98] max-[650px]:rounded-2xl"
            >
              <img
                src={destination.image}
                alt={`صورة من ${destination.name} في سوريا`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[550ms] group-hover:scale-[1.09]"
              />

              <span className="absolute inset-0 flex items-end justify-between bg-[linear-gradient(0deg,rgba(10,42,52,0.83)_0%,rgba(10,42,52,0.24)_50%,transparent_82%)] p-5 text-white max-[650px]:p-[13px]">
                <span className="flex flex-col">
                  <strong className="text-[21px] max-[650px]:text-lg">
                    {destination.name}
                  </strong>

                  <small className="text-[11px] opacity-[0.82] max-[650px]:text-[9px]">
                    {destination.description}
                  </small>
                </span>
                <span className="grid h-[39px] w-[39px] place-items-center rounded-full border border-white/40 bg-white/[0.19] transition-all duration-300 group-hover:-translate-x-1 group-hover:bg-primary max-[650px]:h-[30px] max-[650px]:w-[30px]">
                  <ArrowLeft size={18} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
