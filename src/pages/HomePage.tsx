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
  COMPANY_PHONE_TEL,
  COMPANY_TAGLINE
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
  Quote,
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
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  // Service area quick check
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
          SECTION 1: HERO (TRACKMYTIRE INSPIRED DARK AMBIENT HERO)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0B1320] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/90 via-[#0F1C2E]/75 to-[#102A43]/45 z-0 pointer-events-none" />

        {/* Ambient atmospheric glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* TrackMyTire inspired top status pill: "⚡ Average arrival time: Early arrivals" */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Average arrival time: <strong className="text-[#F59E0B]">Before scheduled time</strong></span>
              </div>

              {/* Bold 2-tone headline like TrackMyTire's "Mobile tire shop / Comes to you." */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
                Reliable Rides. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#F97316]">
                  Before Time.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Safe, punctual passenger rides across Fayetteville and surrounding communities.
              </p>

              {/* Dual CTAs in TrackMyTire style */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-sm font-extrabold rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Ride</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="px-7 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2.5 whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call {COMPANY_PHONE}</span>
                </a>
              </div>

              {/* Social Proof Avatar Bar (TrackMyTire style: avatars + 5 stars) */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    src={passengerAvatar1}
                    alt="Satisfied passenger"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-slate-900"
                  />
                  <img
                    src={passengerAvatar2}
                    alt="Satisfied passenger"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-slate-900"
                  />
                  <img
                    src={passengerAvatar3}
                    alt="Satisfied caregiver"
                    referrerPolicy="no-referrer"
                    className="inline-block w-8 h-8 rounded-full object-cover ring-2 ring-slate-900"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="font-bold text-white">4.9/5</span>
                  <span className="text-slate-400">from 25+ years of trusted rides</span>
                </div>
              </div>

              {/* Compact Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span>Family-operated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span>25+ yrs experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
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
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                ABOUT COUNTRY TIME TRANSIT
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                A Better Way to Get There.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Family-operated passenger transportation committed to early arrivals, courteous drivers, and dependable door-to-door service across North Carolina.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#EA580C]" /> Early Arrival Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                  <Heart className="w-3.5 h-3.5 text-rose-500" /> 25+ Yrs Experience
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentRoute('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-xs rounded-full shadow-md shadow-amber-500/25 transition-all group"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Supporting Visual Card in TrackMyTire dark card style */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1320] via-[#102238] to-[#1E3A8A] p-8 text-white shadow-xl overflow-hidden border border-slate-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#F59E0B]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Family-Operated Values
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#F59E0B]">25+ Years Experience</span>
                  </div>

                  <blockquote className="text-lg font-medium leading-relaxed italic text-slate-100">
                    "We built Country Time Transit on the foundational belief that punctuality and compassionate human care should never be compromises. When you ride with us, you are family."
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-white font-bold">Personal & Courteous</p>
                      <p className="text-slate-400 mt-1">Direct driver communication and dedicated assistance.</p>
                    </div>
                    <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-white font-bold">Punctual Schedules</p>
                      <p className="text-slate-400 mt-1">Custom buffers ensuring you are never late.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR TRANSPORTATION SERVICES (TRACKMYTIRE CARD GRID)
      ========================================================================= */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Transportation Built Around You
            </h2>
          </div>

          {/* TrackMyTire Card Grid Style: Rounded-3xl with amber icon squares and Popular badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, index) => {
              const isPopular = index === 0 || index === 1; // Medical and Wheelchair
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#EA580C] to-[#F59E0B] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-xs">
                      Popular
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* TrackMyTire square amber icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                      {index === 0 && <Heart className="w-7 h-7" />}
                      {index === 1 && <Accessibility className="w-7 h-7" />}
                      {index === 2 && <Clock className="w-7 h-7" />}
                      {index === 3 && <Users className="w-7 h-7" />}
                    </div>

                    <h3 className="text-lg font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => handleLearnMore(service.slug)}
                      className="text-xs font-bold text-[#EA580C] hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="text-xs font-extrabold px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white shadow-sm shadow-amber-500/20 transition-all"
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
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-lg shadow-amber-500/25 transition-all group"
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
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Professional Realistic Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-[#0B1320]">
                <img
                  src={referralPartnershipImg}
                  alt="Country Time Transit representative speaking with healthcare professionals outside a medical facility with a passenger transit van visible"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/85 via-[#0B1320]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
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
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] block">
                  TRANSPORTATION PARTNERSHIPS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight text-balance">
                  A Transportation Partner You Can Count On.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Country Time Transit understands the importance of dependable transportation for healthcare providers, senior care facilities, and organizations. We work to support the transportation needs of patients, residents, and communities through professional, reliable, and thoughtfully coordinated transportation services.
                </p>
              </div>

              {/* Four Compact Partnership Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0F172A]">
                      Healthcare Facilities
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Transportation coordination for patients attending medical appointments and healthcare visits.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0F172A]">
                      Hospitals and Clinics
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Discuss transportation arrangements that support patients and healthcare service providers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0F172A]">
                      Senior Care Providers
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Transportation support for older adults and individuals with mobility needs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0F172A]">
                      Businesses and Organizations
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Explore transportation and shuttle arrangements for employees, clients, and organizational needs.
                  </p>
                </div>
              </div>

              {/* Prominent CTA Button & Secondary Text Link */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-5">
                <button
                  onClick={onNavigateToPartnership}
                  className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs sm:text-sm font-extrabold rounded-full shadow-lg shadow-amber-500/25 transition-all inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
                >
                  <span>Discuss a Partnership</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    setCurrentRoute('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-extrabold text-[#EA580C] hover:text-[#0F172A] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
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
          SECTION 5: WHY CHOOSE COUNTRY TIME TRANSIT (TRACKMYTIRE DARK FEATURE STRIP)
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#0B1320] via-[#0F1C2E] to-[#102A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
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
                className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-400/50 transition-all space-y-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-[#F59E0B] flex items-center justify-center font-mono font-bold text-sm">
                    {item.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Standard</span>
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-lg shadow-amber-500/30 transition-all inline-flex items-center gap-2"
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
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              COMMUNITY SAVINGS
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Giving Back to the Community We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Senior Discount */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3 relative z-10">
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold inline-block">
                  Weekly Senior Benefit
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  15% OFF Senior Rides
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Eligible senior rides on Wednesdays within an 8-mile radius of Fayetteville.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                <button
                  onClick={() => onOpenBooking('Senior Mobility')}
                  className="w-full py-3 px-5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all text-center"
                >
                  Ask About Senior Rides →
                </button>
              </div>
            </div>

            {/* Card 2: Military & Veteran Discount */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3 relative z-10">
                <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold inline-block">
                  Military & Veterans
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  10% OFF Military & Veteran Round Trips
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Special savings on eligible round-trip transportation for military members and veterans.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 px-5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all text-center"
                >
                  Ask About Military Discounts →
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6 max-w-xl mx-auto">
            Eligibility, service area, and booking conditions may apply. Contact Country Time Transit to confirm discount availability.
          </p>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: RECOGNITION AND COMMUNITY TRUST
      ========================================================================= */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              <Award className="w-4 h-4 text-[#EA580C]" />
              <span>COMMUNITY RECOGNITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Community Recognitions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Container: Image */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative min-h-[340px] bg-slate-900">
              <img
                src="https://res.cloudinary.com/byde2j9a/image/upload/v1793475107/ABRobz7eyMjsQ_-QGPD4VT2SPxlLIHFXqw-564w_na5sf0.webp"
                alt="Country Time Transit Community Choice Award Recognition"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C] text-[10px] font-extrabold uppercase tracking-wider mb-2">
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
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-[#EA580C] transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#EA580C] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug">
                        {award.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-2.5 py-0.5 rounded-full shrink-0">
                        {award.year} · {award.organization}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
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
          SECTION 8: HOW IT WORKS (TRACKMYTIRE NUMBERED CIRCLE PIPELINE)
      ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Booking Your Ride Should Be Simple
            </h2>
          </div>

          {/* TrackMyTire Step Pipeline: Numbered orange discs with connecting horizontal lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center space-y-4 relative"
              >
                {/* Large Orange Gradient Circle Disc */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center text-xl font-black shadow-lg shadow-amber-500/30 ring-4 ring-white">
                  {idx + 1}
                </div>

                <h3 className="text-lg font-black text-[#0F172A]">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-lg shadow-amber-500/30 transition-all inline-flex items-center gap-2"
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
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              PROUDLY SERVING OUR COMMUNITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Service Areas
            </h2>
          </div>

          {/* Interactive Search Checker */}
          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={handleAreaCheck} className="flex gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter your town (e.g. Hope Mills, Spring Lake, Fort Liberty)..."
                  value={areaQuery}
                  onChange={(e) => setAreaQuery(e.target.value)}
                  className="w-full px-5 py-2.5 pl-11 rounded-full bg-transparent text-sm focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-sm shadow-amber-500/25 transition-all whitespace-nowrap"
              >
                Check
              </button>
            </form>

            {areaResult && (
              <div
                className={`mt-4 p-4 rounded-2xl border text-xs ${
                  areaResult.matched
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
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
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#EA580C] transition-all text-center flex flex-col items-center justify-center gap-1 group"
              >
                <MapPin className="w-4 h-4 text-[#EA580C] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#0F172A]">{area.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">{area.badge}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                setCurrentRoute('service-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#EA580C] hover:text-slate-900 inline-flex items-center gap-1"
            >
              <span>Explore Detailed Service Coverage & Routes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CUSTOMER TESTIMONIALS (TRACKMYTIRE TESTIMONIAL CARD STYLE)
      ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Loved by Passengers Everywhere.
            </h2>
          </div>

          {/* TrackMyTire 3-card testimonial style: 5 stars + quote + circle avatar + name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => {
              const initial = t.author.charAt(0);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* 5 Stars */}
                    <div className="flex text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white font-extrabold flex items-center justify-center text-sm shrink-0">
                      {initial}
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-[#0F172A]">{t.author}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{t.location}</p>
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
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              FREQUENT INQUIRIES
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Questions Before You Book?
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0F172A] hover:text-[#EA580C] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#EA580C]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 animate-in fade-in duration-150">
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
          SECTION 12: FINAL CALL TO ACTION (TRACKMYTIRE DARK HERO FOOTER BANNER)
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#0B1320] via-[#0F1C2E] to-[#102A43] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
            READY TO TRAVEL OR PARTNER
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-balance">
            Your Next Journey Starts With a Reliable Ride.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you're arranging transportation for yourself or a loved one, or exploring a transportation partnership for your organization, Country Time Transit is ready to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-sm rounded-full shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Book a Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToPartnership}
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-sm rounded-full shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Discuss a Partnership</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300">
            <span>Prefer to speak directly with dispatch? Call</span>
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-1.5 font-extrabold text-[#F59E0B] hover:underline tabular-nums"
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
