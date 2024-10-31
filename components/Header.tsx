import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Gridley Post Acute"
              width={200}
              height={66}
              className="logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links (desktop & mobile) */}
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          {/* Services Dropdown */}
          <div className="dropdown-container">
            <Link href="/services" onClick={closeMobileMenu}>Services</Link>
            <div className="dropdown-menu">
              <Link href="/services/nursing-services" onClick={closeMobileMenu}>Nursing Services</Link>
              <Link href="/services/rehabilitation-services" onClick={closeMobileMenu}>Rehabilitation Services</Link>
              <Link href="/services/post-acute-care" onClick={closeMobileMenu}>Post-Acute Care</Link>
              <Link href="/services/activities-program" onClick={closeMobileMenu}>Activities Program</Link>
              <Link href="/services/social-services" onClick={closeMobileMenu}>Social Services</Link>
            </div>
          </div>
          <Link href="/about-us" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/meet-the-staff" onClick={closeMobileMenu}>Our Staff</Link>
          <Link href="/gallery" onClick={closeMobileMenu}>Gallery</Link>
          <Link href="/careers" onClick={closeMobileMenu}>Careers</Link>
          <Link href="/contact-us" onClick={closeMobileMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
