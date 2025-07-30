// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A component that scrolls the window to the top whenever the URL's pathname changes.
 * This is useful for ensuring new "pages" in a single-page application start at the top.
 */
const ScrollToTop = () => {
  // Get the current location object from react-router-dom
  const { pathname } = useLocation();

  // Effect to run whenever the pathname changes
  useEffect(() => {
    // Scroll to the top of the window
    // window.scrollTo(0, 0) works across most browsers.
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: re-run this effect when pathname changes

  // This component doesn't render any UI, it's purely for side effects.
  return null;
};

export default ScrollToTop;
