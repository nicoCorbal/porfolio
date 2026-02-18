import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const AUTO_DURATION = 3;

const ProductShowcase = ({ products, images, viewMoreText, lang }) => {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const barFillRefs = useRef([]);
  const autoTween = useRef(null);
  const isHovered = useRef(false);

  // Sync carousel selection → activeIndex
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  // Progress bar logic
  const startAutoProgress = useCallback((index) => {
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
          const next = (index + 1) % products.length;
          api.scrollTo(next);
        },
      }
    );

    if (isHovered.current) autoTween.current.pause();
  }, [api, products.length]);

  useEffect(() => {
    startAutoProgress(activeIndex);
    return () => { if (autoTween.current) autoTween.current.kill(); };
  }, [activeIndex, startAutoProgress]);

  const handleBarClick = useCallback((index) => {
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
    <div className="product-showcase">
      {/* Top: bars with names */}
      <div className="product-showcase-bars">
        {products.map((product, i) => (
          <button
            key={product.id}
            className={`product-showcase-bar-group ${i === activeIndex ? 'active' : ''}`}
            onClick={() => handleBarClick(i)}
          >
            <span className="product-showcase-bar-name">{product.title}</span>
            <div className="product-showcase-bar">
              <div
                className="product-showcase-bar-fill"
                ref={(el) => { barFillRefs.current[i] = el; }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Content: embla carousel */}
      <div
        className="product-showcase-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: 30 }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id}>
                <a href={`/${lang}/productos/${product.id}`} className="product-showcase-viewport">
                  <img
                    src={images[product.id]}
                    alt={product.title}
                    className="product-showcase-img"
                  />
                  <div className="product-showcase-overlay" />
                  <div className="product-showcase-text">
                    <h3 className="product-showcase-title">{product.title}</h3>
                    <p className="product-showcase-tagline">{product.tagline}</p>
                    <div className="product-showcase-divider" />
                    <p className="product-showcase-desc">{product.description}</p>
                    <span className="product-showcase-cta">
                      {viewMoreText}
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-10" />
          <CarouselNext className="right-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductShowcase;
