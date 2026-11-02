import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES, COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_NAME, COMPANY_TAGLINE } from '../data/siteData';
import { BrandLogo } from './TransportationArt';
import { Phone, MapPin, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentRoute: (route: PageRoute) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenBooking: () => void;
  onNavigateToPartnership: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentRoute,
  onSelectServiceSlug,
  onOpenBooking,
  onNavigateToPartnership
}) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (slug: string) => {
    onSelectServiceSlug(slug);
    setCurrentRoute('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080E18] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              aria-label="Country Time Transit Home"
              className="p-1 rounded-2xl inline-block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
            >
              <BrandLogo size="md" lightMode={true} />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Family-operated transportation services focused on safety, comfort, and punctuality throughout Fayetteville and surrounding North Carolina communities.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F59E0B]">
              <span className="font-extrabold italic">"{COMPANY_TAGLINE}"</span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('service-areas')}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToPartnership}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.slug)}
                    className="hover:text-[#F59E0B] transition-colors text-left text-slate-400"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={onNavigateToPartnership}
                  className="text-[#F59E0B] hover:text-white transition-colors text-left font-bold"
                >
                  Become a Referral Partner →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Contact & Dispatch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={COMPANY_PHONE_TEL}
                className="flex items-center gap-2.5 text-white hover:text-[#F59E0B] transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span className="tabular-nums">{COMPANY_PHONE}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Service Location: Fayetteville, North Carolina</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed and Insured Transportation</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <HeartHandshake className="w-4 h-4 text-[#F59E0B]" />
                <span>Family-Operated Since Inception</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Lightweight Policy Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <div className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-7 shadow-2xl border border-slate-200 space-y-4">
            <h4 className="text-xl font-black text-[#0F172A]">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h4>
            <div className="text-xs text-slate-600 space-y-2 max-h-60 overflow-y-auto leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    Country Time Transit respects your privacy. Information submitted through our trip inquiry form—including passenger names, contact numbers, pickup addresses, and mobility notes—is strictly utilized by our dispatch team to coordinate transportation services.
                  </p>
                  <p>
                    We do not sell, rent, or distribute personal information to third parties. For questions regarding personal data or scheduling records, call (910) 364-1102.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Country Time Transit provides scheduled non-emergency passenger transportation throughout Fayetteville, North Carolina, and surrounding communities.
                  </p>
                  <p>
                    Trip inquiries submitted through the website are confirmed following direct discussion with our dispatch team. Rates, senior discounts (Wednesdays within an 8-mile radius of Fayetteville), and military discounts are subject to verification and vehicle availability.
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
