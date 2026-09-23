import * as React from 'react'
import { Section } from './shared/section'
import langsLegendUrl from '../assets/langs-legend.png'
import langsGraphUrl from '../assets/langs-graph.svg'

export function LangEvolution (): JSX.Element {
  return (
    <Section
      className="lang-evol-section"
      icon="area-chart"
      title="Evolution Langages de Programmation"
      id="langages-programmation">
      <img
        alt="graphique proportionnel représentant l'évolution de mes Langages de Programmation"
        src={langsGraphUrl}
        style={{
          width: '100%'
        }}
      />
      <img
        alt="légende des langages de Programmation"
        src={langsLegendUrl}
        style={{
          width: '100%'
        }}
      />
    </Section>
  )
}
