import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
          <Link href="/">Home</Link>
          {/* Services Dropdown */}
          <div className="dropdown-container">
            <Link href="/services">Services</Link>
            <div className="dropdown-menu">
              <Link href="/services/nursing-services">Nursing Services</Link>
              <Link href="/services/rehabilitation-services">Rehabilitation Services</Link>
              <Link href="/services/post-acute-care">Post-Acute Care</Link>
              <Link href="/services/activities-program">Activities Program</Link>
              <Link href="/services/social-services">Social Services</Link>
            </div>
          </div>
          <Link href="/about-us">About Us</Link>
          <Link href="/meet-the-staff">Staff</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
