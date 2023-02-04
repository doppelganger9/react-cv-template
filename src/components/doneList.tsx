import * as React from 'react'
import { Section } from './shared/section'

export function DoneThisAndThat (props: { list: string[] }): JSX.Element {
  const { list } = props
  return (
    <Section id="done-this" title="Exemples de réalisations" icon="list-ul">
      <ul className="list-unstyled">
        {list.map(x => (
          <li key={x}>
-
            {' '}
            {x}
          </li>
        ))}
      </ul>
    </Section>
  )
}
