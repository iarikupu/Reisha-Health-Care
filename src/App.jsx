import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import useHashScroll from './hooks/useHashScroll.js';
import Home from './pages/Home.jsx';
import VisionMission from './pages/VisionMission.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import Careers from './pages/Careers.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  useHashScroll();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
