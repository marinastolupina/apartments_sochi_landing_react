import './App.css';
import { useState } from 'react';

import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ApartmentsList from './components/ApartmentsList';
import CtaSection from './components/CtaSection';
import AmenitiesList from './components/AmenitiesList';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactsSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const guests = form.guests.value;
    const phone = form.phone.value;

    if (!checkIn || !checkOut || !guests || !phone) {
      alert('Пожалуйста, заполните обязательные поля!');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Дата выезда должна быть позже даты заезда!');
      return;
    }

    setShowSuccess(true);

    setTimeout(() => {
      closeModal();
    }, 5000);
  };


    return (
      <>
        <HeroSection />
        <StatsSection />
        <ApartmentsList />
        <CtaSection onOpenModal={openModal} />
        <AmenitiesList />
        <Gallery />
        <Reviews />
        <CtaSection onOpenModal={openModal} />
        <ContactsSection />
        <FooterSection />

        <BookingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          showSuccess={showSuccess}
          onSubmit={handleSubmit}
        />
      </>
    );
  }

  export default App;


