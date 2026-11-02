import React, { useState, useEffect } from 'react';
import {
  SERVICES,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_TAGLINE
} from '../data/siteData';
import {
  validateBookingForm,
  BookingFormFields,
  evaluateDiscountEligibility,
  calculateBeforeTimeRecommendation
} from '../utils/transitLogic';
import {
  X,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Zap,
  Building2,
  Copy,
  Check,
  Loader2
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onNavigateToPartnership?: () => void;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'needs_configuration' | 'error';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  onNavigateToPartnership
}) => {
  const [formData, setFormData] = useState<BookingFormFields>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES[0].title,
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    notes: '',
    passengerType: 'standard',
    tripType: 'one_way'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedSummary, setSubmittedSummary] = useState<BookingFormFields | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedDateObj = formData.date ? new Date(formData.date + 'T00:00:00') : null;
  const dayOfWeek = selectedDateObj ? selectedDateObj.getDay() : -1;

  const discountEvaluation = evaluateDiscountEligibility({
    passengerType: formData.passengerType || 'standard',
    tripType: formData.tripType || 'one_way',
    dayOfWeek: dayOfWeek >= 0 ? dayOfWeek : 1,
    distanceMiles: 6
  });

  const beforeTimeAdvice = calculateBeforeTimeRecommendation(formData.service);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_BOOKING_FORM_ENDPOINT as string | undefined;

    if (!endpoint || endpoint.trim() === '') {
      setSubmittedSummary({ ...formData });
      setStatus('needs_configuration');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'individual_booking_inquiry',
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmittedSummary({ ...formData });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to reach the booking submission service.'
      );
    }
  };

  const handleCopySummary = () => {
    const target = submittedSummary || formData;
    const text = [
      `Country Time Transit — Ride Booking Request`,
      `Passenger / Contact Name: ${target.name}`,
      `Phone: ${target.phone}`,
      `Email: ${target.email || 'Not provided'}`,
      `Service Needed: ${target.service}`,
      `Pickup Location: ${target.pickupLocation}`,
      `Destination: ${target.destination}`,
      `Preferred Date & Time: ${target.date} at ${target.time}`,
      `Passenger Category: ${target.passengerType}`,
      `Trip Type: ${target.tripType}`,
      `Additional Requirements: ${target.notes || 'None'}`
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setSubmittedSummary(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES[0].title,
      pickupLocation: '',
      destination: '',
      date: '',
      time: '',
      notes: '',
      passengerType: 'standard',
      tripType: 'one_way'
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header in TrackMyTire Dark Ambient style */}
        <div className="flex items-center justify-between px-7 py-5 bg-gradient-to-r from-[#0B1320] via-[#102238] to-[#1E3A8A] text-white">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#F59E0B]">
              <Zap className="w-3.5 h-3.5" />
              <span>COUNTRY TIME TRANSIT DISPATCH</span>
            </div>
            <h2 id="booking-modal-title" className="text-2xl font-black tracking-tight text-white mt-0.5">
              Request Your Ride
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-7 max-h-[78vh] overflow-y-auto">
          {status === 'success' && submittedSummary ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A]">
                Ride Request Submitted
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <strong className="text-slate-900">{submittedSummary.name}</strong>. Our dispatch team has received your trip inquiry and will contact you at <strong className="text-slate-900">{submittedSummary.phone}</strong> to confirm availability, vehicle requirements, and pickup arrangements.
              </p>

              <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="font-bold text-slate-900">{submittedSummary.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Pickup Date & Time:</span>
                  <span className="font-bold text-slate-900">{submittedSummary.date} at {submittedSummary.time}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Pickup:</span>
                  <span className="font-bold text-slate-900">{submittedSummary.pickupLocation}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Destination:</span>
                  <span className="font-bold text-slate-900">{submittedSummary.destination}</span>
                </div>
                {submittedSummary.passengerType !== 'standard' && (
                  <div className="flex justify-between pt-1 text-[#EA580C]">
                    <span className="font-bold">Selected Discount:</span>
                    <span className="font-extrabold">{discountEvaluation.discountName}</span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs text-[#0F172A] max-w-md mx-auto flex items-center justify-between">
                <span>Need immediate service or urgent dispatch?</span>
                <a
                  href={COMPANY_PHONE_TEL}
                  className="font-bold text-[#EA580C] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_PHONE}
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-3 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white font-extrabold text-xs rounded-full shadow-md shadow-amber-500/25 transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Notice Banner */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#0F172A]">Early-Arrival Guarantee:</strong> "{COMPANY_TAGLINE}" Our dispatch team plans trips with dedicated buffers so you never feel rushed.
                </p>
              </div>

              {/* Honest Backend Configuration Notice if submitted without backend */}
              {status === 'needs_configuration' && submittedSummary && (
                <div
                  role="status"
                  className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-left space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-black text-[#0F172A]">
                        Booking Submission Service Needs Configuration
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        Your trip details have been validated, but an automated backend form submission service (<code className="px-1.5 py-0.5 bg-white rounded border border-amber-200 text-[11px]">VITE_BOOKING_FORM_ENDPOINT</code>) still needs configuration before online requests can be transmitted automatically.
                      </p>
                      <p className="text-xs text-slate-800 font-semibold pt-0.5">
                        To schedule your ride right away, please call our dispatch team directly at{' '}
                        <a href={COMPANY_PHONE_TEL} className="text-[#EA580C] underline font-extrabold">
                          {COMPANY_PHONE}
                        </a>.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Passenger:</span>
                      <span className="font-bold text-slate-900">{submittedSummary.name} ({submittedSummary.phone})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-900">{submittedSummary.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Pickup:</span>
                      <span className="font-bold text-slate-900">{submittedSummary.pickupLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Destination:</span>
                      <span className="font-bold text-slate-900">{submittedSummary.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date & Time:</span>
                      <span className="font-bold text-slate-900">{submittedSummary.date} at {submittedSummary.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold shadow-sm shadow-amber-500/25 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>Call Dispatch: {COMPANY_PHONE}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-xs font-extrabold text-white shadow-sm shadow-amber-500/25 transition-all"
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Trip Details Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-white" />
                          <span>Copy Trip Details</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div role="alert" className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 space-y-1.5">
                  <div className="font-extrabold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Unable to Submit Ride Request</span>
                  </div>
                  <p>{errorMessage}</p>
                  <p className="font-semibold">
                    Please call our dispatchers directly at{' '}
                    <a href={COMPANY_PHONE_TEL} className="underline font-extrabold">
                      {COMPANY_PHONE}
                    </a>.
                  </p>
                </div>
              )}

              {/* Service Needed */}
              <div>
                <label htmlFor="service-select" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="service-select"
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
                {errors.service && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.service}
                  </p>
                )}
              </div>

              {/* Passenger Category & Trip Type (for discounts) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div>
                  <label htmlFor="passenger-type" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Passenger Category (Discounts)
                  </label>
                  <select
                    id="passenger-type"
                    value={formData.passengerType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passengerType: e.target.value as 'standard' | 'senior' | 'military_veteran'
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  >
                    <option value="standard">Standard Community Passenger</option>
                    <option value="senior">Senior (15% OFF Wednesdays / 8-mi radius)</option>
                    <option value="military_veteran">Military / Veteran (10% OFF Round Trips)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="trip-type" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Trip Type
                  </label>
                  <select
                    id="trip-type"
                    value={formData.tripType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tripType: e.target.value as 'one_way' | 'round_trip'
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  >
                    <option value="one_way">One-Way Journey</option>
                    <option value="round_trip">Round-Trip Journey (Veteran Savings)</option>
                  </select>
                </div>

                {formData.passengerType !== 'standard' && (
                  <div className="col-span-1 sm:col-span-2 text-xs p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                    <span className="font-bold text-[#EA580C]">{discountEvaluation.discountName}:</span>{' '}
                    {discountEvaluation.conditionNotes}
                  </div>
                )}
              </div>

              {/* Passenger / Contact Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Passenger / Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="e.g. Patricia Simmons"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    placeholder="(910) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-[#0F172A] mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional for confirmation receipt)</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                />
              </div>

              {/* Pickup Location & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickup-loc" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickup-loc"
                    required
                    placeholder="e.g. 100 Haymount St, Fayetteville"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  />
                  {errors.pickupLocation && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="dest-loc" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="dest-loc"
                    required
                    placeholder="e.g. Cape Fear Valley Medical or FAY Airport"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  />
                  {errors.destination && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.destination}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickup-date" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="pickup-date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                  />
                  {errors.date && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="pickup-time" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="pickup-time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
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
                <label htmlFor="special-notes" className="block text-xs font-bold text-[#0F172A] mb-1">
                  Additional Requirements
                </label>
                <textarea
                  id="special-notes"
                  rows={2}
                  placeholder="e.g. Wheelchair ramp needed, extra luggage, traveling with family member, flight number, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                />
              </div>

              {/* Before Time Recommendation notice */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>
                  Recommended arrival window: {beforeTimeAdvice.recommendedLeadMinutes} minutes buffer. {beforeTimeAdvice.reason}
                </span>
              </div>

              {/* Submission & Call Alternative */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <a
                  href={COMPANY_PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-800 hover:text-[#EA580C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  Call Directly: {COMPANY_PHONE}
                </a>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-xs font-extrabold text-white rounded-full shadow-md shadow-amber-500/25 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-1/2 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:from-[#d97706] hover:to-[#ea580c] text-white text-xs font-extrabold rounded-full shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Ride Request →</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Organizational Partnership Path Switcher */}
              {onNavigateToPartnership && (
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>Inquiring for a hospital, healthcare facility, or organization?</span>
                  </span>
                  <button
                    type="button"
                    onClick={onNavigateToPartnership}
                    className="font-extrabold text-[#EA580C] hover:text-[#0F172A] transition-colors underline underline-offset-4"
                  >
                    Discuss a Partnership →
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
