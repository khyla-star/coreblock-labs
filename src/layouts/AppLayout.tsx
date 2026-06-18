import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useBodyClass } from '../hooks/useBodyClass';
import { useSiteInit } from '../hooks/useSiteInit';

export default function AppLayout() {
  useSiteInit();
  useBodyClass();
  const navigate = useNavigate();

  useEffect(() => {
    const handleContactCta = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('[data-contact-popup-open]');
      if (!target) return;
      event.preventDefault();
      navigate('/contact');
    };

    document.addEventListener('click', handleContactCta);
    return () => document.removeEventListener('click', handleContactCta);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
