import * as React from 'react'
import { type IProofPoint } from '../data/proofPoints'
import { Section } from './shared/section'

export function ProofPoints (props: { list: IProofPoint[] }): JSX.Element {
  const { list } = props

  return (
    <Section className="proof-points-section" icon="check-circle" title="Quelques preuves">
      <ul className="proof-points-list">
        {list.map((point) => (
          <li className="proof-point" key={point.value}>
            <strong className="proof-point-value">{point.value}</strong>
            <span className="proof-point-label">{point.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
