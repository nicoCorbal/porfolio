import React from 'react';
import CardSwap, { Card } from './CardSwap';

export default function ImpactCardSwap({ cases }) {
  return (
    <div className="impact-swap-wrapper">
      <CardSwap
        width={380}
        height={440}
        cardDistance={50}
        verticalDistance={55}
        delay={0}
        pauseOnHover={false}
        swapOnClick={true}
        skewAmount={4}
        easing="elastic"
      >
        {cases.map((cs) => (
          <Card key={cs.id} customClass="impact-card">
            <div className="impact-card-inner">
              {cs.product && (
                <span className="impact-card-product">{cs.product}</span>
              )}
              <h3 className="impact-card-title">{cs.title}</h3>
              <p className="impact-card-client">{cs.client}</p>
              <p className="impact-card-summary">{cs.summary}</p>
              <ul className="impact-card-results">
                {cs.results.slice(0, 3).map((r, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
