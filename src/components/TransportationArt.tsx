import React from 'react';

interface ArtProps {
  className?: string;
  variant?: 'hero' | 'nemt' | 'wheelchair' | 'airport' | 'senior' | 'school' | 'employer' | 'special-needs' | 'long-distance' | 'about';
}

export const BrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showTagline?: boolean; lightMode?: boolean }> = ({
  showTagline = false,
  lightMode = false
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Dynamic speed/transit wheel & clock badge in red, black & white */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#991B1B] text-white shadow-md shadow-red-600/25 shrink-0 group">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-6 h-6 text-white"
        >
          {/* Motion lines */}
          <path d="M2 10h5M1 16h8M3 22h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          {/* Wheel & Clock "Before Time" symbol */}
          <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="16" r="4.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
          {/* Early clock hands */}
          <path d="M20 11v5l-3-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-xl font-sans ${lightMode ? 'text-white' : 'text-[#0A0A0A]'}`}>
            COUNTRY TIME
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#DC2626]">
            TRANSIT · FAYETTEVILLE
          </span>
          {showTagline && (
            <span className="text-[10px] font-medium text-neutral-400 hidden sm:inline">
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
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1F1F1F] p-5 lg:p-7 text-white shadow-2xl border border-neutral-800 ${className}`}>
        {/* Soft background ambient spotlight */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#DC2626]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        {/* Ambient vehicle visual canvas */}
        <div className="relative w-full aspect-[16/10] max-h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#171717] to-[#0A0A0A] border border-white/10 flex items-center justify-center p-3">
          <svg viewBox="0 0 720 440" className="w-full h-full object-contain" fill="none">
            <defs>
              <linearGradient id="roadShine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#171717" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#262626" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#171717" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="bodyWhite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#F5F5F5" />
                <stop offset="100%" stopColor="#D4D4D4" />
              </linearGradient>
              <linearGradient id="redGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B91C1C" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
              <linearGradient id="glassTint" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#525252" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#171717" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Night/Dusk backdrop with atmospheric pine silhouettes of Cumberland County */}
            <path
              d="M0 280 L40 250 L80 275 L130 235 L170 270 L230 240 L290 275 L360 230 L420 270 L490 245 L560 280 L630 240 L680 275 L720 250 L720 340 L0 340 Z"
              fill="#111111"
              opacity="0.95"
            />

            {/* Asphalt road pavement */}
            <polygon points="0,320 720,310 720,440 0,440" fill="#0A0A0A" />
            <polygon points="0,320 720,310 720,345 0,355" fill="url(#roadShine)" />
            {/* Road dividing dashed line */}
            <line x1="0" y1="390" x2="720" y2="385" stroke="#DC2626" strokeWidth="4" strokeDasharray="30 20" opacity="0.9" />

            {/* Headlight beam glow */}
            <polygon points="560,310 720,290 720,400 560,335" fill="#FFFFFF" opacity="0.1" />

            {/* Vehicle Shadow */}
            <ellipse cx="370" cy="345" rx="260" ry="16" fill="#000000" opacity="0.9" />

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
                fill="#E5E5E5"
              />

              {/* Side Accent Stripes (Black & Crimson Red) */}
              <path d="M50 150 L525 150 L520 166 L50 166 Z" fill="#0A0A0A" />
              <path d="M50 166 L520 166 L515 180 L50 180 Z" fill="url(#redGlow)" />
              <path d="M50 180 L515 180 L510 188 L50 188 Z" fill="#262626" />

              {/* Side Brand Lettering */}
              <text x="100" y="132" fill="#0A0A0A" fontSize="16" fontWeight="900" letterSpacing="0.8" fontFamily="system-ui">
                COUNTRY TIME TRANSIT
              </text>
              <text x="100" y="146" fill="#DC2626" fontSize="10" fontWeight="700" letterSpacing="0.4" fontFamily="system-ui">
                FAYETTEVILLE, NC · (910) 364-1102
              </text>

              {/* Passenger Windows */}
              <rect x="95" y="60" width="80" height="55" rx="6" fill="#171717" stroke="#A3A3A3" strokeWidth="2.5" />
              <rect x="190" y="60" width="80" height="55" rx="6" fill="#171717" stroke="#A3A3A3" strokeWidth="2.5" />
              <rect x="285" y="60" width="80" height="55" rx="6" fill="#171717" stroke="#A3A3A3" strokeWidth="2.5" />
              
              {/* Door window */}
              <path d="M380 60 L435 60 L455 115 L380 115 Z" fill="#171717" stroke="#A3A3A3" strokeWidth="2.5" />
              
              {/* Front windshield */}
              <path d="M460 68 L485 115 L518 122 L490 68 Z" fill="url(#glassTint)" stroke="#D4D4D4" strokeWidth="2" />

              {/* Headlights */}
              <rect x="525" y="160" width="12" height="20" rx="3" fill="#FFFFFF" />
              <circle cx="531" cy="170" r="4" fill="#E5E5E5" />
              {/* Rear light */}
              <rect x="38" y="150" width="5" height="25" rx="2" fill="#DC2626" />

              {/* Front Grille */}
              <path d="M495 180 L538 180 L535 210 L490 210 Z" fill="#171717" />
              <rect x="500" y="186" width="34" height="18" rx="2" fill="#0A0A0A" />

              {/* Rear Wheel */}
              <circle cx="130" cy="210" r="36" fill="#000000" />
              <circle cx="130" cy="210" r="26" fill="#171717" />
              <circle cx="130" cy="210" r="13" fill="#525252" />
              <circle cx="130" cy="210" r="5" fill="#D4D4D4" />

              {/* Front Wheel */}
              <circle cx="430" cy="210" r="36" fill="#000000" />
              <circle cx="430" cy="210" r="26" fill="#171717" />
              <circle cx="430" cy="210" r="13" fill="#525252" />
              <circle cx="430" cy="210" r="5" fill="#D4D4D4" />

              {/* Wheelchair Accessibility Symbol on rear */}
              <circle cx="65" cy="115" r="12" fill="#DC2626" />
              <circle cx="65" cy="110" r="3" fill="#FFFFFF" />
              <path d="M64 114 L64 120 L69 120 M64 118 L69 115" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Courteous Driver in Black Uniform with Red Tie welcoming passenger */}
            <g transform="translate(635, 230)">
              {/* Head & Cap */}
              <circle cx="20" cy="14" r="13" fill="#D4D4D4" />
              <path d="M5 14 Q20 3 35 14 L40 15 L0 15 Z" fill="#0A0A0A" />
              {/* Torso */}
              <path d="M3 28 L37 28 L40 85 L0 85 Z" fill="#0A0A0A" />
              {/* White collar & red tie */}
              <polygon points="16,28 24,28 20,42" fill="#FFFFFF" />
              <polygon points="18,32 22,32 20,54" fill="#DC2626" />
              {/* Welcoming wave */}
              <path d="M37 36 L56 22 L60 26 L42 50" stroke="#0A0A0A" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="58" cy="22" r="5" fill="#D4D4D4" />
              {/* Legs */}
              <rect x="5" y="85" width="13" height="50" fill="#171717" />
              <rect x="22" y="85" width="13" height="50" fill="#171717" />
              <rect x="3" y="132" width="16" height="7" rx="2" fill="#000000" />
              <rect x="21" y="132" width="16" height="7" rx="2" fill="#000000" />
            </g>
          </svg>

          {/* Floating live card */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-neutral-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 shadow-xl text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#EF4444]">
                TRANSIT DISPATCHING
              </span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-white">
              Arriving Before Time
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-[11px] text-neutral-300">
              <span className="inline-flex items-center gap-1 font-semibold text-white">
                ★ 25+ Yrs Combined Exp
              </span>
              <span className="px-2 py-0.5 rounded-full bg-red-600/25 text-red-300 font-bold text-[10px]">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Lower floating info card */}
        <div className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EF4444] to-[#B91C1C] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-red-600/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                Your Journey, Our Priority
              </p>
              <p className="text-xs text-neutral-300">
                Dependable passenger transit with comfort and compassionate care.
              </p>
            </div>
          </div>
          <div className="border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4 text-left sm:text-right w-full sm:w-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF4444] block">
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

  // Service Visual Cards — strictly Black, Charcoal, Red & White
  const getServicePalette = () => {
    switch (variant) {
      case 'nemt':
        return { bg: 'from-[#0A0A0A] to-[#1F1F1F]', iconBg: 'from-[#EF4444] to-[#B91C1C]', tag: 'Medical Appointment Transit' };
      case 'wheelchair':
        return { bg: 'from-[#0A0A0A] to-[#262626]', iconBg: 'from-[#DC2626] to-[#991B1B]', tag: 'Wheelchair Mobility Ramp & Lift' };
      case 'airport':
        return { bg: 'from-[#111111] to-[#262626]', iconBg: 'from-[#EF4444] to-[#B91C1C]', tag: 'Airport Transfers (FAY & RDU)' };
      case 'senior':
        return { bg: 'from-[#171717] to-[#0A0A0A]', iconBg: 'from-[#DC2626] to-[#991B1B]', tag: 'Senior Mobility & Errands' };
      case 'school':
        return { bg: 'from-[#0A0A0A] to-[#1F1F1F]', iconBg: 'from-[#EF4444] to-[#B91C1C]', tag: 'Scheduled Student Routines' };
      case 'employer':
        return { bg: 'from-[#141414] to-[#0A0A0A]', iconBg: 'from-[#DC2626] to-[#991B1B]', tag: 'Corporate & Shift Shuttles' };
      case 'special-needs':
        return { bg: 'from-[#0A0A0A] to-[#262626]', iconBg: 'from-[#EF4444] to-[#B91C1C]', tag: 'Compassionate Care Transit' };
      case 'long-distance':
        return { bg: 'from-[#111111] to-[#0A0A0A]', iconBg: 'from-[#DC2626] to-[#991B1B]', tag: 'North Carolina Regional Journeys' };
      default:
        return { bg: 'from-[#0A0A0A] to-[#1F1F1F]', iconBg: 'from-[#EF4444] to-[#B91C1C]', tag: 'Passenger Service' };
    }
  };

  const palette = getServicePalette();

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${palette.bg} p-6 text-white shadow-xl border border-neutral-800 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-xs font-bold tracking-wider uppercase text-[#EF4444]">
          {palette.tag}
        </span>
        <span className="text-[11px] font-mono text-neutral-300 font-semibold">
          Fayetteville, NC
        </span>
      </div>

      <div className="py-8 flex flex-col items-center justify-center text-center">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${palette.iconBg} text-white flex items-center justify-center mb-4 shadow-lg shadow-red-600/25`}>
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <p className="text-lg font-bold text-white tracking-wide">
          Dedicated Fleet Service
        </p>
        <p className="text-xs text-neutral-300 mt-1 max-w-xs">
          Clean passenger vehicles, certified drivers, and on-schedule North Carolina transit.
        </p>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
        <span>Licensed & Insured</span>
        <span className="font-bold text-[#EF4444]">Before Time™ Commitment</span>
      </div>
    </div>
  );
};
