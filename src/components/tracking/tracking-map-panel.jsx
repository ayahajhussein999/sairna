import { Globe, MapPin, Route } from "lucide-react";


import Button from "../common/button";

function TrackingMapPanel({ origin, destination }) {
  const start = origin || "القنيطرة";
  const end = destination || "الرقة";

  const directionsUrl =
   `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      `${start}, Syria`
    )}&destination=${encodeURIComponent(
      `${end}, Syria`
    )}&travelmode=driving`;

  return (
    <div className="relative min-h-[650px] min-w-0 overflow-hidden rounded-[19px] border border-border bg-[#e5f0eb] max-[650px]:min-h-[440px]">
     
      <div className="pointer-events-none absolute left-[17px] right-[17px] top-[17px] z-10 flex items-center justify-between gap-2 max-[650px]:left-[10px] max-[650px]:right-[10px] max-[650px]:top-[10px]">
        <div className="flex items-center gap-[9px] rounded-[11px] border border-[#0a3c461a] bg-white px-[14px] py-[10px] text-[11px] font-extrabold text-[#224457] shadow-[0_8px_22px_rgba(15,64,75,.07)] max-[650px]:p-2">
          <span className="size-2 rounded-full bg-primary" />
          OpenFreeMap · خريطة تفاعلية
        </div>

        <div className="flex items-center gap-[5px] rounded-[11px] border border-[#0a3c461a] bg-white px-[14px] py-[10px] text-[10px] font-bold text-[#224457] shadow-[0_8px_22px_rgba(15,64,75,.07)] max-[650px]:hidden">
          <Globe size={16} />
          عرض الخريطة
        </div>
      </div>

    
      <div
        className="absolute inset-0"
        dir="ltr"
      >
        <iframe
          title={`Google Maps - ${start} إلى ${end}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
          src="https://maps.google.com/maps?q=34.53825%2C37.42065&z=7&output=embed"
        />
      </div>

     
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-20 rounded-[9px] bg-white px-3 py-[7px] text-[11px] font-extrabold leading-[1.7] text-[#0c5962] shadow-[0_4px_15px_rgba(12,49,58,.14)] hover:bg-[#e9fbf7]"
      >
        فتح المسار في Google Maps ↗
      </a>

     
      <div className="pointer-events-none absolute bottom-[17px] left-[17px] right-[17px] z-10 flex items-center justify-between gap-[7px] max-[650px]:bottom-[9px] max-[650px]:left-[9px] max-[650px]:right-[9px]">
        <span className="inline-flex items-center gap-[5px] rounded-[9px] bg-white px-3 py-2 text-[10px] font-extrabold text-[#1d4a56] shadow-sm">
          <MapPin size={17} />
          {start} ← {end}
        </span>

        <span className="text-[9px] font-bold text-[#83989f] max-[650px]:hidden">
          المسار تقريبي · افتح Google Maps للاتجاهات الفعلية
        </span>
      </div>

      
      <div className="absolute bottom-[68px] left-[17px] right-[17px] z-20 flex items-center gap-2 max-[650px]:bottom-[62px] max-[650px]:left-[10px] max-[650px]:right-[10px]">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap">
            <Route size={17} />
            عرض الطرق في Google Maps
          </Button>
        </a>
      </div>
    </div>
  );
}

export default TrackingMapPanel;