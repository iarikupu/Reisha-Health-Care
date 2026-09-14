import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ports the old vanilla-JS fix for a real bug: CSS `scroll-behavior: smooth`
// on <html> breaks the browser's native "jump to #anchor" on page/route load,
// so we scroll to the target manually once it exists in the DOM.
//
// Also handles the plain case: React Router doesn't reset scroll position on
// its own, so navigating to a new route (e.g. clicking "Contact Us" while
// scrolled down on another page) would otherwise open the new page still
// scrolled to wherever the previous page was left — jump to the top instead.
export default function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return undefined;

    const raf = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(raf);
  }, [location]);
}
