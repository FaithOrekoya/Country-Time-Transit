import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  SERVICES,
  SERVICE_AREAS,
  AWARDS,
  TESTIMONIALS,
  FAQS,
  WHY_CHOOSE_ITEMS,
  HOW_IT_WORKS_STEPS,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL
} from '../data/siteData';
import { checkServiceAreaAvailability } from '../utils/transitLogic';
import {
  ShieldCheck,
  Clock,
  Accessibility,
  MapPin,
  Phone,
  Calendar,
  ChevronRight,
  ChevronDown,
  Award,
  CheckCircle,
  ArrowRight,
  Heart,
  Users,
  Search,
  Zap,
  Star,
  Building2,
  HeartHandshake
} from 'lucide-react';
import passengerAvatar1 from '../assets/images/passenger_avatar_1_1793472877372.jpg';
import passengerAvatar2 from '../assets/images/passenger_avatar_2_1793472878509.jpg';
import passengerAvatar3 from '../assets/images/passenger_avatar_3_1793472878910.jpg';
import referralPartnershipImg from '../assets/images/referral_partnership_healthcare_1793502421060.jpg';

interface HomePageProps {
  setCurrentRoute: (route: PageRoute) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onNavigateToPartnership: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentRoute,
  onSelectServiceSlug,
  onOpenBooking,
  onNavigateToPartnership
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [areaQuery, setAreaQuery] = useState('');
  const [areaResult, setAreaResult] = useState<{ matched: boolean; areaName?: string; notes: string } | null>(null);

