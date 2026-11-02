import React from 'react';

interface ArtProps {
  className?: string;
  variant?: 'hero' | 'nemt' | 'wheelchair' | 'airport' | 'senior' | 'school' | 'employer' | 'special-needs' | 'long-distance' | 'about';
}

export const BrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showTagline?: boolean; lightMode?: boolean }> = ({
  size = 'md',
  showTagline = false,
  lightMode = false
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Dynamic speed/transit wheel & clock badge inspired by modern mobility logos */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706] text-white shadow-md shadow-amber-500/20 shrink-0 group">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-6 h-6 text-white"
        >
          {/* Motion lines */}
          <path d="M2 10h5M1 16h8M3 22h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Wheel & Clock "Before Time" symbol */}
          <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="16" r="4.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
          {/* Early clock hands */}
          <path d="M20 11v5l-3-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#102A43] shadow-xs" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-xl font-sans ${lightMode ? 'text-white' : 'text-[#0F172A]'}`}>
            COUNTRY TIME
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#EA580C]">
            TRANSIT · FAYETTEVILLE
          </span>
          {showTagline && (
            <span className="text-[10px] font-medium text-slate-400 hidden sm:inline">
              · Before Time™
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const TransportationArt: React.FC<ArtProps> = ({ className = '', variant = 'hero' }) => {
  if (variant === 'hero') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1320] via-[#102238] to-[#1A365D] p-5 lg:p-7 text-white shadow-2xl border border-slate-800/80 ${className}`}>
        {/* Soft background ambient spotlight similar to TrackMyTire's warm vehicle scene */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#EA580C]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#2563EB]/25 blur-3xl pointer-events-none" />

        {/* Ambient vehicle visual canvas */}
        <div className="relative w-full aspect-[16/10] max-h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0F1C2E] to-[#070D18] border border-white/10 flex items-center justify-center p-3">
          <svg viewBox="0 0 720 440" className="w-full h-full object-contain" fill="none">
            <defs>
              <linearGradient id="roadShine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1E293B" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#334155" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1E293B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="bodyWhite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="amberGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="glassTint" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Night/Dusk backdrop with atmospheric pine silhouettes of Cumberland County */}
            <path
              d="M0 280 L40 250 L80 275 L130 235 L170 270 L230 240 L290 275 L360 230 L420 270 L490 245 L560 280 L630 240 L680 275 L720 250 L720 340 L0 340 Z"
              fill="#0B1523"
              opacity="0.9"
            />

            {/* Asphalt road pavement */}
            <polygon points="0,320 720,310 720,440 0,440" fill="#0F172A" />
            <polygon points="0,320 720,310 720,345 0,355" fill="url(#roadShine)" />
            {/* Road dividing dashed line */}
            <line x1="0" y1="390" x2="720" y2="385" stroke="#F59E0B" strokeWidth="4" strokeDasharray="30 20" opacity="0.9" />

            {/* Headlight beam glow */}
            <polygon points="560,310 720,290 720,400 560,335" fill="#FEF08A" opacity="0.12" />

            {/* Vehicle Shadow */}
            <ellipse cx="370" cy="345" rx="260" ry="16" fill="#020617" opacity="0.9" />

            {/* High-Roof Passenger Transit Vehicle */}
            <g transform="translate(110, 120)">
              {/* Van Body */}
              <path
                d="M40 180 L50 80 Q55 50 100 45 L370 45 Q420 45 440 65 L480 120 L515 135 Q535 142 535 170 L535 205 L40 205 Z"
                fill="url(#bodyWhite)"
              />

              {/* High-roof aero contour */}
              <path
                d="M100 45 Q130 25 210 25 L360 25 Q410 25 425 45 Z"
                fill="#E2E8F0"
              />

              {/* Side Accent Stripes (Warm Amber & Deep Navy) */}
              <path d="M50 150 L525 150 L520 166 L50 166 Z" fill="#0F172A" />
              <path d="M50 166 L520 166 L515 180 L50 180 Z" fill="url(#amberGlow)" />
              <path d="M50 180 L515 180 L510 188 L50 188 Z" fill="#2563EB" />

              {/* Side Brand Lettering */}
              <text x="100" y="132" fill="#0F172A" fontSize="16" fontWeight="900" letterSpacing="0.8" fontFamily="system-ui">
                COUNTRY TIME TRANSIT
              </text>
              <text x="100" y="146" fill="#EA580C" fontSize="10" fontWeight="700" letterSpacing="0.4" fontFamily="system-ui">
                FAYETTEVILLE, NC · (910) 364-1102
              </text>

              {/* Passenger Windows */}
              <rect x="95" y="60" width="80" height="55" rx="6" fill="#0F172A" stroke="#94A3B8" strokeWidth="2.5" />
              <rect x="190" y="60" width="80" height="55" rx="6" fill="#0F172A" stroke="#94A3B8" strokeWidth="2.5" />
              <rect x="285" y="60" width="80" height="55" rx="6" fill="#0F172A" stroke="#94A3B8" strokeWidth="2.5" />
              
              {/* Door window */}
              <path d="M380 60 L435 60 L455 115 L380 115 Z" fill="#0F172A" stroke="#94A3B8" strokeWidth="2.5" />
              
              {/* Front windshield */}
              <path d="M460 68 L485 115 L518 122 L490 68 Z" fill="url(#glassTint)" stroke="#CBD5E1" strokeWidth="2" />

              {/* Headlights */}
              <rect x="525" y="160" width="12" height="20" rx="3" fill="#FEF08A" />
              <circle cx="531" cy="170" r="4" fill="#FFFFFF" />
              {/* Rear light */}
              <rect x="38" y="150" width="5" height="25" rx="2" fill="#EF4444" />

              {/* Front Grille */}
              <path d="M495 180 L538 180 L535 210 L490 210 Z" fill="#1E293B" />
              <rect x="500" y="186" width="34" height="18" rx="2" fill="#020617" />

              {/* Rear Wheel */}
              <circle cx="130" cy="210" r="36" fill="#020617" />
              <circle cx="130" cy="210" r="26" fill="#1E293B" />
              <circle cx="130" cy="210" r="13" fill="#64748B" />
              <circle cx="130" cy="210" r="5" fill="#CBD5E1" />

              {/* Front Wheel */}
              <circle cx="430" cy="210" r="36" fill="#020617" />
              <circle cx="430" cy="210" r="26" fill="#1E293B" />
              <circle cx="430" cy="210" r="13" fill="#64748B" />
              <circle cx="430" cy="210" r="5" fill="#CBD5E1" />

              {/* Wheelchair Accessibility Symbol on rear */}
              <circle cx="65" cy="115" r="12" fill="#2563EB" />
              <circle cx="65" cy="110" r="3" fill="#FFFFFF" />
              <path d="M64 114 L64 120 L69 120 M64 118 L69 115" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Courteous Driver in Navy Uniform welcoming passenger */}
            <g transform="translate(635, 230)">
              {/* Cap */}
              <circle cx="20" cy="14" r="13" fill="#D97706" />
              <path d="M5 14 Q20 3 35 14 L40 15 L0 15 Z" fill="#0F172A" />
              {/* Torso */}
              <path d="M3 28 L37 28 L40 85 L0 85 Z" fill="#0F172A" />
              {/* White collar & amber tie */}
              <polygon points="16,28 24,28 20,42" fill="#FFFFFF" />
              <polygon points="18,32 22,32 20,54" fill="#EA580C" />
              {/* Welcoming wave */}
              <path d="M37 36 L56 22 L60 26 L42 50" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="58" cy="22" r="5" fill="#D97706" />
              {/* Legs */}
              <rect x="5" y="85" width="13" height="50" fill="#1E293B" />
              <rect x="22" y="85" width="13" height="50" fill="#1E293B" />
              <rect x="3" y="132" width="16" height="7" rx="2" fill="#020617" />
              <rect x="21" y="132" width="16" height="7" rx="2" fill="#020617" />
            </g>
          </svg>

          {/* Floating live card in TrackMyTire style: "🟢 TECH DISPATCHING / Arriving in 12 mins" */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 shadow-xl text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">
                TRANSIT DISPATCHING
              </span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-white">
              Arriving Before Time
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
                ★ 25+ Yrs Combined Exp
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Lower floating info card */}
        <div className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-amber-500/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                Your Journey, Our Priority
              </p>
              <p className="text-xs text-slate-300">
                Dependable passenger transit with comfort and compassionate care.
              </p>
            </div>
          </div>
          <div className="border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4 text-left sm:text-right w-full sm:w-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] block">
              SIGNATURE STANDARD
            </span>
            <span className="text-xs font-semibold text-white">
              "We're not on time. We're before time."
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Service Cards
  const getServicePalette = () => {
    switch (variant) {
      case 'nemt':
        return { bg: 'from-[#0B1320] to-[#1E3A8A]', iconBg: 'from-amber-500 to-orange-600', tag: 'Medical Appointment Transit' };
      case 'wheelchair':
        return { bg: 'from-[#0B1320] to-[#1E293B]', iconBg: 'from-blue-500 to-blue-700', tag: 'Wheelchair Mobility Ramp & Lift' };
      case 'airport':
        return { bg: 'from-[#0A192F] to-[#172554]', iconBg: 'from-amber-500 to-orange-600', tag: 'Airport Transfers (FAY & RDU)' };
      case 'senior':
        return { bg: 'from-[#1C1917] to-[#0F172A]', iconBg: 'from-amber-500 to-amber-700', tag: 'Senior Mobility & Errands' };
      case 'school':
        return { bg: 'from-[#0B1320] to-[#1E293B]', iconBg: 'from-amber-500 to-orange-500', tag: 'Scheduled Student Routines' };
      case 'employer':
        return { bg: 'from-[#0F172A] to-[#1E1B4B]', iconBg: 'from-blue-600 to-indigo-700', tag: 'Corporate & Shift Shuttles' };
      case 'special-needs':
        return { bg: 'from-[#042F2E] to-[#0F172A]', iconBg: 'from-emerald-500 to-teal-700', tag: 'Compassionate Care Transit' };
      case 'long-distance':
        return { bg: 'from-[#0F172A] to-[#1E3A8A]', iconBg: 'from-amber-500 to-orange-600', tag: 'North Carolina Regional Journeys' };
      default:
        return { bg: 'from-[#0B1320] to-[#1E293B]', iconBg: 'from-amber-500 to-orange-600', tag: 'Passenger Service' };
    }
  };

  const palette = getServicePalette();

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${palette.bg} p-6 text-white shadow-xl border border-slate-800 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-xs font-bold tracking-wider uppercase text-amber-400">
          {palette.tag}
        </span>
        <span className="text-[11px] font-mono text-slate-300 font-semibold">
          Fayetteville, NC
        </span>
      </div>

      <div className="py-8 flex flex-col items-center justify-center text-center">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${palette.iconBg} text-white flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20`}>
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <p className="text-lg font-bold text-white tracking-wide">
          Dedicated Fleet Service
        </p>
        <p className="text-xs text-slate-300 mt-1 max-w-xs">
          Clean passenger vehicles, certified drivers, and on-schedule North Carolina transit.
        </p>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
        <span>Licensed & Insured</span>
        <span className="font-bold text-amber-400">Before Time™ Commitment</span>
      </div>
    </div>
  );
};
