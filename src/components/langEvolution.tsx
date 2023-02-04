import * as React from 'react'
import { Section } from './shared/section'
import langsLegend from '../assets/langs-legend.png'
import langsGraph from '../assets/langs-graph.png'

export function LangEvolution (): JSX.Element {
  return (
    <Section
      className="lang-evol-section"
      icon="area-chart"
      title="Evolution Langages de Programmation"
      id="langages-programmation">
      <img
        alt="graphique proportionnel représentant l'évolution de mes Langages de Programmation"
        src={langsGraph}
        style={{
          width: '100%'
        }}
      />
      <img
        alt="légende des langages de Programmation"
        src={langsLegend}
        style={{
          width: '100%'
        }}
      />
    </Section>
  )
}
