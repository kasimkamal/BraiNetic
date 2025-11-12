import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import Socials from './Socials';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to services-grid section
  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home, scroll
      const el = document.querySelector('.services-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home, then scroll after navigation
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={location.pathname === '/' ? 'active' : undefined}
              >
                الرئيسية
              </Link>
            </li>
            <li><a href="/services" onClick={handleServicesClick}>خدماتنا</a></li>
            <li>
              <Link
                to="/about"
                onClick={(e) => {
                  if (location.pathname === '/about') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={location.pathname === '/about' ? 'active' : undefined}
              >
                حول الشركة
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={(e) => {
                  if (location.pathname === '/contact') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={location.pathname === '/contact' ? 'active' : undefined}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
        
    <Socials />

    <div className="copyright">
      &copy; 2025  Brainetic by KH. All rights reserved.
    </div>





        {/* <div className="footer-brand">
          <h3>Brai<span className="accent">N</span>etic</h3>
          <p>حلول تقنية واستشارية وتعليمية مبتكرة</p>
        </div>

        <div className="footer-links">
          <div className="links-block">
            <h4>روابط سريعة</h4>
            <ul>
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/services/network">حلول الشبكات</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          <div className="links-block">
            <h4>تواصل معنا</h4>
            <ul>
              <li>هاتف: +966 5X XXX XXXX</li>
              <li>بريد: info@brainetic.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brainetic. كل الحقوق محفوظة.</p>*/}
      </div>
    </footer>
  );
}

export default Footer;
