import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect } from 'react';
import './Navbar.css'

const navItems = [
  { label: 'الرئيسية', path: '/' },
  {
    label: 'خدماتنا',
    dropdown: [
      { label: 'حلول الشبكات', path: '/services/network' },
      { label: 'الخدمات الأكاديمية', path: '/services/academic' },
      { label: 'التصميم', path: '/services/design' },
      { label: 'خدمات التدريب', path: '/services/training' },
    ],
  },
  { label: 'حول الشركة', path: '/about' },
  { label: 'تواصل معنا', path: '/contact' },
];



function Navbar() {
  const location = useLocation();
  // ✅ حالة لتتبع هل القائمة المنسدلة مفتوحة أم لا
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    // Check scroll position on mount
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-colored' : 'navbar-transparent'}`}>
      <ul className="nav-list">
        {navItems.map((item, index) => {
          if (item.dropdown) {
            // determine if any dropdown child matches current path
            const isParentActive = item.dropdown.some(sub =>
              location.pathname === sub.path || location.pathname.startsWith(sub.path)
            );
            return (
              <li key={index} className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                 <span className={`dropdown-toggle ${isParentActive ? 'active' : ''}`}>
                  {item.label}
                  <FiChevronDown className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
                </span>
                <ul className="dropdown-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (location.pathname === item.path) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={location.pathname === item.path ? 'active' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default Navbar;