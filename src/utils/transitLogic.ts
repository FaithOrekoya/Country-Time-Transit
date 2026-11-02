/**
 * Pure transit business logic and validation helpers for Country Time Transit
 */

export interface DiscountCheckParams {
  passengerType: 'standard' | 'senior' | 'military_veteran';
  tripType: 'one_way' | 'round_trip';
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  distanceMiles?: number;
}

export interface DiscountResult {
  eligible: boolean;
  discountPercentage: number;
  discountName: string;
  conditionNotes: string;
}

/**
 * Calculates discount eligibility based on company terms:
 * - 15% OFF Senior Rides: Wednesdays within 8 miles of Fayetteville
 * - 10% OFF Military & Veteran Round Trips: round-trip transportation
 */
export function evaluateDiscountEligibility(params: DiscountCheckParams): DiscountResult {
  const { passengerType, tripType, dayOfWeek, distanceMiles } = params;

  if (passengerType === 'senior') {
    const isWednesday = dayOfWeek === 3;
    const withinRadius = distanceMiles === undefined || distanceMiles <= 8;

    if (isWednesday && withinRadius) {
      return {
        eligible: true,
        discountPercentage: 15,
        discountName: 'Senior Wednesday Discount (15% OFF)',
        conditionNotes: 'Valid on Wednesdays within an 8-mile radius of Fayetteville.'
      };
    } else if (!isWednesday) {
      return {
        eligible: false,
        discountPercentage: 0,
        discountName: 'Senior Wednesday Discount',
        conditionNotes: '15% Senior Discount applies to trips booked for Wednesdays.'
      };
    } else {
      return {
        eligible: false,
        discountPercentage: 0,
        discountName: 'Senior Wednesday Discount',
        conditionNotes: 'Senior Discount applies to trips within an 8-mile radius of Fayetteville.'
      };
    }
  }

  if (passengerType === 'military_veteran') {
    if (tripType === 'round_trip') {
      return {
        eligible: true,
        discountPercentage: 10,
        discountName: 'Military & Veteran Round Trip Discount (10% OFF)',
        conditionNotes: 'Special 10% savings on eligible round-trip transportation for service members and veterans.'
      };
    } else {
      return {
        eligible: false,
        discountPercentage: 0,
        discountName: 'Military & Veteran Discount',
        conditionNotes: '10% Military & Veteran discount applies to scheduled round-trip transportation.'
      };
    }
  }

  return {
    eligible: false,
    discountPercentage: 0,
    discountName: 'Standard Rate',
    conditionNotes: 'Standard community rate applied.'
  };
}

export const VERIFIED_SERVICE_AREAS = [
  'Fayetteville, NC',
  'Spring Lake, NC',
  'Hope Mills, NC',
  'Raeford, NC',
  'Lumberton, NC',
  'Dunn, NC',
  'Pinehurst, NC',
  'Fort Liberty, NC',
  'Southern Pines, NC',
  'Sanford, NC',
  'Anderson Creek, NC',
  'Haymount, NC'
] as const;

export type ServiceAreaName = typeof VERIFIED_SERVICE_AREAS[number];

/**
 * Checks if a location name or search query matches one of the 12 verified service regions
 */
export function checkServiceAreaAvailability(query: string): {
  matched: boolean;
  areaName?: string;
  notes: string;
} {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return {
      matched: false,
      notes: 'Please enter a town or community name.'
    };
  }

  const found = VERIFIED_SERVICE_AREAS.find((area) => {
    const areaLower = area.toLowerCase();
    const townOnly = areaLower.replace(', nc', '').trim();
    return areaLower.includes(clean) || clean.includes(townOnly);
  });

  if (found) {
    return {
      matched: true,
      areaName: found,
      notes: `${found} is within our primary North Carolina service network. Contact us to schedule pickup and confirm trip availability.`
    };
  }

  return {
    matched: false,
    notes: `Destination may be eligible for planned long-distance or regional transportation. Call (910) 364-1102 to verify specific route details.`
  };
}

