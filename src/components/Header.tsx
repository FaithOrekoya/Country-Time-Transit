import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { SERVICES, COMPANY_PHONE, COMPANY_PHONE_TEL } from '../data/siteData';
import { BrandLogo } from './TransportationArt';
import { Phone, ChevronDown, Menu, X, Calendar, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  setCurrentRoute: (route: PageRoute) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onSelectServiceSlug: (slug: string) => void;
  onNavigateToPartnership: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  setCurrentRoute,
  onOpenBooking,
  onSelectServiceSlug,
  onNavigateToPartnership
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsContactOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePartnershipNav = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsContactOpen(false);
    onNavigateToPartnership();
  };

  const handleSelectService = (slug: string) => {
    onSelectServiceSlug(slug);
    setCurrentRoute('service-detail');
    setIsServicesOpen(false);
    setIsContactOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark */}
        <button
          onClick={() => navigateTo('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded-lg"
          aria-label="Country Time Transit Home"
        >
          <BrandLogo size="md" showTagline={false} />
        </button>

        {/* Zone 2: 5 single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button
            onClick={() => navigateTo('home')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 py-1 ${
              currentRoute === 'home' ? 'text-[#EA580C] font-bold border-b-2 border-[#EA580C]' : ''
            }`}
          >
            Home
          </button>

          <button
            onClick={() => navigateTo('about')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 py-1 ${
              currentRoute === 'about' ? 'text-[#EA580C] font-bold border-b-2 border-[#EA580C]' : ''
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => {
                setIsServicesOpen(true);
                setIsContactOpen(false);
              }}
              aria-expanded={isServicesOpen}
              className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 py-1 ${
                currentRoute === 'services' || currentRoute === 'service-detail'
                  ? 'text-[#EA580C] font-bold border-b-2 border-[#EA580C]'
                  : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute left-0 mt-2 w-84 max-h-[75vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Our Specialized Services
                  </span>
                  <button
                    onClick={() => navigateTo('services')}
                    className="text-xs text-[#EA580C] hover:underline font-bold"
                  >
                    View All
                  </button>
                </div>
                <div className="py-1">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelectService(s.slug)}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:text-[#EA580C] hover:bg-amber-50/50 transition-colors flex flex-col"
                    >
                      <span className="font-bold text-slate-900">{s.title}</span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">{s.shortDescription}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigateTo('service-areas')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 py-1 ${
              currentRoute === 'service-areas' ? 'text-[#EA580C] font-bold border-b-2 border-[#EA580C]' : ''
            }`}
          >
            Service Areas
          </button>

          {/* Contact & Partnerships Dropdown */}
          <div className="relative" ref={contactDropdownRef}>
            <button
              onClick={() => navigateTo('contact')}
              onMouseEnter={() => {
                setIsContactOpen(true);
                setIsServicesOpen(false);
              }}
              aria-expanded={isContactOpen}
              className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 py-1 ${
                currentRoute === 'contact' ? 'text-[#EA580C] font-bold border-b-2 border-[#EA580C]' : ''
              }`}
            >
              <span>Contact</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>

            {isContactOpen && (
              <div
                onMouseLeave={() => setIsContactOpen(false)}
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-4 py-1.5 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Connect With Us
                  </span>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:text-[#EA580C] hover:bg-amber-50/50 transition-colors flex flex-col"
                  >
                    <span className="font-bold text-slate-900">Contact & Trip Inquiries</span>
                    <span className="text-[11px] text-slate-500">Individual passenger questions & ride scheduling</span>
                  </button>
                  <button
                    onClick={handlePartnershipNav}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:text-[#EA580C] hover:bg-amber-50/50 transition-colors flex flex-col border-t border-slate-100"
                  >
                    <span className="font-bold text-[#EA580C]">Discuss a Partnership →</span>
                    <span className="text-[11px] text-slate-500">Hospitals, clinics, senior care & organizations</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: TrackMyTire Styled Action Buttons (Phone + Amber Glow CTA) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={COMPANY_PHONE_TEL}
            className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-full bg-slate-100 text-[#EA580C] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </span>
            <span className="tabular-nums">{COMPANY_PHONE}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] rounded-full shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={COMPANY_PHONE_TEL}
            className="p-2 text-[#EA580C] hover:bg-amber-50 rounded-lg"
            aria-label="Call Country Time Transit"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 max-h-[82vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <button
              onClick={() => navigateTo('home')}
              className="text-left py-2 hover:text-[#EA580C] border-b border-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="text-left py-2 hover:text-[#EA580C] border-b border-slate-100"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('services')}
              className="text-left py-2 hover:text-[#EA580C] border-b border-slate-100"
            >
              Services Overview
            </button>

            {/* Mobile Sub-services */}
            <div className="pl-3 py-1 space-y-1.5 my-1">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectService(s.slug)}
                  className="block text-left text-xs text-slate-600 hover:text-[#EA580C] py-1 font-medium"
                >
                  {s.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigateTo('service-areas')}
              className="text-left py-2 hover:text-[#EA580C] border-b border-slate-100"
            >
              Service Areas
            </button>
            <button
              onClick={handlePartnershipNav}
              className="text-left py-2 text-[#EA580C] hover:text-slate-900 border-b border-slate-100"
            >
              Partnerships
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="text-left py-2 hover:text-[#EA580C]"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <a
              href={COMPANY_PHONE_TEL}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white rounded-full text-sm font-extrabold shadow-md shadow-amber-500/25"
            >
              <Phone className="w-4 h-4 text-white" />
              Call (910) 364-1102
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white rounded-full text-sm font-extrabold shadow-md shadow-amber-500/25"
            >
              Book a Ride →
            </button>
            <button
              onClick={handlePartnershipNav}
              className="w-full py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white rounded-full text-xs font-extrabold shadow-md shadow-amber-500/25"
            >
              Discuss a Partnership →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
