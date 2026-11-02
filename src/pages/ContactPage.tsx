import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import {
  SERVICES,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_TAGLINE
} from '../data/siteData';
import {
  validateBookingForm,
  BookingFormFields,
  validatePartnershipForm,
  PartnershipFormFields,
  ORGANIZATION_TYPES,
  PARTNERSHIP_NEED_TYPES
} from '../utils/transitLogic';
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Zap,
  ArrowRight,
  Building2,
  HeartHandshake,
  Info,
  Copy,
  Check
} from 'lucide-react';
import contactHeroImg from '../assets/images/country_time_contact_hero_1793476503610.jpg';

interface ContactPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  partnershipScrollTrigger?: number;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenBooking,
  partnershipScrollTrigger
}) => {
  // Individual Trip Inquiry Form State
  const [formData, setFormData] = useState<BookingFormFields>({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0].title,
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tripSubmissionState, setTripSubmissionState] = useState<'idle' | 'success' | 'service_unconfigured'>('idle');

  // Partnership Inquiry Form State
  const [partnerData, setPartnerData] = useState<PartnershipFormFields>({
    fullName: '',
    organizationName: '',
    workEmail: '',
    phone: '',
    organizationType: ORGANIZATION_TYPES[0],
    partnershipType: PARTNERSHIP_NEED_TYPES[0],
    estimatedRequirements: '',
    message: ''
  });

  const [partnerErrors, setPartnerErrors] = useState<Record<string, string>>({});
  const [isPartnerSubmitting, setIsPartnerSubmitting] = useState(false);
  const [partnerSubmissionState, setPartnerSubmissionState] = useState<'idle' | 'success' | 'service_unconfigured'>('idle');
  const [partnerErrorMessage, setPartnerErrorMessage] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (partnershipScrollTrigger && partnershipScrollTrigger > 0) {
      const el = document.getElementById('partnership-inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [partnershipScrollTrigger]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_BOOKING_FORM_ENDPOINT;
    if (!endpoint) {
      setIsSubmitting(false);
      setTripSubmissionState('service_unconfigured');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ type: 'individual_trip_inquiry', ...formData })
      });
      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        setTripSubmissionState('success');
      } else {
        setTripSubmissionState('service_unconfigured');
      }
    } catch {
      setTripSubmissionState('service_unconfigured');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTripSubmissionState('idle');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES[0].title,
      pickupLocation: '',
      destination: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerErrorMessage(null);
    const validation = validatePartnershipForm(partnerData);

    if (!validation.isValid) {
      setPartnerErrors(validation.errors);
      return;
    }

    setPartnerErrors({});
    setIsPartnerSubmitting(true);

    const endpoint = import.meta.env.VITE_PARTNERSHIP_FORM_ENDPOINT;
    if (!endpoint) {
      setIsPartnerSubmitting(false);
      setPartnerSubmissionState('service_unconfigured');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ type: 'partnership_inquiry', ...partnerData })
      });
      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        setPartnerSubmissionState('success');
      } else {
        setPartnerSubmissionState('service_unconfigured');
        setPartnerErrorMessage('The form submission endpoint returned an unexpected response. Please contact our team directly by phone.');
      }
    } catch {
      setPartnerSubmissionState('service_unconfigured');
      setPartnerErrorMessage('Unable to reach the form submission service. Please call our team directly at (910) 364-1102.');
    } finally {
      setIsPartnerSubmitting(false);
    }
  };

  const handleCopyPartnerDetails = () => {
    const summaryText = [
      `Partnership Inquiry — Country Time Transit`,
      `Name: ${partnerData.fullName}`,
      `Organization: ${partnerData.organizationName} (${partnerData.organizationType})`,
      `Work Email: ${partnerData.workEmail}`,
      `Phone: ${partnerData.phone}`,
      `Partnership / Service Needed: ${partnerData.partnershipType}`,
      partnerData.estimatedRequirements ? `Estimated Requirements: ${partnerData.estimatedRequirements}` : null,
      `Details: ${partnerData.message}`
    ]
      .filter(Boolean)
      .join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Banner in TrackMyTire dark atmospheric style */}
      <section className="relative overflow-hidden bg-[#0B1320] text-white py-16 lg:py-24 border-b border-slate-800">
        <img
          src={contactHeroImg}
          alt="Country Time Transit dispatch and customer care team"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/90 via-[#0F1C2E]/75 to-[#102A43]/45 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>GET IN TOUCH · PASSENGERS & PARTNER ORGANIZATIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Contact Country Time <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#F97316]">
                Transit Dispatch.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are scheduling an individual ride for yourself or a loved one, or exploring a referral partnership for your healthcare facility or organization, our team is ready to assist.
            </p>

            {/* Quick Audience Pathway Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('individual-trip-inquiry')}
                className="px-6 py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-lg shadow-amber-500/25 transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Individual Ride Inquiry</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('partnership-inquiry')}
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600 text-xs font-extrabold rounded-full transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Building2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Discuss a Partnership</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: INDIVIDUAL CUSTOMER TRIP INQUIRY & DISPATCH CONTACT
      ========================================================================= */}
      <section id="individual-trip-inquiry" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                  DISPATCH & INQUIRIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1">
                  How to Reach Our Team
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  For immediate assistance, same-day scheduling discussions, or detailed ride inquiries, calling us directly is always the fastest option.
                </p>
              </div>

              {/* Direct Telephone Card in TrackMyTire dark card style */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1320] via-[#102238] to-[#1E3A8A] text-white space-y-4 shadow-xl border border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-widest">
                    Direct Phone Line
                  </span>
                  <p className="text-3xl font-black text-white">
                    <a href={COMPANY_PHONE_TEL} className="hover:text-[#F59E0B] transition-colors tabular-nums">
                      {COMPANY_PHONE}
                    </a>
                  </p>
                  <p className="text-xs text-slate-300 font-normal">
                    Tap to call directly from any mobile phone or device.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_PHONE_TEL}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Open Ride Modal</span>
                  </button>
                </div>
              </div>

              {/* Details & Commitments */}
              <div className="space-y-4 text-xs text-slate-600">
                <div className="p-5 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block text-sm">Service Location</strong>
                    <span className="font-normal text-slate-600">Fayetteville, North Carolina — serving Cumberland, Hoke, Moore, and neighboring counties.</span>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block text-sm">Our Punctuality Promise</strong>
                    <span className="font-normal text-slate-600">"{COMPANY_TAGLINE}" Trips are planned with calculated arrival buffers.</span>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block text-sm">Licensed & Commercially Insured</strong>
                    <span className="font-normal text-slate-600">Dedicated, safe passenger transportation meeting professional standards.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Form Card: Individual Trip Inquiry (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                
                <div className="mb-6 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C]">
                      INDIVIDUAL & FAMILY RIDES
                    </span>
                    <h3 className="text-2xl font-black text-[#0F172A]">
                      Online Trip Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-normal">
                      Request a ride for medical appointments, airport transfers, senior mobility, student commutes, or regional travel.
                    </p>
                  </div>
                </div>

                {tripSubmissionState === 'success' && (
                  <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-black text-[#0F172A]">
                      Trip Inquiry Submitted
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our dispatch team will review your request and follow up at <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-sm shadow-amber-500/20 transition-all"
                    >
                      Reset Form
                    </button>
                  </div>
                )}

                {tripSubmissionState === 'service_unconfigured' && (
                  <div className="mb-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-black text-[#0F172A]">
                          Online Form Delivery Pending Backend Configuration
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Your trip details for <strong>{formData.service}</strong> on <strong>{formData.date} at {formData.time}</strong> have been validated, but an automated backend form delivery service (<code className="font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border border-amber-200">VITE_BOOKING_FORM_ENDPOINT</code>) is not yet connected to this website.
                        </p>
                        <p className="text-xs font-bold text-[#0F172A]">
                          To confirm your ride immediately with our dispatchers, please call us directly:
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1 pl-8">
                      <a
                        href={COMPANY_PHONE_TEL}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold rounded-full shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Dispatch: {COMPANY_PHONE}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setTripSubmissionState('idle')}
                        className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Passenger / Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        required
                        placeholder="(910) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-service" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-pickup" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Pickup Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-pickup"
                        required
                        placeholder="Street address or facility"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.pickupLocation && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-dest" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Destination <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-dest"
                        required
                        placeholder="Clinic, airport, or address"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.destination && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.destination}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-date" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="form-date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.date && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-time" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="form-time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {errors.time && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold text-[#0F172A] mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      placeholder="Please include any special requests, wheelchair accessibility needs, flight details, or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="text-xs font-bold text-slate-800 hover:text-[#EA580C] flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Or call us immediately at {COMPANY_PHONE}</span>
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Validating & Sending...' : 'Send Trip Inquiry →'}
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DEDICATED PARTNERSHIP INQUIRY EXPERIENCE
      ========================================================================= */}
      <section id="partnership-inquiry" className="py-24 bg-[#F8FAFC] border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Partnership Overview & Direct Contact (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] block">
                  REFERRAL & ORGANIZATION PARTNERSHIPS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight text-balance">
                  Let's Build a Reliable Transportation Partnership.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Are you a healthcare provider, hospital, senior care facility, or organization looking for a dependable transportation provider? We'd love to learn about your transportation needs and explore how Country Time Transit may be able to support your organization.
                </p>
              </div>

              {/* Who We Partner With Summary Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0F172A]">Healthcare & Discharge Coordination</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Punctual non-emergency medical and wheelchair-accessible transport for clinic check-ins, dialysis, therapy, and patient discharges.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0F172A]">Senior Care, Schools & Employers</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Tailored recurring transportation arrangements for assisted living communities, educational programs, and workforce shift shuttles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Phone Alternative Card */}
              <div className="p-6 rounded-3xl bg-[#0B1320] text-white space-y-3 border border-slate-800 shadow-lg">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F59E0B] block">
                  DIRECT PARTNERSHIP LINE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prefer to discuss referral workflows or recurring organizational scheduling over the phone? Call our team directly:
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_PHONE_TEL}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Partnership Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                <div className="mb-6 pb-4 border-b border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C]">
                    ORGANIZATION & REFERRAL INQUIRY
                  </span>
                  <h3 className="text-2xl font-black text-[#0F172A] mt-0.5">
                    Partnership Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Complete the form below to introduce your organization and outline your transportation requirements.
                  </p>
                </div>

                {partnerSubmissionState === 'success' && (
                  <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-black text-[#0F172A]">
                      Partnership Inquiry Submitted
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{partnerData.fullName}</strong> from <strong>{partnerData.organizationName}</strong>. Our management team will review your inquiry and follow up with you shortly.
                    </p>
                  </div>
                )}

                {partnerSubmissionState === 'service_unconfigured' && (
                  <div className="mb-6 p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-black text-[#0F172A]">
                          Form Submission Service Requires Backend Configuration
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {partnerErrorMessage || (
                            <>
                              Your partnership inquiry for <strong>{partnerData.organizationName}</strong> ({partnerData.organizationType}) has been validated, but an external form submission endpoint (<code className="font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border border-amber-200">VITE_PARTNERSHIP_FORM_ENDPOINT</code>) still needs configuration before inquiries can be transmitted automatically online.
                            </>
                          )}
                        </p>
                        <p className="text-xs font-bold text-[#0F172A]">
                          Please connect with our management team directly at {COMPANY_PHONE}, or copy your formatted inquiry details below:
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pl-8">
                      <a
                        href={COMPANY_PHONE_TEL}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold rounded-full shadow-sm tabular-nums"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {COMPANY_PHONE}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyPartnerDetails}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white rounded-full text-xs font-extrabold shadow-sm shadow-amber-500/25 transition-all"
                      >
                        {copiedSummary ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Copied Inquiry Summary</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-white" />
                            <span>Copy Inquiry Details</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handlePartnerSubmit} className="space-y-4" noValidate>
                  {/* 1. Full Name & 2. Organization / Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="partner-full-name" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="partner-full-name"
                        required
                        placeholder="Your full name"
                        value={partnerData.fullName}
                        onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {partnerErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="partner-org-name" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Organization / Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="partner-org-name"
                        required
                        placeholder="Hospital, clinic, facility, or company"
                        value={partnerData.organizationName}
                        onChange={(e) => setPartnerData({ ...partnerData, organizationName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {partnerErrors.organizationName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.organizationName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Work Email & 4. Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="partner-email" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="partner-email"
                        required
                        placeholder="name@organization.org"
                        value={partnerData.workEmail}
                        onChange={(e) => setPartnerData({ ...partnerData, workEmail: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {partnerErrors.workEmail && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.workEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="partner-phone" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="partner-phone"
                        required
                        placeholder="(910) 000-0000"
                        value={partnerData.phone}
                        onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      />
                      {partnerErrors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 5. Organization Type & 6. Type of Partnership or Transportation Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="partner-org-type" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Organization Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="partner-org-type"
                        value={partnerData.organizationType}
                        onChange={(e) => setPartnerData({ ...partnerData, organizationType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      >
                        {ORGANIZATION_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {partnerErrors.organizationType && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.organizationType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="partner-need-type" className="block text-xs font-bold text-[#0F172A] mb-1">
                        Type of Partnership or Transportation Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="partner-need-type"
                        value={partnerData.partnershipType}
                        onChange={(e) => setPartnerData({ ...partnerData, partnershipType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                      >
                        {PARTNERSHIP_NEED_TYPES.map((need) => (
                          <option key={need} value={need}>
                            {need}
                          </option>
                        ))}
                      </select>
                      {partnerErrors.partnershipType && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {partnerErrors.partnershipType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 7. Estimated Transportation Requirements (optional) */}
                  <div>
                    <label htmlFor="partner-estimated-req" className="block text-xs font-bold text-[#0F172A] mb-1">
                      Estimated Transportation Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="partner-estimated-req"
                      placeholder="e.g. Estimated weekly trips, preferred days/hours, wheelchair accessibility needs..."
                      value={partnerData.estimatedRequirements}
                      onChange={(e) => setPartnerData({ ...partnerData, estimatedRequirements: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                    />
                  </div>

                  {/* 8. Additional Information / Message */}
                  <div>
                    <label htmlFor="partner-message" className="block text-xs font-bold text-[#0F172A] mb-1">
                      Additional Information / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="partner-message"
                      rows={4}
                      required
                      placeholder="Tell us about your organization, patient or resident transportation goals, and how we can best coordinate with your team..."
                      value={partnerData.message}
                      onChange={(e) => setPartnerData({ ...partnerData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                    />
                    {partnerErrors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {partnerErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="text-xs font-bold text-slate-800 hover:text-[#EA580C] flex items-center gap-1.5 tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Or call us at {COMPANY_PHONE}</span>
                    </a>

                    <button
                      type="submit"
                      disabled={isPartnerSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs sm:text-sm font-extrabold rounded-full shadow-lg shadow-amber-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>{isPartnerSubmitting ? 'Validating Inquiry...' : 'Submit Partnership Inquiry'}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

