import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PhoneFloat from './PhoneFloat';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="header" role="banner">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Gridley Post Acute Logo"
              width={200}
              height={66}
              className="logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {/* Navigation Links */}
        <nav
          id="primary-navigation"
          className={`nav ${isMobileMenuOpen ? 'open' : ''}`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <Link  href="/" onClick={closeMobileMenu}>
            Home
          </Link>
          {/* Services Dropdown */}
          <div  className="dropdown-container" role="menu">
            <Link
              href="/services"
              onClick={closeMobileMenu}
              aria-haspopup="true"
              aria-expanded={isMobileMenuOpen}
            >
              Services
            </Link>
            <div className="dropdown-menu" role="menu">
              <Link href="/services/nursing-services" onClick={closeMobileMenu}>
                Nursing Services
              </Link>
              <Link href="/services/rehabilitation-services" onClick={closeMobileMenu}>
                Rehabilitation Services
              </Link>
              <Link href="/services/activities-program" onClick={closeMobileMenu}>
                Activities Program
              </Link>
              <Link href="/services/social-services" onClick={closeMobileMenu}>
                Social Services
              </Link>
            </div>
          </div>

          
          <Link  href="/about-us" onClick={closeMobileMenu}>
            About Us
          </Link>
        

          <Link  href="/meet-the-staff" onClick={closeMobileMenu}>
            Our Staff
          </Link>

          <Link  href="/gallery" onClick={closeMobileMenu}>
            Gallery
          </Link>

          <Link  href="/contact-us" onClick={closeMobileMenu}>
            Contact Us
          </Link>

          <PhoneFloat />

        </nav>
      </div>
    </header>
  );
};

const navButton: React.CSSProperties = {

  padding: '10px 20px',
  backgroundColor: '#2c3e50',
  color: 'white',
  border: '1px solid',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none', // For links styled as buttons
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',

}

export default Header;
