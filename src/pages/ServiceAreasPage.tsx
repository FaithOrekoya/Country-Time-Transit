import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  SERVICE_AREAS,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL
} from '../data/siteData';
import { checkServiceAreaAvailability } from '../utils/transitLogic';
import { MapPin, Search, Calendar, Phone, ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import areasHeroImg from '../assets/images/country_time_areas_hero_1793476502395.jpg';

interface ServiceAreasPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({
  setCurrentRoute,
  onOpenBooking
}) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ matched: boolean; areaName?: string; notes: string } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setResult(checkServiceAreaAvailability(query));
  };

  return (
    <div className="w-full">
      {/* Hero Banner in TrackMyTire dark atmospheric style */}
      <section className="relative overflow-hidden bg-[#0B1320] text-white py-16 lg:py-24 border-b border-slate-800">
        <img
          src={areasHeroImg}
          alt="Country Time Transit serving Fayetteville and surrounding North Carolina communities"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/90 via-[#0F1C2E]/75 to-[#102A43]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>NORTH CAROLINA SERVICE NETWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Proudly Serving Fayetteville <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#F97316]">
                & Surrounding Communities.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From our Fayetteville hub across Cumberland, Hoke, Moore, Harnett, and Robeson counties, Country Time Transit is your trusted local transportation partner.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Availability Checker in TrackMyTire search bar style */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 text-center space-y-5 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              ROUTE VERIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Check Service Availability in Your Community
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Enter your town, municipality, or pickup community name below to confirm route coverage.
            </p>

            <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2 p-1.5 rounded-full bg-white border border-slate-300 shadow-xs">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="e.g. Pinehurst, Lumberton, Spring Lake..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-5 py-2.5 pl-11 rounded-full text-sm focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-sm shadow-amber-500/25 transition-all whitespace-nowrap"
              >
                Verify
              </button>
            </form>

            {result && (
              <div
                className={`p-5 rounded-2xl border text-xs max-w-md mx-auto text-left ${
                  result.matched
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{result.matched ? 'Verified Service Network Area' : 'Regional Route Inquiry'}</span>
                </div>
                <p className="font-normal">{result.notes}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 12 Detailed Service Areas Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              VERIFIED COMMUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
              12 Primary Service Areas
            </h2>
            <p className="text-xs text-slate-500 font-normal">
              Availability and advance booking lead times may vary by destination and service type.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={area.name}
                className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-[#EA580C]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-900 tracking-wider">
                      {area.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#EA580C] group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-black text-[#0F172A]">{area.name}</h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Door-to-door medical, airport, and passenger transportation.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Regular & Medical Transit</span>
                  <button
                    onClick={() => onOpenBooking()}
                    className="font-bold text-[#EA580C] hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    <span>Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Travel Note in TrackMyTire banner style */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-black text-white text-base">
                Need Travel Outside These 12 Primary Communities?
              </h4>
              <p className="text-xs text-slate-300 font-normal">
                We also offer planned long-distance transportation to medical centers (UNC Chapel Hill, Duke Health) and regional airports across North Carolina.
              </p>
            </div>
            <a
              href={COMPANY_PHONE_TEL}
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-full transition-all whitespace-nowrap shrink-0 flex items-center gap-2 shadow-md shadow-amber-500/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (910) 364-1102 to Confirm</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
