import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

const AUTO_DURATION = 5;

const ProductShowcase = ({ products, images, viewMoreText, lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const barFillRefs = useRef([]);
  const autoTween = useRef(null);
  const isAnimating = useRef(false);

  const active = products[activeIndex];

  const slideTo = useCallback((newIndex) => {
    const resolved = ((newIndex % products.length) + products.length) % products.length;
    if (resolved === activeIndex || isAnimating.current) return;
    isAnimating.current = true;

    const el = contentRef.current;

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false; },
    });

    // Whole content slides out left
    tl.to(el, {
      xPercent: -110,
      duration: 0.4,
      ease: 'power2.in',
    });

    // Swap state + reset to right side
    tl.call(() => {
      setActiveIndex(resolved);
      gsap.set(el, { xPercent: 110 });
    });

    // Whole content slides in from right
    tl.to(el, {
      xPercent: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [activeIndex, products.length]);

  // Auto-progress
  const startAutoProgress = useCallback((index) => {
    if (autoTween.current) {
      autoTween.current.kill();
      autoTween.current = null;
    }

    barFillRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { scaleX: i < index ? 1 : 0 });
    });

    const fillEl = barFillRefs.current[index];
    if (!fillEl) return;

    autoTween.current = gsap.fromTo(
      fillEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: AUTO_DURATION,
        ease: 'none',
        onComplete: () => {
          slideTo(index + 1);
        },
      }
    );
  }, [products.length, slideTo]);

  useEffect(() => {
    startAutoProgress(activeIndex);
    return () => { if (autoTween.current) autoTween.current.kill(); };
  }, [activeIndex, startAutoProgress]);

  const handleBarClick = useCallback((index) => {
    if (index === activeIndex || isAnimating.current) return;
    slideTo(index);
  }, [activeIndex, slideTo]);

  const handleMouseEnter = useCallback(() => {
    if (autoTween.current) autoTween.current.pause();
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (autoTween.current) autoTween.current.play();
  }, []);

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }, []);

  return (
    <div
      className="product-showcase"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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

      {/* Content: image + text as one unit */}
      <div className="product-showcase-content" ref={contentRef}>
        <div className="product-showcase-left">
          <div className="product-showcase-viewport">
            <a href={`/${lang}/productos/${active.id}`}>
              <img
                src={images[active.id]}
                alt={active.title}
                className="product-showcase-img"
              />
            </a>
          </div>
        </div>

        <div className="product-showcase-right">
          <h3 className="product-showcase-title">{active.title}</h3>
          <p className="product-showcase-tagline">{active.tagline}</p>
          <div className="product-showcase-divider" />
          <p className="product-showcase-desc">{active.description}</p>
          <a href={`/${lang}/productos/${active.id}`} className="product-showcase-cta">
            {viewMoreText}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
