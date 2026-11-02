export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-areas'
  | 'contact'
  | 'service-detail';

export interface TransportationService {
  id: string;
  slug: string;
  title: string;
  headline?: string;
  shortDescription: string;
  fullDescription: string;
  highlightBanner?: string;
  overviewParagraphs?: string[];
  processTitle?: string;
  processParagraphs?: string[];
  iconName: string;
  benefits: string[];
  features: string[];
  idealFor: string[];
  faqSectionTitle?: string;
  faqSectionIntro?: string;
  faqs?: { q: string; a: string }[];
}

export interface Testimonial {
  author: string;
  quote: string;
  location?: string;
  verifiedTrip?: string;
}

export interface AwardItem {
  year: string;
  organization: string;
  title: string;
  badgeText: string;
  notes: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
