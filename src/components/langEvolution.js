import React from 'react';
import Section from './shared/section';
import langs from '../assets/langs-2022.png';

export default function () {
  return (
    <Section className="lang-evol-section" icon="area-chart" title="Evolution Langages de Programmation">
      <img
        alt="graphique proportionnel représentant l'évolution de mes Langages de Programmation"
        src={langs}
        style={{
          objectFit: 'cover',
          objectPosition: '50% -60px',
          width: '100%',
          marginBottom: '-80px',
        }}
      />
    </Section>
  );
}
