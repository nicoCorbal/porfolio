import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

interface CaseStat {
  label: string
  value: string
}

interface CaseStudy {
  id: string
  title: string
  client: string
  headline: string
  summary: string
  stats: CaseStat[]
  images?: string[]
  results: string[]
}

interface CasesCarouselProps {
  cases: CaseStudy[]
}

const AUTO_DURATION = 5;

export function CasesCarousel({ cases }: CasesCarouselProps) {
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const barFillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoTween = useRef<gsap.core.Tween | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  const startAutoProgress = useCallback((index: number) => {
    if (autoTween.current) {
      autoTween.current.kill();
      autoTween.current = null;
    }

    barFillRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { scaleX: i < index ? 1 : 0 });
    });

    const fillEl = barFillRefs.current[index];
    if (!fillEl || !api) return;

    autoTween.current = gsap.fromTo(
      fillEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: AUTO_DURATION,
        ease: 'none',
        onComplete: () => {
          const next = (index + 1) % cases.length;
          api.scrollTo(next);
        },
      }
    );

    if (isHovered.current) autoTween.current.pause();
  }, [api, cases.length]);

  useEffect(() => {
    startAutoProgress(activeIndex);
    return () => { if (autoTween.current) autoTween.current.kill(); };
  }, [activeIndex, startAutoProgress]);

  const handleBarClick = useCallback((index: number) => {
    if (!api || index === activeIndex) return;
    api.scrollTo(index);
  }, [api, activeIndex]);

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
    if (autoTween.current) autoTween.current.pause();
  }, []);
  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    if (autoTween.current) autoTween.current.play();
  }, []);

  // Pick a representative image for each case
  const getCaseImage = (cs: CaseStudy) => cs.images?.[0] ?? '/og-image.png';

  return (
    <div className="cases-showcase">
      {/* Top: progress bars with case titles */}
      <div className="cases-showcase-bars">
        {cases.map((cs, i) => (
          <button
            key={cs.id}
            className={`cases-showcase-bar-group ${i === activeIndex ? 'active' : ''}`}
            onClick={() => handleBarClick(i)}
          >
            <span className="cases-showcase-bar-name">{cs.title}</span>
            <div className="cases-showcase-bar">
              <div
                className="cases-showcase-bar-fill"
                ref={(el) => { barFillRefs.current[i] = el; }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Content: carousel */}
      <div
        className="cases-showcase-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: 30 }}
          className="w-full"
        >
          <CarouselContent>
            {cases.map((cs) => (
              <CarouselItem key={cs.id}>
                <div className="cases-showcase-viewport">
                  <img
                    src={getCaseImage(cs)}
                    alt={cs.title}
                    className="cases-showcase-img"
                    loading="lazy"
                  />
                  <div className="cases-showcase-overlay" />
                  <div className="cases-showcase-text">
                    <span className="cases-showcase-client">{cs.client}</span>
                    <h3 className="cases-showcase-title">{cs.title}</h3>
                    <p className="cases-showcase-headline">{cs.headline}</p>
                    <div className="cases-showcase-divider" />
                    <p className="cases-showcase-summary">{cs.summary}</p>
                    {cs.stats.length > 0 && (
                      <div className="cases-showcase-stats">
                        {cs.stats.slice(0, 3).map((stat, i) => (
                          <div key={i} className="cases-showcase-stat">
                            <span className="cases-showcase-stat-value">{stat.value}</span>
                            <span className="cases-showcase-stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-10" />
          <CarouselNext className="right-10" />
        </Carousel>
      </div>
    </div>
  );
}

export default CasesCarousel;
