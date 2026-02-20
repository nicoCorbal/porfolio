import { useState, useEffect } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

const serviceStats = {
  es: {
    'consultoria-transformacion': {
      label: 'En cifras',
      items: [
        { value: '< 24h', label: 'Informe entregado' },
        { value: '0€', label: 'Compromiso de continuidad' },
        { value: '< 7d', label: 'Plan de acción listo' },
        { value: '+15', label: 'Procesos optimizados' },
      ],
    },
  },
  en: {
    'consultoria-transformacion': {
      label: 'Key figures',
      items: [
        { value: '< 24h', label: 'Report delivered' },
        { value: '€0', label: 'Continuity commitment' },
        { value: '< 7d', label: 'Action plan ready' },
        { value: '+15', label: 'Processes optimized' },
      ],
    },
  },
};

const servicePromos = {
  es: {
    'consultoria-innovacion': {
      headline: 'Convocatorias abiertas con financiación para tu empresa',
      cta: 'Ver convocatorias',
    },
  },
  en: {
    'consultoria-innovacion': {
      headline: 'Open calls with funding for your business',
      cta: 'View open calls',
    },
  },
};

export default function ServiceScrollCards({ services, casesByService, caseLogos = {}, lang }) {
  const viewServiceLabel = lang === 'es' ? 'Ver servicio' : 'View service';
  const casesLabel = lang === 'es' ? 'Casos de éxito' : 'Success stories';

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <ScrollStack
      useWindowScroll
      itemDistance={isMobile ? 120 : 80}
      itemScale={0.04}
      itemStackDistance={32}
      stackPosition={isMobile ? '10%' : '15%'}
      scaleEndPosition={isMobile ? '3%' : '8%'}
      baseScale={0.88}
      blurAmount={0}
    >
      {services.map((service) => {
        const cases = casesByService[service.id] || [];
        const maxVisible = 4;
        const visible = cases.slice(0, maxVisible);
        const remaining = cases.length - maxVisible;
        const hasCases = cases.length > 0;
        const stats = serviceStats[lang]?.[service.id] || serviceStats.es?.[service.id];
        const promo = servicePromos[lang]?.[service.id] || servicePromos.es?.[service.id];

        return (
          <ScrollStackItem key={service.id}>
            <div className="ssc-card">
              <div className="ssc-body">
                {/* Left: service info */}
                <div className="ssc-info">
                  <div className="ssc-info-top">
                    <h3 className="ssc-title">{service.title}</h3>
                    <p className="ssc-tagline">{service.tagline}</p>
                  </div>
                  <p className="ssc-description">{service.description}</p>
                  <a href={`/${lang}/servicios/${service.id}`} className="btn-primary btn-arrow" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
                    {viewServiceLabel}
                    <svg className="btn-arrow-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Right: proof panel */}
                <div className="ssc-proof">
                  {hasCases ? (
                    <>
                      <span className="ssc-proof-label">{casesLabel}</span>
                      <div className="ssc-proof-list">
                        {visible.map((c) => (
                          <a key={c.id} href={`/${lang}/servicios/${c.services?.[0] || 'desarrollo-a-medida'}#cases`} className="ssc-proof-item">
                            {caseLogos[c.id] && (
                              <img src={caseLogos[c.id]} alt={c.client} className="ssc-proof-logo" />
                            )}
                            <span className="ssc-proof-headline">{c.headline}</span>
                          </a>
                        ))}
                        {remaining > 0 && (
                          <a href={`/${lang}/servicios/${service.id}`} className="ssc-proof-item ssc-proof-more">
                            <span>+{remaining} {lang === 'es' ? 'más' : 'more'}</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </>
                  ) : promo ? (
                    <div className="ssc-proof-promo !gap-8 md:!gap-16">
                      <p className="ssc-proof-promo-headline text-2xl">{promo.headline}</p>
                      <a href={`/${lang}/servicios/${service.id}#convocatorias`} className="btn-secondary btn-arrow">
                        {promo.cta}
                        <svg className="btn-arrow-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  ) : stats ? (
                    <>
                      <span className="ssc-proof-label">{stats.label}</span>
                      <div className="ssc-proof-stats">
                        {stats.items.map((s, i) => (
                          <div key={i} className="ssc-proof-stat">
                            <span className="ssc-proof-stat-value">{s.value}</span>
                            <span className="ssc-proof-stat-label">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        );
      })}
    </ScrollStack>
  );
}
