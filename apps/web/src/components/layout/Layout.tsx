import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../ui';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-primary selection:bg-accent/20 selection:text-accent">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