  const handleAreaCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!areaQuery.trim()) return;
    const result = checkServiceAreaAvailability(areaQuery);
    setAreaResult(result);
  };

  const handleLearnMore = (slug: string) => {
    onSelectServiceSlug(slug);
    setCurrentRoute('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO (DARK BLACK & CRIMSON RED ATMOSPHERIC HERO)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-800">
        {/* Hero Background Video */}
        <video
          key="https://res.cloudinary.com/byde2j9a/video/upload/v1793471870/Delivery_van_driving_on_highway_341de344_al9pit.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-y-0 left-0 w-full lg:w-[145%] max-w-none h-full object-cover object-left z-0"
        >
          <source
            src="https://res.cloudinary.com/byde2j9a/video/upload/v1793471870/Delivery_van_driving_on_highway_341de344_al9pit.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark readability gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#121212]/75 to-[#171717]/45 z-0 pointer-events-none" />

        {/* Ambient atmospheric glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#DC2626]/18 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Top status bar */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 border border-neutral-700/80 text-xs font-semibold text-neutral-200 shadow-sm backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>Average arrival time: <strong className="text-[#EF4444]">Before scheduled time</strong></span>
              </div>

              {/* Bold 2-tone headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
                Reliable Rides. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#F87171]">
                  Before Time.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
                Safe, punctual passenger rides across Fayetteville and surrounding communities.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-sm font-extrabold rounded-full shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Ride</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="px-7 py-4 bg-neutral-900/85 hover:bg-neutral-800 border border-neutral-700 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2.5 whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#EF4444]" />
                  <span>Call {COMPANY_PHONE}</span>
                </a>
              </div>

              {/* Social Proof Avatar Bar */}
              <div className="pt-4 border-t border-neutral-800/90 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    src={passengerAvatar1}
                    alt="Satisfied passenger"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-neutral-900"
                  />
                  <img
                    src={passengerAvatar2}
                    alt="Satisfied passenger"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-neutral-900"
                  />
                  <img
                    src={passengerAvatar3}
                    alt="Satisfied caregiver"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-neutral-900"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#EF4444]">
                    <Star className="w-4 h-4 fill-[#EF4444]" />
                    <Star className="w-4 h-4 fill-[#EF4444]" />
                    <Star className="w-4 h-4 fill-[#EF4444]" />
                    <Star className="w-4 h-4 fill-[#EF4444]" />
                    <Star className="w-4 h-4 fill-[#EF4444]" />
                  </div>
                  <span className="font-bold text-white tabular-nums">4.9/5</span>
                  <span className="text-neutral-400">from 25+ years of trusted rides</span>
                </div>
              </div>

              {/* Compact Trust Markers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-[11px] text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EF4444] shrink-0" />
                  <span>Family-operated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EF4444] shrink-0" />
                  <span>25+ yrs experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EF4444] shrink-0" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EF4444] shrink-0" />
                  <span>Fayetteville & region</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTION
      ========================================================================= */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                ABOUT COUNTRY TIME TRANSIT
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
                A Better Way to Get There.
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed font-normal">
                Family-operated passenger transportation committed to early arrivals, courteous drivers, and dependable door-to-door service across North Carolina.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-semibold text-neutral-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#DC2626]" /> Early Arrival Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A]" /> Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold">
                  <Heart className="w-3.5 h-3.5 text-[#DC2626]" /> 25+ Yrs Experience
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentRoute('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white font-extrabold text-xs rounded-full shadow-md shadow-red-600/25 transition-all group"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Supporting Visual Card in Dark Black & Red style */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1F1F1F] p-8 text-white shadow-xl overflow-hidden border border-neutral-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#EF4444]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Family-Operated Values
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#EF4444]">25+ Years Experience</span>
                  </div>

                  <blockquote className="text-lg font-medium leading-relaxed italic text-neutral-100">
                    "We built Country Time Transit on the foundational belief that punctuality and compassionate human care should never be compromises. When you ride with us, you are family."
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-white font-bold">Personal & Courteous</p>
                      <p className="text-neutral-400 mt-1">Direct driver communication and dedicated assistance.</p>
                    </div>
                    <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-white font-bold">Punctual Schedules</p>
                      <p className="text-neutral-400 mt-1">Custom buffers ensuring you are never late.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR TRANSPORTATION SERVICES
      ========================================================================= */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight">
              Transportation Built Around You
            </h2>
          </div>

          {/* Service Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, index) => {
              const isPopular = index === 0 || index === 1;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-neutral-200 hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-[#0A0A0A] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-xs">
                      Popular
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Square crimson red icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EF4444] to-[#B91C1C] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
                      {index === 0 && <Heart className="w-7 h-7" />}
                      {index === 1 && <Accessibility className="w-7 h-7" />}
                      {index === 2 && <Clock className="w-7 h-7" />}
                      {index === 3 && <Users className="w-7 h-7" />}
                    </div>

                    <h3 className="text-lg font-black text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => handleLearnMore(service.slug)}
                      className="text-xs font-bold text-[#DC2626] hover:text-[#0A0A0A] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="text-xs font-extrabold px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-sm shadow-red-600/20 transition-all"
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom View All CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => {
                setCurrentRoute('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-lg shadow-red-600/25 transition-all group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4B: DEDICATED REFERRAL PARTNERSHIP SECTION
      ========================================================================= */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Professional Realistic Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-[#0A0A0A]">
                <img
                  src={referralPartnershipImg}
                  alt="Country Time Transit representative speaking with healthcare professionals outside a medical facility with a passenger transit van visible"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#EF4444]">
                    <HeartHandshake className="w-4 h-4 shrink-0" />
                    <span>Reliable Organization & Referral Support</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold leading-snug text-white">
                    Coordinated passenger mobility for clinics, care communities, and local organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Partnership Content & Categories */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626] block">
                  TRANSPORTATION PARTNERSHIPS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight text-balance">
                  A Transportation Partner You Can Count On.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Country Time Transit understands the importance of dependable transportation for healthcare providers, senior care facilities, and organizations. We work to support the transportation needs of patients, residents, and communities through professional, reliable, and thoughtfully coordinated transportation services.
                </p>
              </div>

              {/* Four Compact Partnership Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0A0A]">
                      Healthcare Facilities
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Transportation coordination for patients attending medical appointments and healthcare visits.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0A0A]">
                      Hospitals and Clinics
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Discuss transportation arrangements that support patients and healthcare service providers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0A0A]">
                      Senior Care Providers
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Transportation support for older adults and individuals with mobility needs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0A0A]">
                      Businesses and Organizations
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Explore transportation and shuttle arrangements for employees, clients, and organizational needs.
                  </p>
                </div>
              </div>

              {/* Prominent CTA Button & Secondary Text Link */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-5">
                <button
                  onClick={onNavigateToPartnership}
                  className="px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs sm:text-sm font-extrabold rounded-full shadow-lg shadow-red-600/25 transition-all inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
                >
                  <span>Discuss a Partnership</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    setCurrentRoute('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-extrabold text-[#DC2626] hover:text-[#0A0A0A] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Transportation Services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE COUNTRY TIME TRANSIT (DARK BLACK FEATURE STRIP)
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EF4444]">
              THE COUNTRY TIME DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Dependable Transportation, Built Around You.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-[#EF4444]/60 transition-all space-y-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-red-600/20 text-[#EF4444] flex items-center justify-center font-mono font-bold text-sm tabular-nums">
                    {item.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Standard</span>
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Let's Plan Your Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SPECIAL DISCOUNTS
      ========================================================================= */}
      <section className="py-20 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              COMMUNITY SAVINGS
            </span>
            <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tight">
              Giving Back to the Community We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Senior Discount */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3 relative z-10">
                <span className="px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#B91C1C] text-xs font-bold inline-block">
                  Weekly Senior Benefit
                </span>
                <h3 className="text-2xl font-black text-[#0A0A0A]">
                  15% OFF Senior Rides
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Eligible senior rides on Wednesdays within an 8-mile radius of Fayetteville.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 relative z-10">
                <button
                  onClick={() => onOpenBooking('Senior Mobility')}
                  className="w-full py-3 px-5 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-md shadow-red-600/25 transition-all text-center"
                >
                  Ask About Senior Rides →
                </button>
              </div>
            </div>

            {/* Card 2: Military & Veteran Discount */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3 relative z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#0A0A0A] text-white text-xs font-bold inline-block">
                  Military & Veterans
                </span>
                <h3 className="text-2xl font-black text-[#0A0A0A]">
                  10% OFF Military & Veteran Round Trips
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Special savings on eligible round-trip transportation for military members and veterans.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 relative z-10">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 px-5 bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-extrabold rounded-full shadow-md transition-all text-center"
                >
                  Ask About Military Discounts →
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-6 max-w-xl mx-auto">
            Eligibility, service area, and booking conditions may apply. Contact Country Time Transit to confirm discount availability.
          </p>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: RECOGNITION AND COMMUNITY TRUST
      ========================================================================= */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              <Award className="w-4 h-4 text-[#DC2626]" />
              <span>COMMUNITY RECOGNITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
              Community Recognitions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Container: Image */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-neutral-200 shadow-md relative min-h-[340px] bg-neutral-900">
              <img
                src="https://res.cloudinary.com/byde2j9a/image/upload/v1793475107/ABRobz7eyMjsQ_-QGPD4VT2SPxlLIHFXqw-564w_na5sf0.webp"
                alt="Country Time Transit Community Choice Award Recognition"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DC2626] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" /> Award-Winning Service
                </span>
                <p className="text-lg font-black leading-snug">
                  Voted Platinum Business in Fayetteville
                </p>
              </div>
            </div>

            {/* Right Container: Recognitions Listed One After the Other */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-xs hover:border-[#DC2626] transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#0A0A0A] leading-snug">
                        {award.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full shrink-0">
                        {award.year} · {award.organization}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      {award.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW IT WORKS (NUMBERED CRIMSON CIRCLE PIPELINE)
      ========================================================================= */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
              Booking Your Ride Should Be Simple
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center space-y-4 relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#991B1B] text-white flex items-center justify-center text-xl font-black shadow-lg shadow-red-600/30 ring-4 ring-white tabular-nums">
                  {idx + 1}
                </div>

                <h3 className="text-lg font-black text-[#0A0A0A]">{step.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Start Your Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SERVICE AREAS
      ========================================================================= */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              PROUDLY SERVING OUR COMMUNITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
              Service Areas
            </h2>
          </div>

          {/* Interactive Search Checker */}
          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={handleAreaCheck} className="flex gap-2 p-1.5 rounded-full bg-neutral-100 border border-neutral-200 shadow-inner">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter your town (e.g. Hope Mills, Spring Lake, Fort Liberty)..."
                  value={areaQuery}
                  onChange={(e) => setAreaQuery(e.target.value)}
                  className="w-full px-5 py-2.5 pl-11 rounded-full bg-transparent text-sm text-[#0A0A0A] focus:outline-none"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-sm shadow-red-600/25 transition-all whitespace-nowrap"
              >
                Check
              </button>
            </form>

            {areaResult && (
              <div
                className={`mt-4 p-4 rounded-2xl border text-xs ${
                  areaResult.matched
                    ? 'bg-neutral-900 border-neutral-800 text-white'
                    : 'bg-red-50 border-red-200 text-red-950'
                }`}
              >
                <p className="font-semibold">{areaResult.notes}</p>
              </div>
            )}
          </div>

          {/* Location Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#DC2626] transition-all text-center flex flex-col items-center justify-center gap-1 group"
              >
                <MapPin className="w-4 h-4 text-[#DC2626] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#0A0A0A]">{area.name}</span>
                <span className="text-[10px] text-neutral-500 font-medium">{area.badge}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                setCurrentRoute('service-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#DC2626] hover:text-[#0A0A0A] inline-flex items-center gap-1"
            >
              <span>Explore Detailed Service Coverage & Routes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CUSTOMER TESTIMONIALS
      ========================================================================= */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
              Loved by Passengers Everywhere.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => {
              const initial = t.author.charAt(0);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* 5 Stars */}
                    <div className="flex text-[#DC2626]">
                      <Star className="w-4 h-4 fill-[#DC2626]" />
                      <Star className="w-4 h-4 fill-[#DC2626]" />
                      <Star className="w-4 h-4 fill-[#DC2626]" />
                      <Star className="w-4 h-4 fill-[#DC2626]" />
                      <Star className="w-4 h-4 fill-[#DC2626]" />
                    </div>

                    <p className="text-sm text-neutral-700 leading-relaxed italic font-normal">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white font-extrabold flex items-center justify-center text-sm shrink-0">
                      {initial}
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-[#0A0A0A]">{t.author}</h4>
                      <p className="text-[11px] text-neutral-500 font-medium">{t.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FREQUENTLY ASKED QUESTIONS
      ========================================================================= */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              FREQUENT INQUIRIES
            </span>
            <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tight">
              Questions Before You Book?
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0A0A0A] hover:text-[#DC2626] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#DC2626]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3.5 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 12: FINAL CALL TO ACTION (BLACK & CRIMSON RED BANNER)
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#1A1A1A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EF4444]">
            READY TO TRAVEL OR PARTNER
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-balance">
            Your Next Journey Starts With a Reliable Ride.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you're arranging transportation for yourself or a loved one, or exploring a transportation partnership for your organization, Country Time Transit is ready to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white font-extrabold text-sm rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Book a Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToPartnership}
              className="px-8 py-4 bg-white hover:bg-neutral-100 text-[#0A0A0A] font-extrabold text-sm rounded-full shadow-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Discuss a Partnership</span>
              <ArrowRight className="w-4 h-4 text-[#DC2626]" />
            </button>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-300">
            <span>Prefer to speak directly with dispatch? Call</span>
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-1.5 font-extrabold text-[#EF4444] hover:underline tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
