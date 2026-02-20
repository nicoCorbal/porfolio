import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';

const ACCENT = '#5227FF';

const css = `
.mobile-menu-wrapper {
  position: fixed;
  inset: 0;
  z-index: 60;
  pointer-events: none;
}
.mobile-menu-wrapper.is-open {
  pointer-events: auto;
}

/* Pre-layers */
.mm-prelayers {
  position: absolute;
  inset: 0;
}
.mm-prelayer {
  position: absolute;
  inset: 0;
  transform: translateX(100%);
}
.mm-prelayer:nth-child(1) { background: #1e1e22; }
.mm-prelayer:nth-child(2) { background: #35353c; }

/* Panel */
.mm-panel {
  position: fixed;
  inset: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 5rem 2.5rem 2.5rem;
  overflow-y: auto;
  z-index: 10;
  transform: translateX(100%);
}

/* Close button */
.mm-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  z-index: 20;
  padding: 0.5rem;
  line-height: 0;
}

/* Panel inner */
.mm-panel-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Nav list */
.mm-list {
  list-style: none;
  margin: 0;
  padding: 0;
  counter-reset: mmItem;
}
.mm-list[data-numbering] {
  counter-reset: mmItem;
}

/* Item wrap */
.mm-item-wrap {
  overflow: hidden;
  line-height: 1;
}

/* Item link */
.mm-item {
  position: relative;
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -2px;
  color: #000;
  text-decoration: none;
  line-height: 1;
  padding-right: 1.4em;
  display: inline-block;
  cursor: pointer;
  transition: color 0.2s ease;
}
@media (min-width: 480px) {
  .mm-item {
    font-size: 3.5rem;
  }
}
.mm-item:hover {
  color: ${ACCENT};
}

/* Animated label inside the link */
.mm-item-label {
  display: inline-block;
  will-change: transform;
  transform-origin: 50% 100%;
}

/* Numbering via CSS counter */
.mm-list[data-numbering] .mm-item {
  counter-increment: mmItem;
}
.mm-list[data-numbering] .mm-item::after {
  content: counter(mmItem, decimal-leading-zero);
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  color: ${ACCENT};
  font-weight: 500;
  opacity: var(--mm-num-opacity, 0);
  transition: opacity 0.15s ease;
}

/* Socials */
.mm-socials {
  margin-top: auto;
  padding-top: 2rem;
}
.mm-socials-title {
  color: ${ACCENT};
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}
.mm-socials-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.mm-socials-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease;
}
.mm-socials-link:hover {
  color: ${ACCENT};
}
`;

