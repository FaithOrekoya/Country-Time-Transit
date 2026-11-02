import test from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateDiscountEligibility,
  checkServiceAreaAvailability,
  validateBookingForm,
  calculateBeforeTimeRecommendation,
  VERIFIED_SERVICE_AREAS
} from './transitLogic';

test('evaluateDiscountEligibility: senior discount on Wednesday <= 8 miles', () => {
  const result = evaluateDiscountEligibility({
    passengerType: 'senior',
    tripType: 'one_way',
    dayOfWeek: 3, // Wednesday
    distanceMiles: 6
  });
  assert.equal(result.eligible, true);
  assert.equal(result.discountPercentage, 15);
  assert.ok(result.discountName.includes('15% OFF'));
});

test('evaluateDiscountEligibility: senior discount non-Wednesday is not eligible', () => {
  const result = evaluateDiscountEligibility({
    passengerType: 'senior',
    tripType: 'one_way',
    dayOfWeek: 2, // Tuesday
    distanceMiles: 5
  });
  assert.equal(result.eligible, false);
  assert.equal(result.discountPercentage, 0);
});

test('evaluateDiscountEligibility: senior discount > 8 miles is not eligible', () => {
  const result = evaluateDiscountEligibility({
    passengerType: 'senior',
    tripType: 'one_way',
    dayOfWeek: 3, // Wednesday
    distanceMiles: 15
  });
  assert.equal(result.eligible, false);
});

test('evaluateDiscountEligibility: military round trip is eligible for 10%', () => {
  const result = evaluateDiscountEligibility({
    passengerType: 'military_veteran',
    tripType: 'round_trip',
    dayOfWeek: 1
  });
  assert.equal(result.eligible, true);
  assert.equal(result.discountPercentage, 10);
});

test('evaluateDiscountEligibility: military one-way is not eligible for round trip discount', () => {
  const result = evaluateDiscountEligibility({
    passengerType: 'military_veteran',
    tripType: 'one_way',
    dayOfWeek: 1
  });
  assert.equal(result.eligible, false);
});

test('checkServiceAreaAvailability: recognizes verified service areas', () => {
  const matchFayetteville = checkServiceAreaAvailability('Fayetteville');
  assert.equal(matchFayetteville.matched, true);
  assert.equal(matchFayetteville.areaName, 'Fayetteville, NC');

  const matchFortLiberty = checkServiceAreaAvailability('fort liberty');
  assert.equal(matchFortLiberty.matched, true);
  assert.equal(matchFortLiberty.areaName, 'Fort Liberty, NC');

  const unknown = checkServiceAreaAvailability('Atlanta');
  assert.equal(unknown.matched, false);
});

test('all 12 verified service areas are present in catalog', () => {
  assert.equal(VERIFIED_SERVICE_AREAS.length, 12);
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Fayetteville, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Spring Lake, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Hope Mills, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Raeford, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Lumberton, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Dunn, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Pinehurst, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Fort Liberty, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Southern Pines, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Sanford, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Anderson Creek, NC'));
  assert.ok(VERIFIED_SERVICE_AREAS.includes('Haymount, NC'));
});

test('validateBookingForm: catches missing required fields', () => {
  const emptyResult = validateBookingForm({
    name: '',
    phone: '',
    email: '',
    service: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: ''
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.service);
  assert.ok(emptyResult.errors.pickupLocation);
  assert.ok(emptyResult.errors.destination);
  assert.ok(emptyResult.errors.date);
  assert.ok(emptyResult.errors.time);
});

test('validateBookingForm: passes valid submission', () => {
  const validResult = validateBookingForm({
    name: 'Patricia Simmons',
    phone: '(910) 555-0199',
    email: 'patricia@example.com',
    service: 'Non-Emergency Medical Transportation',
    pickupLocation: '123 Haymount Rd, Fayetteville',
    destination: 'Cape Fear Valley Medical Center',
    date: '2026-11-05',
    time: '09:30 AM'
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('calculateBeforeTimeRecommendation: returns custom buffers', () => {
  const airport = calculateBeforeTimeRecommendation('Airport Transfers');
  assert.equal(airport.recommendedLeadMinutes, 120);

  const medical = calculateBeforeTimeRecommendation('Non-Emergency Medical Transportation');
  assert.equal(medical.recommendedLeadMinutes, 30);
});
