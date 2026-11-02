import React from 'react';
import { PageRoute } from '../types';
import {
  SERVICES,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_TAGLINE
} from '../data/siteData';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowLeft,
  ChevronRight,
  Clock,
  HelpCircle,
  Zap,
  ArrowRight
} from 'lucide-react';
import serviceMedicalHero from '../assets/images/service_medical_hero_1793476842246.jpg';
import serviceWheelchairHero from '../assets/images/service_wheelchair_hero_1793476716577.jpg';
import serviceAirportHero from '../assets/images/service_airport_hero_1793476718157.jpg';
import serviceSeniorHero from '../assets/images/service_senior_hero_1793476719452.jpg';
import serviceStudentHero from '../assets/images/service_student_hero_1793476720382.jpg';
import serviceEmployerHero from '../assets/images/service_employer_hero_1793476721198.jpg';
import serviceSpecialNeedsHero from '../assets/images/service_special_needs_hero_1793476723071.jpg';
import serviceLongDistanceHero from '../assets/images/service_long_distance_hero_1793476723193.jpg';
import serviceGroceryPharmacyHero from '../assets/images/service_grocery_pharmacy_hero_1793499046640.jpg';
import serviceRecurringRidesHero from '../assets/images/service_recurring_rides_hero_1793499048671.jpg';
import serviceShortDistanceHero from '../assets/images/service_short_distance_hero_1793499048085.jpg';

interface ServiceDetailPageProps {
  serviceSlug: string;
  setCurrentRoute: (route: PageRoute) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  setCurrentRoute,
  onSelectServiceSlug,
  onOpenBooking
}) => {
  const service = SERVICES.find((s) => s.slug === serviceSlug) || SERVICES[0];
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const handleRelatedClick = (slug: string) => {
    onSelectServiceSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceHeroImage = (): string => {
    switch (service.slug) {
      case 'non-emergency-medical':
        return serviceMedicalHero;
      case 'wheelchair-accessible':
        return serviceWheelchairHero;
      case 'airport-transfers':
        return serviceAirportHero;
      case 'senior-mobility':
        return serviceSeniorHero;
      case 'school-transportation':
        return serviceStudentHero;
      case 'employer-shuttles':
        return serviceEmployerHero;
      case 'special-needs':
        return serviceSpecialNeedsHero;
      case 'long-distance':
        return serviceLongDistanceHero;
      case 'grocery-pharmacy-transport':
        return serviceGroceryPharmacyHero;
      case 'recurring-ride-packages':
        return serviceRecurringRidesHero;
      case 'short-distance-transportation':
        return serviceShortDistanceHero;
      default:
        return serviceMedicalHero;
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-[#050B14] text-slate-300 py-3.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              setCurrentRoute('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <span className="text-[#F59E0B] font-bold hidden sm:inline">
            "{COMPANY_TAGLINE}"
          </span>
        </div>
      </div>

      {/* Hero Section in TrackMyTire dark atmospheric style */}
      <section className="relative overflow-hidden bg-[#0B1320] text-white py-16 lg:py-24 border-b border-slate-800">
        <img
          src={getServiceHeroImage()}
          alt={`Country Time Transit ${service.title}`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/90 via-[#0F1C2E]/75 to-[#102A43]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>SPECIALTY SERVICE · FAYETTEVILLE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              {service.headline && (
                <p className="text-lg sm:text-xl font-bold text-[#F59E0B] leading-snug max-w-2xl">
                  {service.headline}
                </p>
              )}

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-xs rounded-full shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="px-7 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-xs rounded-full transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call {COMPANY_PHONE}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Overview & Full Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  Service Overview & Commitment
                </h2>

                {service.overviewParagraphs && service.overviewParagraphs.length > 0 ? (
                  <div className="space-y-4">
                    {service.overviewParagraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-base text-slate-600 leading-relaxed font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>
                )}

                {service.highlightBanner && (
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50/70 border border-amber-200/80 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#0F172A] leading-relaxed">
                      {service.highlightBanner}
                    </p>
                  </div>
                )}
              </div>

              {/* Detailed How It Works / Service Process */}
              {service.processParagraphs && service.processParagraphs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    {service.processTitle || `How ${service.title} Works in Fayetteville`}
                  </h3>
                  <div className="space-y-4">
                    {service.processParagraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Key Passenger Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3"
                    >
                      <ShieldCheck className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Equipment & Standards
                </h3>
                <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-3.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-[#0F172A] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Recommended For
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {service.idealFor.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Specific FAQ */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#EA580C]" />
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                        {service.faqSectionTitle || 'Frequently Asked Questions'}
                      </h3>
                    </div>
                    {service.faqSectionIntro && (
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {service.faqSectionIntro}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-3.5 pt-1">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm space-y-2">
                        <p className="font-extrabold text-[#0F172A]">{faq.q}</p>
                        <p className="text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Booking Card in TrackMyTire Dark Card Style */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-[#0B1320] via-[#102238] to-[#1E3A8A] text-white space-y-4 shadow-xl border border-slate-800 sticky top-28">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F59E0B]">
                  DISPATCH RESERVATION
                </span>
                <h3 className="text-2xl font-black text-white">
                  Schedule {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Tell us your pickup location, destination, and schedule. We will reach out promptly to confirm your trip arrangements.
                </p>

                <div className="p-3.5 rounded-2xl bg-white/10 text-xs text-slate-200 flex items-center gap-2.5 border border-white/10">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Early-Arrival Guarantee: Before time, every time.</span>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full transition-all shadow-md shadow-amber-500/25 flex items-center justify-center gap-2"
                  >
                    <span>Request This Ride Online</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={COMPANY_PHONE_TEL}
                    className="w-full py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Or Call (910) 364-1102</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                EXPLORE FURTHER
              </span>
              <h2 className="text-2xl font-black text-[#0F172A]">
                Related Transportation Services
              </h2>
            </div>
            <button
              onClick={() => {
                setCurrentRoute('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#EA580C] hover:underline"
            >
              View All 11 Services →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-black text-[#0F172A]">{rel.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 font-normal">{rel.shortDescription}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleRelatedClick(rel.slug)}
                    className="text-xs font-bold text-[#EA580C] inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenBooking(rel.title)}
                    className="text-xs font-extrabold px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white shadow-sm shadow-amber-500/20 transition-all"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
