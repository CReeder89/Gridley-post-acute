import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PhoneFloat from './PhoneFloat';
import { academyNav } from '../content/cnaAcademy';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderHidden, setHeaderHidden] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent background page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  // Hide on scroll down, show on scroll up (keep visible near top / while menu open)
  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;

        if (isMobileMenuOpen || currentY < 72) {
          setHeaderHidden(false);
        } else if (delta > 6) {
          setHeaderHidden(true);
        } else if (delta < -6) {
          setHeaderHidden(false);
        }

        lastY = currentY < 0 ? 0 : currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  // Always show header when opening the mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) setHeaderHidden(false);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`header${isHeaderHidden ? ' header--hidden' : ''}`}
      role="banner"
    >
      <div className="header-content">
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

        <nav
          id="primary-navigation"
          className={`nav ${isMobileMenuOpen ? 'open' : ''}`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <Link href="/" onClick={closeMobileMenu}>
            Home
          </Link>

          <div className="nav-dropdown">
            <Link
              className="dropdown-container"
              href="/services"
              onClick={closeMobileMenu}
              aria-haspopup="true"
            >
              Services
            </Link>
            <div className="dropdown-menu" role="menu">
              <Link href="/services/nursing-services" onClick={closeMobileMenu} role="menuitem">
                Nursing Services
              </Link>
              <Link href="/services/rehabilitation-services" onClick={closeMobileMenu} role="menuitem">
                Rehabilitation Services
              </Link>
              <Link href="/services/activities-program" onClick={closeMobileMenu} role="menuitem">
                Activities Program
              </Link>
              <Link href="/services/social-services" onClick={closeMobileMenu} role="menuitem">
                Social Services
              </Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <Link
              className="dropdown-container"
              href="/cna-academy"
              onClick={closeMobileMenu}
              aria-haspopup="true"
            >
              CNA Academy
            </Link>
            <div className="dropdown-menu" role="menu">
              {academyNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobileMenu} role="menuitem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about-us" onClick={closeMobileMenu}>
            About Us
          </Link>

          <Link href="/gallery" onClick={closeMobileMenu}>
            Gallery
          </Link>

          <Link href="/contact-us" onClick={closeMobileMenu}>
            Contact Us
          </Link>

          <PhoneFloat />
        </nav>
      </div>
    </header>
  );
};

export default Header;
