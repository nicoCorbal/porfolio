import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

const serviceStats = {
  es: {
    'consultoria-transformacion': {
      label: 'En cifras',
      items: [
        { value: '40+', label: 'Auditorías realizadas' },
        { value: '< 5 días', label: 'Entrega del informe' },
        { value: '85%', label: 'Implementan mejoras' },
        { value: '3x', label: 'ROI medio en 12 meses' },
      ],
    },
    'consultoria-innovacion': {
      label: 'En cifras',
      items: [
        { value: '2M€+', label: 'En subvenciones captadas' },
        { value: '92%', label: 'Tasa de aprobación' },
        { value: '15+', label: 'Convocatorias gestionadas' },
        { value: '60+', label: 'Proyectos presentados' },
      ],
    },
  },
  en: {
    'consultoria-transformacion': {
      label: 'Key figures',
      items: [
        { value: '40+', label: 'Audits completed' },
        { value: '< 5 days', label: 'Report delivery' },
        { value: '85%', label: 'Implement improvements' },
        { value: '3x', label: 'Average ROI in 12 months' },
      ],
    },
    'consultoria-innovacion': {
      label: 'Key figures',
      items: [
        { value: '€2M+', label: 'In grants captured' },
        { value: '92%', label: 'Approval rate' },
        { value: '15+', label: 'Calls managed' },
        { value: '60+', label: 'Projects submitted' },
      ],
    },
  },
};

export default function ServiceScrollCards({ services, casesByService, caseLogos = {}, lang }) {
  const viewServiceLabel = lang === 'es' ? 'Ver servicio' : 'View service';
  const casesLabel = lang === 'es' ? 'Casos de éxito' : 'Success stories';

  return (
    <ScrollStack
      useWindowScroll
      itemDistance={80}
      itemScale={0.04}
      itemStackDistance={32}
      stackPosition="15%"
      scaleEndPosition="8%"
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
                  <a href={`/${lang}/servicios/${service.id}`} className="ssc-cta btn-arrow">
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
