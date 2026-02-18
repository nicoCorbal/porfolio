import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const barFillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoTween = useRef<gsap.core.Tween | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const startAutoProgress = useCallback((index: number) => {
    if (autoTween.current) {
      autoTween.current.kill();
      autoTween.current = null;
    }

    barFillRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { scaleX: i < index ? 1 : 0 });
    });

    const fillEl = barFillRefs.current[index];
    if (!fillEl || !emblaApi) return;

    autoTween.current = gsap.fromTo(
      fillEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: AUTO_DURATION,
        ease: 'none',
        onComplete: () => {
          const next = (index + 1) % cases.length;
          emblaApi.scrollTo(next);
        },
      }
    );

    if (isHovered.current) autoTween.current.pause();
  }, [emblaApi, cases.length]);

  useEffect(() => {
    startAutoProgress(activeIndex);
    return () => { if (autoTween.current) autoTween.current.kill(); };
  }, [activeIndex, startAutoProgress]);

  const handleBarClick = useCallback((index: number) => {
    if (!emblaApi || index === activeIndex) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, activeIndex]);

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
    if (autoTween.current) autoTween.current.pause();
  }, []);
  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    if (autoTween.current) autoTween.current.play();
  }, []);

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
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {cases.map((cs) => (
              <div key={cs.id} className="flex-[0_0_100%] min-w-0">
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

                  {/* Arrows inside viewport */}
                  {cases.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => emblaApi?.scrollPrev()}
                        className="cases-showcase-nav cases-showcase-nav-prev"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => emblaApi?.scrollNext()}
                        className="cases-showcase-nav cases-showcase-nav-next"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasesCarousel;