export default function MobileMenu({ lang, items = [], socialItems = [] }) {
  const wrapperRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const panelRef = useRef(null);
  const listRef = useRef(null);
  const socialsTitleRef = useRef(null);
  const socialsListRef = useRef(null);
  const styleRef = useRef(null);

  const openTlRef = useRef(null);
  const isOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  // Inject styles once on mount
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-mm-styles', '');
    style.textContent = css;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
      }
    };
  }, []);

  // ---- Close logic ----
  const playClose = useCallback(() => {
    // Kill any running open timeline
    if (openTlRef.current) {
      openTlRef.current.kill();
      openTlRef.current = null;
    }

    const layers = [layer1Ref.current, layer2Ref.current].filter(Boolean);
    const panel = panelRef.current;
    if (!panel) return;

    gsap.to([...layers, panel], {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        // Reset item labels
        const itemLabels = panelRef.current?.querySelectorAll('.mm-item-label');
        if (itemLabels) {
          gsap.set(itemLabels, { yPercent: 140, rotate: 10 });
        }
        // Reset number opacity
        const numberedItems = panelRef.current?.querySelectorAll('.mm-item');
        if (numberedItems) {
          numberedItems.forEach(el => el.style.setProperty('--mm-num-opacity', '0'));
        }
        // Reset social elements
        if (socialsTitleRef.current) {
          gsap.set(socialsTitleRef.current, { opacity: 0 });
        }
        const socialLinks = socialsListRef.current?.querySelectorAll('.mm-socials-link');
        if (socialLinks) {
          gsap.set(socialLinks, { y: 25, opacity: 0 });
        }

        isOpenRef.current = false;
        setIsOpen(false);
        document.body.classList.remove('menu-open');
        window.dispatchEvent(new CustomEvent('mobile-menu-closed'));
      },
    });
  }, []);

  // ---- Open logic ----
  const playOpen = useCallback(() => {
    isOpenRef.current = true;
    setIsOpen(true);
    document.body.classList.add('menu-open');

    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const panel = panelRef.current;
    if (!layer1 || !layer2 || !panel) return;

    const layers = [layer1, layer2];
    const tl = gsap.timeline({ paused: true });

    // 1. Pre-layers slide in from right
    layers.forEach((el, i) => {
      tl.fromTo(
        el,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.5, ease: 'power4.out' },
        i * 0.07
      );
    });

    // 2. Panel slides in
    const lastLayerStart = (layers.length - 1) * 0.07;
    const panelInsertTime = lastLayerStart + 0.08;
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: 100 },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // 3. Nav item labels stagger up
    const itemLabels = panel.querySelectorAll('.mm-item-label');
    if (itemLabels.length) {
      gsap.set(itemLabels, { yPercent: 140, rotate: 10 });
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(
        itemLabels,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1 },
        },
        itemsStart
      );
    }

    // 4. Number opacity
    const numberedItems = panel.querySelectorAll('.mm-item');
    if (numberedItems.length) {
      const numStart = panelInsertTime + panelDuration * 0.15 + 0.15;
      numberedItems.forEach((el, i) => {
        el.style.setProperty('--mm-num-opacity', '0');
        tl.to(
          el,
          {
            '--mm-num-opacity': 1,
            duration: 0.3,
            ease: 'power2.out',
          },
          numStart + i * 0.08
        );
      });
    }

    // 5. Social title fade in
    if (socialsTitleRef.current) {
      gsap.set(socialsTitleRef.current, { opacity: 0 });
      tl.to(socialsTitleRef.current, { opacity: 1, duration: 0.5 }, '-=0.4');
    }

    // 6. Social links slide up & fade in
    const socialLinks = socialsListRef.current?.querySelectorAll('.mm-socials-link');
    if (socialLinks && socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
      tl.to(
        socialLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          stagger: { each: 0.08 },
        },
        '-=0.3'
      );
    }

    openTlRef.current = tl;
    tl.play(0);
  }, []);

  // ---- Toggle handler ----
  const toggle = useCallback(() => {
    if (isOpenRef.current) {
      playClose();
    } else {
      playOpen();
    }
  }, [playOpen, playClose]);

  // ---- Nav link click handler ----
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      playClose();

      // After close animation, scroll to section
      setTimeout(() => {
        const hashMatch = href.match(/#(.+)$/);
        if (hashMatch) {
          const targetId = hashMatch[1];
          if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(targetId);
            if (el) {
              const header = document.getElementById('main-header');
              const offset = header ? header.offsetHeight : 0;
              const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }
      }, 320);
    },
    [playClose]
  );

  // ---- Event listeners ----
  useEffect(() => {
    const onToggle = () => toggle();
    window.addEventListener('mobile-menu-toggle', onToggle);
    return () => {
      window.removeEventListener('mobile-menu-toggle', onToggle);
      if (openTlRef.current) {
        openTlRef.current.kill();
      }
      document.body.classList.remove('menu-open');
    };
  }, [toggle]);

  return (
    <div
      ref={wrapperRef}
      className={`mobile-menu-wrapper${isOpen ? ' is-open' : ''}`}
    >
      {/* Pre-layers */}
      <div className="mm-prelayers">
        <div className="mm-prelayer" ref={layer1Ref} />
        <div className="mm-prelayer" ref={layer2Ref} />
      </div>

      {/* Main panel */}
      <div className="mm-panel" ref={panelRef}>
        {/* Close button */}
        <button
          className="mm-close"
          onClick={() => playClose()}
          aria-label={lang === 'es' ? 'Cerrar menú' : 'Close menu'}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="mm-panel-inner">
          {/* Nav items */}
          <ul className="mm-list" data-numbering="" ref={listRef}>
            {items.map((item, idx) => (
              <li className="mm-item-wrap" key={idx}>
                <a
                  className="mm-item"
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                >
                  <span className="mm-item-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          {socialItems.length > 0 && (
            <div className="mm-socials">
              <h3 className="mm-socials-title" ref={socialsTitleRef}>
                Socials
              </h3>
              <ul className="mm-socials-list" ref={socialsListRef}>
                {socialItems.map((social, idx) => (
                  <li key={idx}>
                    <a
                      className="mm-socials-link"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
