import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Background from './components/ui/Background';
import Navbar from './components/ui/Navbar';
import HomePage from './pages/Home';
import About from './pages/About';
import NetworkService from './pages/services/NetworkService';
import AcademicService from './pages/services/AcademicService';
import DesignService from './pages/services/DesignService';
import TrainingService from './pages/services/TrainingService';
import Contact from './pages/Contact';
import Footer from './components/ui/Footer';


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      {/* Full-page animated background */}
      <Background />
      <Router>
        <ScrollToTop />
        {/* Navcation bar for all pages */}
        <Navbar />
        {/* Page routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/network" element={<NetworkService />} />
          <Route path="/services/academic" element={<AcademicService />} />
          <Route path="/services/design" element={<DesignService />} />
          <Route path="/services/training" element={<TrainingService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Render footer on all pages except Contact */}
        <FooterVisibilityWrapper />
      </Router>
    </>
  );
}

export default App;

function FooterVisibilityWrapper() {
  // useLocation can only be used inside Router, and this component
  // is rendered inside Router so it's safe to call here.
  const { pathname } = useLocation();
  // Hide footer on /contact (also handle trailing slash)
  if (pathname === '/contact' || pathname === '/contact/') return null;
  return <Footer />;
}
