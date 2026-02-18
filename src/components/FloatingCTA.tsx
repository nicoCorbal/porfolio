import { useState, useEffect } from 'react';

interface FloatingCTAProps {
  productName: string;
  demoLabel: string;
  contactLabel: string;
  contactHref: string;
}

export function FloatingCTA({ productName, demoLabel, contactLabel, contactHref }: FloatingCTAProps) {
  const [pastHero, setPastHero] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero-section');
    const bottomCta = document.querySelector('.bottom-cta-section');

    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '0', 10);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) {
            setPastHero(!entry.isIntersecting);
          }
          if (entry.target === bottomCta) {
            setAtBottom(entry.isIntersecting);
          }
        });
      },
      { threshold: 0, rootMargin: `-${headerH}px 0px 0px 0px` }
    );

    if (hero) observer.observe(hero);
    if (bottomCta) observer.observe(bottomCta);

    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atBottom;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-3 flex items-center justify-between gap-4">
        <span className="text-white font-semibold text-sm sm:text-base truncate">{productName}</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={contactHref}
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
          >
            {contactLabel}
          </a>
          <a
            href={contactHref}
            className="inline-flex items-center px-5 py-2 text-sm font-semibold bg-white text-black hover:bg-gray-100 transition-colors"
          >
            {demoLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
