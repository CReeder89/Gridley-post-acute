import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PhoneFloat from './PhoneFloat';
import { academyNav } from '../content/cnaAcademy';

const headerVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 320, damping: 34, mass: 0.85 },
      opacity: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    },
  },
  hide: {
    y: '-110%',
    opacity: 0,
    transition: {
      y: { duration: 0.42, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.28, ease: [0.4, 0, 1, 1] },
    },
  },
} as const;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Keep page offset matched to the real header height
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setHeight = () => {
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${el.offsetHeight}px`
      );
    };

    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    window.addEventListener('resize', setHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  // Prevent background page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    let lastY = getScrollY();
    let ticking = false;
    let visible = true;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = getScrollY();
        const delta = currentY - lastY;
        let nextVisible = visible;

        if (isMobileMenuOpen || currentY < 64) {
          nextVisible = true;
        } else if (delta > 10) {
          nextVisible = false;
        } else if (delta < -8) {
          nextVisible = true;
        }

        if (nextVisible !== visible) {
          visible = nextVisible;
          setHeaderVisible(nextVisible);
        }

        lastY = currentY < 0 ? 0 : currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('scroll', onScroll, { passive: true });
    document.body.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('scroll', onScroll);
      document.body.removeEventListener('scroll', onScroll);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) setHeaderVisible(true);
  }, [isMobileMenuOpen]);

  const showHeader = reduceMotion || isHeaderVisible;

  return (
    <>
      {/*
        Outer header stays transform-free (Safari bug: fixed + transform
        can leave a 1px / scrollbar-sized gap on the side of the viewport).
        Motion runs on the inner shell only.
      */}
      <header
        ref={headerRef}
        className="header"
        role="banner"
        style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
      >
        <motion.div
          className="header__shell"
          initial={false}
          animate={showHeader ? 'show' : 'hide'}
          variants={headerVariants}
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
                  <Link
                    href="/services/rehabilitation-services"
                    onClick={closeMobileMenu}
                    role="menuitem"
                  >
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
        </motion.div>
      </header>
      <div className="header-offset" aria-hidden="true" />
    </>
  );
};

export default Header;
