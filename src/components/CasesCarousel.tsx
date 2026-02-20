import { useState, useRef, useEffect, useCallback } from 'react';
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
  date?: string
  stats: CaseStat[]
  images?: string[]
  video?: string
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoTween = useRef<gsap.core.Tween | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    onSelect();
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

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeIndex) {
        vid.currentTime = 0;
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, [activeIndex]);

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
            {cases.map((cs, idx) => {
              const images = cs.images ?? [];

              return (
                <CarouselItem key={cs.id} className="md:items-center items-start">
                  <div className="cases-showcase-slide">
                    {/* Left: Image */}
                    <div className="cases-showcase-images">
                      <div className="cases-showcase-main-img">
                        {cs.video ? (
                          <video
                            ref={(el) => { videoRefs.current[idx] = el; }}
                            src={cs.video}
                            controls
                            loop
                            muted
                            playsInline
                          />
                        ) : images.length > 0 ? (
                          <img
                            src={images[0]}
                            alt={cs.title}
                            loading="lazy"
                          />
                        ) : (
                          <div className="cases-showcase-placeholder">
                            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile dots */}
                    <div className="cases-showcase-dots">
                      {cases.map((cs2, i) => (
                        <button
                          key={cs2.id}
                          className={`cases-showcase-dot ${i === activeIndex ? 'active' : ''}`}
                          onClick={() => handleBarClick(i)}
                        />
                      ))}
                    </div>

                    {/* Right: Text */}
                    <div className="cases-showcase-info">
                      <div className="cases-showcase-meta">
                        <span className="cases-showcase-client">{cs.client}</span>
                        {cs.date && <span className="cases-showcase-date">{cs.date}</span>}
                      </div>
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
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-8 hidden md:inline-flex" />
          <CarouselNext className="-right-8 hidden md:inline-flex" />
        </Carousel>
      </div>

    </div>
  );
}

export default CasesCarousel;
