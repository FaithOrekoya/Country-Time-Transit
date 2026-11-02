import React, { useState } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('non-emergency-medical');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPreselectedService, setBookingPreselectedService] = useState<string | undefined>(undefined);
  const [partnershipScrollTrigger, setPartnershipScrollTrigger] = useState<number>(0);

  const handleOpenBooking = (serviceTitle?: string) => {
    setBookingPreselectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingPreselectedService(undefined);
  };

  const handleNavigateToPartnership = () => {
    setIsBookingModalOpen(false);
    setCurrentRoute('contact');
    setPartnershipScrollTrigger((prev) => prev + 1);
    setTimeout(() => {
      const el = document.getElementById('partnership-inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            setCurrentRoute={setCurrentRoute}
            onSelectServiceSlug={setSelectedServiceSlug}
            onOpenBooking={handleOpenBooking}
            onNavigateToPartnership={handleNavigateToPartnership}
          />
        );
      case 'about':
        return (
          <AboutPage
            setCurrentRoute={setCurrentRoute}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'services':
        return (
          <ServicesOverviewPage
            setCurrentRoute={setCurrentRoute}
            onSelectServiceSlug={setSelectedServiceSlug}
            onOpenBooking={handleOpenBooking}
            onNavigateToPartnership={handleNavigateToPartnership}
          />
        );
      case 'service-detail':
        return (
          <ServiceDetailPage
            serviceSlug={selectedServiceSlug}
            setCurrentRoute={setCurrentRoute}
            onSelectServiceSlug={setSelectedServiceSlug}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'service-areas':
        return (
          <ServiceAreasPage
            setCurrentRoute={setCurrentRoute}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'contact':
        return (
          <ContactPage
            setCurrentRoute={setCurrentRoute}
            onOpenBooking={handleOpenBooking}
            partnershipScrollTrigger={partnershipScrollTrigger}
          />
        );
      default:
        return (
          <HomePage
            setCurrentRoute={setCurrentRoute}
            onSelectServiceSlug={setSelectedServiceSlug}
            onOpenBooking={handleOpenBooking}
            onNavigateToPartnership={handleNavigateToPartnership}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#526173]">
      <Header
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        onOpenBooking={handleOpenBooking}
        onSelectServiceSlug={setSelectedServiceSlug}
        onNavigateToPartnership={handleNavigateToPartnership}
      />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer
        setCurrentRoute={setCurrentRoute}
        onSelectServiceSlug={setSelectedServiceSlug}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToPartnership={handleNavigateToPartnership}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingPreselectedService}
        onNavigateToPartnership={handleNavigateToPartnership}
      />
    </div>
  );
}
