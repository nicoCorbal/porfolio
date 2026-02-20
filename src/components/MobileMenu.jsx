import { useRef, useEffect, useLayoutEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';

const css = `
.mobile-menu-wrapper {
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10;
  pointer-events: none;
}
.mobile-menu-wrapper.is-open {
  pointer-events: auto;
  border-top: 1px solid #000;
}

/* Pre-layers */
.mm-prelayers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mm-prelayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mm-prelayer:nth-child(1) { background: #fff; }
.mm-prelayer:nth-child(2) { background: #000; }

/* Panel */
.mm-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem 2.5rem;
  overflow-y: auto;
  z-index: 10;
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Item wrap */
.mm-item-wrap {
  overflow: hidden;
  line-height: 1;
  display: flex;
  align-items: center;
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
  display: inline-block;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
@media (min-width: 480px) {
  .mm-item {
    font-size: 3.5rem;
  }
}
.mm-item:hover {
  opacity: 0.5;
}

/* Animated label inside the link */
.mm-item-label {
  display: inline-block;
  will-change: transform;
  transform-origin: 50% 100%;
}

/* Toggle arrow button for expandable items */
.mm-expand-btn {
  background: none;
  border: none;
  padding: 0 0 0 0.6em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 0;
}
.mm-expand-icon {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  position: relative;
}
.mm-expand-icon::before,
.mm-expand-icon::after {
  content: '';
  position: absolute;
  background: #000;
  transition: transform 0.3s ease;
}
.mm-expand-icon::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
}
.mm-expand-icon::after {
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
}
.mm-expand-icon.is-expanded::after {
  transform: translateX(-50%) rotate(90deg);
}

/* Submenu */
.mm-submenu {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 0 0.5rem;
  overflow: hidden;
}
.mm-submenu-wrap {
  overflow: hidden;
}
.mm-subitem {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0;
  transition: opacity 0.2s ease;
  line-height: 1.3;
}
@media (min-width: 480px) {
  .mm-subitem {
    font-size: 1.4rem;
  }
}
.mm-subitem:hover {
  opacity: 0.5;
}
.mm-subitem-arrow {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

/* Socials */
.mm-socials {
  margin-top: auto;
  padding-top: 2rem;
}
.mm-socials-title {
  color: #000;
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
  transition: opacity 0.2s ease;
}
.mm-socials-link:hover {
  opacity: 0.5;
}
`;

export default function MobileMenu({ lang, items = [], socialItems = [] }) {
  const wrapperRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const panelRef = useRef(null);
  const socialsTitleRef = useRef(null);
  const socialsListRef = useRef(null);
  const styleRef = useRef(null);
  const submenuRefs = useRef({});

  const openTlRef = useRef(null);
  const isOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Inject styles once on mount
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-mm-styles', '');
    style.textContent = css;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      if (styleRef.current?.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
      }
    };
  }, []);

  // Position wrapper below header and set height to fill remaining viewport
  useEffect(() => {
    function updatePosition() {
      const header = document.getElementById('main-header');
      if (header && wrapperRef.current) {
        const h = header.offsetHeight;
        wrapperRef.current.style.top = `${h}px`;
        wrapperRef.current.style.height = `calc(100dvh - ${h}px)`;
      }
    }
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Set initial offscreen positions via GSAP (not CSS) to avoid transform conflicts
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [layer1Ref.current, layer2Ref.current, panelRef.current].filter(Boolean);
      gsap.set(targets, { clipPath: 'inset(0 0 100% 0)' });
    });
    return () => ctx.revert();
  }, []);

  // Animate submenu open/close
  useEffect(() => {
    Object.entries(submenuRefs.current).forEach(([idx, el]) => {
      if (!el) return;
      const isExpanded = openSubmenu === parseInt(idx);
      if (isExpanded) {
        gsap.set(el, { height: 'auto' });
        const h = el.offsetHeight;
        gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.35, ease: 'power3.out' });
        const subItems = el.querySelectorAll('.mm-submenu-wrap');
        if (subItems.length) {
          gsap.fromTo(
            subItems,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.06 }
          );
        }
      } else {
        gsap.to(el, { height: 0, duration: 0.25, ease: 'power3.in' });
      }
    });
  }, [openSubmenu]);

  // ---- Close logic ----
  const playClose = useCallback((onDone) => {
    if (openTlRef.current) {
      openTlRef.current.kill();
      openTlRef.current = null;
    }

    const layers = [layer1Ref.current, layer2Ref.current].filter(Boolean);
    const panel = panelRef.current;
    if (!panel) return;

    gsap.to([...layers, panel], {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        // Reset item labels and expand buttons
        const itemLabels = panelRef.current?.querySelectorAll('.mm-item-label');
        if (itemLabels) {
          gsap.set(itemLabels, { yPercent: 140, rotate: 10 });
        }
        const expandBtns = panelRef.current?.querySelectorAll('.mm-expand-btn');
        if (expandBtns) {
          gsap.set(expandBtns, { yPercent: 140 });
        }
        // Reset social elements
        if (socialsTitleRef.current) {
          gsap.set(socialsTitleRef.current, { opacity: 0 });
        }
        const socialLinks = socialsListRef.current?.querySelectorAll('.mm-socials-link');
        if (socialLinks) {
          gsap.set(socialLinks, { y: 25, opacity: 0 });
        }
        // Reset submenus
        setOpenSubmenu(null);
        Object.values(submenuRefs.current).forEach((el) => {
          if (el) gsap.set(el, { height: 0 });
        });

        isOpenRef.current = false;
        setIsOpen(false);
        document.body.classList.remove('menu-open');
        window.dispatchEvent(new CustomEvent('mobile-menu-closed'));

        if (typeof onDone === 'function') onDone();
      },
    });
  }, []);

  // ---- Open logic ----
  const playOpen = useCallback(() => {
    isOpenRef.current = true;
    setIsOpen(true);
    document.body.classList.add('menu-open');
    window.dispatchEvent(new CustomEvent('mobile-menu-opened'));

    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const panel = panelRef.current;
    if (!layer1 || !layer2 || !panel) return;

    const layers = [layer1, layer2];
    const tl = gsap.timeline({ paused: true });

    // 1. Pre-layers wipe down from top
    layers.forEach((el, i) => {
      tl.fromTo(
        el,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.5, ease: 'power4.out' },
        i * 0.07
      );
    });

    // 2. Panel slides in
    const lastLayerStart = (layers.length - 1) * 0.07;
    const panelInsertTime = lastLayerStart + 0.08;
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // 3. Nav item labels stagger up
    const itemLabels = panel.querySelectorAll('.mm-item-label');
    const expandBtns = panel.querySelectorAll('.mm-expand-btn');
    if (itemLabels.length) {
      gsap.set(itemLabels, { yPercent: 140, rotate: 10 });
      gsap.set(expandBtns, { yPercent: 140 });
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
      // Expand buttons appear with the same timing as their parent item
      if (expandBtns.length) {
        tl.to(
          expandBtns,
          {
            yPercent: 0,
            duration: 1,
            ease: 'power4.out',
          },
          itemsStart + 0.1 // matches the "Servicios" item index timing
        );
      }
    }

    // 4. Social title fade in
    if (socialsTitleRef.current) {
      gsap.set(socialsTitleRef.current, { opacity: 0 });
      tl.to(socialsTitleRef.current, { opacity: 1, duration: 0.5 }, '-=0.4');
    }

    // 5. Social links slide up & fade in
    const socialLinks = socialsListRef.current?.querySelectorAll('.mm-socials-link');
    if (socialLinks?.length) {
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
    if (isOpenRef.current) playClose();
    else playOpen();
  }, [playOpen, playClose]);

  // ---- Smooth scroll helper with controlled duration ----
  const smoothScrollTo = useCallback((targetPosition, duration = 2000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }, []);

  // ---- Nav link click handler (hash scroll) ----
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      playClose(() => {
        const hashMatch = href.match(/#(.+)$/);
        if (hashMatch) {
          const targetId = hashMatch[1];
          const el = targetId === 'hero' ? null : document.getElementById(targetId);
          if (targetId === 'hero' && document.getElementById('hero')) {
            smoothScrollTo(0);
          } else if (el) {
            const header = document.getElementById('main-header');
            const offset = header ? header.offsetHeight : 0;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            smoothScrollTo(top);
          } else {
            window.location.href = href;
          }
        }
      });
    },
    [playClose, smoothScrollTo]
  );

  // ---- Submenu item click handler (full page navigation) ----
  const handleSubItemClick = useCallback(
    (e, href) => {
      e.preventDefault();
      playClose(() => {
        window.location.href = href;
      });
    },
    [playClose]
  );

  // ---- Toggle submenu for expandable items ----
  const toggleSubmenu = useCallback((index) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  }, []);

  // ---- Event listeners ----
  useEffect(() => {
    const onToggle = () => toggle();
    window.addEventListener('mobile-menu-toggle', onToggle);
    return () => {
      window.removeEventListener('mobile-menu-toggle', onToggle);
      if (openTlRef.current) openTlRef.current.kill();
      document.body.classList.remove('menu-open');
    };
  }, [toggle]);

  return (
    <div ref={wrapperRef} className={`mobile-menu-wrapper${isOpen ? ' is-open' : ''}`} style={{ position: 'fixed', pointerEvents: isOpen ? 'auto' : 'none' }}>
      {/* Pre-layers */}
      <div className="mm-prelayers">
        <div className="mm-prelayer" ref={layer1Ref} />
        <div className="mm-prelayer" ref={layer2Ref} />
      </div>

      {/* Main panel */}
      <div className="mm-panel" ref={panelRef}>
        <div className="mm-panel-inner">
          {/* Nav items */}
          <ul className="mm-list">
            {items.map((item, index) => (
              <li key={item.link}>
                <div className="mm-item-wrap">
                  <a
                    className="mm-item"
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                  >
                    <span className="mm-item-label">{item.label}</span>
                  </a>
                  {item.children?.length > 0 && (
                    <button
                      className="mm-expand-btn"
                      onClick={() => toggleSubmenu(index)}
                      aria-label={openSubmenu === index ? 'Collapse' : 'Expand'}
                    >
                      <span className={`mm-expand-icon${openSubmenu === index ? ' is-expanded' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.children?.length > 0 && (
                  <ul
                    className="mm-submenu"
                    ref={(el) => { submenuRefs.current[index] = el; }}
                    style={{ height: 0 }}
                  >
                    {item.children.map((child) => (
                      <li className="mm-submenu-wrap" key={child.link}>
                        <a
                          className="mm-subitem"
                          href={child.link}
                          onClick={(e) => handleSubItemClick(e, child.link)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Socials */}
          {socialItems.length > 0 && (
            <div className="mm-socials">
              <h3 className="mm-socials-title" ref={socialsTitleRef}>
                {lang === 'es' ? 'Redes sociales' : 'Socials'}
              </h3>
              <ul className="mm-socials-list" ref={socialsListRef}>
                {socialItems.map((social) => (
                  <li key={social.link}>
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
