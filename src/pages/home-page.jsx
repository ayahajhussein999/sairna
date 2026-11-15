import { useEffect } from "react";

import HeroSection from "../components/home/hero-section";
import MapSection from "../components/home/map-section";
import MetricsStrip from "../components/home/metrics-strip";
import ProcessSection from "../components/home/process-section";
import SectionDestination from "../components/home/section-destination";
import CtaSection from "../components/home/cta-section";

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".home-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="home-reveal">
        <HeroSection />
      </div>

      <div className="home-reveal">
        <MetricsStrip />
      </div>

      <div className="home-reveal">
        <SectionDestination />
      </div>

      <div className="home-reveal">
        <ProcessSection />
      </div>

      <div className="home-reveal">
        <MapSection />
      </div>

      <div className="home-reveal">
        <CtaSection />
      </div>
    </>
  );
}