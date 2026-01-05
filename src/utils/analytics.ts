// Google Analytics 4 - Tracking utilities for KTED A/B Testing

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

type EventParams = Record<string, string | number | boolean>;

/**
 * Track a custom event in GA4
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Track variant page view
 */
export const trackVariantView = (variant: string, lang: string): void => {
  trackEvent('variant_view', {
    variant,
    lang,
    page_type: 'kted_landing'
  });
};

/**
 * Track scroll depth (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (variant: string, depth: number): void => {
  trackEvent('scroll_depth', {
    variant,
    depth,
    page_type: 'kted_landing'
  });
};

/**
 * Track CTA button click
 */
export const trackCTAClick = (variant: string, ctaText: string, ctaLocation: string): void => {
  trackEvent('cta_click', {
    variant,
    cta_text: ctaText,
    cta_location: ctaLocation,
    page_type: 'kted_landing'
  });
};

/**
 * Track when user starts filling the form
 */
export const trackFormStart = (variant: string): void => {
  trackEvent('form_start', {
    variant,
    page_type: 'kted_landing'
  });
};

/**
 * Track successful form submission (conversion)
 */
export const trackFormSubmit = (variant: string): void => {
  trackEvent('form_submit', {
    variant,
    conversion: true,
    page_type: 'kted_landing'
  });
};

/**
 * Track section visibility (when section enters viewport)
 */
export const trackSectionView = (variant: string, sectionName: string): void => {
  trackEvent('section_view', {
    variant,
    section_name: sectionName,
    page_type: 'kted_landing'
  });
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = (variant: string): void => {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = (): void => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !tracked.has(threshold)) {
        tracked.add(threshold);
        trackScrollDepth(variant, threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Initialize section visibility tracking with IntersectionObserver
 */
export const initSectionTracking = (variant: string): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const trackedSections = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && !trackedSections.has(sectionId)) {
            trackedSections.add(sectionId);
            trackSectionView(variant, sectionId);
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe all sections with id
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
};
