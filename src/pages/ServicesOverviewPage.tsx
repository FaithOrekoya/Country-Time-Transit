import React from 'react';
import { PageRoute } from '../types';
import { SERVICES, COMPANY_TAGLINE } from '../data/siteData';
import { ChevronRight, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
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
      {/* Hero Banner in TrackMyTire dark atmospheric style */}
      <section className="relative overflow-hidden bg-[#0B1320] text-white py-16 lg:py-24 border-b border-slate-800">
        <img
          src={servicesHeroImg}
          alt="Country Time Transit wheelchair-accessible and medical passenger transportation services"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/90 via-[#0F1C2E]/75 to-[#102A43]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>OUR COMPREHENSIVE OFFERINGS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Transportation Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#F97316]">
                Built for Safety & Comfort.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore our full suite of passenger transportation services throughout Fayetteville and North Carolina. Backed by our signature standard: "{COMPANY_TAGLINE}"
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Detailed Teasers in TrackMyTire style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:border-amber-300 hover:shadow-xl transition-all flex flex-col justify-between group bg-[#F8FAFC]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-extrabold text-[#EA580C] font-mono">
                      Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Fayetteville & Surrounding NC
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectService(service.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#EA580C] hover:text-slate-900 transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a Ride</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0B1320] via-[#102238] to-[#1E3A8A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-black">Have a Custom Route, Recurring Need, or Organization Inquiry?</h3>
              <p className="text-xs text-slate-300 font-normal">
                We coordinate recurring routines for medical visits, senior care facilities, school commutes, and organizational transportation needs.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-xs rounded-full shadow-lg shadow-amber-500/25 transition-all whitespace-nowrap"
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
                className="px-6 py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-xs rounded-full shadow-lg shadow-amber-500/25 transition-all whitespace-nowrap"
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