export interface BookingFormFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  notes?: string;
  passengerType?: 'standard' | 'senior' | 'military_veteran';
  tripType?: 'one_way' | 'round_trip';
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates booking inquiry form inputs
 */
export function validateBookingForm(fields: BookingFormFields): FormValidationResult {
  const errors: Record<string, string> = {};

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = 'Please provide your full name or passenger contact name.';
  }

  const phoneDigits = fields.phone ? fields.phone.replace(/\D/g, '') : '';
  if (!fields.phone || phoneDigits.length < 10) {
    errors.phone = 'Please provide a valid 10-digit telephone number.';
  }

  if (fields.email && fields.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
  }

  if (!fields.service || fields.service.trim().length === 0) {
    errors.service = 'Please select a transportation service.';
  }

  if (!fields.pickupLocation || fields.pickupLocation.trim().length < 3) {
    errors.pickupLocation = 'Please provide a pickup location or address.';
  }

  if (!fields.destination || fields.destination.trim().length < 3) {
    errors.destination = 'Please provide a destination or address.';
  }

  if (!fields.date || fields.date.trim().length === 0) {
    errors.date = 'Please select your preferred date.';
  }

  if (!fields.time || fields.time.trim().length === 0) {
    errors.time = 'Please select your preferred pickup time.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Calculates recommended departure time embodying the company signature commitment:
 * "We're not on time. We're before time."
 */
export function calculateBeforeTimeRecommendation(service: string): {
  recommendedLeadMinutes: number;
  reason: string;
} {
  const serviceLower = service.toLowerCase();
  if (serviceLower.includes('airport')) {
    return {
      recommendedLeadMinutes: 120,
      reason: 'Our early airport transfer standard allocates flight check-in and luggage timing so you never rush.'
    };
  }
  if (serviceLower.includes('medical') || serviceLower.includes('wheelchair')) {
    return {
      recommendedLeadMinutes: 30,
      reason: 'Our medical arrival protocol ensures you reach clinic registration comfortably before your appointment time.'
    };
  }
  return {
    recommendedLeadMinutes: 15,
    reason: "Consistent with our commitment: We're not on time. We're before time."
  };
}

export const ORGANIZATION_TYPES = [
  'Hospital',
  'Healthcare Facility',
  'Medical Practice / Clinic',
  'Senior Living / Care Facility',
  'School / Educational Institution',
  'Business / Employer',
  'Other'
] as const;

export const PARTNERSHIP_NEED_TYPES = [
  'Patient Transportation',
  'Medical Appointment Transportation',
  'Senior Transportation',
  'Employee Shuttle Services',
  'Student Transportation',
  'Recurring Transportation Arrangements',
  'Other'
] as const;

export interface PartnershipFormFields {
  fullName: string;
  organizationName: string;
  workEmail: string;
  phone: string;
  organizationType: string;
  partnershipType: string;
  estimatedRequirements: string;
  message: string;
}

/**
 * Validates the Referral & Organization Partnership Inquiry form
 */
export function validatePartnershipForm(fields: PartnershipFormFields): FormValidationResult {
  const errors: Record<string, string> = {};

  if (!fields.fullName || fields.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!fields.organizationName || fields.organizationName.trim().length < 2) {
    errors.organizationName = 'Please enter your organization or company name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.workEmail || !emailRegex.test(fields.workEmail.trim())) {
    errors.workEmail = 'Please enter a valid work email address.';
  }

  const phoneDigits = fields.phone ? fields.phone.replace(/\D/g, '') : '';
  if (!fields.phone || phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  if (!fields.organizationType || fields.organizationType.trim().length === 0) {
    errors.organizationType = 'Please select your organization type.';
  }

  if (!fields.partnershipType || fields.partnershipType.trim().length === 0) {
    errors.partnershipType = 'Please select the type of partnership or transportation needed.';
  }

  if (!fields.message || fields.message.trim().length < 5) {
    errors.message = 'Please share a brief overview of your transportation or partnership needs.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

