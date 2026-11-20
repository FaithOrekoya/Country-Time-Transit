import React from 'react';
import { PageRoute } from '../types';
import {
  COMPANY_TAGLINE
} from '../data/siteData';
import { TransportationArt } from '../components/TransportationArt';
import {
  ShieldCheck,
  Clock,
  Heart,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Zap
} from 'lucide-react';
import aboutHeroImg from '../assets/images/country_time_about_hero_1793476498963.jpg';

interface AboutPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setCurrentRoute,
  onOpenBooking
}) => {
  return (
    <div className="w-full">
      {/* Hero Banner in Black & Crimson Red atmospheric style */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-16 lg:py-24 border-b border-neutral-800">
        <img
          src={aboutHeroImg}
          alt="Country Time Transit family-operated transportation team"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#121212]/75 to-[#171717]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 border border-neutral-700/80 text-xs font-semibold text-neutral-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-[#EF4444]" />
              <span>ABOUT COUNTRY TIME TRANSIT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              A Family-Operated Partner <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#F87171]">
                You Can Count On.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Rooted in Fayetteville, North Carolina, we deliver reliable, compassionate transportation with a relentless commitment to arriving before you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                OUR HERITAGE & EXPERIENCE
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
                25+ Years Experience
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed font-normal">
                Founded in Fayetteville to provide dependable, clean, and compassionate rides for people whose schedules depend on punctuality.
              </p>

              <div className="p-4 bg-red-50/75 border border-red-200/80 rounded-2xl flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#DC2626] shrink-0" />
                <p className="text-sm font-extrabold text-[#0A0A0A] italic">
                  "{COMPANY_TAGLINE}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#0A0A0A] font-extrabold text-sm">
                    <ShieldCheck className="w-5 h-5 text-[#0A0A0A]" />
                    <span>Licensed & Insured</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                    Commercial passenger insurance and strict vehicle maintenance standards.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#0A0A0A] font-extrabold text-sm">
                    <Heart className="w-5 h-5 text-[#DC2626]" />
                    <span>Compassionate Service</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                    Respectful curbside assistance for seniors, wheelchair users, and families.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Visual Art */}
            <div className="lg:col-span-5">
              <TransportationArt variant="senior" className="shadow-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Serving the Community We Love */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              COMMUNITY PARTNERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
              Serving Our Community
            </h2>
            <p className="text-base text-neutral-600">
              Dedicated passenger fleet serving Fayetteville and Cumberland County daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EF4444] to-[#B91C1C] text-white flex items-center justify-center shadow-md shadow-red-600/20">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">Seniors & Families</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Patient door-to-door rides for doctor appointments, grocery shopping, and visits.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#171717] to-[#0A0A0A] text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-7 h-7 text-[#EF4444]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">Veterans & Military</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Reliable transit for Fort Liberty personnel and VA hospital visits with 10% round-trip savings.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] text-white flex items-center justify-center shadow-md shadow-red-600/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">Organizations & Employers</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Custom workforce shuttles and recurring healthcare facility transportation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Community Recognition Summary */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DC2626]">
            <Award className="w-4 h-4" />
            <span>COMMUNITY HONORS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">
            Multiple Platinum Winner in Fayetteville
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto font-normal">
            Honored with 2026 Community Choice Awards Platinum in Airport Transportation, Taxis & Limousines, and Regular Transportation Services, alongside 2025 CommunityVotes Platinum Business recognition.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white text-xs font-extrabold rounded-full shadow-lg shadow-red-600/25 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentRoute('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <span>Contact Our Dispatchers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
