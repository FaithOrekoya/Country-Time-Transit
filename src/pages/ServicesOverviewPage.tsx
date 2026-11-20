import React from 'react';
import { PageRoute } from '../types';
import { SERVICES, COMPANY_TAGLINE } from '../data/siteData';
import { ChevronRight, Calendar, ShieldCheck, Zap } from 'lucide-react';
import servicesHeroImg from '../assets/images/country_time_services_hero_1793476500101.jpg';

interface ServicesOverviewPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onNavigateToPartnership?: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  setCurrentRoute,
  onSelectServiceSlug,
  onOpenBooking,
  onNavigateToPartnership
}) => {
  const handleSelectService = (slug: string) => {
    onSelectServiceSlug(slug);
    setCurrentRoute('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Banner in Black & Crimson Red atmospheric style */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-16 lg:py-24 border-b border-neutral-800">
        <img
          src={servicesHeroImg}
          alt="Country Time Transit wheelchair-accessible and medical passenger transportation services"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#121212]/75 to-[#171717]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 border border-neutral-700/80 text-xs font-semibold text-neutral-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-[#EF4444]" />
              <span>OUR COMPREHENSIVE OFFERINGS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Transportation Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#F87171]">
                Built for Safety & Comfort.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Explore our full suite of passenger transportation services throughout Fayetteville and North Carolina. Backed by our signature standard: "{COMPANY_TAGLINE}"
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Detailed Teasers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="rounded-3xl border border-neutral-200 p-8 shadow-sm hover:border-red-300 hover:shadow-xl transition-all flex flex-col justify-between group bg-neutral-50"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                    <span className="text-xs font-extrabold text-[#DC2626] font-mono tabular-nums">
                      Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500">
                      Fayetteville & Surrounding NC
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectService(service.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#DC2626] hover:text-[#0A0A0A] transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-md shadow-red-600/25 transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a Ride</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0A0A0A] via-[#141414] to-[#1F1F1F] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-black">Have a Custom Route, Recurring Need, or Organization Inquiry?</h3>
              <p className="text-xs text-neutral-300 font-normal">
                We coordinate recurring routines for medical visits, senior care facilities, school commutes, and organizational transportation needs.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white font-extrabold text-xs rounded-full shadow-lg shadow-red-600/25 transition-all whitespace-nowrap"
              >
                Book a Ride →
              </button>
              <button
                onClick={() => {
                  if (onNavigateToPartnership) {
                    onNavigateToPartnership();
                  } else {
                    setCurrentRoute('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-[#0A0A0A] font-extrabold text-xs rounded-full shadow-lg transition-all whitespace-nowrap"
              >
                Discuss a Partnership →
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
